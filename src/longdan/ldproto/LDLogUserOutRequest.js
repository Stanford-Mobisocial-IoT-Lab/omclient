var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDLogUserOutRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AdminAccount=e['a'];
	$.Account=e['A'];
}
LDLogUserOutRequest.prototype=new LDJSONLoggable();
LDLogUserOutRequest.prototype.constructor = LDLogUserOutRequest;
var _=LDLogUserOutRequest.prototype;
_.__type="LDLogUserOutRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AdminAccount!=null)o['a']=$.AdminAccount;
	if($.Account!=null)o['A']=$.Account;
	return o;
}
_.AdminAccount=null;
_.Account=null;
LDLogUserOutRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"l":o};o=t;
	t={"#":id,"A":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDLogUserOutRequest;
