var LDIdentity = require('./LDIdentity');

function LDProfileIdentitySetting(e){
	if(!e)return;
	var $=this;
	if(e['i']!=null)$.Identity=new LDIdentity(e['i']);
}
var _=LDProfileIdentitySetting.prototype;
_.__type="LDProfileIdentitySetting";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.Identity!=null)o['i']=$.Identity.encode();
	return o;
}
_.Identity=null;

module.exports=LDProfileIdentitySetting;
