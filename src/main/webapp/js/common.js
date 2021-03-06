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
 * @fileoverview util and every page should be used.
 *
 * @author <a href="http://vanessa.b3log.org">Liyuan Li</a>
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.6.2.6, Jun 21, 2015
 */

/**
 * @description Util
 * @static
 */
var Util = {
    initCodeMirror: function () {
        var emojString = "+1,-1,100,1234,8ball,a,ab,abc,abcd,accept,aerial_tramway,airplane,alarm_clock,alien,ambulance,anchor,angel,anger,angry,anguished,ant,apple,aquarius,aries,arrow_backward,arrow_double_down,arrow_double_up,arrow_down,arrow_down_small,arrow_forward,arrow_heading_down,arrow_heading_up,arrow_left,arrow_lower_left,arrow_lower_right,arrow_right,arrow_right_hook,arrow_up,arrow_up_down,arrow_up_small,arrow_upper_left,arrow_upper_right,arrows_clockwise,arrows_counterclockwise,art,articulated_lorry,astonished,atm,b,baby,baby_bottle,baby_chick,baby_symbol,back,baggage_claim,balloon,ballot_box_with_check,bamboo,banana,bangbang,bank,bar_chart,barber,baseball,basketball,bath,bathtub,battery,bear,bee,beer,beers,beetle,beginner,bell,bento,bicyclist,bike,bikini,bird,birthday,black_circle,black_joker,black_medium_small_square,black_medium_square,black_nib,black_small_square,black_square,black_square_button,blossom,blowfish,blue_book,blue_car,blue_heart,blush,boar,boat,bomb,book,bookmark,bookmark_tabs,books,boom,boot,bouquet,bow,bowling,bowtie,boy,bread,bride_with_veil,bridge_at_night,briefcase,broken_heart,bug,bulb,bullettrain_front,bullettrain_side,bus,busstop,bust_in_silhouette,busts_in_silhouette,cactus,cake,calendar,calling,camel,camera,cancer,candy,capital_abcd,capricorn,car,card_index,carousel_horse,cat,cat2,cd,chart,chart_with_downwards_trend,chart_with_upwards_trend,checkered_flag,cherries,cherry_blossom,chestnut,chicken,children_crossing,chocolate_bar,christmas_tree,church,cinema,circus_tent,city_sunrise,city_sunset,cl,clap,clapper,clipboard,clock1,clock10,clock1030,clock11,clock1130,clock12,clock1230,clock130,clock2,clock230,clock3,clock330,clock4,clock430,clock5,clock530,clock6,clock630,clock7,clock730,clock8,clock830,clock9,clock930,closed_book,closed_lock_with_key,closed_umbrella,cloud,clubs,cn,cocktail,coffee,cold_sweat,collision,computer,confetti_ball,confounded,confused,congratulations,construction,construction_worker,convenience_store,cookie,cool,cop,copyright,corn,couple,couple_with_heart,couplekiss,cow,cow2,credit_card,crescent_moon,crocodile,crossed_flags,crown,cry,crying_cat_face,crystal_ball,cupid,curly_loop,currency_exchange,curry,custard,customs,cyclone,dancer,dancers,dango,dart,dash,date,de,deciduous_tree,department_store,diamond_shape_with_a_dot_inside,diamonds,disappointed,disappointed_relieved,dizzy,dizzy_face,do_not_litter,dog,dog2,dollar,dolls,dolphin,donut,door,doughnut,dragon,dragon_face,dress,dromedary_camel,droplet,dvd,e-mail,ear,ear_of_rice,earth_africa,earth_americas,earth_asia,egg,eggplant,eight,eight_pointed_black_star,eight_spoked_asterisk,electric_plug,elephant,email,end,envelope,es,euro,european_castle,european_post_office,evergreen_tree,exclamation,expressionless,eyeglasses,eyes,facepunch,factory,fallen_leaf,family,fast_forward,fax,fearful,feelsgood,feet,ferris_wheel,file_folder,finnadie,fire,fire_engine,fireworks,first_quarter_moon,first_quarter_moon_with_face,fish,fish_cake,fishing_pole_and_fish,fist,five,flags,flashlight,floppy_disk,flower_playing_cards,flushed,foggy,football,fork_and_knife,fountain,four,four_leaf_clover,fr,free,fried_shrimp,fries,frog,frowning,fu,fuelpump,full_moon,full_moon_with_face,game_die,gb,gem,gemini,ghost,gift,gift_heart,girl,globe_with_meridians,goat,goberserk,godmode,golf,grapes,green_apple,green_book,green_heart,grey_exclamation,grey_question,grimacing,grin,grinning,guardsman,guitar,gun,haircut,hamburger,hammer,hamster,hand,handbag,hankey,hash,hatched_chick,hatching_chick,headphones,hear_no_evil,heart,heart_decoration,heart_eyes,heart_eyes_cat,heartbeat,heartpulse,hearts,heavy_check_mark,heavy_division_sign,heavy_dollar_sign,heavy_exclamation_mark,heavy_minus_sign,heavy_multiplication_x,heavy_plus_sign,helicopter,herb,hibiscus,high_brightness,high_heel,hocho,honey_pot,honeybee,horse,horse_racing,hospital,hotel,hotsprings,hourglass,hourglass_flowing_sand,house,house_with_garden,hurtrealbad,hushed,ice_cream,icecream,id,ideograph_advantage,imp,inbox_tray,incoming_envelope,information_desk_person,information_source,innocent,interrobang,iphone,it,izakaya_lantern,jack_o_lantern,japan,japanese_castle,japanese_goblin,japanese_ogre,jeans,joy,joy_cat,jp,key,keycap_ten,kimono,kiss,kissing,kissing_cat,kissing_closed_eyes,kissing_face,kissing_heart,kissing_smiling_eyes,koala,koko,kr,large_blue_circle,large_blue_diamond,large_orange_diamond,last_quarter_moon,last_quarter_moon_with_face,laughing,leaves,ledger,left_luggage,left_right_arrow,leftwards_arrow_with_hook,lemon,leo,leopard,libra,light_rail,link,lips,lipstick,lock,lock_with_ink_pen,lollipop,loop,loudspeaker,love_hotel,love_letter,low_brightness,m,mag,mag_right,mahjong,mailbox,mailbox_closed,mailbox_with_mail,mailbox_with_no_mail,man,man_with_gua_pi_mao,man_with_turban,mans_shoe,maple_leaf,mask,massage,meat_on_bone,mega,melon,memo,mens,metal,metro,microphone,microscope,milky_way,minibus,minidisc,mobile_phone_off,money_with_wings,moneybag,monkey,monkey_face,monorail,mortar_board,mount_fuji,mountain_bicyclist,mountain_cableway,mountain_railway,mouse,mouse2,movie_camera,moyai,muscle,mushroom,musical_keyboard,musical_note,musical_score,mute,nail_care,name_badge,neckbeard,necktie,negative_squared_cross_mark,neutral_face,new,new_moon,new_moon_with_face,newspaper,ng,nine,no_bell,no_bicycles,no_entry,no_entry_sign,no_good,no_mobile_phones,no_mouth,no_pedestrians,no_smoking,non-potable_water,nose,notebook,notebook_with_decorative_cover,notes,nut_and_bolt,o,o2,ocean,octocat,octopus,oden,office,ok,ok_hand,ok_woman,older_man,older_woman,on,oncoming_automobile,oncoming_bus,oncoming_police_car,oncoming_taxi,one,open_file_folder,open_hands,open_mouth,ophiuchus,orange_book,outbox_tray,ox,package,page_facing_up,page_with_curl,pager,palm_tree,panda_face,paperclip,parking,part_alternation_mark,partly_sunny,passport_control,paw_prints,peach,pear,pencil,pencil2,penguin,pensive,performing_arts,persevere,person_frowning,person_with_blond_hair,person_with_pouting_face,phone,pig,pig2,pig_nose,pill,pineapple,pisces,pizza,plus1,point_down,point_left,point_right,point_up,point_up_2,police_car,poodle,poop,post_office,postal_horn,postbox,potable_water,pouch,poultry_leg,pound,pouting_cat,pray,princess,punch,purple_heart,purse,pushpin,put_litter_in_its_place,question,rabbit,rabbit2,racehorse,radio,radio_button,rage,rage1,rage2,rage3,rage4,railway_car,rainbow,raised_hand,raised_hands,raising_hand,ram,ramen,rat,recycle,red_car,red_circle,registered,relaxed,relieved,repeat,repeat_one,restroom,revolving_hearts,rewind,ribbon,rice,rice_ball,rice_cracker,rice_scene,ring,rocket,roller_coaster,rooster,rose,rotating_light,round_pushpin,rowboat,ru,rugby_football,runner,running,running_shirt_with_sash,sa,sagittarius,sailboat,sake,sandal,santa,satellite,satisfied,saxophone,school,school_satchel,scissors,scorpius,scream,scream_cat,scroll,seat,secret,see_no_evil,seedling,seven,shaved_ice,sheep,shell,ship,shipit,shirt,shit,shoe,shower,signal_strength,six,six_pointed_star,ski,skull,sleeping,sleepy,slot_machine,small_blue_diamond,small_orange_diamond,small_red_triangle,small_red_triangle_down,smile,smile_cat,smiley,smiley_cat,smiling_imp,smirk,smirk_cat,smoking,snail,snake,snowboarder,snowflake,snowman,sob,soccer,soon,sos,sound,space_invader,spades,spaghetti,sparkle,sparkler,sparkles,sparkling_heart,speak_no_evil,speaker,speech_balloon,speedboat,squirrel,star,star2,stars,station,statue_of_liberty,steam_locomotive,stew,straight_ruler,strawberry,stuck_out_tongue,stuck_out_tongue_closed_eyes,stuck_out_tongue_winking_eye,sun_with_face,sunflower,sunglasses,sunny,sunrise,sunrise_over_mountains,surfer,sushi,suspect,suspension_railway,sweat,sweat_drops,sweat_smile,sweet_potato,swimmer,symbols,syringe,tada,tanabata_tree,tangerine,taurus,taxi,tea,telephone,telephone_receiver,telescope,tennis,tent,thought_balloon,three,thumbsdown,thumbsup,ticket,tiger,tiger2,tired_face,tm,toilet,tokyo_tower,tomato,tongue,top,tophat,tractor,traffic_light,train,train2,tram,triangular_flag_on_post,triangular_ruler,trident,triumph,trolleybus,trollface,trophy,tropical_drink,tropical_fish,truck,trumpet,tshirt,tulip,turtle,tv,twisted_rightwards_arrows,two,two_hearts,two_men_holding_hands,two_women_holding_hands,u5272,u5408,u55b6,u6307,u6708,u6709,u6e80,u7121,u7533,u7981,u7a7a,uk,umbrella,unamused,underage,unlock,up,us,v,vertical_traffic_light,vhs,vibration_mode,video_camera,video_game,violin,virgo,volcano,vs,walking,waning_crescent_moon,waning_gibbous_moon,warning,watch,water_buffalo,watermelon,wave,wavy_dash,waxing_crescent_moon,waxing_gibbous_moon,wc,weary,wedding,whale,whale2,wheelchair,white_check_mark,white_circle,white_flower,white_large_square,white_medium_small_square,white_medium_square,white_small_square,white_square_button,wind_chime,wine_glass,wink,wolf,woman,womans_clothes,womans_hat,womens,worried,wrench,x,yellow_heart,yen,yum,zap,zero,zzz";
        var emojis = emojString.split(/,/);
        var emojiAutocompleteHints = [];

        for (var i = 0; i < emojis.length; i++) {
            var displayText = emojis[i];
            var text = emojis[i];

            emojiAutocompleteHints.push({
                displayText: "<span>" + displayText +
                        "&nbsp;<img style='width: 16px' src='/js/lib/emojify.js-1.0.2/images/basic/" + text + ".png'></span>",
                text: text + ": "
            });
        }

        CodeMirror.registerHelper("hint", "userName", function (cm) {
            var word = /[\w$]+/;
            var cur = cm.getCursor(), curLine = cm.getLine(cur.line);
            var start = cur.ch, end = start;
            while (end < curLine.length && word.test(curLine.charAt(end))) {
                ++end;
            }
            while (start && word.test(curLine.charAt(start - 1))) {
                --start;
            }
            var tok = cm.getTokenAt(cur);

            var autocompleteHints = [];
            $.ajax({
                async: false,
                url: "/users/names?name=" + tok.string.substring(1),
                type: "GET",
                success: function (result) {
                    if (!result.sc || !result.userNames) {
                        return;
                    }

                    for (var i = 0; i < result.userNames.length; i++) {
                        var displayText = result.userNames[i];
                        var text = result.userNames[i];

                        autocompleteHints.push({
                            displayText: "<span>" + displayText + "</span>",
                            text: text + " "
                        });
                    }
                }
            });

            return {list: autocompleteHints, from: CodeMirror.Pos(cur.line, start), to: CodeMirror.Pos(cur.line, end)};
        });

        CodeMirror.registerHelper("hint", "emoji", function (cm) {
            var word = /[\w$]+/;
            var cur = cm.getCursor(), curLine = cm.getLine(cur.line);
            var start = cur.ch, end = start;
            while (end < curLine.length && word.test(curLine.charAt(end))) {
                ++end;
            }
            while (start && word.test(curLine.charAt(start - 1))) {
                --start;
            }
            var tok = cm.getTokenAt(cur);
            
            var autocompleteHints = [];
            var input = tok.string.trim();
            
            var matchCnt = 0;
            for (var i = 0; i < emojis.length; i++) {
                var displayText = emojis[i];
                var text = emojis[i];

                if (startsWith(text, input)) {
                    autocompleteHints.push({
                        displayText: "<span>" + displayText +
                                "&nbsp;<img style='width: 16px' src='/js/lib/emojify.js-1.0.2/images/basic/" + text + ".png'></span>",
                        text: ":" + text + ": "
                    });
                    
                    matchCnt++;
                }
                
                if (matchCnt > 10) {
                    break;
                }
            }

            return {list: autocompleteHints, from: CodeMirror.Pos(cur.line, start), to: CodeMirror.Pos(cur.line, end)};
        });

        CodeMirror.commands.autocompleteUserName = function (cm) {
            setTimeout(function () {
                cm.showHint({hint: CodeMirror.hint.userName, completeSingle: false});
            }, 50);

            return CodeMirror.Pass;
        };

        CodeMirror.commands.autocompleteEmoji = function (cm) {
            setTimeout(function () {
                cm.showHint({hint: CodeMirror.hint.emoji, completeSingle: false});
            }, 50);

            return CodeMirror.Pass;
        };
    },
    /**
     * @description 鼠标移动到文章列表标题上时，提示文章该文章内容
     */
    initArticlePreview: function () {
        $(".article-list h2 > a").hover(function () {
            var $li = $(this).closest("li"),
                    previewHTML = '<div class="preview"><span class="ico-arrow"></span><span class="ico-arrowborder"></span>';
            $(".article-list .preview").hide();
            
            if ($li.find('.preview').length === 1) {
                $li.find('.preview').show();
                return false;
            }
            $.ajax({
                url: "/article/" + $(this).data('id') + "/preview",
                type: "GET",
                cache: false,
                async: false,
                success: function (result, textStatus) {
                    if (!result.sc) {
                        return false;
                    }
                    $li.append(previewHTML + result.html + '</div>');
                    $li.find('.preview').show();
                }
            });
        }, function () {
            var $li = $(this).closest("li");
            $li.find('.preview').hide();
        });
    },
    /**
     * @description 设置当前登录用户的未读提醒计数.
     */
    setUnreadNotificationCount: function () {
        $.ajax({
            url: "/notification/unread/count",
            type: "GET",
            cache: false,
            success: function (result, textStatus) {
                var count = result.unreadNotificationCount;
                if (0 !== count) {
                    $("#aNotifications").removeClass("no-msg").addClass("msg").text(count);
                    document.title = "(" + count + ") " + Label.symphonyLabel + " - " + Label.visionLabel;
                    
                    // Webkit Desktop Notification
                    var msg = Label.desktopNotificationTemplateLabel;
                    msg = msg.replace("${count}", count);
                    
                    var options = {
                        iconUrl: '',
                        title: 'Sym 社区',
                        body: msg,
                        timeout: 3000,
                        onclick: function () {
                            console.log('Pewpew');
                        }
                    };
                    
                    $.notification(options);
                } else {
                    $("#aNotifications").removeClass("msg").addClass("no-msg").text(count);
                    document.title = Label.symphonyLabel + " - " + Label.visionLabel;
                }
            }
        });
    },
    /**
     * @description 关注
     * @param {BOM} it 触发事件的元素
     * @param {String} id 关注 id
     * @param {String} type 取消关注的类型
     */
    follow: function (it, id, type) {
        if ($(it).hasClass("disabled")) {
            return false;
        }

        var requestJSONObject = {
            followingId: id
        };

        $(it).addClass("disabled");

        $.ajax({
            url: "/follow/" + type,
            type: "POST",
            cache: false,
            data: JSON.stringify(requestJSONObject),
            success: function (result, textStatus) {
                if (result.sc) {
                    $(it).removeClass("disabled").removeClass("green").addClass("red")
                            .attr("onclick", "Util.unfollow(this, '" + id + "', '" + type + "')");
                    if ("article" == type) {
                         $(it).text(Label.uncollectLabel);    
                    } else {
                        $(it).text(Label.unfollowLabel);
                    }
                }
            }
        });
    },
    /**
     * @description 取消关注     
     * @param {String} type 取消关注的类型
     */
    unfollow: function (it, id, type) {
        if ($(it).hasClass("disabled")) {
            return false;
        }

        var requestJSONObject = {
            followingId: id
        };

        $(it).addClass("disabled");

        $.ajax({
            url: "/follow/" + type,
            type: "DELETE",
            cache: false,
            data: JSON.stringify(requestJSONObject),
            success: function (result, textStatus) {
                if (result.sc) {
                    $(it).removeClass("disabled").removeClass("red").addClass("green")
                            .attr("onclick", "Util.follow(this, '" + id + "', '" + type + "')");
                    if ("article" === type) {
                         $(it).text(Label.collectLabel);    
                    } else {
                        $(it).text(Label.followLabel);
                    }
                }
            }
        });
    },
    /**
     * @description 回到顶部
     */
    goTop: function () {
        var acceleration = acceleration || 0.1;
        var y = $(window).scrollTop();
        var speed = 1 + acceleration;
        window.scrollTo(0, Math.floor(y / speed));
        if (y > 0) {
            var invokeFunction = "Util.goTop(" + acceleration + ")";
            window.setTimeout(invokeFunction, 16);
        }
    },
    /**
     * @description 页面初始化执行的函数 
     */
    showLogin: function () {
        $(".nav .form").slideToggle();
        $("#nameOrEmail").focus();
    },
    /**
     * @description 跳转到注册页面
     */
    goRegister: function () {
        window.location = "/register?goto=" + encodeURIComponent(location.href);
    },
    /**
     * @description 禁止 IE7 以下浏览器访问
     */
    _kill: function () {
        if ($.browser.msie && parseInt($.browser.version) < 8) {
            $.ajax({
                url: "/kill-browser",
                type: "GET",
                cache: false,
                success: function (result, textStatus) {
                    $("body").append(result);
                    $("#killBrowser").dialog({
                        "modal": true,
                        "hideFooter": true,
                        "height": 258,
                        "width": 530
                    });

                    $("#killBrowser").dialog("open");
                }
            });
        }
    },
    /**
     * @description 初识化前台页面
     */
    init: function () {
        //禁止 IE7 以下浏览器访问
        this._kill();

        // 导航
        this._initNav();

        // 登录密码输入框回车事件
        $("#loginPassword").keyup(function (event) {
            if (event.keyCode === 13) {
                Util.login();
            }
        });

        // search input
        $(".nav .icon-search").click(function () {
            $(".nav input.search").focus();
        });
        $(".nav input.search").focus(function () {
            $(".nav .tags").hide();
        }).blur(function () {
            $(".nav .tags").show("slow");
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
                $(".icon-up").css({
                    "background-color": "#F8F8F8",
                    "border-radius": "5px 0 0 0",
                    "border-color": "#E0E0E0"
                }).show();
            } else if ($(window).scrollTop() > 20) {
                $(".icon-up").css({
                    "background-color": "#E7ECEE",
                    "border-radius": "5px 0 0 5px",
                    "border-color": "#D2D9DD"
                }).show();
            } else {
                $(".icon-up").hide();
            }
        });

        if (isLoggedIn) { // 如果登录了
            // 定时获取并设置未读提醒计数
            setInterval(function () {
                Util.setUnreadNotificationCount();
            }, 60000);
        }
    },
    /**
     * @description 设置导航状态
     */
    _initNav: function () {
        var pathname = location.pathname;
        $(".nav .user-nav > a").each(function () {
            if (pathname.indexOf("/notifications/") > -1) {
                // 提醒下面有四个页面
                $("#aNotifications").addClass("current");
            } else if (pathname.indexOf($(this).attr("href")) > -1) {
                // 用户下面有两个页面：用户的评论及文章列表
                $(this).addClass("current");
            } else if (pathname === "/register") {
                // 注册没有使用 href，对其进行特殊处理
                $("#aRegister").addClass("current");
            }
        });
    },
    /**
     * @description 登录
     */
    login: function () {
        if (Validate.goValidate([{
                "id": "nameOrEmail",
                "type": 256,
                "msg": Label.loginNameErrorLabel
            }, {
                "id": "loginPassword",
                "type": "password",
                "msg": Label.invalidPasswordLabel
            }])) {
            var requestJSONObject = {
                nameOrEmail: $("#nameOrEmail").val().replace(/(^\s*)|(\s*$)/g, ""),
                userPassword: calcMD5($("#loginPassword").val())
            };
            $.ajax({
                url: "/login",
                type: "POST",
                cache: false,
                data: JSON.stringify(requestJSONObject),
                success: function (result, textStatus) {
                    if (result.sc) {
                        window.location.reload();
                    } else {
                        $("#loginTip").text(result.msg).addClass("tip-error");
                    }
                },
                complete: function (jqXHR, textStatus) {
                }
            });
        }
    }
};
/**
 * @description 数据验证
 * @static
 */
