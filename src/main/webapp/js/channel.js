/*
 * Copyright (c) 2012-2015, b3log.org
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Message channel via WebSocket.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.2.1.1, Jun 24, 2015
 */

/**
 * @description Article channel.
 * @static
 */
var ArticleChannel = {
    /**
     * WebSocket instance.
     * 
     * @type WebSocket
     */
    ws: undefined,
    /**
     * @description Initializes message channel
     */
    init: function (channelServer) {
        ArticleChannel.ws = new ReconnectingWebSocket(channelServer);
        ArticleChannel.ws.reconnectInterval = 10000;

        ArticleChannel.ws.onopen = function () {
            setInterval(function () {
                ArticleChannel.ws.send('-hb-');
            }, 1000 * 60 * 3);
        };

        ArticleChannel.ws.onmessage = function (evt) {
            var data = JSON.parse(evt.data);
            console.log(data);

            if (Label.articleOId !== data.articleId) { // It's not the current article
                return;
            }

            $("#comments > h2").text((parseInt($("#comments > h2").text()) + 1) + Label.cmtLabel);

            // Append comment
            var template = "<li class=\"fn-none\" id=\"${comment.oId}\">" +
                    "<div class=\"fn-clear\">" +
                    "<div class=\"fn-left\">" +
                    "<img class=\"avatar\"" +
                    "title=\"${comment.commentAuthorName}\" src=\"${comment.commentAuthorThumbnailURL}\" />" +
                    "</div>" +
                    "<div class=\"fn-left comment-content\">" +
                    "<div class=\"fn-clear comment-info\">" +
                    "<span class=\"fn-left\">" +
                    "<a rel=\"nofollow\" href=\"/member/${comment.commentAuthorName}\"" +
                    "title=\"${comment.commentAuthorName}\">${comment.commentAuthorName}</a>" +
                    " &nbsp;<span class=\"icon icon-date ft-small\"></span>" +
                    "<span class=\"ft-small\">&nbsp;${comment.commentCreateTime}</span>" +
                    "</span>" +
                    "<span class=\"fn-right\">" +
                    "<span class=\"icon icon-cmt\" onclick=\"Comment.replay('@${comment.commentAuthorName} ')\"></span>" +
                    " <i>#" + parseInt($("#comments > h2").text()) + "</i>" +
                    "</span>" +
                    "</div>" +
                    "<div class=\"content-reset comment\">" +
                    "${comment.commentContent}" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</li>";

            template = replaceAll(template, "${comment.oId}", data.commentId);
            template = replaceAll(template, "${comment.commentAuthorName}", data.commentAuthorName);
            template = replaceAll(template, "${comment.commentAuthorThumbnailURL}", data.commentAuthorThumbnailURL);
            template = replaceAll(template, "${comment.commentContent}", data.commentContent);
            template = replaceAll(template, "${comment.commentCreateTime}", data.commentCreateTime);

            $("#comments > ul").prepend(template);

            Article.parseLanguage();

            $("#" + data.commentId).fadeIn(2000);
        };

        ArticleChannel.ws.onclose = function () {
        };

        ArticleChannel.ws.onerror = function (err) {
            console.log(err);
        };
    }
};

/**
 * @description Article list channel.
 * @static
 */
var ArticleListChannel = {
    /**
     * WebSocket instance.
     * 
     * @type WebSocket
     */
    ws: undefined,
    /**
     * @description Initializes message channel
     */
    init: function (channelServer) {
        ArticleListChannel.ws = new ReconnectingWebSocket(channelServer);
        ArticleListChannel.ws.reconnectInterval = 10000;

        ArticleListChannel.ws.onopen = function () {
            setInterval(function () {
                ArticleListChannel.ws.send('-hb-');
            }, 1000 * 60 * 3);
        };

        ArticleListChannel.ws.onmessage = function (evt) {
            var data = JSON.parse(evt.data);
            $(".list-content > h2 > a").each(function () {
                var id = $(this).data('id').toString();
                if (data.articleId === id) {
                    var $li = $(this).closest("li"),
                            $heat = $li.find('.heat'),
                            heat = $heat.width();
                    if (data.operation === "+") {
                        $li.append('<i class="point"></i>');
                        setTimeout(function () {
                            $heat.width(heat + 1 * 3);
                            $li.find(".point").remove();
                        }, 2000);
                    } else {
                        $heat.width(heat - 1 * 3);
                        $li.append('<i class="point-remove"></i>');
                        setTimeout(function () {
                            $li.find(".point-remove").remove();
                        }, 2000);
                    }

                }
            });

            console.log(data);
        };

        ArticleListChannel.ws.onclose = function () {
            ArticleListChannel.ws.close();
        };

        ArticleListChannel.ws.onerror = function (err) {
            console.log("ERROR", err)
        };
    }
};

function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(string, find, replace) {
    return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}