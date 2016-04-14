# leaflet-latlng-format
>


## Description
Extension to L.LatLng to format lat,lng as text using [fcoo/latlng-format](https://github.com/FCOO/latlng-format)  

## Installation
### bower
`bower install https://github.com/FCOO/leaflet-latlng-format.git --save`

## Demo
http://FCOO.github.io/leaflet-latlng-format/demo/ 

## Usage
	var myLatLng = L.LatLng(54.25239, 9.646);
	console.log( myLatLng.latAsFormat() ); //54°15'08,6"N
	console.log( myLatLng.lngAsFormat() ); //9°38'45,5"E

	L.LatLng.setFormat( L.LatLng.FORMAT_SMM	); //Change format to Degrees Decimal minutes (N65 30.258')	



### L.LatLng

`L.LatLng`is extended with const for the different formats and a method to change format
	
	L.LatLng.FORMAT_DMSS	//Degrees Minutes Seconds Decimal Seconds
	L.LatLng.FORMAT_SMM		//Degrees Decimal minutes
	L.LatLng.FORMAT_DD		//Decimal degrees

	L.LatLng.setFormat( formatId ); //Swts the format to formatId
	L.LatLng.changeFormat();		//Change the format to next format (FORMAT_DMSS -> FORMAT_SMM -> FORMAT_DD -> FORMAT_DMSS) 

### L.LatLng.prototype
`L.LatLng.prototype` is extended with tree methods and an object

	.latAsFormat()	//return this.lat formatted
	.lngAsFormat()	//return this.lng formatted
	.asFormat()		//return [this.latAsFormat(), this.lngAsFormat()]


	.format = new LatLngFormat(..); 
See [fcoo/latlng-format](https://github.com/FCOO/latlng-format) for the methods available in `.format`


## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/leaflet-latlng-format/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk


## Credits and acknowledgements


## Known bugs

## Troubleshooting

## Changelog



