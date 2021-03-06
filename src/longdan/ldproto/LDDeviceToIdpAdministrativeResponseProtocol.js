var LDResponseProtocolBase = require('./LDResponseProtocolBase');
var LDListUnverifiedCommunitiesResponse = require('./LDListUnverifiedCommunitiesResponse');
var LDGetPermissionsResponse = require('./LDGetPermissionsResponse');
var LDGetDeviceRecordsResponse = require('./LDGetDeviceRecordsResponse');
var LDListFlaggedUsersResponse = require('./LDListFlaggedUsersResponse');
var LDGetIdentityRecordsResponse = require('./LDGetIdentityRecordsResponse');
var LDAccountDetailsResponse = require('./LDAccountDetailsResponse');

function O(e){
	LDResponseProtocolBase.call(this,e);
	if(!e)return;
	var $=this;
	if(e['a']!=null)$.AccountDetailsResponse=new LDAccountDetailsResponse(e['a']);
	if(e['I']!=null)$.GetIdentityRecordsResponse=new LDGetIdentityRecordsResponse(e['I']);
	if(e['f']!=null)$.ListFlaggedUsers=new LDListFlaggedUsersResponse(e['f']);
	if(e['d']!=null)$.GetDeviceRecords=new LDGetDeviceRecordsResponse(e['d']);
	if(e['gp']!=null)$.GetPermissionsResponse=new LDGetPermissionsResponse(e['gp']);
	if(e['luc']!=null)$.ListUnverifiedCommunitiesResponse=new LDListUnverifiedCommunitiesResponse(e['luc']);
}
O.prototype=new LDResponseProtocolBase();
O.prototype.constructor = O;
var _=O.prototype;
_.__type="LDDeviceToIdpAdministrativeResponseProtocol";
_.encode=function(o){
	if(o===undefined)o={};
	var $=this;
	LDResponseProtocolBase.prototype.encode.call($,o);
	if($.AccountDetailsResponse!=null)o['a']=$.AccountDetailsResponse.encode();
	if($.GetIdentityRecordsResponse!=null)o['I']=$.GetIdentityRecordsResponse.encode();
	if($.ListFlaggedUsers!=null)o['f']=$.ListFlaggedUsers.encode();
	if($.GetDeviceRecords!=null)o['d']=$.GetDeviceRecords.encode();
	if($.GetPermissionsResponse!=null)o['gp']=$.GetPermissionsResponse.encode();
	if($.ListUnverifiedCommunitiesResponse!=null)o['luc']=$.ListUnverifiedCommunitiesResponse.encode();
	return o;
}
_.AccountDetailsResponse=null;
_.GetIdentityRecordsResponse=null;
_.ListFlaggedUsers=null;
_.GetDeviceRecords=null;
_.GetPermissionsResponse=null;
_.ListUnverifiedCommunitiesResponse=null;

module.exports=O;
