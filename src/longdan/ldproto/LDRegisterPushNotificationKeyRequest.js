var LDSimpleResponse = require('./LDSimpleResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDPushKey = require('./LDPushKey');

function LDRegisterPushNotificationKeyRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['p']!=null)$.PushKey=new LDPushKey(e['p']);
}
LDRegisterPushNotificationKeyRequest.prototype=new LDJSONLoggable();
LDRegisterPushNotificationKeyRequest.prototype.constructor = LDRegisterPushNotificationKeyRequest;
var _=LDRegisterPushNotificationKeyRequest.prototype;
_.__type="LDRegisterPushNotificationKeyRequest";
_.__rt=LDSimpleResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.PushKey!=null)o['p']=$.PushKey.encode();
	return o;
}
_.PushKey=null;
LDRegisterPushNotificationKeyRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"r":o};o=t;
	t={"#":id,"i":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDRegisterPushNotificationKeyRequest;
