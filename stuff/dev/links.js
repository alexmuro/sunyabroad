$(document).ready(function() {

	// find the fuse action id
	var wlh = window.location.href;
	// #18445 var fuseactioncode = wlh.substr(wlh.indexOf("FuseAction=")+11); -dma
	var fuseactioncode = "";
	if (wlh.indexOf("FuseAction=")>0) {
		fuseactioncode = wlh.substr(wlh.indexOf("FuseAction=")+11);
	}

	// get the admin layout link id
	var TOCid = "";
	if ($("#mainContainer").hasClass("admin-template")) {
		if (ATOCParent && ATOCLink) {
			TOCid = "#ATOC-" + ATOCParent + "-" + ATOCLink;
		}
	}

	// if there is no link currently marked as selected, see if there is one that matches with the current code
	if ($("#SA_TOC_Container .link-selected").length == 0) {
		if ((TOCid != "") && ($(TOCid).length != 0)) { $(TOCid).find("div").eq(0).addClass("link-selected"); }
		else {
			var foundIt = false;
			$("#SA_TOC_Container a").each(function() {
				if (!foundIt) {
					var h = $(this).attr("href");
					if (h.indexOf(fuseactioncode) != -1) { $(this).parent().addClass("link-selected"); foundIt = true; }
				}
			});
		}
	}

	// if parent options cannot have links, remove the a tags
	if (!allowParentLinks) {
		$("#SA_TOC_Container .expandable").each(function() {
			if ($(this).find("div").eq(0).find("a").length != 0) {
				var thisoptionname = $(this).find("div").eq(0).find("a").eq(0).text();
				$(this).find('div').eq(0).empty().text(thisoptionname);
			}
		});
	}

	// open the menu to the current selected option
	var sli = $("#SA_TOC_Container .link-selected").parent(); // selected list item
	if (fuseactioncode != ''){ // <- this line added 5/4/2010 -dma (when no fuseaction was chosen, aka home, the first menu was expanding)
		if (sli.hasClass("expandable") && !sli.hasClass("submenuopen")) {
			sli.find("ul").eq(0).css("display","block");
			sli.addClass("submenuopen");
		}
	} // <- this line added 5/4/2010 -dma
	var slib = sli.parent(); // select list item's block
	while (slib.parent().hasClass("expandable") && slib.css("display") == "none") {
		slib.css("display","block");
		slib.parent().addClass("submenuopen");
		slib = slib.parent().parent();
	}

	// click action to expand and contract menu
	$("#SA_TOC_Container .expandable").each(function() {
		$(this).find('div').eq(0).css('cursor','pointer').hover(
			function() { $(this).addClass('expandabletexthovered'); },
			function() { $(this).removeClass('expandabletexthovered'); }
		).click(function() {
			if (!$(this).find("a").eq(0).hasClass('clicked')) {
				if (!$(this).parent().hasClass('submenuopen')) {
					$(this).parent().find('ul').eq(0).css('display','block');
					$(this).parent().addClass('submenuopen');
				}
				else {
					$(this).parent().find('ul').eq(0).css('display','none');
					$(this).parent().removeClass('submenuopen');
				}
			}
		});
	});

	// click action to prevent menu expansion/collapsing when clicking on a hyperlink
	$("#SA_TOC_Container .expandable > div a").click(function() {
		$(this).addClass("clicked");
		return true;
	});

	// enable clicking on full block of each menu item
	var x = 0;
	while ($("#SA_TOC_Container .level"+x+"text").length != 0) {
		$("#SA_TOC_Container .level"+x+"text").each(function() {
			if ($(this).parent().hasClass("expandable") == false) {
				$(this).css('cursor','pointer');
				$(this).hover(
					function() { $(this).find("a").addClass('hovered'); },
					function() { $(this).find("a").removeClass('hovered'); }
				).click(function(e) {
					try {
						if ($(e.target).is('div') ) {
							if(e.ctrlKey) { //control key
								window.open($(this).find("a").eq(0).attr("href"));
							} else {
								window.location.href = $(this).find("a").eq(0).attr("href");
							}
						}
					} catch(err) {
						window.location.href = $(this).find("a").eq(0).attr("href");
					}
				}); 
				/* #00018896 -dma
					this was causing center-mouse or control-clicks to load the destination page in the current window as well
				.click(function() {
					window.location.href = $(this).find("a").eq(0).attr("href");
				})
				*/
			}
		});
		x++;
	}

	// remove unnecessary html from the user navigation
	$("#userNav img, #userNav br").remove();

});