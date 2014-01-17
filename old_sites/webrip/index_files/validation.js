// Global JavaScript Validation and Select box Library

////////////////////////////////	Validate NULL FIELDS //////////////////////////////////
function isNotNULL(pvStrFormName, pvStrFieldName, pvStrErrMsg)
{
	var lLogRetVal = false;
	var pvStrData = document.forms[pvStrFormName].elements[pvStrFieldName].value;
	if(Trim(pvStrData).length >= 1)
	{
		return '';
	}
	else
	{
		return pvStrErrMsg;
	}
}
function Trim(s)
{
	// Remove leading spaces and carriage returns
	while ((s.substring(0,1) == ' ') || (s.substring(0,1) == '\n') || (s.substring(0,1) == '\r'))
	{
		s = s.substring(1,s.length);
	}
	// Remove trailing spaces and carriage returns
	while ((s.substring(s.length-1,s.length) == ' ') || (s.substring(s.length-1,s.length) == '\n') || (s.substring(s.length-1,s.length) == '\r'))
	{
		s = s.substring(0,s.length-1);
	}
	return s;
}
////////////////////////////////	Validate NUMBERS //////////////////////////////////////
function isValidNumber(pvStrFormName, pvStrFieldName, pvStrErrMsg, bAlsoCheckNULL,snumType)
{
	if (bAlsoCheckNULL == 'yes')
	{
		var err_chknull =	isNotNULL(pvStrFormName, pvStrFieldName, pvStrErrMsg)
		if (err_chknull.length > 0)
			return pvStrErrMsg
	}

	if ( snumType == 'int' )
	{
		checkOK = "0123456789-";
	}
	else if (snumType == 'pint')
	{
		checkOK = "0123456789";
	}
	else if (snumType == 'dec')
	{
		checkOK = "0123456789-.";
	}
	else if (snumType == 'pdec')
	{
		checkOK = "0123456789.";
	}
	else
	{
		checkOK = "0123456789.";
	}

		var checkStr = document.forms[pvStrFormName].elements[pvStrFieldName].value;
		var allValid = true;
		var decPoints = 0;

		var allNum = "";
		for (i = 0;	i < checkStr.length; i++)
		{
			ch = checkStr.charAt(i);
			for (j = 0;	j < checkOK.length;	j++){
				if (ch == checkOK.charAt(j)){
					break;
				}
				if (j == checkOK.length){
					allValid = false;
			 	 	break;
				}
				allNum += ch;
			}
		}
		if (allValid){
			if (isNaN(Number(checkStr))){
				allValid = false;
			}
		}
		if (allValid){
			if ((snumType == 'pdec') || (snumType == 'pint')){
				if (Number(checkStr) < 0){
					allValid = false;
				}
			}
		}
		if (allValid){
			//MS SQL Int type limits
			var min_number='-2147483648';
			var max_number='+2147483647';
			if ( (Number(checkStr) < parseInt(min_number)) || (Number(checkStr) > parseInt(max_number)) ){
				return pvStrErrMsg;
			}
		} else {
			return pvStrErrMsg;
		}

	return '';
}
////////////////////////////////	Validate DATE	////////////////////////////////////////
function LeapYear(intYear)
{
	if (intYear % 100 == 0)
	{
		if (intYear % 400 == 0) { return true; }
	}
	else
	{
		if ((intYear % 4) == 0) { return true; }
	}
	return false;
}
function isValidDate(pvStrFormName, pvStrFieldName,mask,pvStrErrMsg, bAlsoCheckNULL, bForce1900Year)
{
	if (mask.search('-') != -1){
		var separator='-';
	} else {
		var separator='/';
	}
	var strDatestyle = "US"; //United States date style
	var strDate;
	var strDateArray;
	var strDay;
	var strMonth;
	var strYear;
	var intday;
	var intMonth;
	var intYear;
	var booFound = false;
	var datefield = '';
	var strSeparatorArray = new Array("-","/");
	var intElementNr;
	var err = 0;
	var strMonthArray = new Array(12);
	var strMaskArray = [];
	
	if(document.forms[pvStrFormName].elements[pvStrFieldName].length > 1){
		datefield = document.forms[pvStrFormName].elements[pvStrFieldName][0];
	} else {
		datefield = document.forms[pvStrFormName].elements[pvStrFieldName]
	}

	strMonthArray[0] = "Jan";
	strMonthArray[1] = "Feb";
	strMonthArray[2] = "Mar";
	strMonthArray[3] = "Apr";
	strMonthArray[4] = "May";
	strMonthArray[5] = "Jun";
	strMonthArray[6] = "Jul";
	strMonthArray[7] = "Aug";
	strMonthArray[8] = "Sep";
	strMonthArray[9] = "Oct";
	strMonthArray[10] = "Nov";
	strMonthArray[11] = "Dec";
	
	strDate = Trim(datefield.value);
	
	for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++)
	{
		if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1)
		{
			strMaskArray = mask.split(strSeparatorArray[intElementNr],"3");
		}
	}
	// invalid mask
	if((strMaskArray.length < 3) && (bAlsoCheckNULL == 'yes')){
		return pvStrErrMsg;
	}
	
	//If true then check for null value.
	if (bAlsoCheckNULL == 'yes')
	{
		var err_chknull = isNotNULL(pvStrFormName, pvStrFieldName, pvStrErrMsg)
		if (err_chknull.length > 0)
		{
			return pvStrErrMsg;
		}
	}
	else
	{
		//if date is not mandatory and is empty then no need to run this script.
		var err_chknull =	isNotNULL(pvStrFormName, pvStrFieldName, pvStrErrMsg)
		if (err_chknull.length !=	0)
		{
			return '';
		}
	}
	if (strDate !=""){
		if (strDate.search(separator) == -1){
			return pvStrErrMsg;
		}
		for(i=0;i<3;i++){
			if (strMaskArray[i] =='dd' || strMaskArray[i] =='d'){
				var dayIndex=i;
			}
			if (strMaskArray[i] =='mm' || strMaskArray[i] =='Mmm' || strMaskArray[i] =='MMM' || strMaskArray[i] =='m'){
				var monthIndex=i;
			}
			if (strMaskArray[i] =='yyyy' || strMaskArray[i] =='yy'){
				var yearIndex=i;
			}
		}	
		//check date delemater
		for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++)
		{
			if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1)
			{
				strDateArray = strDate.split(strSeparatorArray[intElementNr]);
				if (strDateArray.length != 3)
				{
					err = 1;
					return pvStrErrMsg;
				}
				else
				{
					strDay = strDateArray[dayIndex];
					if (strDay.length != strMaskArray[dayIndex].length && strDay<10){
						return pvStrErrMsg;
					}
					strMonth = strDateArray[monthIndex];
					if (strMonth.length != strMaskArray[monthIndex].length && strMonth<10){
						return pvStrErrMsg;
					}
					strYear = strDateArray[yearIndex];
					if (strYear.length != strMaskArray[yearIndex].length && strMaskArray[yearIndex]!='yy'){
						return pvStrErrMsg;
					}
				}
				booFound = true;
			}
		}

		if (booFound == false)
		{
			if (strDate.length>5)
			{
				strDay = strDate.substr(0, 2);
				strMonth = strDate.substr(2, 2);
				strYear = strDate.substr(4);
			}
			else
			{
				err = 11;
				return pvStrErrMsg;
			}
		}
	
		//make year = 4 digits
		if (strYear.length == 2)
		{
			if(strYear < 50){
				strYear = '20' + strYear;
			} else {
				strYear = '19' + strYear;
			}
			/* old code
			if(bForce1900Year == "yes"){
				strYear = '19' + strYear;
			} else {
				strYear = '20' + strYear;
			}*/
	
		}
	
		// US style
		/*if (strDatestyle == "US")
		{
			strTemp = strDay;
			strDay = strMonth;
			strMonth = strTemp;
		}
		*/
		intday = parseInt(strDay, 10);
		if (isNaN(intday))
		{
			err = 2;
			return pvStrErrMsg;
		}
	
		intMonth = parseInt(strMonth, 10);
		if (isNaN(intMonth))
		{
			for (i = 0;i<12;i++)
			{
				if (strMonth.toUpperCase() == strMonthArray[i].toUpperCase())
				{
					intMonth = i+1;
					strMonth = strMonthArray[i];
					i = 12;
				}
			}
	
			if (isNaN(intMonth))
			{
				err = 3;
				return pvStrErrMsg;
			}
		}
	
		intYear = parseInt(strYear, 10);
		if (isNaN(intYear))
		{
			err = 4;
			return pvStrErrMsg;
		}
	
		if (intMonth>12 || intMonth<1)
		{
			err = 5;
			return pvStrErrMsg;
		}
	
		if ((intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) && (intday > 31 || intday < 1))
		{
			err = 6;
			return pvStrErrMsg;
		}
	
		if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intday > 30 || intday < 1))
		{
			err = 7;
			return pvStrErrMsg;
		}
	
		if (intMonth == 2)
		{
			if (intday < 1)
			{
				err = 8;
				return pvStrErrMsg;
			}
	
			if (LeapYear(intYear) == true)
			{
				if (intday > 29)
				{
					err = 9;
					return pvStrErrMsg;
				}
			}
			else
			{
				if (intday > 28)
				{
					err = 10;
					return pvStrErrMsg;
				}
			}
		}
	
		/*if (strDatestyle == "US")
		{
			//datefield.value = strMonthArray[intMonth-1] + "/" + intday+"/" + strYear;
			datefield.value= intMonth + "/" + intday+"/" + strYear;
		}*/
		/*else
		{
			datefield.value = intday + "/" + strMonthArray[intMonth-1] + "/" + strYear;
		}*/
		var min_date="01/01/1900";
		var max_date="01/01/2100";
	
		if ( (Date.parse(datefield.value) < Date.parse(min_date)) || (Date.parse(datefield.value) > Date.parse(max_date)) ){
			err = 11;
			return pvStrErrMsg;
		}
	}
	return '';
}
/*function isValidDate(pvStrFormName, pvStrFieldName, pvStrErrMsg, bAlsoCheckNULL, bForce1900Year)
{
	var strDatestyle = "US"; //United States date style
	var strDate;
	var strDateArray;
	var strDay;
	var strMonth;
	var strYear;
	var intday;
	var intMonth;
	var intYear;
	var booFound = false;
	var datefield = document.forms[pvStrFormName].elements[pvStrFieldName];
	var strSeparatorArray = new Array("-","/");
	var intElementNr;
	var err = 0;
	var strMonthArray = new Array(12);
	strMonthArray[0] = "Jan";
	strMonthArray[1] = "Feb";
	strMonthArray[2] = "Mar";
	strMonthArray[3] = "Apr";
	strMonthArray[4] = "May";
	strMonthArray[5] = "Jun";
	strMonthArray[6] = "Jul";
	strMonthArray[7] = "Aug";
	strMonthArray[8] = "Sep";
	strMonthArray[9] = "Oct";
	strMonthArray[10] = "Nov";
	strMonthArray[11] = "Dec";

	strDate = document.forms[pvStrFormName].elements[pvStrFieldName].value;

	//If true then check for null value.
	if (bAlsoCheckNULL == 'yes')
	{
		var err_chknull =	isNotNULL(pvStrFormName, pvStrFieldName, pvStrErrMsg)
		if (err_chknull.length > 0)
		{
			return pvStrErrMsg;
		}

	}
	else
	{
		//if date is not mandatory and is empty then no need to run this script.
		var err_chknull =	isNotNULL(pvStrFormName, pvStrFieldName, pvStrErrMsg)
		if (err_chknull.length !=	0)
		{
			return '';
		}

	}

	//check date delemater
	for (intElementNr = 0; intElementNr < strSeparatorArray.length; intElementNr++)
	{
		if (strDate.indexOf(strSeparatorArray[intElementNr]) != -1)
		{
			strDateArray = strDate.split(strSeparatorArray[intElementNr]);
			if (strDateArray.length != 3)
			{
				err = 1;
				return pvStrErrMsg;
			}
			else
			{
				strDay = strDateArray[0];
				strMonth = strDateArray[1];
				strYear = strDateArray[2];
			}
			booFound = true;
		}
	}

	if (booFound == false)
	{
		if (strDate.length>5)
		{
			strDay = strDate.substr(0, 2);
			strMonth = strDate.substr(2, 2);
			strYear = strDate.substr(4);
		}
		else
		{
			err = 11;
			return pvStrErrMsg;
		}
	}

	//make year = 4 digits
	if (strYear.length == 2)
	{
		if(strYear < 50){
			strYear = '20' + strYear;
		} else {
			strYear = '19' + strYear;
		}
		/* old code
		if(bForce1900Year == "yes"){
			strYear = '19' + strYear;
		} else {
			strYear = '20' + strYear;
		}

	}

	// US style
	if (strDatestyle == "US")
	{
		strTemp = strDay;
		strDay = strMonth;
		strMonth = strTemp;
	}

	intday = parseInt(strDay, 10);
	if (isNaN(intday))
	{
		err = 2;
		return pvStrErrMsg;
	}

	intMonth = parseInt(strMonth, 10);
	if (isNaN(intMonth))
	{
		for (i = 0;i<12;i++)
		{
			if (strMonth.toUpperCase() == strMonthArray[i].toUpperCase())
			{
				intMonth = i+1;
				strMonth = strMonthArray[i];
				i = 12;
			}
		}

		if (isNaN(intMonth))
		{
			err = 3;
			return pvStrErrMsg;
		}
	}

	intYear = parseInt(strYear, 10);
	if (isNaN(intYear))
	{
		err = 4;
		return pvStrErrMsg;
	}

	if (intMonth>12 || intMonth<1)
	{
		err = 5;
		return pvStrErrMsg;
	}

	if ((intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12) && (intday > 31 || intday < 1))
	{
		err = 6;
		return pvStrErrMsg;
	}

	if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && (intday > 30 || intday < 1))
	{
		err = 7;
		return pvStrErrMsg;
	}

	if (intMonth == 2)
	{
		if (intday < 1)
		{
			err = 8;
			return pvStrErrMsg;
		}

		if (LeapYear(intYear) == true)
		{
			if (intday > 29)
			{
				err = 9;
				return pvStrErrMsg;
			}
		}
		else
		{
			if (intday > 28)
			{
				err = 10;
				return pvStrErrMsg;
			}
		}
	}

	if (strDatestyle == "US")
	{
		//datefield.value = strMonthArray[intMonth-1] + "/" + intday+"/" + strYear;
		datefield.value = intMonth + "/" + intday+"/" + strYear;
	}
	else
	{
		datefield.value = intday + "/" + strMonthArray[intMonth-1] + "/" + strYear;
	}
	var min_date="01/01/1900";
	var max_date="01/01/2100";

	if ( (Date.parse(datefield.value) < Date.parse(min_date)) || (Date.parse(datefield.value) > Date.parse(max_date)) ){
		err = 11;
		return pvStrErrMsg;
	}

	return '';
}*/

