/****************************************************************************
    leaflet-latlng-format.js,

    (c) 2016, FCOO

    https://github.com/FCOO/leaflet-latlng-format
    https://github.com/FCOO

****************************************************************************/
(function (L, window/*, document, undefined*/) {
    "use strict";


    //Extend L.LatLng
    L.extend(L.LatLng, {
        setFormat  : function( formatId ){ return window.latLngFormat.setFormat( formatId ); },
    });


    //Extend the prototype of L.LatLng
    L.extend( L.LatLng.prototype, {
        formatLat: function(){ return window.latLngFormat( this.lat ).formatLat(); },
        formatLng: function(){ return window.latLngFormat( this.lng ).formatLng(); },
        format   : function(){ return window.latLngFormat( this.lat, this.lng ).format(); },

        formatTruncLat: function(){ return window.latLngFormat( this.lat ).formatTruncLat(); },
        formatTruncLng: function(){ return window.latLngFormat( this.lng ).formatTruncLng(); },
        formatTrunc   : function(){ return window.latLngFormat( this.lat, this.lng ).formatTrunc(); }

    });

}(L, this, document));



