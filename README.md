Big Distance Matrix for Google Maps
=======================

Javascript object for fill Google Maps Distance Matrix for 25+ locations.

It can call the Google Maps v3 API to get the distance matrix for many locations that may go over the 25 locations limit by splitting it in smaller blocks.

The object can display the distance matrix on a HTML table or export it as a string in JSON format.

## Links

* Homepage: <http://d-castillo.info/projects/gmaps-bigdistancematrix>
* Source: <https://github.com/davcs86/gmaps-bigdistancematrix>
* Bugs:   <https://github.com/davcs86/gmaps-bigdistancematrix/issues>
* **DEMO:** <http://d-castillo.info/gmaps-bigdistancematrix/example.html>
* Other: <http://www.jsclasses.org/package/362>

## Requirements:

1. jQuery 1.8+ <http://jquery.com/>
2. JSON3 <http://bestiejs.github.io/json3/>

## Usage:

1. Define an object with the GPS latitude and longitude of the route points in an Object. From example.js

	```javascript
	// Places in NY.
	var Route_Points = {
		"Times Square": [40.758673, -73.985281],
		"St Patrick's Cathedral": [40.758196, -73.975347],
		"Grand Central Terminal": [40.752105, -73.977686],
		//...
		"Bronx Zoo": [40.848611, -73.882631],
		"New York Botanical Garden": [40.861748, -73.880145],
		"Washington Square Park": [40.731371, -73.996997]
	};
	```

2. Initialize the class.

	```javascript
	Route_DistanceMatrix.init(routePoints, consoleDivId, itemsPerReq, gTravelMode, gUnitSystem, gAvoidHighways, gAvoidTolls);

	//from example.js	
	Route_DistanceMatrix.init(Route_Points,"console_route_matrix", 10);
	```
	| Parameter | Description |
	| ------------- | ----------- |
	|routePoints | Object with the GPS latitude and longitude of the places. <br>**Mandatory**.|
	|consoleDivId | DOM id of the container where the log information will be written. <br>**Optional**. _Default value_: false. |
	|itemsPerReq | Number of items to include per request to Google. <br>**Optional**. _Default value_: 5,  _Max Value_ 25.|
	|$port | Listen port of the MySQL server.<br>_Optional_. It uses the value in _mysqli.default_port_ as default.|

## Support

Drop me line on: <http://d-castillo.info/contactme/> or to: davcs86@gmail.com

## Donations

Did this project help you to save (or earn) some money?<br>
Please, support to the author by making a small donation.

<a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2PK29ZFPUZ5WL' target='_blank'><img width="150" style='border:0px;width:150px' src='http://ko-fi.com/img/button-4.png' border='0' alt='Buy Me A Coffee :) @ PayPal' /></a>
