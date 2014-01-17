function addOption(selectbox,text,value){
	var optn = document.createElement("option");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}
function removeAllOptions(selectbox){
	var i;
	for(i=selectbox.options.length-1;i>=0;i--){
		selectbox.remove(i);
	}
}
function createHTMLNode(htmlCode) {
	var htmlNode = document.createElement('span');
	htmlNode.innerHTML = htmlCode;
	return htmlNode;
}
function myToggle(divId, divId2) {
	myToggle2(divId2);

	if (document.getElementById(divId2).style.display == 'none') {
		document.getElementById(divId).src = Closed.src;
	} else {
		document.getElementById(divId).src = Open.src;
	}
}
function getElementReference(elementId)	{
	var value=false;
	if(document.ids) {
		value=document.ids[elementId];
	}
	else if (document.layers) {
		value=document.layers[elementId];
	} else {
		if(document.all) {
			value=document.all[elementId];
		} else if(document.getElementById) {
			value=document.getElementById(elementId);
		}
	}
	return value;
}
function getStyleReference(elementId) {
	var value=false;
	if(getElementReference(elementId)) {
		value=getElementReference(elementId);
		if(!document.layers) {
				value=value.style;
		}
	}
	return value;
}
function myToggle2(divId){
	var dis = ("none" == getStyleReference(divId).display ? "block" : "none");
	getStyleReference(divId).display = dis;
}
/* Custom TOC script */
function HoverClasses(id){
	if (document.getElementById){
		var tr = document.getElementById('TR'+id);
		var bl = document.getElementById('TRBullet'+id);
		var tx = document.getElementById('TRText'+id);
		var subGrp = document.getElementById('SubGroup'+id);

		if(tr){
			if(subGrp){
				if(subGrp.style.display == "none"){
					tr.className = ('TRClass' == tr.className ? 'TRClassHover' : 'TRClass');
				}
			} else {
				tr.className = ('TRClass' == tr.className ? 'TRClassHover' : 'TRClass');
			}
		}
		if(bl){
			if(subGrp){
				if(subGrp.style.display == "none"){
					bl.className = 'TRBullet';
				}
			} else {
				if(bl.className != ''){
					bl.className = 'TRBullet';
				}
			}
		}
		if(tx){
			tx.className = ('TRText' == tx.className ? 'TRTextHover' : 'TRText');
		}
	}
}
function ClickClass(num){
	var elem = document.getElementById('TRBullet'+num);
	if (document.getElementById){
		if(elem){
			elem.className = ('TRBulletOn' == elem.className ? 'TRBullet' : 'TRBulletOn');
		}
	}
}
function WM_toggle(id) {
	if (document.getElementById){
		var subGroupToOpen = document.getElementById('SubGroup'+id);
		if(subGroupToOpen){
			subGroupToOpen.style.display = ('none' == subGroupToOpen.style.display ? 'block' : 'none');
		}
	}
}
function WM_initialize(subCls,lnkCls){
	if (document.getElementById){
		var toExpand = document.getElementById('SubGroup'+subCls); // Element to expand
		var toHilightTR = document.getElementById('TR'+subCls); // Hilights the expanded row
		var toHilightTRText = document.getElementById('TRText'+subCls); // Hilights the expanded row
		var toToggleBL = document.getElementById('TRBullet'+subCls); // Toggles the expanded bullet
		var toHilightTD = document.getElementById('TD'+subCls+'-'+lnkCls); // Hilights the chosen link
		if(toExpand) {
			toExpand.style.display = 'block';
			if(toToggleBL){
				if(toToggleBL.display != "none"){
					ClickClass('TRBullet'+subCls);
				}
			}
		}
		if(toHilightTR) {
			toHilightTR.className = 'TRClassOn';
			toHilightTR.onmouseover = function(){void(0)}
			toHilightTR.onmouseout = function(){void(0)}
		}
		if(toHilightTRText) {
			toHilightTRText.className = 'TRTextOn';
			toHilightTRText.onmouseover = function(){void(0)}
			toHilightTRText.onmouseout = function(){void(0)}
		}
		if(toHilightTD) {
			toHilightTD.className = 'TDTextOn';
			toHilightTD.onmouseover = function(){void(0)}
			toHilightTD.onmouseout = function(){void(0)}
		}
		if(toToggleBL){
			if(toExpand){
				toToggleBL.className = 'TRBulletOn';
			}
		}
	}
}
function profileSMSTest(smsNumber, carrier_ID,carrierSuffix,targetURL){
	
	var features = 'status=yes,scrollbars=yes,width=500,height=250,resizable=yes,screenX=200,screenY=100,left=200,top=100';
	if(targetURL == ""){
		targetURL = "index.cfm?FuseAction=Students.TestProfileSMS";
	}	
	if (carrierSuffix !== ""){
	 var page = targetURL + "&SMS_Number=" + smsNumber + "&Carrier_ID=0&Carrier_Suffix=" + carrierSuffix;	
	}
	else{
	var page = targetURL + "&SMS_Number=" + smsNumber + "&Carrier_ID=" + carrier_ID;	
	}
	if(navigator.appName !='Microsoft Internet Explorer'){
		popup(page, 'Mobile Phone Text Messaging (SMS): Test ', features);
	}	
	else{
		popup(page, '_blank', features);
	}	
	
}

function openGlossary(ID, Type){
	var features = 'status=yes,scrollbars=yes,width=500,height=250,resizable=yes,screenX=200,screenY=100,left=200,top=100';
	var page = "index.cfm?FuseAction=Public.Glossary&Type=" + Type + "&ID=" + ID;
	popup(page, 'Glossary', features);
}
function popup(sURL,sTitle,sFeatures) {
	var winWidth = (screen.width - 100);
	var winHeight = (screen.height - 200);
	if (sFeatures == ''){
		winprops = 'height=' + winHeight + ',width=' + winWidth + ",top=100,left=50,location=no,menubar=no,resizable=yes,status=no,titlebar=no,statusbar=-1,toolbar=no,scrollbars=yes";
	} else {
		winprops = sFeatures;
	}
	window.open(sURL, sTitle, winprops);
}
function disableEnterKey(e) {
	var key;
	if(window.event) {
		key = window.event.keyCode;	 //IE
	} else {
		key = e.which;	 //firefox
	}
	if(key == 13) {
		return false;
	} else {
		return true;
	}
}
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	 for (var i=0;i<vars.length;i++)
	 {
	 	var pair = vars[i].split("=");
	 	if (pair[0] == variable)
	 	{
	 		return pair[1];
	 	}
	 }
}