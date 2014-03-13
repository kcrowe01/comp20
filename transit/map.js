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
    var request = new XMLHttpRequest();
    request.open('GET', 'http://mbtamap.herokuapp.com/mapper/rodeo.json', false);
    request.send(null);
    str = request.responseText;
    console.log(str);
    var parsed = JSON.parse(str);
    console.log(parsed['line']); 
    if(parsed['line'] == "orange"){
        displayOrange(map);
    }
    else if(parsed['line'] == "blue"){
        displayBlue(map);
    }
    else if(parsed['line'] == "red"){
        displayRed(map);
    }
}
function displayOrange(map)
{
    var arr = new Array(19);
    for( i = 0; i < 19; i++){
        arr[i] = new Array(2);
    }
    arr[0][0] = 42.34735;
    arr[0][1] = -71.0757;
    marker = new google.maps.Marker;
    marker.setPosition({
        lat: arr[0][0],
        lng: arr[0][1]
    });
    marker.setMap(map);
}
function displayBlue(map)
{
      var arr = new Array(19);
    for( i = 0; i < 19; i++){
        arr[i] = new Array(2);
    }
    arr[0][0] = 42.34735;
    arr[0][1] = -71.0757;
    marker = new google.maps.Marker;
    marker.setPosition({
        lat: arr[0][0],
        lng: arr[0][1]
    });
    marker.setMap(map);  
}
function displayRed(map)
{
      var arr = new Array(19);
    for( i = 0; i < 19; i++){
        arr[i] = new Array(2);
    }
    arr[0][0] = 42.34735;
    arr[0][1] = -71.0757;
    marker = new google.maps.Marker;
    marker.setPosition({
        lat: arr[0][0],
        lng: arr[0][1]
    });
    marker.setMap(map);  
}
   
// marker = new google.maps.Marker({     
//postion:      
//}) 

