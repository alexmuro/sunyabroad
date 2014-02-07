jQuery.fn.toggleFade = function(speed, easing, callback) {
	return this.animate({opacity: 'toggle'}, speed, easing, callback);
};
jQuery.toggleCookie = function(Cookie) {
	$.cookie(Cookie,$.cookie(Cookie) == 1 ? 0 : 1);
};

function getProgramsByKeywords(keywords) {
	if(keywords.length > 3){
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "ajaxGetProgramByKeywords",
			data: {"Keywords":keywords},
			success: function(rs) {
				popRS(rs);
			}
		}
		);
	}
}
function cycleInit(id,progID,bCurrent,msgDiv,bActive) {
	$.AjaxCFC(
	{
		url: _ajaxConfig._cfscriptLocation,
		method: "getAllProgramTerms",
		data: {"Program_ID":progID,"bShowCurrent":bCurrent,"bShowActive":bActive},
		success: function(rs) {
			populateSelectBox(id,rs,true);
			if(bCurrent){
				$('#cycleMsg').show();
				$('#cycleMsg2').hide();
			} else {
				$('#cycleMsg').hide();
				$('#cycleMsg2').show();
			}
		}
	}
	);
}
function responseInit(id,callingId,targetId,spID,selFirst) {
	$.AjaxCFC(
	{
		url: _ajaxConfig._cfscriptLocation,
		method: "ajaxGetStudentParamUniqueResponses",
		data: {"Student_Param_ID":spID},
		success: function(rs) {
			populateSelectBox(id,rs,selFirst);
			$('#'+targetId).show();
			$('#'+callingId).hide();
			$('#'+id+' option:eq(1)').css({'background-color':'#efefef'});
			try {
				eval('_cb_restoreSP'+spID+'()');
			} catch(e) {}
		}
	}
	);
}
function responseDefault(id,callingId,targetId,spID,selFirst) {
	$.AjaxCFC(
	{
		url: _ajaxConfig._cfscriptLocation,
		method: "ajaxGetStudentParamAllOptionValues",
		data: {"Student_Param_ID":spID},
		success: function(rs) {
			populateSelectBox(id,rs,selFirst);
			$('#'+targetId).show();
			$('#'+callingId).hide();
			$('#'+id+' option:eq(1)').css({'background-color':'#efefef'});
			try {
				eval('_cb_restoreSP'+spID+'()');
			} catch(e) {}
		}
	}
	);
}
function prgInit(id,bActive,excl) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "ajaxGetPrograms",
			data: {"active":bActive},
			success: function(rs) {
				populateSelectBox(id,rs,0,excl);
			}
		}
	);
}
function prgGrpInit(id) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "ajaxGetProgramGroups",
			data: {},
			success: function(rs) {
				populateSelectBox(id,rs);
			}
		}
	);
}
function sponsorInit(id) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "ajaxGetSponsors",
			data: {},
			success: function(rs) {
				populateSelectBox(id,rs);
			}
		}
	);
}
function meta01Init(id) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "ajaxGetMETA01",
			data: {},
			success: function(rs) {
				populateSelectBox(id,rs);
			}
		}
	);
}
function meta02Init(id) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "ajaxGetMETA02",
			data: {},
			success: function(rs) {
				populateSelectBox(id,rs);
			}
		}
	);
}
function spInit(id,types) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "ajaxGetStudentParameters",
			data: {"restrictToTypes":types},
			success: function(rs) {
				populateSelectBox(id,rs);
			}
		}
	);
}
function spValuesInit(id,sp) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "ajaxGetStudentParameterValues",
			data: {"id":sp},
			success: function(rs) {
				populateSelectBox(id,rs);
			}
		}
	);
}
function paramValInit(id,val) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "ajaxGetProgramParameterValues",
			data: {"Param_ID":val},
			success: function(rs) {
				populateSelectBox(id,rs);
			}
		}
	);
}
function fscInit(id,context,val) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "ajaxGetSchools",
			data: {"vchcontext":context, "vchvalue":val},
			success: function(rs) {
				populateSelectBox(id,rs);
			}
		}
	);
}
function termInit(id,msgDiv,sStatus) {
	var tmpStatus = 'Current';
	if(sStatus != ''){
		tmpStatus = sStatus;
	}
	$.AjaxCFC({
			url: _ajaxConfig._cfscriptLocation,
			method: "ajaxGetApplicationCycleTerms",
			data: {"Status": tmpStatus},
			success: function(rs) {
				populateSelectBox(id,rs);
				$('#'+msgDiv).hide();
			}
		}
	);
}
function procMapInit(id,msgDiv,sStatus) {
	var tmpStatus = 'Current';
	if(sStatus != ''){
		tmpStatus = sStatus;
	}
	$.AjaxCFC({
			url: _ajaxConfig._cfscriptLocation,
			method: "ajaxGetProcessMaps",
			data: {"Status": tmpStatus},
			success: function(rs) {
				populateSelectBox(id,rs,1);
			}
		}
	);
}
function killObjPermission(iUserID,iObjectID,vchKeyID,objDiv,bRemoveAll){
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "ajaxRemoveObjectPermission",
			data: {"iUserID": iUserID,"iObjectID":iObjectID,"vchKeyID":vchKeyID,"bRemoveAll":bRemoveAll},
			success: function(rs) {
				if(bRemoveAll){
					$('#all-'+objDiv).remove();
					$('#rem-'+objDiv).remove();
				} else {
					$('#'+objDiv).remove();
					var tmp = objDiv.split('-')[0];
					if($.trim($('#all-'+tmp).html())=='') {
						$('#rem-'+tmp).remove();
					}
				}
			}
		}
	);
}
function killGroupObjPermission(iGroupID,iObjectID,vchKeyID,objDiv,bRemoveAll){
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "ajaxRemoveGroupObjectPermission",
			data: {"iGroupID": iGroupID,"iObjectID":iObjectID,"vchKeyID":vchKeyID,"bRemoveAll":bRemoveAll},
			success: function(rs) {
				if(bRemoveAll){
					$('#all-'+objDiv).remove();
					$('#rem-'+objDiv).remove();
				} else {
					$('#'+objDiv).remove();
					var tmp = objDiv.split('-')[0];
					if($.trim($('#all-'+tmp).html())=='') {
						$('#rem-'+tmp).remove();
					}
				}
			}
		}
	);
}
function populateSelectBox(id,rs,bSelFirst,excl) {
	RS = eval(rs['DATA']);
	var frmElem = document.getElementById(id);
	var options = '';
	var found = 0;
	if(RS.length > 0){
		for (var i = 0; i < RS.length; i++) {
			if((excl) && (excl.length)){
				found = 0;
				for(var j = 0; j < excl.length ; j++) {
					if(RS[i].id == excl[j].value){
						found = 1;
					}
				}
				if(found == 0){
					options += '<option value="' + RS[i].id + '">' + RS[i].name + '</option>';
				}
			} else {
				options += '<option value="' + RS[i].id + '">' + RS[i].name + '</option>';
			}
		}
		$("select#"+id).html(options);
		if(!bSelFirst){
			frmElem.selectedIndex = -1;
		} else {
			frmElem.selectedIndex = 0;
		}
		frmElem.disabled=false;
	} else {
		$("select#"+id).html('No records exit.');
	}
}