////////////////////////////////	VALID TIME	////////////////////////////////////////
function isValidTime(pvStrFormName, pvStrFieldName, pvStrErrMsg, bAlsoCheckNULL, bRequireMeridian) {
	if (bAlsoCheckNULL == 'yes')
	{
		var err_chknull =	isNotNULL(pvStrFormName, pvStrFieldName, pvStrErrMsg)
		if (err_chknull.length > 0)
			return pvStrErrMsg
	}

	var checkStr = document.forms[pvStrFormName].elements[pvStrFieldName].value;
	var allValid = true;
	var colonCount = 0;
	var hasMeridian = false;
	for (var i=0; i<checkStr.length; i++)
	{
		var ch = checkStr.substring(i, i+1);
		if ( (ch < '0') || (ch > '9') )
		{
			if ( (ch != ':') && (ch != ' ') && (ch != 'a') && (ch != 'A') && (ch != 'p') && (ch != 'P') && (ch != 'm') && (ch != 'M'))
			{
				allValid = false;
			}
		}
		if (ch == ':')
		{
			colonCount++;
		}
		if ( (ch == 'p') || (ch == 'P') || (ch == 'a') || (ch == 'A') )
		{
			hasMeridian = true;
		}
	}
	if ( (colonCount < 1) || (colonCount > 2) )
	{
		allValid = false;
	}
	var hh = checkStr.substring(0, checkStr.indexOf(":"));
	if ( (parseFloat(hh) < 0) || (parseFloat(hh) > 23) )
	{
		allValid = false;
	}
	if (hasMeridian)
	{
		if ( (parseFloat(hh) < 1) || (parseFloat(hh) > 12) )
		{
			allValid = false;
		}
	}
	var md = checkStr.substring(checkStr.indexOf(" ")+1, checkStr.length);
	if(bRequireMeridian){
		md = md.toLowerCase();
		if ( (md != 'am') && (md != 'pm') )
		{
			allValid = false;
		}
	}
	if (colonCount == 2)
	{
		var mm = checkStr.substring(checkStr.indexOf(":")+1, checkStr.lastIndexOf(":"));
	} else {
		var mm = checkStr.substring(checkStr.indexOf(":")+1, checkStr.length);
	}
	if ( (parseFloat(mm) < 0) || (parseFloat(mm) > 59) )
	{
		allValid = false;
	} else if (isNaN(parseFloat(mm))) {
		allValid = false;
	}
	if (colonCount == 2)
	{
		var ss = checkStr.substring(checkStr.lastIndexOf(":")+1, checkStr.length);
	} else {
		var ss = "00";
	}
	if ( (parseFloat(ss) < 0) || (parseFloat(ss) > 59) )
	{
		allValid = false;
	}
	if(allValid){
		return '';
	} else {
		return pvStrErrMsg
	}
}
////////////////////////////////	COMPARE DATE	////////////////////////////////////////

function doCompareDates(pvStrFormName,pvStrFromFieldName, pvStrToFieldName, pvStrErrMsg,sDateMaskOutput)
 {
	var from = document.forms[pvStrFormName].elements[pvStrFromFieldName].value;
	var to = document.forms[pvStrFormName].elements[pvStrToFieldName].value;

	if(from != ''){
		from=changeDateFormat(from,sDateMaskOutput);
	}
	if(to != ''){
		to=changeDateFormat(to,sDateMaskOutput);
	}
	if (Date.parse(from) <= Date.parse(to))
	{
		
		return '';
	}
	else
	{
		return pvStrErrMsg
	}
}

function changeDateFormat(dateval,sDateMaskOutput){
	var sDateMaskOutput=Trim(sDateMaskOutput);
		sDateMaskOutput = sDateMaskOutput.replace(/-/g, "/");
	var str1=sDateMaskOutput.split("/");
	var datevalue=dateval;
		datevalue = datevalue.replace(/-/g, "/");
	var datevalue=Trim(datevalue);
	var datvalue=datevalue.split(" ",1);
	var datevales=datvalue[0].split("/");
	var dayval="";
	var monthval="";
	var yearval="";
	var i;
	var isMonthFirst = false;
	var datecreated='';

	if(dateval == ''){
		return dateval;
	}
	
	for(i=0;i<3;i++)
	{
		if(str1[i]=='dd' || str1[i]=='d'){
			dayval=datevales[i];
		}
		if(str1[i]=='Mmm'|| str1[i]=='MMM')
		{
			if(i == 0){
				isMonthFirst = true;
			}
			monthval=getMonthIndex(datevales[i]);
		}
		if(str1[i]=='mm' || str1[i]=='m')
		{
			if(i == 0){
				isMonthFirst = true;
			}
			monthval=datevales[i];
		}
		if(str1[i]=='yyyy' || str1[i]=='yy'){
			yearval=datevales[i];
				if(str1[i]=='yy' && yearval>=0 && yearval<30){
					yearval='20'+yearval;
				}
				else if(str1[i]=='yy' && yearval>30 && yearval<100){
					yearval='19'+yearval;
				
				}
		}
	
	}

	if(isMonthFirst){
		datecreated=dateval;
	} else {
		datecreated=monthval+'/'+dayval+'/'+yearval;
	}

	return datecreated;
}