var Validate = {
    /**
     * @description 提交时对数据进行统一验证。
     * @param {array} data 验证数据
     * @returns 验证通过返回 true，否则为 false。 
     */
    goValidate: function (data) {
        for (var j = 0; j < data.length; j++) {
            var $it = $("#" + data[j].id);
            for (var i = 0; i < data.length; i++) {
                if (data[i].id === $it.attr("id")) {
                    data[i].val = $it.val();
                    if (data[i].type === 'imgSrc') {
                        data[i].val = $it.attr('src');
                    }
                    
                    if (Validate.validate(data[i].type, data[i].val)) {
                        $it.next().removeClass("tip-error").text("");
                    } else {
                        $it.next().addClass("tip-error").text(data[i].msg);
                    }
                    break;
                }
            }
        }

        for (var j = 0; j < data.length; j++) {
            if ($("#" + data[j].id).next().text() !== "") {
                return false;
            }
        }
        return true;
    },
    /**
     * @description 数据验证。
     * @param {string} type 验证类型
     * @param {string} val 待验证数据 
     * @returns 验证通过返回 true，否则为 false。 
     */
    validate: function (type, val) {
        var isValidate = true;
        
        if (typeof (type) === "string" && type.indexOf("|") > -1) {
            var passwordId = type.split("|")[1];
            type = type.split("|")[0];
        }
        
        switch (type) {
            case "email":
                if (!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(val)) {
                    isValidate = false;
                }
                break;
            case "password":
                if (val.length === 0 || val.length > 16) {
                    isValidate = false;
                }
                break;
            case "confirmPassword":
                if (val !== $("#" + passwordId).val()) {
                    isValidate = false;
                }
                break;
            case "securityCode":
                if (val === "" || val.length > 4) {
                    isValidate = false;
                }
                break;
            case "tags":
                var tagList = val.split(",");
                if (val.replace(/(^\s*)|(\s*$)/g, "") === "" || tagList.length > 7) {
                    isValidate = false;
                }

                for (var i = 0; i < tagList.length; i++) {
                    if (tagList[i].replace(/(^\s*)|(\s*$)/g, "") === ""
                            || tagList[i].replace(/(^\s*)|(\s*$)/g, "").length > 50) {
                        isValidate = false;
                        break;
                    }
                }
                break;
            case "url":
                val = val.replace(/(^\s*)|(\s*$)/g, "");
                if (val !== "") {
                    if (!/^\w+:\/\//.test(val) || val.length > 100) {
                        isValidate = false;
                    }
                }
                break;
            case "imgSrc": 
                val = val.replace(/(^\s*)|(\s*$)/g, "");
                if (val !== "") {
                    if (!/^\w+:\/\//.test(val) || val.length > 100) {
                        isValidate = false;
                    }
                }
                break;
            default:
                val = val.replace(/(^\s*)|(\s*$)/g, "");
                if (typeof (type) === "string") {
                    if (val.length > type) {
                        isValidate = false;
                    }
                } else {
                    if (val.length === 0 || val.length > type) {
                        isValidate = false;
                    }
                }
                break;
        }
        return isValidate;
    }
};
/**
 * @description 全局变量
 */
var Label = {};
if (!Cookie) {
    /**
     * @description Cookie 相关操作
     * @static
     */
    var Cookie = {
        /**
         * @description 读取 cookie
         * @param {String} name cookie key
         * @returns {String} 对应 key 的值，如 key 不存在则返回 ""
         */
        readCookie: function (name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ')
                    c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0)
                    return c.substring(nameEQ.length, c.length);
            }
            return "";
        },
        /**
         * @description 清除 Cookie
         * @param {String} name 清除 key 为 name 的该条 Cookie
         */
        eraseCookie: function (name) {
            this.createCookie(name, "", -1);
        },
        /**
         * @description 创建 Cookie
         * @param {String} name 每条 Cookie 唯一的 key
         * @param {String} value 每条 Cookie 对应的值
         * @param {Int} days Cookie 保存时间
         */
        createCookie: function (name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        }
    };
}