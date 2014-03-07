function load()
{
	var mapOptions = {
          center: new google.maps.LatLng(42.4069, -71.118139),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
}
google.maps.event.addDomListener(window, 'load', load);