function getMonthIndex(strMonth) {
	var strMonthArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	for(i=0;i<strMonthArray.length;i++){
		if(strMonthArray[i].toLowerCase()==strMonth.toLowerCase()){
			return i+1;
		}
	}
	return 1;
}

////////////////////////////////	COMPARE PASSWORD	////////////////////////////////////
function doComparePassword(pvStrFormName,pvStrPassword1, pvStrPassword2, pvStrErrMsg)
{
	var from = document.forms[pvStrFormName].elements[pvStrPassword1];
	var to = document.forms[pvStrFormName].elements[pvStrPassword2];

	if (from.value != to.value)
	{
		return pvStrErrMsg;
	}
	else
	{
		return '';
	}
}
////////////////////////////////	COMPARE NUMBERS	////////////////////////////////////////
function doCompareNumbers(pvStrFormName,pvStrLessFieldName, pvStrGreateerFieldName, pvStrErrMsg)
{
	var val1 = document.forms[pvStrFormName].elements[pvStrLessFieldName];
	var val2 = document.forms[pvStrFormName].elements[pvStrGreateerFieldName];

	if (eval(val1.value) == eval(val2.value))
	{
		return '';
	}
	else
	{
		return pvStrErrMsg
	}
}
////////////////////////////////	COMPARE NUMBERS	////////////////////////////////////////
function doCompareStrings(pvStrFormName,pvStrLessFieldName1,pvStrLessFieldName2,pvStrErrMsg)
{
	var less_one = document.forms[pvStrFormName].elements[pvStrLessFieldName1];
	var greater_one = document.forms[pvStrFormName].elements[pvStrLessFieldName2];

	if (less_one.value == greater_one.value)
	{
		return pvStrErrMsg;
	}
	else
	{
		return '';
	}
}
////////////////////////////////	VALIDATE DROP DOWN ////////////////////////////////////////
function isDropDownSelected(pvStrFormName,pvStrFieldName, pvStrErrMsg, bIsFirstValid)
{
	var objField = 	document.forms[pvStrFormName].elements[pvStrFieldName];
	var i_comparewith = 0;

	if (String(bIsFirstValid) == 'yes' ) {
		i_comparewith = 0;
	} else {
		i_comparewith = 1;
	}

	if (objField.selectedIndex >= i_comparewith){
		return '';
	} else {
		return pvStrErrMsg;
	}
}
function dropDownAdvanceSearch(pvStrFormName,pvStrFieldName){
	var objField = 	document.forms[pvStrFormName].elements[pvStrFieldName];
	if (!(objField.selectedIndex >= 0))
		objField.selectedIndex = 0;
}
////////////////////////////////	VALIDATE RADIO BUTTONS/////////////////////////////////
function isRadioSelected(pvStrFormName,pvStrFieldName,pvStrErrMsg)
{
	var objField = document.forms[pvStrFormName].elements[pvStrFieldName];
	var lflag = false;

	if(objField.length)
	{
		for(var i = 1; i <= objField.length ; i++)
			if(objField[i - 1].checked == "1")
			{
				lflag = true;
			}
	} else {
		if(objField.checked == "1") {
			lflag = true;
		}
	}
	if(lflag == true)
		return ''
	else
		return pvStrErrMsg;
}
////////////////////////////////	VALIDATE CHECK BOXES/////////////////////////////////
function isCheckBoxSelected(pvStrFormName,pvStrFieldName,pvStrErrMsg,iMin,iMax)
{
	var objField = document.forms[pvStrFormName].elements[pvStrFieldName];
	var chkcount = 0;
	if (objField.length) {
		for(i=0;i<objField.length;i++)
		{
			if (objField[i].checked == true)
				chkcount++;
		}
	}
	else{
		// there is only one checkbox
		if (objField.checked == true)
			chkcount++;
	}

	if(chkcount >= parseInt(iMin))
	{
		if(parseInt(iMax) >= 0 && chkcount > parseInt(iMax))
		{
			return pvStrErrMsg;
		}
		else
		{
			return '';
		}
	}
	else
	{
		return pvStrErrMsg;
	}
}
////////////////////////////////	GET RADIO BUTTON VALUE ///////////////////////////////
function getSelectedRadioValue(pvStrFormName,pvStrFieldName)
{
	var objField = document.forms[pvStrFormName].elements[pvStrFieldName];

	if(objField.length){
		for(var i = 1; i <= objField.length ; i++)
			if(objField[i - 1].checked == true){
				return objField[i-1].value;
			}
	} else {
		if(objField.checked == true){
			return objField.value;
		}
	}
}
////////////////////////////////	GET RADIO BUTTON VALUE ///////////////////////////////
function getSelectedRadio(pvStrFormName,pvStrFieldName) {
	var objField = document.forms[pvStrFormName].elements[pvStrFieldName];
	// returns the array number of the selected radio button or -1 if no button is selected
	if (objField[0]) { // if the button group is an array (one button is not an array)
		for (var i=0; i<objField.length; i++) {
			 if (objField[i].checked) {
			return i;
		 }
		}
	} else {
		if (objField.checked) { return 0; } // if the one button is checked, return zero
	}
	// if we get to this point, no radio button is selected
	return -1;
} // Ends the "getSelectedRadio" function
////////////////////////////////	TEXTAREA LENGTH COUNTER ///////////////////////////////
function textCounter(field, countfield, maxlimit) {
	var re = /[\n]/g;
	var fieldLen = field.value.length;
	var crlfCount=field.value.match(re);
	var newlimit = maxlimit;
	//alert("field length:"+fieldLen);
	// count crlf as two (chr 10 & 13) - on 'nix, this will undercount 1 char per CR
	if(crlfCount){
		if(crlfCount.length > 0){
			fieldLen = fieldLen + crlfCount.length;
			newlimit = maxlimit - crlfCount.length;
			//alert(fieldLen);
			//alert(newlimit);
		}
	}
	if (fieldLen > maxlimit) {
		field.value = field.value.substring(0, newlimit);
	} else {
		countfield.value = maxlimit - fieldLen;
	}
}
////////////////////////////////	Validate NULL FIELDS //////////////////////////////////
function isValidLength(pvStrFormName, pvStrFieldName, pvStrErrMsg, maxlimit)
{
	var lLogRetVal = false;
	var pvStrData = document.forms[pvStrFormName].elements[pvStrFieldName].value;

	if (pvStrData.length > maxlimit)
	{
		return pvStrErrMsg;
	}
	return '';
}

