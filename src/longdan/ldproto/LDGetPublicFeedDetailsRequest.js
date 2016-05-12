var LDGetPublicFeedDetailsResponse = require('./LDGetPublicFeedDetailsResponse');
var LDJSONLoggable = require('./LDJSONLoggable');
var LDFeed = require('./LDFeed');

function LDGetPublicFeedDetailsRequest(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['f']!=null)$.Feed=new LDFeed(e['f']);
}
LDGetPublicFeedDetailsRequest.prototype=new LDJSONLoggable();
LDGetPublicFeedDetailsRequest.prototype.constructor = LDGetPublicFeedDetailsRequest;
var _=LDGetPublicFeedDetailsRequest.prototype;
_.__type="LDGetPublicFeedDetailsRequest";
_.__rt=LDGetPublicFeedDetailsResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Feed!=null)o['f']=$.Feed.encode();
	return o;
}
_.Feed=null;
LDGetPublicFeedDetailsRequest.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"gf":o};o=t;
	t={"#":id,"m":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=LDGetPublicFeedDetailsRequest;
