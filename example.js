/*
//Cities

var Route_Points = {
	"Monterrey, MX": [25.6667, -100.3000],
	"Mexico City, MX": [19.4333, -99.1333],
	"Veracruz, MX": [19.1903, -96.1533],
	"Guadalajara, MX": [20.6667, -103.3500], 
	"Tijuana, MX": [32.5250, -117.0333], 
	"Acapulco, MX": [16.8636, -99.8825], 
	"Cancun, MX": [21.1606, -86.8475] 
};*/

// Places in NY.
var Route_Points = {
	"Times Square": [40.758673, -73.985281],
	"St Patrick's Cathedral": [40.758196, -73.975347],
	"Grand Central Terminal": [40.752105, -73.977686],
	"New York Public Library": [40.752617, -73.982793], 
	"Washington Park, NJ": [40.751890, -74.041414],
	"Battery Park": [40.704506, -74.014206], 
	"Liberty State Park": [40.708865, -74.042745], 
	"Radio City Music Hall": [40.759770, -73.980134], 
	"Grand Army Plaza": [40.763742, -73.973689],
	"Metropolitan Museum of Art": [40.778437, -73.962668],
	"Museum of Natural History": [40.780736, -73.972635], 
	"Madison Square Garden": [40.749524, -73.993016],
	"United Nations Headquarters": [40.748807, -73.968089],
	"Bellevue Hospital Center": [40.738496, -73.976469],
	"New York City Hall": [40.712672, -74.006134],
	"9/11 Memorial and Museum": [40.711583, -74.012196],
	"Newport Green Park": [40.731766, -74.034086],
	"Yankee Stadium": [40.829271, -73.928536],
	"Federal Reserve": [40.708372, -74.008390],
	"Woolworth Building": [40.712190, -74.008505],
	"Brooklyn Botanic Garden": [40.666095, -73.961542],
	"JFK Airport": [40.646113, -73.783744],
	"LaGuardia Airport": [40.771814, -73.874552],
	"Newark Airport": [40.693034, -74.186161],
	"New York Times Co.": [40.777208, -73.827689],
	"42 st Manhattan": [40.757554, -73.990587],
	"Little Italy": [40.718680, -73.997613],
	"Bronx Zoo": [40.848611, -73.882631],
	"New York Botanical Garden": [40.861748, -73.880145],
	"Washington Square Park": [40.731371, -73.996997]
};
(function($){
	/*
	** Initialize the class.
	** 
	** Route_DistanceMatrix.init(routePoints, consoleDivId, itemsPerReq, gTravelMode, gUnitSystem, gAvoidHighways, gAvoidTolls);
	**
	** Parameters:
	** -- routePoints: Object with the GPS latitude and longitude of the places (Mandatory).
	** -- consoleDivId: DOM id of the container where the log information will be written. (Optional, Default value: false).
	** -- itemsPerReq: Number of items to include per request to Google. (Optional, Default Value: 5,  Max Value 25);
	** -- gTravelMode: Google parameter, view reference (Optional, Default: google.maps.TravelMode.DRIVING).
	** -- gUnitSystem: Google parameter, view reference (Optional, Default: google.maps.UnitSystem.METRIC).
	** -- gAvoidHighways: Google parameter, view reference (Optional, Default: false).
	** -- gAvoidTolls: Google parameter, view reference (Optional, Default: false).
	**
	** Google API Reference: https://developers.google.com/maps/documentation/javascript/distancematrix#distance_matrix_requests
	*/ 
	Route_DistanceMatrix.init(Route_Points,"console_route_matrix", 10);
	/*
	** Sets the table where the data will be displayed.
	** 
	** Route_DistanceMatrix.displayTable(tableDomvId);
	**
	** Parameters:
	** -- tableDomvId: DOM id of the table where the data will be displayed. 
	**
	** NOTE: This function is OPTIONAL, you can populate the distance matrix without display any data. See function Route_DistanceMatrix.exportResults().
	*/
	Route_DistanceMatrix.displayTable("table_route_matrix");
	/*
	** Starts the matrix population.
	** 
	** Route_DistanceMatrix.startRouting(delayRequest);
	**
	** Parameters:
	** -- delayRequest: Miliseconds between requests (Optional, Default value: 1500 ms). 
	**
	*/
	Route_DistanceMatrix.startRouting(5000);
	
	$("body").on("click","#btnExport",function(evt){
		evt.preventDefault();
		/*
		** Returns the distance matrix as a JSON object.
		** 
		** Route_DistanceMatrix.exportResults(asString);
		**
		** Parameters:
		** -- asString: If true returns the string representation of the JSON Object. (Optional, Default value: false). 
		**
		*/
		var distanceMatrix = Route_DistanceMatrix.exportResults(true);
		$("#export_data_div").html(distanceMatrix);
	});
})(jQuery);
