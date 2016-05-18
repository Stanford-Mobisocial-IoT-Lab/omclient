var LDJSONLoggable = require('./LDJSONLoggable');

function O(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null){
		$.Ids=[];
		var d = e['id'];
		for(var k=0;k<d.length;++k)$.Ids.push(d[k]);
	}
	if(e['dn']!=null){
		$.DisplayNames=[];
		var d = e['dn'];
		for(var k=0;k<d.length;++k)$.DisplayNames.push(d[k]);
	}
}
O.prototype=new LDJSONLoggable();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDGetPublicChatMembersResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Ids!=null) {
		o['id']=[];
		var d=$.Ids;
		for(var k=0;k<d.length;++k) o['id'].push(d[k]);
	}
	if($.DisplayNames!=null) {
		o['dn']=[];
		var d=$.DisplayNames;
		for(var k=0;k<d.length;++k) o['dn'].push(d[k]);
	}
	return o;
}
_.Ids=null;
_.DisplayNames=null;

module.exports=O;
