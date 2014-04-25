<cfset AccountLinks = saObj.getAccountLinks()/>
<cfset queryAddColumn(AccountLinks, "NEW_XFA", arrayNew(1))/>
<cfmodule template="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#_customtags/ct_MakeTree.cfm" query="#AccountLinks#" result="AccountLinks" unique="Link_ID" parent="Parent_ID">

<cfhtmlhead text='
<script language="javascript" type="text/javascript" src="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#_themes/links.js"></script>
<script language="javascript" type="text/javascript">
<!--
// <![CDATA[
	// this variable determines if menu options that have children
	// are allowed to have links
	var allowParentLinks = false;
// ]]>
//-->
</script>
'/>
		
<cfoutput>
<div id="mainContainer" class="admin-template">
	<div id="mainContainerInside">
		<div id="headerContainer">
		<cfif isDefined("LAYOUT_VARS.SSTOCKLAYOUTBANNERIMAGE") and len(trim(LAYOUT_VARS.SSTOCKLAYOUTBANNERIMAGE))>
			<div align="#LAYOUT_VARS.SSTOCKLAYOUTBANNERORENTATION#">
				<a href="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#index.cfm?FuseAction=Abroad.Home" title="#LAYOUT_VARS.SACCOUNTNAME# - #LAYOUT_VARS.SACCOUNTINSTITUTION#"><img border="0" src="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#accounts/#sa_instance#/themes/stockassets/#LAYOUT_VARS.SSTOCKLAYOUTBANNERIMAGE#" alt="#LAYOUT_VARS.SACCOUNTNAME# - #LAYOUT_VARS.SACCOUNTINSTITUTION#"/></a>
			</div>
		<cfelse>
			<div id="header1">
				<h1><a href="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#index.cfm?FuseAction=Abroad.Home">#LAYOUT_VARS.SACCOUNTNAME#</a></h1>
			</div>
			<div id="header2">
				<h2>#LAYOUT_VARS.SACCOUNTINSTITUTION#</h2>
			</div>
		</cfif>
			<div id="mainNavigation">
				<ul>
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
				</ul>
			</div>
		</div>
		<div id="contentWrap">
			<div id="leftColumn">
				<div id="leftColumnInside">
					<div id="leftNavigation">
						<script type="text/javascript" language="JavaScript">
						<!--
						// <![CDATA[
							var ATOCParent = <cfif not len(Attributes.Parent_ID)>0<cfelse>#Attributes.Parent_ID#</cfif>;
							var ATOCLink = <cfif not len(Attributes.Link_ID)>0<cfelse>#Attributes.Link_ID#</cfif>;
						// ]]>
						//-->
						</script>
						<cfinclude template="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#_themes/dsp_AdminLinksMenu.cfm"/>
					</div>
				</div>
			</div>
			<div id="rightColumn">
				<div id="userNav">
					#saObj.dspUserNavigation(loginShown=1)#
				</div>
				<div id="rightColumnInside">
					<div id="contentAdmin">
						<cfmodule template="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#_customtags/ct_Tabs.cfm" tabs="#Tabs#">#trim(Fusebox.Layout)#</cfmodule>
					</div>
				</div>
			</div>
		</div>
		<div id="footer">
			<div id="footerTop">
			</div>
			<div id="footerBottom">
			<cfif isDefined("LAYOUT_VARS.SSTOCKLAYOUTFOOTERIMAGE") and len(trim(LAYOUT_VARS.SSTOCKLAYOUTFOOTERIMAGE))>
				<div align="#LAYOUT_VARS.SSTOCKLAYOUTFOOTERORENTATION#">
					<a href="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#index.cfm?FuseAction=Abroad.Home" title="#LAYOUT_VARS.SACCOUNTNAME# - #LAYOUT_VARS.SACCOUNTINSTITUTION#"><img border="0" src="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#accounts/#sa_instance#/themes/stockassets/#LAYOUT_VARS.SSTOCKLAYOUTFOOTERIMAGE#" alt="#LAYOUT_VARS.SACCOUNTNAME# - #LAYOUT_VARS.SACCOUNTINSTITUTION#"/></a>
				</div>
			<cfelse>
				<a href="http://terradotta.com" target="_blank"><img src="#LAYOUT_VARS.SPUBHOSTRELATIVEROOT#_images/TD_poweredby.png" alt="#i18n(12829)#" border="0"/></a>
			</cfif>
			</div>
		</div>
	</div>
</div>
</cfoutput>