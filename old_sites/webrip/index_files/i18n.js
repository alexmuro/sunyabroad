var aRequesti18nJS = [];
function i18n(id) {	var returnvalue = ""; var pointer = aRequesti18nJS.findId(id); if (pointer > -1) { returnvalue = aRequesti18nJS[pointer].value;}; return returnvalue;};
aRequesti18nJS.findId = function(id) {var returnvalue = -1; var me = Object(this); for (var i = 0; i < me.length; i++) { if (me[i].id == id) returnvalue = i;}; return returnvalue; };
aRequesti18nJS.addId = function(id, value) {var newValue = {"id":id, "value":value}; var me = Object(this); if (me.findId(id) == -1) { me.push(newValue); }; };

