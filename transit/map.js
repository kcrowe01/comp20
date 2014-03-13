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
    arr[1][0] = 42.352547;
    arr[1][1] = -71.062752;
    arr[2][0] = 42.373622;
    arr[2][1] = -71.069533;
    arr[3][0] = 42.355518;
    arr[3][1] = -71.060225;
    arr[4][0] = 42.300523;
    arr[4][1] = -71.113686;
    arr[5][0] = 42.310525;
    arr[5][1] = -71.107414;
    arr[6][0] = 42.363021;
    arr[6][1] = -71.05829;
    arr[7][0] = 42.323132;
    arr[7][1] = -71.099592;
    arr[8][0] = 42.426632;
    arr[8][1] = -71.07411;
    arr[9][0] = 42.341512;
    arr[9][1] = -71.083423;
    arr[10][0] = 42.365577;
    arr[10][1] = -71.06129;
    arr[11][0] = 42.43668;
    arr[11][1] = -71.071097;
    arr[12][0] = 42.331397;
    arr[12][1] = -71.095451;
    arr[13][0] = 42.336377;
    arr[13][1] = -71.088961;
    arr[14][0] = 42.358978;
    arr[14][1] = -71.057598;
    arr[15][0] = 42.317062;
    arr[15][1] = -71.104248;
    arr[16][0] = 42.383975;
    arr[16][1] = -71.076994;
    arr[17][0] = 42.349662;
    arr[17][1] = -71.063917;
    arr[18][0] = 42.40237;
    arr[18][1] = -71.077082;
    for(i = 0; i < 19; i++){
    marker = new google.maps.Marker;
    marker.setPosition({
        lat: arr[i][0],
        lng: arr[i][1]
    });
    marker.setMap(map);
    }
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

