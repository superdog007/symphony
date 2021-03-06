<div class="nav"> 
    <div class="wrapper fn-clear">
        <h1><a rel="nofollow" href="/">Sym</a></h1>
        <form target="_blank" method="get" action="http://www.google.com/search">
            <span class="icon icon-search"></span>
            <input class="search" type="text" name="q" />
            <input class="fn-none" type="submit" name="btnG" value=""/>
            <input type="hidden" name="oe" value="UTF-8" />
            <input type="hidden" name="ie" value="UTF-8" />
            <input type="hidden" name="newwindow" value="0" />
            <input type="hidden" name="sitesearch" value="symphony.b3log.org" />
        </form>
        <span class="tags">
            <#list navTrendTags as trendTag>
            <a rel="tag" href="/tags/${trendTag.tagTitle?url('UTF-8')}">${trendTag.tagTitle}</a>
            </#list>
        </span>
        <div class="fn-clear user-nav">
            <#if isLoggedIn>
            <a href="${logoutURL}" title="${logoutLabel}" class="last icon icon-logout"></a>
            <#if "adminRole" == userRole>
            <a href="/admin" title="${adminLabel}" class="icon icon-setting"></a>
            </#if>
            <a id="aNotifications" class="<#if unreadNotificationCount == 0>no-msg<#else>msg</#if>" href="/notifications" title="${messageLabel}">${unreadNotificationCount}</a>
            <#else>
            <a id="aRegister" href="javascript:Util.goRegister()" class="last icon icon-register" 
               title="${registerLabel}"></a>
            <a href="javascript: Util.showLogin();" class="icon icon-login" title="${loginLabel}"></a>
            <div class="form fn-none">
                <table cellspacing="0" cellpadding="0">
                    <tr>
                        <td width="40">
                            <label for="nameOrEmail">${accountLabel}</label>
                        </td>
                        <td>
                            <input id="nameOrEmail" type="text"/>
                            <span style="top: 28px; left: 246px;"></span>
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <label for="loginPassword">${passwordLabel}</label>
                        </td>
                        <td>
                            <input type="password" id="loginPassword" />
                            <span style="top: 83px; left: 246px;"></span>
                        </td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td colspan="3" align="right">
                            <span id="loginTip" style="right: 82px; top: 126px;"></span>
                            <button class="red" onclick="Util.login()">${loginLabel}</button>
                        </td>
                    </tr>
                </table>
            </div>
            </#if>
        </div>
    </div>
</div>