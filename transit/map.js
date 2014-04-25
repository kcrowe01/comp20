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
    'Orange,Oak Grove,42.43668,-71.07109699999999^' +
    'Orange,Malden Center,42.426632,-71.07411^' +
    'Orange,Wellington,42.40237,-71.077082^' +
    'Orange,Sullivan,42.383975,-71.076994^' +
    'Orange,Community College,42.373622,-71.06953300000001^' +
    'Orange,North Station,42.365577,-71.06129^' +
    'Orange,Haymarket,42.363021,-71.05829^' +
    'Orange,State Street,42.358978,-71.057598^' +
    'Orange,Downtown Crossing,42.355518,-71.060225^' +
    'Orange,Chinatown,42.352547,-71.062752^' +
    'Orange,Tufts Medical,42.349662,-71.063917^' +
    'Orange,Back Bay,42.34735,-71.075727^' +
    'Orange,Mass Ave,42.341512,-71.083423^' +
    'Orange,Ruggles,42.336377,-71.088961^' +
    'Orange,Roxbury Crossing,42.331397,-71.095451^' +
    'Orange,Jackson Square,42.323132,-71.099592^' +
    'Orange,Stony Brook,42.317062,-71.104248^' +
    'Orange,Green Street,42.310525,-71.10741400000001^' +
    'Orange,Forest Hills,42.300523,-71.113686^' +
    'Red,Alewife,42.395428,-71.142483^' +
    'Red,Davis,42.39674,-71.121815^' +
    'Red,Porter Square,42.3884,-71.11914899999999^' +
    'Red,Harvard Square,42.373362,-71.118956^' +
    'Red,Central Square,42.365486,-71.103802^' +
    'Red,Kendall/MIT,42.36249079,-71.08617653^' +
    'Red,Charles/MGH,42.361166,-71.070628^' +
    'Red,Park Street,42.35639457,-71.0624242^' +
    'Red,Downtown Crossing,42.355518,-71.060225^' +
    'Red,South Station,42.352271,-71.05524200000001^' +
    'Red,Broadway,42.342622,-71.056967^' +
    'Red,Andrew,42.330154,-71.057655^' +
    'Red,JFK/UMass,42.320685,-71.052391^' +
    'Red,Savin Hill,42.31129,-71.053331^' +
    'Red,Fields Corner,42.300093,-71.061667^' +
    'Red,Shawmut,42.29312583,-71.06573796000001^' +
    'Red,Ashmont,42.284652,-71.06448899999999^' +
    'Red,North Quincy,42.275275,-71.029583^' +
    'Red,Wollaston,42.2665139,-71.0203369^' +
    'Red,Quincy Center,42.251809,-71.005409^' +
    'Red,Quincy Adams,42.233391,-71.007153^' +
    'Red,Braintree,42.2078543,-71.0011385^';
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
    if(request.status == 500){
        alert('Error retrieving data from the server.');
        return;
    }
    var parsed = JSON.parse(str);
    if(parsed['line'] == "orange"){
        displayOrange(map, lines, parsed);
    }
    else if(parsed['line'] == "blue"){
        displayBlue(map, lines, parsed);
    }
    else if(parsed['line'] == "red"){
        displayRed(map, lines, parsed);
    }
}
function displayOrange(map, lines, parsed)
{
    var coordinates = new Array(lines.Orange.length);
    var marker = new Array(lines.Orange.length);
    var infowindow = new Array(lines.Orange.length);
    for(i = 0; i < lines.Orange.length; i++){
        marker[i] = new google.maps.Marker({
        icon: 'http://www.google.com/mapfiles/markerT.png',
        title: lines.Orange[i].station
        });
    marker[i].setPosition({
        lat: Number(lines.Orange[i].lat),
        lng: Number(lines.Orange[i].lng)
    });
    marker[i].setMap(map);
    coordinates[i] = new google.maps.LatLng(lines.Orange[i].lat, lines.Orange[i].lng);
    infowindow[i] = new google.maps.InfoWindow({
        position: marker[i].getPosition()
    });
        google.maps.event.addListener(marker[i], 'click', function window(inneri) {
            return function(){
                infowindow[inneri].close();
                var content = makeTable(parsed, lines.Orange[inneri].station);
                infowindow[inneri].setContent(content);
                infowindow[inneri].open(map, marker[inneri]);
            }
        }(i));
    }
    distance(marker);
        var path = new google.maps.Polyline({
        path: coordinates,
        geodesic: true,
        strokeColor: '#ff6600',
        strokeWeight: 5,
      })
      path.setMap(map);
}
function displayBlue(map, lines, parsed)
{
      var coordinates = new Array(lines.Blue.length);
      var marker = new Array(lines.Blue.length);
      var infowindow = new Array(lines.Blue.length);
      for(i = 0; i < lines.Blue.length; i++){
        marker[i] = new google.maps.Marker({
            icon: 'http://www.google.com/mapfiles/markerT.png',
            title: lines.Blue[i].station
        });
        marker[i].setPosition({
            lat: Number(lines.Blue[i].lat),
            lng: Number(lines.Blue[i].lng)
        });
        marker[i].setMap(map);
        coordinates[i] = new google.maps.LatLng(lines.Blue[i].lat, lines.Blue[i].lng);
        infowindow[i] = new google.maps.InfoWindow({
            position: marker[i].getPosition()
        });
        google.maps.event.addListener(marker[i], 'click', function (inneri) {
            return function() {
                infowindow[inneri].close();
                var content = makeTable(parsed, lines.Blue[inneri].station);
                infowindow[inneri].setContent(content);
                infowindow[inneri].open(map, marker[inneri]);
            }
        }(i));
      }
      distance(marker);
      var path = new google.maps.Polyline({
        path: coordinates,
        geodesic: true,
        strokeColor: '#0000ff',
        strokeWeight: 5,
      })
      path.setMap(map);
}
function displayRed(map, lines, parsed)
{
    var coordinates = new Array(17);
    var coordinates2 = new Array(6);
    var marker = new Array(lines.Red.length);
    var infowindow = new Array(lines.Red.length);
    for(i = 0; i < lines.Red.length; i++){
        marker[i] = new google.maps.Marker({
        icon: 'http://www.google.com/mapfiles/markerT.png',
        title: lines.Red[i].station
        });
        marker[i].setPosition({
            lat: Number(lines.Red[i].lat),
            lng: Number(lines.Red[i].lng)
        });
        marker[i].setMap(map);
        if(i < 17){
        coordinates[i] = new google.maps.LatLng(lines.Red[i].lat, lines.Red[i].lng);
        }  
        else {
            coordinates2[i-16] = new google.maps.LatLng(lines.Red[i].lat, lines.Red[i].lng);
        } 
        infowindow[i] = new google.maps.InfoWindow({
            position: marker[i].getPosition()
        });
        google.maps.event.addListener(marker[i], 'click', function(inneri) {
            return function() {
                infowindow[inneri].close();
                var content = makeTable(parsed, lines.Red[inneri].station);
                infowindow[inneri].setContent(content);
                infowindow[inneri].open(map, marker[inneri]);
            }
        }(i));
    }
        distance(marker);
          var path = new google.maps.Polyline({
        path: coordinates,
        geodesic: true,
        strokeColor: '#ff0000',
        strokeWeight: 5,
      });
      path.setMap(map);
      coordinates2[0] = new google.maps.LatLng(lines.Red[12].lat, lines.Red[12].lng); 
        var path2 = new google.maps.Polyline({
            path: coordinates2,
            geodesic: true,
            strokeColor: '#ff0000',
            strokeWeight: 5
        });
        path2.setMap(map);
}