function isExactLength(pvStrFormName, pvStrFieldName, pvStrErrMsg, exactlimit)
{
	var lLogRetVal = false;
	var pvStrData = document.forms[pvStrFormName].elements[pvStrFieldName].value;

	if (pvStrData.length != exactlimit)
	{
		return pvStrErrMsg;
	}
	return '';
}

////////////////////////////////	EMAIL ADDRESS VALIDATION ///////////////////////////////
function isValidEmail(pvStrFormName, pvStrFieldName, pvStrErrMsg, bAlsoCheckNULL)
{
	var pvStrData = document.forms[pvStrFormName].elements[pvStrFieldName].value;
	if (bAlsoCheckNULL == 'yes')
	{
		var err_chknull =	isNotNULL(pvStrFormName, pvStrFieldName, pvStrErrMsg)
		if (err_chknull.length > 0)
			return pvStrErrMsg
	}
	if(pvStrData != ''){
		var Reg1 = /^([a-zA-Z0-9])+([\.a-zA-Z0-9_'-])*@([a-zA-Z0-9])+((-)?([a-zA-Z0-9_]+))?(\.[a-zA-Z0-9_-]+)+$/;
		if(!Reg1.test(pvStrData)) 
		{
			return pvStrErrMsg;
		}
	}
	return '';
}

// Begin Select Box Functions
function selectUnselectMatchingOptions(obj,regex,which,only) {
	if (window.RegExp) {
		if (which == "select") {
			var selected1=true;
			var selected2=false;
			}
		else if (which == "unselect") {
			var selected1=false;
			var selected2=true;
			}
		else {
			return;
			}
		var re = new RegExp(regex);
		for (var i=0; i<obj.options.length; i++) {
			if (re.test(obj.options[i].text)) {
				obj.options[i].selected = selected1;
				}
			else {
				if (only == true) {
					obj.options[i].selected = selected2;
					}
				}
			}
		}
	}

// -------------------------------------------------------------------
// selectMatchingOptions(select_object,regex)
//	This function selects all options that match the regular expression
//	passed in. Currently-selected options will not be changed.
// -------------------------------------------------------------------
function selectMatchingOptions(obj,regex) {
	selectUnselectMatchingOptions(obj,regex,"select",false);
	}
// -------------------------------------------------------------------
// selectOnlyMatchingOptions(select_object,regex)
//	This function selects all options that match the regular expression
//	passed in. Selected options that don't match will be un-selected.
// -------------------------------------------------------------------
function selectOnlyMatchingOptions(obj,regex) {
	selectUnselectMatchingOptions(obj,regex,"select",true);
	}
// -------------------------------------------------------------------
// unSelectMatchingOptions(select_object,regex)
//	This function Unselects all options that match the regular expression
//	passed in.
// -------------------------------------------------------------------
function unSelectMatchingOptions(obj,regex) {
	selectUnselectMatchingOptions(obj,regex,"unselect",false);
	}

// -------------------------------------------------------------------
// sortSelect(select_object)
//	Pass this function a select object and the options will be sorted
//	by their text (display) values
// -------------------------------------------------------------------
function sortSelect(obj) {
	var o = new Array();
	for (var i=0; i<obj.options.length; i++) {
		o[o.length] = new Option( obj.options[i].text, obj.options[i].value, obj.options[i].defaultSelected, obj.options[i].selected) ;
		}
	o = o.sort(
		function(a,b) {
			if ((a.text+"") < (b.text+"")) { return -1; }
			if ((a.text+"") > (b.text+"")) { return 1; }
			return 0;
			}
		);

	for (var i=0; i<o.length; i++) {
		obj.options[i] = new Option(o[i].text, o[i].value, o[i].defaultSelected, o[i].selected);
		}
	}

// -------------------------------------------------------------------
// selectAllOptions(select_object)
//	This function takes a select box and selects all options (in a
//	multiple select object). This is used when passing values between
//	two select boxes. Select all options in the right box before
//	submitting the form so the values will be sent to the server.
// -------------------------------------------------------------------
function selectAllOptions(obj) {
	for (var i=0; i<obj.options.length; i++) {
		obj.options[i].selected = true;
		}
	}

// -------------------------------------------------------------------
// moveSelectedOptions(select_object,select_object[,autosort(true/false)[,regex]])
//	This function moves options between select boxes. Works best with
//	multi-select boxes to create the common Windows control effect.
//	Passes all selected values from the first object to the second
//	object and re-sorts each box.
//	If a third argument of 'false' is passed, then the lists are not
//	sorted after the move.
//	If a fourth string argument is passed, this will function as a
//	Regular Expression to match against the TEXT or the options. If
//	the text of an option matches the pattern, it will not be moved.
//	It will be treated as an unmoveable option.
//	You can also put this into the <select> object as follows:
//	ondblclick="moveSelectedOptions(this,this.form.target)
//	This way, when the user double-clicks on a value in one box, it
//	will be transferred to the other (in browsers that support the
//	ondblclick() event handler).
// -------------------------------------------------------------------
function moveSelectedOptions(from,to) {
	// Unselect matching options, if required
	if (arguments.length>3) {
		var regex = arguments[3];
		if (regex != "") {
			unSelectMatchingOptions(from,regex);
			}
		}

	// Move them over
	for (var i=0; i<from.options.length; i++) {
		var o = from.options[i];
		if (o.selected) {
			if (o.value != -1 ) // If item is not ----selectED/AVAILABLE---- then move
			to.options[to.options.length] = new Option( o.text, o.value, false, false);
			}
		}
	// Delete them from original
	for (var i=(from.options.length-1); i>=0; i--) {
		var o = from.options[i];
		if (o.selected) {
			if (o.value != -1 ) // If item is not ----selectED/AVAILABLE---- then move
			from.options[i] = null;
			}
		}
	if ((arguments.length<3) || (arguments[2]==true)) {
		sortSelect(from);
		sortSelect(to);
		}
	from.selectedIndex = -1;
	to.selectedIndex = -1;
	}

// -------------------------------------------------------------------
// copySelectedOptions(select_object,select_object[,autosort(true/false)])
//	This function copies options between select boxes instead of
//	moving items. Duplicates in the target list are not allowed.
// -------------------------------------------------------------------
function copySelectedOptions(from,to) {
	var options = new Object();
	for (var i=0; i<to.options.length; i++) {
		options[to.options[i].text] = true;
		}
	for (var i=0; i<from.options.length; i++) {
		var o = from.options[i];
		if (o.selected) {
			if (options[o.text] == null || options[o.text] == "undefined") {
				to.options[to.options.length] = new Option( o.text, o.value, false, false);
				}
			}
		}
	if ((arguments.length<3) || (arguments[2]==true)) {
		sortSelect(to);
		}
	from.selectedIndex = -1;
	to.selectedIndex = -1;
	}

// -------------------------------------------------------------------
// moveAllOptions(select_object,select_object[,autosort(true/false)[,regex]])
//	Move all options from one select box to another.
// -------------------------------------------------------------------
function moveAllOptions(from,to) {
	selectAllOptions(from);
	if (arguments.length==2) {
		moveSelectedOptions(from,to);
		}
	else if (arguments.length==3) {
		moveSelectedOptions(from,to,arguments[2]);
		}
	else if (arguments.length==4) {
		moveSelectedOptions(from,to,arguments[2],arguments[3]);
		}
	}

// -------------------------------------------------------------------
// copyAllOptions(select_object,select_object[,autosort(true/false)])
//	Copy all options from one select box to another, instead of
//	removing items. Duplicates in the target list are not allowed.
// -------------------------------------------------------------------
function copyAllOptions(from,to) {
	selectAllOptions(from);
	if (arguments.length==2) {
		copySelectedOptions(from,to);
		}
	else if (arguments.length==3) {
		copySelectedOptions(from,to,arguments[2]);
		}
	}

// -------------------------------------------------------------------
// swapOptions(select_object,option1,option2)
//	Swap positions of two options in a select list
// -------------------------------------------------------------------
function swapOptions(obj,i,j)
{
	var o = obj.options;

	//swap this only if this is not HEADING or soemthing with value -1
	if (o[i].value != -1)
	{
		var i_selected = o[i].selected;
		var j_selected = o[j].selected;
		var temp = new Option(o[i].text, o[i].value, o[i].defaultSelected, o[i].selected);
		var temp2= new Option(o[j].text, o[j].value, o[j].defaultSelected, o[j].selected);
		o[i] = temp2;
		o[j] = temp;
		o[i].selected = j_selected;
		o[j].selected = i_selected;
	}
}

// -------------------------------------------------------------------
// moveOptionUp(select_object)
//	Move selected option in a select list up one
// -------------------------------------------------------------------
function moveOptionUp(obj) {

	// If > 1 option selected, do nothing
	var selectedCount=0;
	for (i=0; i<obj.options.length; i++) {
		if (obj.options[i].selected) {
			selectedCount++;
			}
		}
	if (selectedCount == 0){
		return;
	}
	if (selectedCount > 1) {
		return;
		}
	// If this is the first item in the list, do nothing
	var i = obj.selectedIndex;
	if (i == 0) {
		return;
		}
	swapOptions(obj,i,i-1);
	obj.options[i-1].selected = true;
	}

// -------------------------------------------------------------------
// moveOptionDown(select_object)
//	Move selected option in a select list down one
// -------------------------------------------------------------------
function moveOptionDown(obj) {
	// If > 1 option selected, do nothing
	var selectedCount=0;
	for (i=0; i<obj.options.length; i++) {
		if (obj.options[i].selected) {
			selectedCount++;
			}
		}
	if (selectedCount == 0){
		return;
	}
	if (selectedCount > 1) {
		return;
		}
	// If this is the last item in the list, do nothing
	var i = obj.selectedIndex;
	if (i == (obj.options.length-1)) {
		return;
		}
	swapOptions(obj,i,i+1);
	obj.options[i+1].selected = true;
	}

function deleteLastOption(obj){
	obj.options[obj.options.length-1] = null;
}

function moveAllOptionsWithoutSelecting(from,to) {
	// Move them over
	for (var i=0; i<from.options.length; i++) {
		var o = from.options[i];
		to.options[to.options.length] = new Option( o.text, o.value, false, false);
	}
	// Delete them from original
	for (var i=(from.options.length-1); i>=0; i--) {
		from.options[i] = null;
	}

	from.selectedIndex = -1;
	to.selectedIndex = -1;
}

function validateNumberTypeParameterField(pvStrFormName, pvStrFieldName, pvStrErrMsg, numDecLimit, numUpperLimit, numLowerLimit, bAlsoCheckNULL) 
{
	var numTypeFieldValue = document.forms[pvStrFormName].elements[pvStrFieldName].value;
	var numTypeDecValue = '';
	var err_chknull = '';
	if (bAlsoCheckNULL == 'yes')
	{
		err_chknull =	isNotNULL(pvStrFormName,pvStrFieldName,pvStrErrMsg);
		if (err_chknull.length > 0 || isNaN(Number(numTypeFieldValue)) || Number(numTypeFieldValue) < 0)
			return pvStrErrMsg;
	}
	else
	{
		if (err_chknull.length > 0 || isNaN(Number(numTypeFieldValue)) || Number(numTypeFieldValue) < 0)
			return pvStrErrMsg;
	}
	if(numUpperLimit.length > 0 && numLowerLimit.length > 0)
	{
		if((numTypeFieldValue >= parseFloat(numLowerLimit)) && (numTypeFieldValue <= parseFloat(numUpperLimit)))
		{
			if(numTypeFieldValue.indexOf(".") != -1)
			{
				numTypeDecValue = numTypeFieldValue.split(".");
				if(numTypeDecValue[1].length > numDecLimit)
				{
					return pvStrErrMsg;
				}	
			}			
		}
		else
		{
			return pvStrErrMsg;
		}	
	}
	else if(numUpperLimit.length > 0)
	{
		if(numTypeFieldValue <= parseFloat(numUpperLimit))
		{
			if(numTypeFieldValue.indexOf(".") != -1)
			{
				numTypeDecValue = numTypeFieldValue.split(".");
				if(numTypeDecValue[1].length > numDecLimit)
				{
					return pvStrErrMsg;
				}	
			}	
		}	
		else
		{
			return pvStrErrMsg;
		}	
	}
	else if(numLowerLimit.length > 0)
	{
		if(numTypeFieldValue >= parseFloat(numLowerLimit))
		{
			if(numTypeFieldValue.indexOf(".") != -1)
			{
				numTypeDecValue = numTypeFieldValue.split(".");
				if(numTypeDecValue[1].length > numDecLimit)
				{
					return pvStrErrMsg;
				}	
			}	
		}
		else
		{
			return pvStrErrMsg;
		}	
	}
	else
	{
		if(numTypeFieldValue.indexOf(".") != -1)
		{
			numTypeDecValue = numTypeFieldValue.split(".");
			if(numTypeDecValue[1].length > numDecLimit)
			{
				return pvStrErrMsg;
			}	
		}	
	}	
	return '';
}
