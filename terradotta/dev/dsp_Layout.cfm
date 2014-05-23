
<cfoutput>
<script type="text/javascript" src="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#accounts/#sa_instance#/themes/albany/resources/js/jquery.main.js"></script>
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
<div id="page" style="width:100%;overflow:hidden">
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
      <img src="http://vis.availabs.org/sunyabroad/resources/img/study_abroad_logo.jpg" style="width:250px;float:right" > 
      <address>
        <strong>
          University at Albany Office of Internation Education,<br> Study Abroad &amp; Exchanges
        </strong><br>
        Science Library G40 · 1400 Washington Ave., · Albany, NY 12222 · Phone (518) 591-8170
        <br><a href="mailto:studyabroad@albany.edu">studyabroad@albany.edu</a>
      </address>

      
      <span>
        ©&nbsp;2014 University at Albany
      </span>
      
    </div>
</div>
</div>
</cfoutput>