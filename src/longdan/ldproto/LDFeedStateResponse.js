var LDJSONLoggable = require('./LDJSONLoggable');

function LDFeedStateResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.LastWriteTime=e['t'];
	$.AcceptanceState=e['a'];
}
LDFeedStateResponse.prototype=new LDJSONLoggable();
LDFeedStateResponse.prototype.constructor = LDFeedStateResponse;
var _=LDFeedStateResponse.prototype;
_.__type="LDFeedStateResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.LastWriteTime!=null)o['t']=$.LastWriteTime;
	if($.AcceptanceState!=null)o['a']=$.AcceptanceState;
	return o;
}
_.LastWriteTime=null;
_.AcceptanceState=null;

module.exports=LDFeedStateResponse;
