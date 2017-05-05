var LDRequestProtocolBase = require('./LDRequestProtocolBase');
var LDListApiKeysRequest = require('./LDListApiKeysRequest');
var LDDeactivateApiKeyRequest = require('./LDDeactivateApiKeyRequest');
var LDGenerateApiKeyRequest = require('./LDGenerateApiKeyRequest');
var LDDeleteGrantForItemRequest = require('./LDDeleteGrantForItemRequest');
var LDDoesItemHaveGrantRequest = require('./LDDoesItemHaveGrantRequest');
var LDGetItemUsingGrantRequest = require('./LDGetItemUsingGrantRequest');
var LDGenerateGrantForItemRequest = require('./LDGenerateGrantForItemRequest');
var LDListPublishedItemsRequest = require('./LDListPublishedItemsRequest');
var LDListAllItemsRequest = require('./LDListAllItemsRequest');
var LDListItemsForAccountRequest = require('./LDListItemsForAccountRequest');
var LDDeleteItemRequest = require('./LDDeleteItemRequest');
var LDUnpublishItemRequest = require('./LDUnpublishItemRequest');
var LDPublishItemRequest = require('./LDPublishItemRequest');
var LDReviewItemRequest = require('./LDReviewItemRequest');
var LDGetItemInfoRequest = require('./LDGetItemInfoRequest');
var LDSystemUpdateItemInfoRequest = require('./LDSystemUpdateItemInfoRequest');
var LDUserUpdateItemInfoRequest = require('./LDUserUpdateItemInfoRequest');
var LDCreateItemInfoRequest = require('./LDCreateItemInfoRequest');

function O(e){
	LDRequestProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['cr']!=null)$.CreateItemInfoRequest=new LDCreateItemInfoRequest(e['cr']);
	if(e['uu']!=null)$.UserUpdateItemInfoRequest=new LDUserUpdateItemInfoRequest(e['uu']);
	if(e['su']!=null)$.SystemUpdateItemInfoRequest=new LDSystemUpdateItemInfoRequest(e['su']);
	if(e['ga']!=null)$.GetItemInfoRequest=new LDGetItemInfoRequest(e['ga']);
	if(e['re']!=null)$.ReviewItemRequest=new LDReviewItemRequest(e['re']);
	if(e['pu']!=null)$.PublishItemRequest=new LDPublishItemRequest(e['pu']);
	if(e['un']!=null)$.UnpublishItemRequest=new LDUnpublishItemRequest(e['un']);
	if(e['de']!=null)$.DeleteItemRequest=new LDDeleteItemRequest(e['de']);
	if(e['lc']!=null)$.ListItemsForAccountRequest=new LDListItemsForAccountRequest(e['lc']);
	if(e['la']!=null)$.ListAllItemsRequest=new LDListAllItemsRequest(e['la']);
	if(e['lp']!=null)$.ListPublishedItemsRequest=new LDListPublishedItemsRequest(e['lp']);
	if(e['gg']!=null)$.GenerateGrantForItemRequest=new LDGenerateGrantForItemRequest(e['gg']);
	if(e['gig']!=null)$.GetItemUsingGrantRequest=new LDGetItemUsingGrantRequest(e['gig']);
	if(e['dihg']!=null)$.DoesItemHaveGrantRequest=new LDDoesItemHaveGrantRequest(e['dihg']);
	if(e['dgfi']!=null)$.DeleteGrantForItemRequest=new LDDeleteGrantForItemRequest(e['dgfi']);
	if(e['gk']!=null)$.GenerateApiKeyRequest=new LDGenerateApiKeyRequest(e['gk']);
	if(e['dk']!=null)$.DeactivateApiKeyRequest=new LDDeactivateApiKeyRequest(e['dk']);
	if(e['lk']!=null)$.ListApiKeysRequest=new LDListApiKeysRequest(e['lk']);
}
O.prototype=new LDRequestProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToClusterOmletItemStoreRequestProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDRequestProtocolBase.prototype.encode.call($,o);
	if($.CreateItemInfoRequest!=null)o['cr']=$.CreateItemInfoRequest.encode();
	if($.UserUpdateItemInfoRequest!=null)o['uu']=$.UserUpdateItemInfoRequest.encode();
	if($.SystemUpdateItemInfoRequest!=null)o['su']=$.SystemUpdateItemInfoRequest.encode();
	if($.GetItemInfoRequest!=null)o['ga']=$.GetItemInfoRequest.encode();
	if($.ReviewItemRequest!=null)o['re']=$.ReviewItemRequest.encode();
	if($.PublishItemRequest!=null)o['pu']=$.PublishItemRequest.encode();
	if($.UnpublishItemRequest!=null)o['un']=$.UnpublishItemRequest.encode();
	if($.DeleteItemRequest!=null)o['de']=$.DeleteItemRequest.encode();
	if($.ListItemsForAccountRequest!=null)o['lc']=$.ListItemsForAccountRequest.encode();
	if($.ListAllItemsRequest!=null)o['la']=$.ListAllItemsRequest.encode();
	if($.ListPublishedItemsRequest!=null)o['lp']=$.ListPublishedItemsRequest.encode();
	if($.GenerateGrantForItemRequest!=null)o['gg']=$.GenerateGrantForItemRequest.encode();
	if($.GetItemUsingGrantRequest!=null)o['gig']=$.GetItemUsingGrantRequest.encode();
	if($.DoesItemHaveGrantRequest!=null)o['dihg']=$.DoesItemHaveGrantRequest.encode();
	if($.DeleteGrantForItemRequest!=null)o['dgfi']=$.DeleteGrantForItemRequest.encode();
	if($.GenerateApiKeyRequest!=null)o['gk']=$.GenerateApiKeyRequest.encode();
	if($.DeactivateApiKeyRequest!=null)o['dk']=$.DeactivateApiKeyRequest.encode();
	if($.ListApiKeysRequest!=null)o['lk']=$.ListApiKeysRequest.encode();
	return o;
}
_.CreateItemInfoRequest=null;
_.UserUpdateItemInfoRequest=null;
_.SystemUpdateItemInfoRequest=null;
_.GetItemInfoRequest=null;
_.ReviewItemRequest=null;
_.PublishItemRequest=null;
_.UnpublishItemRequest=null;
_.DeleteItemRequest=null;
_.ListItemsForAccountRequest=null;
_.ListAllItemsRequest=null;
_.ListPublishedItemsRequest=null;
_.GenerateGrantForItemRequest=null;
_.GetItemUsingGrantRequest=null;
_.DoesItemHaveGrantRequest=null;
_.DeleteGrantForItemRequest=null;
_.GenerateApiKeyRequest=null;
_.DeactivateApiKeyRequest=null;
_.ListApiKeysRequest=null;

module.exports=O;