function selectItems(id,itemArray) {
	var frmElem = document.getElementById(id);
	for(i=0;i<frmElem.options.length;i++){
		optValue = frmElem.options[i].value;
		for(j=0;j<itemArray.length;j++){
			if(optValue === itemArray[j]){
				frmElem.options[i].selected = true;
			}
		}
	}
}
function ammapcont(continent,defaultCountryColor,labelBackgroundColor) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "GetAmapContinent",
			data: {"vchContinent":continent},
			success: function(rs) {
				var settings="<settings><area><balloon_text>{title}</balloon_text><color_unlisted>"+defaultCountryColor+"</color_unlisted></area><balloon><color>"+labelBackgroundColor+"</color></balloon></settings>";			
				flashMovie.setSettings(settings);				
				flashMovie.setData(rs['DATA']);
			}
		}
	);
}
function setProgramPins(country) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "GetAmapProgramPins",
			data: {"vchCountry":country},
			success: function(rs) {
				flashMovie.setData(rs['DATA']);

			}
		}
	);
}
function getNote() {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "getNoteData",
			success: function(rs) {
				document.getElementById('notes-content-border').innerHTML="";
				for(i=0;i<rs.length;i++){
					document.getElementById('notes-content-border').innerHTML = document.getElementById('notes-content-border').innerHTML +'<b>'+rs[i]['NOTE_DATE']+'</b>'+'&nbsp;'+'<span	class="fc" onclick="deleteNote('+rs[i]['NOTEID']+');">[X]</span></font>'+'<br>'+ rs[i]['TEXT']+'<br>'+'<br>';
				}
			}
		}
	);
}

