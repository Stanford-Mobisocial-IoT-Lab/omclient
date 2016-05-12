var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDUnblockUserRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.UserKey=e['k'];
}
LDUnblockUserRequest.prototype=new LDJSONLoggable();
LDUnblockUserRequest.prototype.constructor = LDUnblockUserRequest;
var _=LDUnblockUserRequest.prototype;
_.__type="LDUnblockUserRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.UserKey!=null)o['k']=$.UserKey;
	return o;
}
_.UserKey=null;
LDUnblockUserRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"u":o};o=t;
	t={"#":id,"um":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDUnblockUserRequest;
