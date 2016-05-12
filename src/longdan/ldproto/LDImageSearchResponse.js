var LDJSONLoggable = require('./LDJSONLoggable');
var LDImageSearchResult = require('./LDImageSearchResult');

function LDImageSearchResponse(e){
	LDJSONLoggable.call(this,e);
	if(!e)return;
	var $=this;
	if(e['h']!=null){
		$.Hits=[];
		var d = e['h'];
		for(var k=0; k<d.length;++k)$.Hits.push(new LDImageSearchResult(d[k]));
	}
	$.ClientSearchVersion=e['v'];
}
LDImageSearchResponse.prototype=new LDJSONLoggable();
LDImageSearchResponse.prototype.constructor = LDImageSearchResponse;
var _=LDImageSearchResponse.prototype;
_.__type="LDImageSearchResponse";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDJSONLoggable.prototype.encode.call($,o);
	if($.Hits!=null) {
		o['h']=[];
		var d=$.Hits;
		for(var k=0;k<d.length;++k) o['h'].push(d[k].encode());
	}
	if($.ClientSearchVersion!=null)o['v']=$.ClientSearchVersion;
	return o;
}
_.Hits=null;
_.ClientSearchVersion=null;

module.exports=LDImageSearchResponse;
