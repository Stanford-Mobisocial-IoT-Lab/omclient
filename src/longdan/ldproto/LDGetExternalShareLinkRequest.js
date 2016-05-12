var LDGetExternalShareLinkResponse = require('./LDGetExternalShareLinkResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPostId = require('./LDPostId');

function LDGetExternalShareLinkRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.PostId=new LDPostId(e['id']);
	if(e['c']!=null)$.ContinuationKey=new Buffer(e['c'],'base64');
	$.NumToGet=e['n'];
}
LDGetExternalShareLinkRequest.prototype=new LDJSONLoggable();
LDGetExternalShareLinkRequest.prototype.constructor = LDGetExternalShareLinkRequest;
var _=LDGetExternalShareLinkRequest.prototype;
_.__type="LDGetExternalShareLinkRequest";
_.__rt=LDGetExternalShareLinkResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PostId!=null)o['id']=$.PostId.encode();
	if($.ContinuationKey!=null)o['c']=$.ContinuationKey.toString('base64');
	if($.NumToGet!=null)o['n']=$.NumToGet;
	return o;
}
_.PostId=null;
_.ContinuationKey=null;
_.NumToGet=null;
LDGetExternalShareLinkRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"ges":o};o=t;
	t={"#":id,"w":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetExternalShareLinkRequest;
