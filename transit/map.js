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
        		infowindow.setContent("I am here: " + myLat + " " + myLng);
        		infowindow.open(map, marker);
        });
    })
    placeStation(map);
}
google.maps.event.addDomListener(window, 'load', load);

function placeStation(map){    

    str = '{"line":"orange","schedule":[{"TripID":"O9861B101","Destination":"Oak
Grove","Predictions":[{"StopID":"70001","Stop":"Forest
Hills","Seconds":178},{"StopID":"70003","Stop":"Green
Street","Seconds":271},{"StopID":"70005","Stop":"Stony
Brook","Seconds":375},{"StopID":"70007","Stop":"Jackson
Square","Seconds":473},{"StopID":"70009","Stop":"Roxbury Crossing","Seconds":573
},{"StopID":"70011","Stop":"Ruggles","Seconds":667},{"StopID":"70013","Stop":"Ma
ss Ave","Seconds":762},{"StopID":"70015","Stop":"Back
Bay","Seconds":899},{"StopID":"70017","Stop":"Tufts Medical","Seconds":1027},{"S
topID":"70019","Stop":"Chinatown","Seconds":1110}]},{"TripID":"O9861B100","Desti
nation":"Forest Hills","Position":{"Timestamp":1393877451,"Train":"1299","Lat":4
2.30331,"Long":-71.11239,"Heading":210},"Predictions":[{"StopID":"70001","Stop":
"Forest Hills","Seconds":14}]},{"TripID":"O9861B076","Destination":"Forest
Hills","Predictions":[{"StopID":"70036","Stop":"Oak
Grove","Seconds":334},{"StopID":"70034","Stop":"Malden Center","Seconds":438},{"
StopID":"70032","Stop":"Wellington","Seconds":652},{"StopID":"70030","Stop":"Sul
livan","Seconds":889},{"StopID":"70028","Stop":"Community
College","Seconds":1034},{"StopID":"70026","Stop":"North
Station","Seconds":1183}]},{"TripID":"O9861B092","Destination":"Forest
Hills","Predictions":[{"StopID":"70036","Stop":"Oak
Grove","Seconds":699},{"StopID":"70034","Stop":"Malden Center","Seconds":803},{"
StopID":"70032","Stop":"Wellington","Seconds":1017}]},{"TripID":"O9861B11D","Des
tination":"Oak Grove","Predictions":[{"StopID":"70001","Stop":"Forest
Hills","Seconds":353},{"StopID":"70003","Stop":"Green
Street","Seconds":446},{"StopID":"70005","Stop":"Stony
Brook","Seconds":550},{"StopID":"70007","Stop":"Jackson
Square","Seconds":648},{"StopID":"70009","Stop":"Roxbury Crossing","Seconds":748
},{"StopID":"70011","Stop":"Ruggles","Seconds":842},{"StopID":"70013","Stop":"Ma
ss Ave","Seconds":937},{"StopID":"70015","Stop":"Back
Bay","Seconds":1074}]},{"TripID":"O9861B0E8","Destination":"Oak Grove","Position
":{"Timestamp":1393877478,"Train":"1212","Lat":42.3054,"Long":-71.11077,"Heading
":30},"Predictions":[{"StopID":"70003","Stop":"Green
Street","Seconds":31},{"StopID":"70005","Stop":"Stony
Brook","Seconds":135},{"StopID":"70007","Stop":"Jackson
Square","Seconds":233},{"StopID":"70009","Stop":"Roxbury Crossing","Seconds":333
},{"StopID":"70011","Stop":"Ruggles","Seconds":427},{"StopID":"70013","Stop":"Ma
ss Ave","Seconds":522},{"StopID":"70015","Stop":"Back
Bay","Seconds":659},{"StopID":"70017","Stop":"Tufts Medical","Seconds":787},{"St
opID":"70019","Stop":"Chinatown","Seconds":870},{"StopID":"70021","Stop":"Downto
wn Crossing","Seconds":955},{"StopID":"70023","Stop":"State Street","Seconds":10
52},{"StopID":"70025","Stop":"Haymarket","Seconds":1127}]},{"TripID":"O9861B0C2"
,"Destination":"Oak Grove","Position":{"Timestamp":1393877464,"Train":"1271","La
t":42.34758,"Long":-71.07465,"Heading":85},"Predictions":[{"StopID":"70017","Sto
p":"Tufts Medical","Seconds":103},{"StopID":"70019","Stop":"Chinatown","Seconds"
:186},{"StopID":"70021","Stop":"Downtown
Crossing","Seconds":271},{"StopID":"70023","Stop":"State Street","Seconds":368},
{"StopID":"70025","Stop":"Haymarket","Seconds":443},{"StopID":"70027","Stop":"No
rth Station","Seconds":522},{"StopID":"70029","Stop":"Community College","Second
s":664},{"StopID":"70031","Stop":"Sullivan","Seconds":795},{"StopID":"70033","St
op":"Wellington","Seconds":1017}]},{"TripID":"O9861B132","Destination":"Oak
Grove","Predictions":[{"StopID":"70001","Stop":"Forest
Hills","Seconds":1005},{"StopID":"70003","Stop":"Green
Street","Seconds":1098}]},{"TripID":"O9861B0AF","Destination":"Oak Grove","Posit
ion":{"Timestamp":1393877446,"Train":"1277","Lat":42.35533,"Long":-71.06059,"Hea
ding":25},"Predictions":[{"StopID":"70023","Stop":"State Street","Seconds":54},{
"StopID":"70025","Stop":"Haymarket","Seconds":129},{"StopID":"70027","Stop":"Nor
th Station","Seconds":208},{"StopID":"70029","Stop":"Community College","Seconds
":350},{"StopID":"70031","Stop":"Sullivan","Seconds":481},{"StopID":"70033","Sto
p":"Wellington","Seconds":703},{"StopID":"70035","Stop":"Malden
Center","Seconds":919},{"StopID":"70036","Stop":"Oak
Grove","Seconds":1099}]},{"TripID":"O9861B091","Destination":"Oak Grove","Positi
on":{"Timestamp":1393877447,"Train":"1288","Lat":42.38752,"Long":-71.07693,"Head
ing":355},"Predictions":[{"StopID":"70033","Stop":"Wellington","Seconds":106},{"
StopID":"70035","Stop":"Malden
Center","Seconds":322},{"StopID":"70036","Stop":"Oak
Grove","Seconds":502}]},{"TripID":"O9861B11C","Destination":"Forest Hills","Posi
tion":{"Timestamp":1393877475,"Train":"1201","Lat":42.31529,"Long":-71.10523,"He
ading":205},"Predictions":[{"StopID":"70002","Stop":"Green
Street","Seconds":34},{"StopID":"70001","Stop":"Forest
Hills","Seconds":189}]},{"TripID":"O9861B178","Destination":"Forest Hills","Posi
tion":{"Timestamp":1393877465,"Train":"1294","Lat":42.3981,"Long":-71.07729,"Hea
ding":177},"Predictions":[{"StopID":"70030","Stop":"Sullivan","Seconds":113},{"S
topID":"70028","Stop":"Community
College","Seconds":258},{"StopID":"70026","Stop":"North Station","Seconds":407},
{"StopID":"70024","Stop":"Haymarket","Seconds":493},{"StopID":"70022","Stop":"St
ate Street","Seconds":582},{"StopID":"70020","Stop":"Downtown Crossing","Seconds
":656},{"StopID":"70018","Stop":"Chinatown","Seconds":756},{"StopID":"70016","St
op":"Tufts Medical","Seconds":809},{"StopID":"70014","Stop":"Back
Bay","Seconds":906},{"StopID":"70012","Stop":"Mass Ave","Seconds":1059},{"StopID
":"70010","Stop":"Ruggles","Seconds":1148}]},{"TripID":"O9861B04A","Destination"
:"Forest Hills","Position":{"Timestamp":1393877411,"Train":"1220","Lat":42.43772
,"Long":-71.0708,"Heading":5},"Predictions":[{"StopID":"70036","Stop":"Oak
Grove","Seconds":119},{"StopID":"70034","Stop":"Malden Center","Seconds":223},{"
StopID":"70032","Stop":"Wellington","Seconds":437},{"StopID":"70030","Stop":"Sul
livan","Seconds":674},{"StopID":"70028","Stop":"Community
College","Seconds":819},{"StopID":"70026","Stop":"North Station","Seconds":968},
{"StopID":"70024","Stop":"Haymarket","Seconds":1054},{"StopID":"70022","Stop":"S
tate Street","Seconds":1141}]},{"TripID":"O9861B131","Destination":"Forest Hills
","Position":{"Timestamp":1393877436,"Train":"1285","Lat":42.34806,"Long":-71.06
641,"Heading":230},"Predictions":[{"StopID":"70014","Stop":"Back
Bay","Seconds":27},{"StopID":"70012","Stop":"Mass Ave","Seconds":180},{"StopID":
"70010","Stop":"Ruggles","Seconds":269},{"StopID":"70008","Stop":"Roxbury
Crossing","Seconds":378},{"StopID":"70006","Stop":"Jackson
Square","Seconds":479},{"StopID":"70004","Stop":"Stony
Brook","Seconds":594},{"StopID":"70002","Stop":"Green
Street","Seconds":686},{"StopID":"70001","Stop":"Forest
Hills","Seconds":841}]},{"TripID":"O9861B075","Destination":"Oak Grove","Positio
n":{"Timestamp":1393877446,"Train":"1287","Lat":42.42669,"Long":-71.07428,"Headi
ng":20},"Predictions":[{"StopID":"70036","Stop":"Oak
Grove","Seconds":137}]},{"TripID":"O9861B194","Destination":"Forest Hills","Posi
tion":{"Timestamp":1393877466,"Train":"1227","Lat":42.42322,"Long":-71.07574,"He
ading":200},"Predictions":[{"StopID":"70032","Stop":"Wellington","Seconds":124},
{"StopID":"70030","Stop":"Sullivan","Seconds":361},{"StopID":"70028","Stop":"Com
munity College","Seconds":506},{"StopID":"70026","Stop":"North Station","Seconds
":655},{"StopID":"70024","Stop":"Haymarket","Seconds":741},{"StopID":"70022","St
op":"State Street","Seconds":830},{"StopID":"70020","Stop":"Downtown Crossing","
Seconds":904},{"StopID":"70018","Stop":"Chinatown","Seconds":1004},{"StopID":"70
016","Stop":"Tufts Medical","Seconds":1057},{"StopID":"70014","Stop":"Back
Bay","Seconds":1154}]},{"TripID":"O9861B165","Destination":"Forest Hills","Posit
ion":{"Timestamp":1393877472,"Train":"1309","Lat":42.36026,"Long":-71.05772,"Hea
ding":175},"Predictions":[{"StopID":"70022","Stop":"State
Street","Seconds":-2},{"StopID":"70020","Stop":"Downtown Crossing","Seconds":72}
,{"StopID":"70018","Stop":"Chinatown","Seconds":172},{"StopID":"70016","Stop":"T
ufts Medical","Seconds":225},{"StopID":"70014","Stop":"Back
Bay","Seconds":322},{"StopID":"70012","Stop":"Mass Ave","Seconds":475},{"StopID"
:"70010","Stop":"Ruggles","Seconds":564},{"StopID":"70008","Stop":"Roxbury
Crossing","Seconds":673},{"StopID":"70006","Stop":"Jackson
Square","Seconds":774},{"StopID":"70004","Stop":"Stony
Brook","Seconds":889},{"StopID":"70002","Stop":"Green
Street","Seconds":981},{"StopID":"70001","Stop":"Forest
Hills","Seconds":1136}]}]}';
var parsed = JSON.parse(str);
console.log(parsed['line']);    
// marker = new google.maps.Marker({     
//postion:      
//}) }
