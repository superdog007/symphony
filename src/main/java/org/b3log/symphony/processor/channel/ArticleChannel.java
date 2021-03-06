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
package org.b3log.symphony.processor.channel;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import javax.servlet.annotation.WebServlet;
import org.apache.commons.lang.StringUtils;
import org.b3log.latke.Keys;
import org.b3log.latke.ioc.LatkeBeanManager;
import org.b3log.latke.ioc.LatkeBeanManagerImpl;
import org.b3log.latke.logging.Level;
import org.b3log.latke.logging.Logger;
import org.b3log.latke.model.User;
import org.b3log.latke.util.Strings;
import org.b3log.symphony.model.Article;
import org.b3log.symphony.model.Common;
import org.b3log.symphony.repository.ArticleRepository;
import org.b3log.symphony.service.UserQueryService;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketClose;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketError;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;
import org.eclipse.jetty.websocket.servlet.WebSocketServlet;
import org.eclipse.jetty.websocket.servlet.WebSocketServletFactory;
import org.json.JSONObject;

/**
 * Article channel.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.1.1.1, Jun 23, 2015
 * @since 1.3.0
 */
@WebSocket
public class ArticleChannel {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(ArticleChannel.class.getName());

    /**
     * Session set.
     */
    public static final Set<Session> SESSIONS = Collections.synchronizedSet(new HashSet<Session>());

    /**
     * Article viewing map &lt;articleId, count&gt;.
     */
    public static final Map<String, Integer> ARTICLE_VIEWS
            = Collections.synchronizedMap(new HashMap<String, Integer>());

    /**
     * Called when the socket connection with the browser is established.
     *
     * @param session session
     */
    @OnWebSocketConnect
    public void onConnect(final Session session) {
        final String articleId = (String) Channels.getHttpParameter(session, Article.ARTICLE_T_ID);
        if (StringUtils.isBlank(articleId)) {
            return;
        }

        SESSIONS.add(session);

        synchronized (ARTICLE_VIEWS) {
            if (!ARTICLE_VIEWS.containsKey(articleId)) {
                ARTICLE_VIEWS.put(articleId, 1);
            } else {
                final int count = ARTICLE_VIEWS.get(articleId);
                ARTICLE_VIEWS.put(articleId, count + 1);
            }
        }

        final JSONObject message = new JSONObject();
        message.put(Article.ARTICLE_T_ID, articleId);
        message.put(Common.OPERATION, "+");

        ArticleListChannel.notifyHeat(message);
    }

    /**
     * Called when the connection closed.
     *
     * @param session session
     * @param statusCode status code
     * @param reason reason
     */
    @OnWebSocketClose
    public void onClose(final Session session, final int statusCode, final String reason) {
        removeSession(session);
    }

    /**
     * Called when a message received from the browser.
     *
     * @param message message
     */
    @OnWebSocketMessage
    public void onMessage(final String message) {
    }

    /**
     * Called in case of an error.
     *
     * @param session session
     * @param error error
     */
    @OnWebSocketError
    public void onError(final Session session, final Throwable error) {
        removeSession(session);
    }

    /**
     * Notifies the specified comment message to browsers.
     *
     * @param message the specified message, for example      <pre>
     * {
     *     "articleId": "",
     *     "commentId": "",
     *     "commentAuthorName": "",
     *     "commentAuthorThumbnailURL": "",
     *     "commentCreateTime": "", // yyyy-MM-dd HH:mm
     *     "commentContent": ""
     * }
     * </pre>
     */
    public static void notifyComment(final JSONObject message) {
        final String msgStr = message.toString();

        final LatkeBeanManager beanManager = LatkeBeanManagerImpl.getInstance();
        final UserQueryService userQueryService = beanManager.getReference(UserQueryService.class);
        final ArticleRepository articleRepository = beanManager.getReference(ArticleRepository.class);

        for (final Session session : SESSIONS) {
            final String viewingArticleId = (String) Channels.getHttpParameter(session, Article.ARTICLE_T_ID);
            if (Strings.isEmptyOrNull(viewingArticleId)
                    || !viewingArticleId.equals(message.optString(Article.ARTICLE_T_ID))) {
                continue;
            }

            final int articleType = Integer.valueOf(Channels.getHttpParameter(session, Article.ARTICLE_TYPE));

            try {
                if (Article.ARTICLE_TYPE_C_DISCUSSION == articleType) {
                    final JSONObject user = (JSONObject) Channels.getHttpSessionAttribute(session, User.USER);
                    if (null == user) {
                        continue;
                    }

                    final String userName = user.optString(User.USER_NAME);
                    final String userId = user.optString(Keys.OBJECT_ID);

                    final JSONObject article = articleRepository.get(viewingArticleId);
                    final String articleAuthorId = article.optString(Article.ARTICLE_AUTHOR_ID);
                    if (!userId.equals(articleAuthorId)) {
                        final String articleContent = article.optString(Article.ARTICLE_CONTENT);
                        final Set<String> userNames = userQueryService.getUserNames(articleContent);

                        boolean invited = false;
                        for (final String inviteUserName : userNames) {
                            if (inviteUserName.equals(userName)) {
                                invited = true;

                                break;
                            }
                        }

                        if (!invited) {
                            continue;
                        }
                    }
                }

                if (session.isOpen()) {
                    session.getRemote().sendString(msgStr);
                }
            } catch (final Exception e) {
                LOGGER.log(Level.ERROR, "Notify comment error", e);
            }
        }
    }

    /**
     * Article channel WebSocket servlet.
     *
     * @author <a href="http://88250.b3log.org">Liang Ding</a>
     * @version 1.0.0.1, Jun 21, 2015
     * @since 1.3.0
     */
    @WebServlet("/article-channel")
    public static class ArticleChannelWebSocketServlet extends WebSocketServlet {

        @Override
        public void configure(final WebSocketServletFactory factory) {
            factory.register(ArticleChannel.class);
        }
    }

    /**
     * Removes the specified session.
     *
     * @param session the specified session
     */
    private void removeSession(final Session session) {
        SESSIONS.remove(session);

        final String articleId = (String) Channels.getHttpParameter(session, Article.ARTICLE_T_ID);
        if (StringUtils.isBlank(articleId)) {
            return;
        }

        synchronized (ARTICLE_VIEWS) {
            if (!ARTICLE_VIEWS.containsKey(articleId)) {
                return;
            }

            final int count = ARTICLE_VIEWS.get(articleId);
            final int newCount = count - 1;
            if (newCount < 1) {
                ARTICLE_VIEWS.remove(articleId);
            } else {
                ARTICLE_VIEWS.put(articleId, newCount);
            }
        }

        final JSONObject message = new JSONObject();
        message.put(Article.ARTICLE_T_ID, articleId);
        message.put(Common.OPERATION, "-");

        ArticleListChannel.notifyHeat(message);
    }
}