function makeTable(parsed, station)
{
    var table = document.createElement('table');
    var tab = document.createElement('tbody');
    var row, col;
    var foundstation = 0;
    row = document.createElement('tr');
    stationName = document.createTextNode(station);
    row.appendChild(stationName);
    tab.appendChild(row);
    for(var i = 0; i < parsed["schedule"].length; i++)
    {
       row = document.createElement('tr');
       for(var j = 0; j < 4; j++)
       {
            col = document.createElement('td');
                for( var k = 0; k < parsed['schedule'][i]['Predictions'].length; k++)
                {
                    if(parsed['schedule'][i]['Predictions'][k]['Stop'] == station)
                    {
                        foundstation = 1;
                        if((j % 4) == 0)
                        {
                            var line = document.createTextNode(parsed['line']);
                            col.appendChild(line);
                        }
                        else if((j % 4) == 1)
                        {
                            var id = document.createTextNode(parsed['schedule'][i]['TripID']);
                            col.appendChild(id);
                        }
                        else if((j % 4) == 2)
                        {
                            var destination = document.createTextNode(parsed['schedule'][i]['Destination']);
                            col.appendChild(destination);
                        }
                        else
                        {
                            var time = document.createTextNode(parsed['schedule'][i]['Predictions'][k]['Seconds']);
                            col.appendChild(time);
                        }   
                    }
                }
            if(foundstation == 1)
            {    
                row.appendChild(col);
            }
            foundstation = 0;
        }
        tab.appendChild(row);
    }
    table.appendChild(tab);
    return table;
} 
function distance( marker)
{
    Number.prototype.toRad = function() {
        return this * Math.PI / 180;
    }
    var mindist = 999999;
    var index = 0;
    for(var i = 0; i < marker.length; i++)
    {
        var lat2 = myLat; 
        var lon2 = myLng; 
        var lat1 = marker[i].getPosition().k; 
        var lon1 = marker[i].getPosition().A; 

        var R = 6371; // km 

        var x1 = lat2-lat1;
        var dLat = x1.toRad();  
        var x2 = lon2-lon1;
        var dLon = x2.toRad();  
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;
        if(d < mindist)
        {
            mindist = d;
            index = i;
        }
    }
    mindist = mindist * 0.621371; //conversion to miles

 

alert("Closest Station at " + marker[index].title + " " + Number(mindist) + "miles away.");

}


