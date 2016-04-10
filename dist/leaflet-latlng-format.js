/****************************************************************************
	leaflet-latlng-format.js,

	(c) 2016, FCOO

	https://github.com/FCOO/leaflet-latlng-format
	https://github.com/FCOO

****************************************************************************/
;(function (L, window, document, undefined) {
	"use strict";


	//Extend L.LatLng
	L.extend(L.LatLng, {
		//Const to define differnet formats
		FORMAT_DMSS	: window.LATLNGFORMAT_DMSS, //Degrees Minutes Seconds Decimal Seconds	:	N65d30'15.3"  d='degree sign'
		FORMAT_SMM	: window.LATLNGFORMAT_DMM,	//Degrees Decimal minutes									:	N65d30.258'
		FORMAT_DD		: window.LATLNGFORMAT_DD,		//Decimal degrees													: N41.1234d
		format			: new window.LatLngFormat( window.LATLNGFORMAT_DMSS ),
		setFormat		: function( formatId ){ L.LatLng.format.setFormat( formatId ) },

	});




	//Extend the prototype of L.LatLng
	L.extend( L.LatLng.prototype, {
		latAsFormat	: function(){ return L.LatLng.format.asTextLat( this.lat ); },
		lngAsFormat	: function(){ return L.LatLng.format.asTextLng( this.lng ); },
		asFormat		: function(){ return L.LatLng.format.asText( [this.lat, this.lng] ); }

	});

}(L, this, document));



