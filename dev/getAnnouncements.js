$(document).ready(function() {

	$("#announcements-box #controls").hide();
	var s = $("#announcementssource").attr("href");

	if(s != undefined){
		$.ajax({
	
			type: "GET",
			url: s,
			success: function(data) {
				var xml;
				if ((typeof data == "string") && ($.browser.msie)) {
					xml = new ActiveXObject("Microsoft.XMLDOM");
					xml.async = false;
					xml.loadXML(data);
				} else {
					xml = data;
				}
	
				if ($(xml).find('announcement').length > 0) {
					$("#announcements-list").empty();
					if ($(xml).find('announcement').length > 1) { $("#announcements-box #controls").show(); }
					$(xml).find('announcement').each(function(i) {
	
						var myID = ""; myID += $(this).find("Announcement_Id").text();
						var myTitle = ""; myTitle += $(this).find("Headline").text();
						var myText = ""; myText += $(this).find("Blurb").text();
						var myDate = ""; myDate += $(this).find("Event_Date").text();
						var myLink = false; if (parseInt($(this).find("Article_Length").eq(0).text()) > 10) { myLink = true; }
	
						if (myDate.length > 1) { myDate = i18n[0] + " " + myDate + "<br />"; }
						if (myLink) { myText = '<a href="/layout/v12/index.cfm?FuseAction=Announcements.Announcement&Announcement_ID=' + myID + '">' + myText + ' [' + i18n[1] + ']</a>'; }
	
						$("#announcements-list").append('<li><h4>'+myTitle+'</h4><p>'+myDate+myText+'</p></li>');
					});
					$('#announcements-list').cycle({
						timeout: 10000,
						speed:	500,
						prev:	'#prev',
						next:	'#next'
					});
				}
				else {
					$("#announcements-list").empty();
					$("#announcements-list").append('<li><p>' + i18n[2] + '</p></li>');
				}
			}
		});
	}
});