function adNotes(cont,noteDate) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "addNotes",
			data: {"cont":cont,"noteDate":noteDate},
			success: function(rs) {	
				getNote();
				document.getElementById('newNote').style.display='none';
			}
		}
	);
}
function getDeadlinePanel(Program_ID) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "getpgmDeadlines",
			data: {"Program_ID":Program_ID},
			success: function(rs) {
			 
			 
			 document.getElementById('PopupPanel').innerHTML=rs;
			}
		}
	);
}

function informAboutActivation(){
	alert('The Terra Dotta Location Web Service is currently inactive. Please contact a faculty member for more information.');
}

function getLocation(program_city) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "getLocatn",
			data: {"program_city":program_city},
			success: function(rs)
			{	
				var selSelected = document.getElementById('selSelected');
				if(rs == 999) {
					informAboutActivation();
				} else {
					document.getElementById('selAvailable').length = 0;
					if(rs.length>0){
						var cnt = 0;
						for(i=0;i<rs.length;i++){ /*qryTDCLContent.asciiname = replaceList(qryTDCLContent.asciiname,chr(8216) & "," & chr(8217) & "," & chr(8220) & "," & chr(8221) & "," & chr(8212) & "," & chr(8213) & "," & chr(8230),"',',"","",--,--,..."); */
							if(rs[i]['COUNTRY'] != '')
								var info=rs[i]['TEXT']+','+' '+rs[i]['COUNTRY']+' ('+rs[i]['REGION']+')';
							else
								var info=rs[i]['TEXT'];
							var latLong=rs[i]['LATITUDE']+'/'+rs[i]['LONGITUDE'];
							var bExists = false;
							for(j=0;j<selSelected.options.length;j++){
								if(selSelected.options[j].text == info){
									var bExists = true;
								}
							}
							if(bExists == false){
								document.getElementById('selAvailable').options[cnt] = new Option(info,latLong);
								cnt++;
							}
						}
						if(cnt==0){
							alert('All available results have already been selected.');
						}
					} else {
						alert('The Terra Dotta Location Web Service did not find a match for this location. You may choose to modify the name and search again.');
					}
				}
			}
		}
	);
}
function getLatitude(program_city,program_country,optionValue,latitude,longitude)
{
	$.AjaxCFC(
	{
		url: _ajaxConfig._cfscriptLocation,
		method: "getLocatn",
		data: {"program_city":program_city,"optionValue":optionValue,"program_country":program_country},
		success: function(rs)
		{
			if(rs == 999) {
				informAboutActivation();
			} else {
				if(rs.length == 0) {
					alert("This location could not be found in the TDLWS");
				} else if (rs.length == 1) {
					document.getElementById(latitude).value = rs[0]['LATITUDE'];
					document.getElementById(longitude).value = rs[0]['LONGITUDE'];
				} else {
					alert('There is more than one location in the Terra Dotta Location Database matching your input: ['+program_city+'], ['+program_country+'].	Use another resource to identify the proper coordinates and enter them manually.');
				}
			}
		}
	});
}
function fetchInfo(program_city,optionValue,listCount)
{
	$.AjaxCFC(
	{
		url: _ajaxConfig._cfscriptLocation,
		method: "getLocatn",
		data: {"program_city":program_city,"optionValue":optionValue},
		success: function(rs)
		{
			if(rs == 999) {
				informAboutActivation();
			} else if (rs["error"]){
				alert('an error occurred.');
			} else {
				alert(rs.length+' out of '+listCount+' locations have been updated with latitude/longitude data. Those not updated were either not found or exist as duplicate city name within the same country. For such cases, use another resource to identify the proper coordinates and enter them manually.');
				location.href='index.cfm?FuseAction=SystemSettings.Locations';
			}
		}
	});
}
function deleteNotes(noteid) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "deleteNotes",
			data: {"noteid":noteid},
			success: function(rs) {	getNote();
			}
		}
	);
}

function Shareurl(Program_ID,Program_Name,email_id,additional_notes) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "sharePgmBrochureUrl",
			data: {"Program_ID":Program_ID,"Program_Name":Program_Name,"email_id":email_id,"additional_notes":additional_notes},
			success: function(rs) {			 
				alert('Email sent successfully');
			}
		}
	);
	
}

