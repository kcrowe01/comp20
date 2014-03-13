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
       		var marker = new google.maps.Marker({
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
    str = 'Blue,Bowdoin,42.361365,-71.062037^' +
    'Blue,Government Center,42.359705,-71.05921499999999^' +
    'Blue,State Street,42.358978,-71.057598^' +
    'Blue,Aquarium,42.359784,-71.051652^' +
    'Blue,Maverick,42.36911856,-71.03952958000001^' +
    'Blue,Airport,42.374262,-71.030395^' + 
    'Blue,Wood Island,42.3796403,-71.02286539000001^' +
    'Blue,Orient Heights,42.386867,-71.00473599999999^' +
    'Blue,Suffolk Downs,42.39050067,-70.99712259^' +
    'Blue,Beachmont,42.39754234,-70.99231944^' +
    'Blue,Revere Beach,42.40784254,-70.99253321^' +
    'Blue,Wonderland,42.41342,-70.991648^' +
'Orange,Back Bay,42.34735,-71.075727^' +
'Orange,Chinatown,42.352547,-71.062752^' +
'Orange,Community College,42.373622,-71.06953300000001^' +
'Orange,Downtown Crossing,42.355518,-71.060225^' +
'Orange,Forest Hills,42.300523,-71.113686^' +
'Orange,Green Street,42.310525,-71.10741400000001^' +
'Orange,Haymarket,42.363021,-71.05829^' +
'Orange,Jackson Square,42.323132,-71.099592^' +
'Orange,Malden Center,42.426632,-71.07411^' +
'Orange,Mass Ave,42.341512,-71.083423^' +
'Orange,North Station,42.365577,-71.06129^' +
'Orange,Oak Grove,42.43668,-71.07109699999999^' +
'Orange,Roxbury Crossing,42.331397,-71.095451^' +
'Orange,Ruggles,42.336377,-71.088961^' +
'Orange,State Street,42.358978,-71.057598^' +
'Orange,Stony Brook,42.317062,-71.104248^' +
'Orange,Sullivan,42.383975,-71.076994^' +
'Orange,Tufts Medical,42.349662,-71.063917^' +
'Orange,Wellington,42.40237,-71.077082^' +
'Red,Alewife,42.395428,-71.142483^' +
'Red,Andrew,42.330154,-71.057655^' +
'Red,Ashmont,42.284652,-71.06448899999999^' +
'Red,Braintree,42.2078543,-71.0011385^' +
'Red,Broadway,42.342622,-71.056967^' +
'Red,Central Square,42.365486,-71.103802^' +
'Red,Charles/MGH,42.361166,-71.070628^' +
'Red,Davis,42.39674,-71.121815^' +
'Red,Downtown Crossing,42.355518,-71.060225^' +
'Red,Fields Corner,42.300093,-71.061667^' +
'Red,Harvard Square,42.373362,-71.118956^' +
'Red,JFK/UMass,42.320685,-71.052391^' +
'Red,Kendall/MIT,42.36249079,-71.08617653^' +
'Red,North Quincy,42.275275,-71.029583^' +
'Red,Park Street,42.35639457,-71.0624242^' +
'Red,Porter Square,42.3884,-71.11914899999999^' +
'Red,Quincy Adams,42.233391,-71.007153^' +
'Red,Quincy Center,42.251809,-71.005409^' +
'Red,Savin Hill,42.31129,-71.053331^' +
'Red,Shawmut,42.29312583,-71.06573796000001^' +
'Red,South Station,42.352271,-71.05524200000001^' +
'Red,Wollaston,42.2665139,-71.0203369^';
lines = {
    Red: [],
    Orange: [],
    Blue: []
};
    var split = str.split("^");
    for( i = 0; i < split.length; i++){
        var splitline = split[i].split(",");
        var info = {
            station: splitline[1],
            lat: splitline[2],
            lng: splitline[3]
        }
        if(splitline[0] == "Blue"){
            lines.Blue.push(info);
        }
        else if(splitline[0] == "Red"){
            lines.Red.push(info);
        }
        else{
            lines.Orange.push(info);
        }
    }
    var request = new XMLHttpRequest();
    request.open('GET', 'http://mbtamap.herokuapp.com/mapper/rodeo.json', false);
    request.send(null);
    str = request.responseText;
    console.log(str);
    var parsed = JSON.parse(str);
    console.log(parsed['line']); 
    if(parsed['line'] == "orange"){
        displayOrange(map, lines);
    }
    else if(parsed['line'] == "blue"){
        displayBlue(map, lines);
    }
    else if(parsed['line'] == "red"){
        displayRed(map, lines);
    }
}
function displayOrange(map, lines)
{
    /*var arr = new Array(19);
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
    arr[18][1] = -71.077082;*/
    var coordinates = new Array(lines.Orange.length);
    for(i = 0; i < lines.Orange.length; i++){
    var marker = new google.maps.Marker;
    marker.setPosition({
        lat: Number(lines.Orange[i].lat),
        lng: Number(lines.Orange[i].lng)
    });
    marker.setMap(map);
    coordinates[i] = new google.maps.LatLng(lines.Orange[i].lat, lines.Orange[i].lng);
    }
        var path = new google.maps.Polyline({
        path: coordinates,
        geodesic: true,
        strokeColor: '#ff6600',
        strokeWeight: 2,
      })
      path.setMap(map);
}
function displayBlue(map, lines)
{
      var coordinates = new Array(lines.Blue.length);
      for(i = 0; i < lines.Blue.length; i++){
        var marker = new google.maps.Marker;
        marker.setPosition({
            lat: Number(lines.Blue[i].lat),
            lng: Number(lines.Blue[i].lng)
        });
        marker.setMap(map);
        coordinates[i] = new google.maps.LatLng(lines.Blue[i].lat, lines.Blue[i].lng);
      }
      var path = new google.maps.Polyline({
        path: coordinates,
        geodesic: true,
        strokeColor: '#0000ff',
        strokeWeight: 2,
      })
      path.setMap(map);
}
function displayRed(map, lines)
{
     var coordinates = new Array(lines.Red.length);
      for(i = 0; i < lines.Red.length; i++){
    var marker = new google.maps.Marker;
    marker.setPosition({
        lat: Number(lines.Red[i].lat),
        lng: Number(lines.Red[i].lng)
    });
    marker.setMap(map);
    coordinates[i] = new google.maps.LatLng(lines.Red[i].lat, lines.Red[i].lng);
    }
          var path = new google.maps.Polyline({
        path: coordinates,
        geodesic: true,
        strokeColor: '#ff0000',
        strokeWeight: 2,
      })
      path.setMap(map);
}
   
// marker = new google.maps.Marker({     
//postion:      
//}) 

