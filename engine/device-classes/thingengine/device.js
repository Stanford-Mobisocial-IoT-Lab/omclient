// -*- mode: js; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// This file is part of ThingEngine
//
// Copyright 2015 Giovanni Campagna <gcampagn@cs.stanford.edu>
//
// See COPYING for details

const lang = require('lang');
const Q = require('q');
const uuid = require('node-uuid');

const BaseDevice = require('../../base_device');
const Tier = require('../../tier_manager').Tier;

// An instance of a ThingEngine running remotely, as discovered
// by bluetooth, mdns or whatever
// (Or more likely as created on the fly from an Omlet channel)
// Could be a server, phone or cloud instance
// Could be own or belonging to another user
//
// The reason we represent own thingengines as devices in the db
// is that pairing can leverage syncdb change propagation (with
// changes picked up by config-pairing and moved to the private
// settings). We also use them to instantiate channels that are
// inherently local, such as upnp-ssdp, so that you can ask for
// device discovery around your phone or device discovery around
// your server (ie, on your home network)
const ThingEngineDevice = new lang.Class({
    Name: 'ThingEngineDevice',
    Extends: BaseDevice,

    _init: function(engine, state) {
        this.parent(engine, state);

        this.tier = state.tier;
        // own is true if this thingengine belongs to the same user
        // as the one running the code
        // (eg, a server thingengine as seen from the phone)
        // own is false if this thingengine is some other instance
        // that we discovered through some other method
        // (eg, a server thingengine for another family member,
        // as seen from a server running on the same physical machine)
        // we still want to coordinate with foreign thingengines
        // sometimes, so we have API calls and channels, but we
        // don't sync everything through them
        this.own = state.own;

        // this !! is for legacy reasons
        this.isTransient = !!state.isTransient;

        if (this.tier === Tier.CLOUD) {
            this.cloudId = state.cloudId;
        } else if (this.tier === Tier.SERVER) {
            this.host = state.host;
            this.port = state.port;

            if (typeof state.port != 'number' || isNaN(state.port))
                throw new TypeError('Invalid port number ' + state.port);
        } else if (this.tier === Tier.PHONE) {
            this.messagingId = state.messagingId;
        }

        // This is a built-in device so we're allowed some
        // "friendly" API access
        this._tierManager = engine._tiers;

        if (this.own) {
            this.uniqueId = 'thingengine-own-' + this.tier;
            this.name = "ThingEngine %s".format(this.tier);
            this.description = "This is your own ThingEngine.";
        } else if (this.tier === Tier.CLOUD) {
            this.uniqueId = 'thingengine-foreign-cloud-' + this.cloudId;
            this.name = "Foreign ThingEngine Cloud";
            this.description = "This is the ThingEngine of some other user.";
        } else if (this.tier === Tier.SERVER) {
            this.uniqueId = 'thingengine-foreign-host-' + this.host + '-' + this.port;
            this.name = "Foreign ThingEngine Server";
            this.description = "This is the ThingEngine of some other user, running at %s, on port %d."
                .format(this.host, this.port);
        } else if (this.tier === Tier.SERVER) {
            this.uniqueId = 'thingengine-foreign-phone-' + this.messagingId.replace(/[^a-z0-9]/g, '-');
            this.name = "Foreign ThingEngine Phone";
            this.description = "This is the ThingEngine of some other user, running on a phone reachable at " + this.messagingId;
        } else if (this.tier === Tier.GLOBAL) {
            throw new TypeError('Global foreign ThingEngine do not exist');
        }
    },

    get ownerTier() {
        // servers talk to servers, clouds to clouds, phones to phones
        return this.tier;
    },

    checkAvailable: function() {
        if (this.own && this.tier === this._tierManager.ownTier)
            return BaseDevice.Availability.AVAILABLE;
        else if (this.own)
            return (this._tierManager.isConnected(this.tier) ?
                    BaseDevice.Availability.AVAILABLE :
                    BaseDevice.Availability.UNAVAILABLE);
        else if (this.engine.messaging.isAvailable)
            return BaseDevice.Availability.AVAILABLE;
        else
            return BaseDevice.Availability.UNAVAILABLE;
    },

    hasKind: function(kind) {
        switch (kind) {
        case 'thingengine-system':
        case 'thingengine-own':
            return this.own;
        case 'thingengine-server':
            return this.tier === Tier.SERVER;
        case 'thingengine-phone':
            return this.tier === Tier.PHONE;
        case 'thingengine-cloud':
            return this.tier === Tier.CLOUD;
        case 'thingengine-global':
            return this.tier === Tier.GLOBAL;
        default:
            return this.parent(kind);
        }
    },

    _getContext: function() {
        if (this.tier === Tier.PHONE)
            return 'phone';
        else if (this.tier === Tier.SERVER)
            return 'home';
        else if (this.tier === Tier.CLOUD)
            return 'cloud';
        else if (this.tier === Tier.GLOBAL)
            return 'global';
        else
            throw new Error('Unexpected tier ' + this.tier);
    },

    queryInterface: function(iface) {
        switch(iface) {
        case 'device-group':
            if (this.own)
                return this.engine.devices.getContext(this._getContext());
            else
                return null;
        default:
            return null;
        }
    },
});

function createDevice(engine, state) {
    return new ThingEngineDevice(engine, state);
}

module.exports.createDevice = createDevice;