function sendsavedPgm(email_ID,cc_email,subject,additional_notes) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "sendSavedPrograms",
			data: {"email_ID":email_ID,"cc_email":cc_email,"subject":subject,"additional_notes":additional_notes},
			success: function(rs) {			 
				alert('Email sent successfully');
				ClosePopupPanel1();
			}
		}
	);
	
}

function allowedToSavePgm(Program_ID,Program_Name) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "SavePgm",
			data: {"Program_ID":Program_ID},
			success: function(rs) {																
				 document.getElementById('pgmallowed').value=rs;
				 var pgmcheck=document.getElementById('pgmallowed').value;
		
					if (pgmcheck!=''){
						if($('.pgm_'+Program_ID))
							$('.pgm_'+Program_ID).removeAttr('disabled');
						alert(pgmcheck);
					}
					else{
						SavePgm(Program_ID,Program_Name);
					}
			}
		}
	);
	
}

function SavePgm(Program_ID,Program_Name) {
		$.AjaxCFC(
		{
			url: _ajaxConfig._cfscriptLocation,
			method: "SaveThisPgm",
			data: {"Program_ID":Program_ID,"Program_Name":Program_Name},
			success: function(rs) {
				if($('.pgm_'+Program_ID))
					$('.pgm_'+Program_ID).removeAttr('disabled');
				alert(rs);		
			}
		}
	);
	
}
function getIATALocationCodes(id,keywords)
{
	$.AjaxCFC(
	{
		url: _ajaxConfig._cfscriptLocation,
		method: "ajaxGetIATALocationCodes",
		data: {"keywords":keywords},
		success: function(rs)
		{
			if(rs == 999) {
				informAboutActivation();
			} else {
				populateSelectBox(id,rs,0);
			}
		}
	});
}
function getIATALocationFromCode(id,loc)
{
	$.AjaxCFC(
	{
		url: _ajaxConfig._cfscriptLocation,
		method: "ajaxGetIATALocationFromCode",
		data: {"loc":loc},
		success: function(rs)
		{
			if(rs == 999) {
				informAboutActivation();
			} else {
				populateSelectBox(id,rs,true);
			}
		}
	});
}
function getCarrierCodes(id,keywords)
{
	$.AjaxCFC(
	{
		url: _ajaxConfig._cfscriptLocation,
		method: "ajaxGetCarrierCodes",
		data: {"keywords":keywords},
		success: function(rs)
		{
			if(rs == 999) {
				informAboutActivation();
			} else {
				populateSelectBox(id,rs,0);
			}
		}
	});
}
function getCarrierFromCode(id,carcode)
{
	$.AjaxCFC(
	{
		url: _ajaxConfig._cfscriptLocation,
		method: "ajaxGetCarrierFromCode",
		data: {"carcode":carcode},
		success: function(rs)
		{
			if(rs == 999) {
				informAboutActivation();
			} else {
				populateSelectBox(id,rs,true);
			}
		}
	});
}
function setAddressCoordinates(id,uid,lat,lon,hash,fa)
{
	$.AjaxCFC(
	{
		url: _ajaxConfig._cfscriptLocation,
		method: "ajaxSetAddressCoordinates",
		data: {"id":id,"uid":uid,"lat":lat,"lon":lon,"hash":hash},
		success: function(uid){
			if(fa!=''){
				location.href=fa;
			}
		}
	});
}
function geocodeResponseHandler(statusObj){
	if(statusObj=='ZERO_RESULTS'){
		return 'One or more addresses was not found. Please check the address and try again.';
	} else if (statusObj=='OVER_QUERY_LIMIT') {
		return 'Google Geocoding API: The maxiumum number of requests has been reached. Please contact support.';
	} else if (statusObj=='REQUEST_DENIED') {
		return 'Google Geocoding API: The request has been denied. Please contact support.';
	} else if (statusObj=='INVALID_REQUEST') {
		return 'Google Geocoding API: The request is invalid.';
	} else if (statusObj!='') {
		return 'Google Geocoding API: An unhandled response was received. Please contact support with the following information: ' + respObj.toString() ;
	}
}
function getCitiesInCountry(id,City)
{
	$.AjaxCFC(
	{
		url: _ajaxConfig._cfscriptLocation,
		method: "ajaxGetCitiesInCountry",
		data: {"program_city":City},
		success: function(rs)
		{
			populateSelectBox(id,rs,true);
		}
	});
}