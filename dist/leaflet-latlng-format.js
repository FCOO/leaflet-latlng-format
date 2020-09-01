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
        format     : function(options){ return window.latLngFormat( this.lat, this.lng ).format(options);      },
        formatTrunc: function(options){ return window.latLngFormat( this.lat, this.lng ).formatTrunc(options); },
        outputs    : function(options){ return window.latLngFormat( this.lat, this.lng ).outputs(options); }
    });

}(L, this, document));



