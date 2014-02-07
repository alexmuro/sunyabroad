<div class="holder">
          <div class="top-section">
            
            <!-- logo -->
            <h1 class="logo">
              <a href="http://www.albany.edu/#">
                UNIVERSITY AT ALBANY. State University of New York
              </a>
            </h1>
            <div class="side-block">
              <div class="row">
                
                
                <!--========== Nav Top Right = = = = = -->
                
                <a href="http://www.albany.edu/myualbany/index.php?WT.source=home" class="my-ualbany">
                  my UALBANY
                </a>
                <ul class="top-menu">
                  <li>
                    <a href="http://www.albany.edu/directories.php?WT.source=home">
                      Directories
                    </a>
                  </li>
                  <li>
                    <a href="http://www.albany.edu/calendars.php?WT.source=home">
                      Calendars &amp; Schedules
                    </a>
                  </li>
                  <li>
                    <a href="http://www.albany.edu/about/about_visiting.php?WT.source=home">
                      Visit
                    </a>
                  </li>
                  <li>
                    <a href="http://www.albany.edu/about/a-z-index.php?WT.source=home">
                      A-Z Index
                    </a>
                  </li>
                </ul>
                <!--========== Ent Div NAV Top Right = = = = = -->
                
                
                <!--========== Begin Search = = = = = -->
                
                
                <!--========== Begin Search = = = = = -->
                <div style="padding-top:30px;margin-left: 290px;">
                  <form action="http://www.albany.edu/search/search_results.php" id="cse-search-box" method="get" name="cse-search-box">
                    <input type="hidden" name="cx" value="009452333206896616693:abbjmkl5yry">
                    <input type="hidden" name="cof" value="FORID:11">
                    <input type="hidden" name="ie" value="UTF-8">
                    <input type="text" name="q" size="20" value="Search">
                    <input src="/layout/v12/accounts/F55DDA42C9E95225F4CB887C90D31683/themes/albany/resources/img/btnSearch.gif" name="sa" type="image" value="Search" class="searchButton2">
                    <input name="siteurl" type="hidden" value="www.albany.edu/">
                    <input name="ref" type="hidden" value="">
                    <input name="ss" type="hidden" value="">
                  </form>
                  <script type="text/javascript" src="/layout/v12/accounts/F55DDA42C9E95225F4CB887C90D31683/themes/albany/resources/img/brand">
                  </script>
                  
                </div>
                <!--========== End Search ==========-->
                
                
              </div>
              <!-- DIV row - menu items and search form -->
              
              
              <!-- submenu -->
              <div class="submenu">
                <ul>
                  <cfoutput>
                  <cfif yesNoFormat(_bEnableHome) is "yes">
          <li class="first"><a class="TopLink<cfif Attributes.FuseAction EQ 'Abroad.Home'>On<cfelse>Off</cfif>" href="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#index.cfm?FuseAction=Abroad.Home">#i18n(6581)#</a></li>
          </cfif>
          <cfif yesNoFormat(_bEnablePrograms) is "yes">
          <li><a class="TopLink<cfif Attributes.FuseAction EQ 'Programs.Home'>On<cfelse>Off</cfif>" href="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#index.cfm?FuseAction=Programs.Home">#i18n(6582)#</a></li>
          </cfif>
        <cfif yesNoFormat(_bEnableStaff) is "yes">
          <li><a class="TopLink<cfif Attributes.FuseAction EQ 'StaffMain.Home'>On<cfelse>Off</cfif>" href="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#index.cfm?FuseAction=StaffMain.Home">#i18n(6583)#</a></li>
        </cfif>
         <cfif yesNoFormat(_bEnableDeadline) is "yes">
          <li<cfif IsDefined("Request.User.User_ID") and val(Request.User.User_ID) gt 0> class="last"</cfif>><a class="TopLink<cfif Attributes.FuseAction EQ 'Programs.ViewDeadlines'>On<cfelse>Off</cfif>" href="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#index.cfm?FuseAction=Programs.ViewDeadlines">#i18n(6584)#</a></li>
          </cfif>
        <cfif not IsDefined("Request.User.User_ID")>
        <cfif len(trim(LAYOUT_VARS.SREMOTELOGINURL))>
          <li><a class="TopLink<cfif Attributes.FuseAction EQ 'Security.Login'>On<cfelse>Off</cfif>" href="#LAYOUT_VARS.SAUTHHOSTPROTOCOL#://#LAYOUT_VARS.SAUTHHOSTDOMAIN##LAYOUT_VARS.SAUTHHOSTPORT##LAYOUT_VARS.SAUTHHOSTRELATIVEROOT#index.cfm?FuseAction=Security.Login">#i18n(12823)##LAYOUT_VARS.SACCOUNTINSTITUTIONNICK# #i18n(6585)#<cfif yesNoFormat(_bEnableSiteRegistration) is "yes">/#i18n(13710)#</cfif></a></li>
          <li class="last"><a class="TopLink<cfif Attributes.FuseAction EQ 'Security.Login'>On<cfelse>Off</cfif>" href="#LAYOUT_VARS.SREMOTELOGINURL#">#i18n(6585)#<cfif yesNoFormat(_bEnableSiteRegistration) is "yes">/#i18n(13710)#</cfif></a></li>
        <cfelse>
          <li class="last"><a class="TopLink<cfif Attributes.FuseAction EQ 'Security.Login'>On<cfelse>Off</cfif>" href="#LAYOUT_VARS.SAUTHHOSTPROTOCOL#://#LAYOUT_VARS.SAUTHHOSTDOMAIN##LAYOUT_VARS.SAUTHHOSTPORT##LAYOUT_VARS.SAUTHHOSTRELATIVEROOT#index.cfm?FuseAction=Security.Login">#i18n(6585)#<cfif yesNoFormat(_bEnableSiteRegistration) is "yes">/#i18n(13710)#</cfif></a></li>
        </cfif>
        </cfif>
      </cfoutput>
                </ul>
              </div>
            </div>
          </div>
          <!-- main navigation -->
          <!-- main gallery -->
          <div class="main-gallery" style="position:relative: top: -40px;">
            <div class="mask">
              <!-- Homepage homepage_banner_list BEGIN -->
              
              <ul id="hpbanners_list" style="width: 5778px;">
                
                <li style="display:block;">
                  <img src="/layout/v12/accounts/F55DDA42C9E95225F4CB887C90D31683/themes/albany/resources/img/chile_header.jpg" alt="UAlbany Students">
                </li>
                <li style="display:block;">
                  <img src="/layout/v12/accounts/F55DDA42C9E95225F4CB887C90D31683/themes/albany/resources/img/homepage_banner-alumni-october-2013.jpg" alt="Graduates">
                </li>
                
                <li style="display:block;">
                  <img src="/layout/v12/accounts/F55DDA42C9E95225F4CB887C90D31683/themes/albany/resources/img/homepage_banner_science_hub_biology.jpg" alt="A hub for new ideas">
                </li>
                <li style="display:block;">
                  <img src="/layout/v12/accounts/F55DDA42C9E95225F4CB887C90D31683/themes/albany/resources/img/homepage_banner_graduate.jpg" alt="Graduate">
                </li>
                <li style="display:block;">
                  <img src="/layout/v12/accounts/F55DDA42C9E95225F4CB887C90D31683/themes/albany/resources/img/homepage_banner_value_minerva.jpg" alt="Excellence at a great value">
                </li>
                <li style="display:block;">
                  <img src="/layout/v12/accounts/F55DDA42C9E95225F4CB887C90D31683/themes/albany/resources/img/homepage_banner_global_students.jpg" alt="Global Perspective">
                </li>
              </ul>
              
              <!-- Homepage homepage_banner_list Ends -->
              
              
              <div class="pagination-block">
                
                <a href="http://www.albany.edu/#" class="prev">
                  previous
                </a>
                <div class="pagination"><ul><li><a href="#">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#">6</a></li></ul></div>
              <a href="http://www.albany.edu/#" class="next">
                next
              </a>
              
                  </div>
          </div>
        </div>
      </div>