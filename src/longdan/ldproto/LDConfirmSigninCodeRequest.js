var LDAccountDetailsResponse = require('./LDAccountDetailsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');

function LDConfirmSigninCodeRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	$.AuthCode=e['a'];
	$.QueryKey=e['k'];
	$.IpAddress=e['p'];
}
LDConfirmSigninCodeRequest.prototype=new LDJSONLoggable();
LDConfirmSigninCodeRequest.prototype.constructor = LDConfirmSigninCodeRequest;
var _=LDConfirmSigninCodeRequest.prototype;
_.__type="LDConfirmSigninCodeRequest";
_.__rt=LDAccountDetailsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.AuthCode!=null)o['a']=$.AuthCode;
	if($.QueryKey!=null)o['k']=$.QueryKey;
	if($.IpAddress!=null)o['p']=$.IpAddress;
	return o;
}
_.AuthCode=null;
_.QueryKey=null;
_.IpAddress=null;
LDConfirmSigninCodeRequest.prototype.makeIdpRpc=function(id){
	var o=this.encode(),t=null;
	t={"cc":o};o=t;
	t={"#":id,"a":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDConfirmSigninCodeRequest;
