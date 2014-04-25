
<script src="resources/js/jquery-latest.min.js"></script>
<script type="text/javascript" src="../resources/js/jquery.main.js"></script>
<script type="text/javascript" src="resources/js/accordian.js"></script>
<script type="text/javascript" src="resources/js/content.js"></script>
<cfhtmlhead text='
	<script type="text/javascript" language="javascript" src="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#_themes/links.js"></script>
	<script type="text/javascript" language="javascript">
	<!--
	// <![CDATA[
		// this variable determines if menu options that have children
		// are allowed to have links
		var allowParentLinks = true;
		var i18n = new Array("#Utils.jsStringFormat_sa(i18n(1268))#","#Utils.jsStringFormat_sa(i18n(4283))#","#Utils.jsStringFormat_sa(i18n(13261))#");
	// ]]>
	//-->
	</script>
' />
<cfoutput>
<div id="mainContainer">
	<div id="mainContainerInside">
		<div id="headerContainer">
			<cfinclude template="partials/header_top.cfm"/>
		</div>
		<div id="contentWrap">
			<div id="leftColumn">
				<div id="leftColumnInside">
					<div id="leftNavigation">
						<cfinclude template="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#_themes/dsp_LinksMenu.cfm"/>
					</div>
				</div>
			</div>
			<div id="rightColumn">
			<cfif IsDefined("Request.User.User_ID") and val(Request.User.User_ID) gt 0>
				<div id="userNav">
					#saObj.dspUserNavigation(loginShown=1)#
				</div>
			</cfif>
				<div id="rightColumnInside">
					<cfmodule template="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#_customtags/ct_Tabs.cfm" tabs="#Tabs#">#trim(Fusebox.Layout)#</cfmodule>
				</div>
			</div>
			<div style="clear:both;">
			</div>
		</div>
	<div id="footer">
      <address>
        <strong>
          University at Albany
        </strong>
        , State University of New York · 1400 Washington Ave., · Albany, NY 12222 · Phone (518) 442-3300
      </address>
      <ul class="additional-menu">
        <li>
          <a href="http://www.albany.edu/contact.shtml">
            Contact Us
          </a>
        </li>
        <li>
          <a href="http://www.albany.edu/main/employment.shtml">
            Jobs
          </a>
        </li>
        <li>
          <a href="http://www.albany.edu/emergency/index.php">
            SUNY NY-Alert
          </a>
        </li>
        <li>
          <a href="http://police.albany.edu/ASR.shtml">
            Annual Security and Fire Safety Report
          </a>
        </li>
        <li>
          <a href="http://wiki.albany.edu/x/IR7-AQ">
            Internet Privacy Policy
          </a>
        </li>
        <li>
          <a href="http://www.albany.edu/emergency/index.php">
            UAlbany Alert
          </a>
        </li>
        <li>
          <a href="http://www.albany.edu/veterans/">
            Veterans Affairs
          </a>
        </li>
        <li>
          <a href="https://wiki.albany.edu/display/middlestates/Home">
            Middle States Self-Study
          </a>
        </li>
      </ul>
      <a href="http://www.albany.edu/gogreen/index.shtml?WT.source=home" class="green-label">
        UAlbany is Green!
      </a>
      
      <span>
        ©&nbsp;2014 University at Albany
      </span>
      
    </div>
	</div>
</div>
</cfoutput>