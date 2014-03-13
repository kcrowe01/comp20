function loadMap()
{
	navigator.geolocation.getCurrentPosition(function(position){
		myLat = position.coords.latitude;
		myLng = position.coords.longitude;
	var mapOptions = {
          center: new google.maps.LatLng(myLat, myLng),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
       		marker = new google.maps.Marker({
        	position: mapOptions.center,
        	title: "You are here"
        });
        marker.setMap(map);
        var infowindow = new google.maps.InfoWindow();
        google.maps.event.addDomListener(marker, 'click', function() {
        		infowindow.setContent("I am here: " + myLat + " " + myLng);
        		infowindow.open(map, marker);
        });
        placeStation(map);
    })
}
google.maps.event.addDomListener(window, 'load', loadMap);

function placeStation(map)
{    
    var request = XMLHttpRequest();
    request.open('GET', 'http://mbtamap.herokuapp.com/mapper/rodeo.json', true);
    str = request.responseJSON;
    var parsed = JSON.parse(str);
    console.log(parsed['line']); 
}
   
// marker = new google.maps.Marker({     
//postion:      
//}) 

