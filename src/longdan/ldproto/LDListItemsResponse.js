var LDItemInfoListingContainer = require('./LDItemInfoListingContainer');

function O(e){
	if(!e)return;
	var $=this;
	if(e['l']!=null)$.ItemInfoListingContainer=new LDItemInfoListingContainer(e['l']);
}
var _=O.prototype;
_.__type="LDListItemsResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	if($.ItemInfoListingContainer!=null)o['l']=$.ItemInfoListingContainer.encode();
	return o;
}
_.ItemInfoListingContainer=null;

module.exports=O;
