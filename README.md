# leaflet-latlng-format
>


## Description
Extension to `L.LatLng` to format lat,lng as text using [fcoo/latlng-format](https://github.com/FCOO/latlng-format)  

## Installation
### bower
`bower install https://github.com/FCOO/leaflet-latlng-format.git --save`

## Demo
http://FCOO.github.io/leaflet-latlng-format/demo/ 

## Usage
    var myLatLng = L.LatLng(54.25239, 9.646);
    console.log( myLatLng.formatLat() ); //54°15'08,6"N
    console.log( myLatLng.formatLng() ); //9°38'45,5"E

    L.LatLng.setFormat( latLngFormat.FORMAT_SMM    ); //Change format to Degrees Decimal minutes (N65 30.258')    



### L.LatLng
`L.LatLng` is extended with 

    L.LatLng.setFormat( formatId ); //Sets the format to formatId

### L.LatLng.prototype
`L.LatLng.prototype` is extended with tree methods

    .formatLat()    //return this.lat formatted
    .formatLng()    //return this.lng formatted
    .format()       //return [this.formatLat(), this.formatLng()]

## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/leaflet-latlng-format/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk
