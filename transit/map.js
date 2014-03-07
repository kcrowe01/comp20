function load()
{	navigator.geolocation.getCurrentPosition(function(position)){
		myLat = position.coords.latitude;
		myLng = position.coords.longitude;
	var mapOptions = {
          center: new google.maps.LatLng(myLat, myLng),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
    }
}
google.maps.event.addDomListener(window, 'load', load);