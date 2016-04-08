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
		FORMAT_DMSS	: window.latLngFormat.DMSs, //Degrees Minutes Seconds Decimal Seconds	:	N65d30'15.3"  d='degree sign'
		FORMAT_SMM	: window.latLngFormat.DMm,	//Degrees Decimal minutes									:	N65d30.258'
		FORMAT_DD		: window.latLngFormat.Dd,		//Decimal degrees													: N41.1234d
		setFormat		: function( formatId ){ L.LatLng.prototype.format = new window.LatLngFormat( formatId ) },
	
	});

	//Extend the prototype of L.LatLng
	L.extend( L.LatLng.prototype, {
		format			: new window.LatLngFormat( L.LatLng.FORMAT_DMSS ),
		latAsFormat	: function(){ return this.format.asTextLat( this.lat ); },
		lngAsFormat	: function(){ return this.format.asTextLng( this.lng ); },
		asFormat		: function(){ return this.format.asText( [this.lat, this.lng] ); }

	});
	
}(L, this, document));



