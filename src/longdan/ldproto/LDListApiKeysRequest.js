var LDListApiKeysResponse = require('./LDListApiKeysResponse');
var LDItemId = require('./LDItemId');

function O(e){
	if(!e)return;
	var $=this;
	if(e['id']!=null)$.ItemId=new LDItemId(e['id']);
}
var _=O.prototype;
_.__type="LDListApiKeysRequest";
_.__rt=LDListApiKeysResponse;
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemId!=null)o['id']=$.ItemId.encode();
	return o;
}
_.ItemId=null;
O.prototype.makeClusterRpc=function(id){
	var o=this.encode(),t=null;
	t={"lk":o};o=t;
	t={"#":id,"oas":o};o=t;
	t={"q":o};o=t;
	return o;
}

module.exports=O;
