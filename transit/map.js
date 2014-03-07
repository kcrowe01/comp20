function load()
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
        		infowindow.setContent(marker.title);
        		infowindow.open(map, marker);
        });
    })
}
google.maps.event.addDomListener(window, 'load', load);