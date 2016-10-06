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
        //Const to define differnet formats
        FORMAT_DMSS: window.LATLNGFORMAT_DMSS, //Degrees Minutes Seconds Decimal Seconds: N65d30'15.3"  d='degree sign'
        FORMAT_SMM : window.LATLNGFORMAT_DMM,  //Degrees Decimal minutes                : N65d30.258'
        FORMAT_DD  : window.LATLNGFORMAT_DD,   //Decimal degrees                        : N41.1234d
        format     : new window.LatLngFormat( window.LATLNGFORMAT_DMSS ),
        setFormat  : function( formatId, map ){ 
                         L.LatLng.format.setFormat( formatId );
                         if (map)
                             map.fireEvent('latlngformatchange', { format: this.format } );
                      },
        changeFormat: function( map ){ 
                        this.setFormat( (this.format.options.formatId + 1) % (this.FORMAT_DD + 1), map ); 
                      }
    });




    //Extend the prototype of L.LatLng
    L.extend( L.LatLng.prototype, {
        latFormat: function(){ return L.LatLng.format.latFormat( this.lat );             },
        lngFormat: function(){ return L.LatLng.format.lngFormat( this.lng );             },
        format   : function(){ return L.LatLng.format.format   ( [this.lat, this.lng] ); },

        //DEPRECATED: asFormat, latAsFormat, lngAsFormat
        latAsFormat: function(){ return L.LatLng.format.asTextLat( this.lat ); },
        lngAsFormat: function(){ return L.LatLng.format.asTextLng( this.lng ); },
        asFormat   : function(){ return L.LatLng.format.asText( [this.lat, this.lng] ); }
   
    });

}(L, this, document));



