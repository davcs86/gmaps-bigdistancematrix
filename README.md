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

**Find optimal routes with the retrieved data on:**

Route Optimizer for Big Distance Matrix for Google Maps: <https://github.com/davcs86/gmaps-bigrouteoptimizer>

## Requirements:

1. jQuery 1.8+ <http://jquery.com/>
2. JSON3 <http://bestiejs.github.io/json3/>

## Instructions:

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
	|gTravelMode | Google's parameter, view Google Maps Reference. <br>**Optional**. _Default value_: google.maps.TravelMode.DRIVING.|
	|gUnitSystem | Google's parameter, view Google Maps Reference. <br>**Optional**. _Default value_: false.|
	|gAvoidTolls | Google's parameter, view Google Maps Reference. <br>**Optional**. _Default value_: false.|

	Google Maps v3 API Reference: <https://developers.google.com/maps/documentation/javascript/distancematrix#distance_matrix_requests>

3. Set the table where the data will be displayed.

	```javascript
	Route_DistanceMatrix.displayTable(tableDomvId);

	//from example.js	
	Route_DistanceMatrix.displayTable("table_route_matrix");
	```
	| Parameter | Description |
	| ------------- | ----------- |
	|tableDomvId | DOM id of the table where the data will be displayed. <br>**Mandatory**.|

	**NOTE:** This function is **OPTIONAL,** you can populate the distance matrix without display any data. See function _Route_DistanceMatrix.exportResults()_.

4. Start the matrix population.

	```javascript
	Route_DistanceMatrix.startRouting(delayRequest);
	
	//from example.js
	Route_DistanceMatrix.startRouting(5000);
	```
	| Parameter | Description |
	| ------------- | ----------- |
	|delayRequest | Miliseconds between requests. <br>**Optional**. _Default value_: 1500 ms.|

5. Export the distance matrix as a JSON object.

	```javascript
	var jsonObjResults = Route_DistanceMatrix.exportResults(asString);
	
	//from example.js
	var distanceMatrix = Route_DistanceMatrix.exportResults(true);
	```
	| Parameter | Description |
	| ------------- | ----------- |
	|asString | If it's true, returns the string representation of the JSON Object. <br>**Optional**. _Default value_: false.|

6. Use the data as you prefer. Check out an interesting application for this data on my another project <https://github.com/davcs86/gmaps-bigrouteoptimizer> where you can find an optimal route of these points using any of three variables: Time, Distance and Speed.


## Support

Drop me line on: <http://d-castillo.info/contactme/> or to: davcs86@gmail.com

## Donations

Did this project help you to save (or earn) some money?<br>
Please, support to the author by making a small donation.

<a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2PK29ZFPUZ5WL' target='_blank'><img width="150" style='border:0px;width:150px' src='http://ko-fi.com/img/button-4.png' border='0' alt='Buy Me A Coffee :) @ PayPal' /></a>
