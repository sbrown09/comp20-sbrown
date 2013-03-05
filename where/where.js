  	var myLat = 0;
  	var myLong = 0;
  	var me = new google.maps.LatLng(myLat, myLong);
  	var mapOptions = {
		center: me, 
		zoom: 12, 
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map;
	var markers;
	var infowindow = new google.maps.InfoWindow();
	var places;
	var schedreq = new XMLHttpRequest();
	var reqwal = new XMLHttpRequest();
	var Stations = [];
	var Branch = [];
	var infoWindow;
	var abbreviations = [];
	var infowindow = new google.maps.InfoWindow();
function initialize() {
	map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
	pt = new google.maps.LatLng(42.395428, -71.142483);
	markers = new google.maps.Marker({position: pt, title: "Alewife Station", icon: 'RT.png'});
	Stations[0] = pt;
	Stations[0]['name']="Alewife Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.39674, -71.121815);
	markers = new google.maps.Marker({position: pt, title: "Davis Station", icon: 'RT.png'});
	Stations[1] = pt;
	Stations[1]['name']="Davis Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.3884, -71.119149);
	markers = new google.maps.Marker({position: pt, title: "Porter Square Station", icon: 'RT.png'});
	Stations[2] = pt;
	Stations[2]['name']="Porter Square Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.373362, -71.118956);
	markers = new google.maps.Marker({position: pt, title: "Harvard Square Station", icon: 'RT.png'});
	Stations[3] = pt;
	Stations[3]['name']="Harvard Square Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.365486, -71.103802);
	markers = new google.maps.Marker({position: pt, title: "Central Square Station", icon: 'RT.png'});
	Stations[4] = pt;
	Stations[4]['name']="Central Square Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.36249079, -71.08617653);
	markers = new google.maps.Marker({position: pt, title: "Kendall/MIT Station", icon: 'RT.png'});
	Stations[5] = pt;
	Stations[5]['name']="Kendall/MIT Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.361166, -71.070628);
	markers = new google.maps.Marker({position: pt, title: "Charles/MGH Station", icon: 'RT.png'});
	Stations[6] = pt;
	Stations[6]['name']="Charles/MGH Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.35639457, -71.0624242);
	markers = new google.maps.Marker({position: pt, title: "Park St. Station", icon: 'RT.png'});
	Stations[7] = pt;
	Stations[7]['name']="Park St. Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.355518, -71.060225);
	markers = new google.maps.Marker({position: pt, title: "Downtown Crossing Station", icon: 'RT.png'});
	Stations[8] = pt;
	Stations[8]['name']="Downtown Crossing Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.352271, -71.055242);
	markers = new google.maps.Marker({position: pt, title: "South Station", icon: 'RT.png'});
	Stations[9] = pt;
	Stations[9]['name']="South Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.342622, -71.056967);
	markers = new google.maps.Marker({position: pt, title: "Broadway Station", icon: 'RT.png'});
	Stations[10] = pt;
	Stations[10]['name']="Broadway Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.330154, -71.057655);
	markers = new google.maps.Marker({position: pt, title: "Andrew Station", icon: 'RT.png'});
	Stations[11] = pt;
	Stations[11]['name']="Andrew Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.320685, -71.052391);
	markers = new google.maps.Marker({position: pt, title: "JFK/UMass Station", icon: 'RT.png'});
	Stations[12] = pt;
	Stations[12]['name']="JFK/UMass Station";
	Branch[0] = pt;
	Branch[0]['name']="JFK/UMass Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.275275, -71.029583);
	markers = new google.maps.Marker({position: pt, title: "North Quincy Station", icon: 'RT.png'});
	Stations[13] = pt;
	Stations[13]['name']="North Quincy Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.31129, -71.05333);
	markers = new google.maps.Marker({position: pt, title: "Savin Hill Station", icon: 'RT.png'});
	Branch[1] = pt;
	Branch[1]['name']="Savin Hill Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.300093, -71.061667);
	markers = new google.maps.Marker({position: pt, title: "Fields Corner Station", icon: 'RT.png'});
	Branch[2] = pt;
	Branch[2]['name']="Fields Corner Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.2665139, -71.0203369);
	markers = new google.maps.Marker({position: pt, title: "Wollaston Station", icon: 'RT.png'});
	Stations[14] = pt;
	Stations[14]['name']="Wollaston Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.251809, -71.005409);
	markers = new google.maps.Marker({position: pt, title: "Quincy Center Station", icon: 'RT.png'});
	Stations[15] = pt;
	Stations[15]['name']="Quincy Center Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.29312583, -71.06573796);
	markers = new google.maps.Marker({position: pt, title: "Shawmut Station", icon: 'RT.png'});
	Branch[3] = pt;
	Branch[3]['name']="Shawmut Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.233391, -71.007153);
	markers = new google.maps.Marker({position: pt, title: "Quincy Adams Station", icon: 'RT.png'});
	Stations[16] = pt;
	Stations[16]['name']="Quincy Adams Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.284652, -71.064489);
	markers = new google.maps.Marker({position: pt, title: "Ashmont Station", icon: 'RT.png'});
	Branch[4] = pt;
	Branch[4]['name']="Ashmont Station";
	markers.setMap(map);
	pt = new google.maps.LatLng(42.2078543, -71.0011385);
	markers = new google.maps.Marker({position: pt, title: "Braintree Station", icon: 'RT.png'});
	Stations[17] = pt;
	Stations[17]['name']="Braintree Station";
	markers.setMap(map);
	
	redLine = new google.maps.Polyline({
		path:Stations,
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 10
	})
	redLine.setMap(map);
	branch = new google.maps.Polyline({
		path:Branch,
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 10
	})
	branch.setMap(map);
	
	getme();
}

function getme(){
	if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLong = position.coords.longitude;
			renderMap();
			schedule();
		});
				
    }
  else{alert("Geolocation is not supported by this browser.");}
}


function renderMap(){
			me = new google.maps.LatLng(myLat, myLong);
			map.panTo(me);
			markers = new google.maps.Marker({
					position: me,
					title: "Here I Am!",
				});
				markers.setMap(map);

//			if (closestPt != null) {
//				closestLine = new google.maps.Polyline({
//					path: [me, closestPt],
//					strokeColor: "#000000",
//					strokeOpacity: 0.5,
//					strokeWeight: 15
//				});
//				closestLine.setMap(map);
//			}
Number.prototype.toRad = function() {
   return this * Math.PI / 180;
}

var lat2 = myLat; 
var lon2 = myLong;
var dist = 999999;
for(i = 0; i<Stations.length; i++){
var lat1 = Stations[i]['ib']; 
var lon1 = Stations[i]['jb']; 

var R = 6371; // km 
//has a problem with the .toRad() method below.
var x1 = lat2-lat1;
var dLat = x1.toRad();  
var x2 = lon2-lon1;
var dLon = x2.toRad();  
var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * Math.sin(dLon/2) * Math.sin(dLon/2);  
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
var d = R * c; 
var closest;
var closest1;
var closest2;
if(d < dist){
	closest1 = Stations[i];
	dist = d;
}
}
var distance = 100;
for(j = 0; j< Branch.length; j++){
var lat1 = Branch[j]['ib']; 
var lon1 = Branch[j]['jb']; 
var R = 6371; // km 
var x1 = lat2-lat1;
var dLat = x1.toRad();  
var x2 = lon2-lon1;
var dLon = x2.toRad();  
var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
var q = R * c; 
if(q < distance){
	closest2 = Branch[j];
	distance = q;
}
}
if(dist>distance){
	closest = closest2;
}
if(dist<distance){
	closest = closest1;
}

			infoWindow = new google.maps.InfoWindow({
				content: "Closest T Station is " + closest['name'] + " and it is " + dist + " miles away.",
				position: me
			});
			infoWindow.open(map);
			
			closestPt = new google.maps.LatLng(closest['ib'], closest['jb']);
			pathT = new google.maps.Polyline({
				path: [me, closestPt],
				strokeColor: "#FFFFFF",
				strokeOpacity: 1.0,
				strokeWeight: 10
			})
			pathT.setMap(map);
			
//			google.maps.event.addListener(markers, 'click', function() {
//				infowindow.open(map,markers);
  //			});
}

function schedule() {
	schedreq.open("GET", "http://mbtamap-cedar.herokuapp.com/mapper/redline.json ",true);
	schedreq.send(null);
	schedreq.onreadystatechange = callback;
	}

function callback() {
    abbreviate();
    str = "";
    if (schedreq.readyState == 4 && schedreq.status == 200){
        tsched = JSON.parse(schedreq.responseText);

        for(m = 0; m < abbreviations.length; m++){
            for(i = 0; i < tsched.length; i++){
            
                if (tsched[i]["PlatformKey"] == abbreviations[m]["abb"]){
                    line = tsched[i]["Line"];
                    name = tsched[i]["PlatformKey"];
                    trip = tsched[i]["Trip"];
                    time = tsched[i]["TimeRemaining"];
                    if (tsched[i]["PlatformKey"][4] == 'N'){
                        dir = "North";
                    }
                    else {
                        dir = "South";
                    }
                    var name_full = abbreviations[m]["full_name"];
                    str += line +" "+ trip +" "+ dir +" " + time + "<p>"
                    var index = m;
                }
           }
           prepare('RT.png', abbreviations[index]["lat"], abbreviations[index]["lng"], name_full, str);    
              
        }
        
    }
    findpeople();
}
        
    

function prepare(icon, latitude, longitude, name, str){
    loc = new google.maps.LatLng(latitude, longitude);
    marker = new google.maps.Marker({
        map: map,
        position: loc,
        icon: icon
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(name + "<p>" + "Line " + "Trip" +" "+ "Bound " + "Time" + "<p>"+ str);
        infowindow.open(map, this);
    });
}

	
function abbreviate(){
    abbreviations[0] = {"abb": "RALEN", "full_name": "Alewife Station", "lat": 42.395428, "lng": -71.142483};
    abbreviations[1] = {"abb": "RDAVN", "full_name": "Davis Station", "lat":42.39674, "lng": -71.119149};
    abbreviations[2] = {"abb": "RDAVS", "full_name": "Davis Station", "lat":42.39674, "lng": -71.119149};
    abbreviations[3] = {"abb": "RPORN", "full_name": "Porter Square", "lat":42.3884, "lng": -71.119149};
    abbreviations[4] = {"abb": "RPORS", "full_name": "Porter Square", "lat":42.3884, "lng": -71.119149};
    abbreviations[5] = {"abb": "RHARN", "full_name": "Harvard Square", "lat":42.373362, "lng": -71.118956};
    abbreviations[6] = {"abb": "RHARS", "full_name": "Harvard Square", "lat":42.373362, "lng": -71.118956};
    abbreviations[7] = {"abb": "RCENN", "full_name": "Central Square Square", "lat":42.365486, "lng":-71.103802};
    abbreviations[8] = {"abb": "RCENS", "full_name": "Central Square Square", "lat":42.365486, "lng":-71.103802};
    abbreviations[9] = {"abb": "RKENN", "full_name": "Kendall/MIT Square", "lat":42.36249079, "lng":-71.08617653};
    abbreviations[10] = {"abb": "RKENS", "full_name": "Kendall/MIT Square", "lat":42.36249079, "lng":-71.08617653};
    abbreviations[11] = {"abb": "RMGHN", "full_name": "Charles/MGH Square", "lat":42.361166, "lng":-71.070628};
    abbreviations[12] = {"abb": "RMGHS", "full_name": "Charles/MGH Square", "lat":42.361166, "lng":-71.070628};
    abbreviations[13] = {"abb": "RPRKN", "full_name": "Park St. Square", "lat":42.35639457, "lng":-71.0624242};
    abbreviations[14] = {"abb": "RPRKS", "full_name": "Park St. Square", "lat":42.35639457, "lng":-71.0624242};
    abbreviations[15] = {"abb": "RDTCN", "full_name": "Downtown Crossing Square", "lat":42.355518, "lng":-71.060225};
    abbreviations[16] = {"abb": "RDTCS", "full_name": "Downtown Crossing Square", "lat":42.355518, "lng":-71.060225};
    abbreviations[17] = {"abb": "RSOUN", "full_name": "South Square", "lat":42.352271, "lng":-71.055242};
    abbreviations[18] = {"abb": "RSOUS", "full_name": "South Square", "lat":42.352271, "lng":-71.055242 };
    abbreviations[19] = {"abb": "RBRON", "full_name": "Broadway Square", "lat":42.342622, "lng":-71.056967};
    abbreviations[20] = {"abb": "RBROS", "full_name": "Broadway Square", "lat":42.342622, "lng":-71.056967};
    abbreviations[21] = {"abb": "RANDN", "full_name": "Andrew Square", "lat":42.350154, "lng":-71.057655};
    abbreviations[22] = {"abb": "RANDS", "full_name": "Andrew Square", "lat":42.350154, "lng":-71.057655};
    abbreviations[23] = {"abb": "RJFKN", "full_name": "JFK/UMass Square", "lat":42.320685, "lng":-71.052391};
    abbreviations[24] = {"abb": "RJFKS", "full_name": "JFK/UMass Square", "lat":42.320685, "lng":-71.052391};
    abbreviations[25] = {"abb": "RSAVN", "full_name": "Savin Hall Square", "lat":42.31129, "lng":-71.053331};
    abbreviations[26] = {"abb": "RSAVS", "full_name": "Savin Hall Square", "lat":42.31129, "lng":-71.053331};
    abbreviations[27] = {"abb": "RFIEN", "full_name": "Fields Corner Square", "lat":42.300093, "lng":-71.061667};
    abbreviations[28] = {"abb": "RFIES", "full_name": "Fields Corner Square", "lat":42.300093, "lng":-71.061667};
    abbreviations[29] = {"abb": "RFIEN", "full_name": "Shawmut Square", "lat":42.29312583, "lng":-71.06573796};
    abbreviations[30] = {"abb": "RFIES", "full_name": "Shawmut Square", "lat":42.29312583, "lng":-71.06573796};
    abbreviations[31] = {"abb": "RASHS", "full_name": "Ashmont Square", "lat":42.284652, "lng":-71.064489};
    abbreviations[32] = {"abb": "RNQUN", "full_name": "North Quincy Square", "lat":42.275275, "lng":-71.029583};
    abbreviations[33] = {"abb": "RNQUS", "full_name": "North Quincy Square", "lat":42.275275, "lng":-71.029583};
    abbreviations[34] = {"abb": "RWOLN", "full_name": "Wollaston Square", "lat":42.2665139, "lng":-71.0203369};
    abbreviations[35] = {"abb": "RWOLS", "full_name": "Wollaston Square", "lat":42.2665139, "lng":-71.0203369};
    abbreviations[36] = {"abb": "RQUCN", "full_name": "Quincy Center Square", "lat":42.251809, "lng":-71.005409};
    abbreviations[37] = {"abb": "RQUCS", "full_name": "Quincy Center Square", "lat":42.251809, "lng":-71.005409};
    abbreviations[38] = {"abb": "RQUAN", "full_name": "Quincy Adams Square", "lat":42.233391, "lng":-71.008153};
    abbreviations[39] = {"abb": "RQUAS", "full_name": "Quincy Adams Square", "lat":42.233391, "lng":-71.008153};
    abbreviations[40] = {"abb": "RBRAS", "full_name": "Braintree Square", "lat":42.2078543, "lng":-71.0011385};
}

function findpeople() {
	reqwal.open("GET", "http://messagehub.herokuapp.com/a3.json",true);
	reqwal.send(null);
	reqwal.onreadystatechange = waldo;
}

function waldo(){
	if (reqwal.readyState == 4 && reqwal.status == 200){
        ppl = JSON.parse(reqwal.responseText);
        if(ppl.length != 0){
	        for(i=0;i<ppl.length;i++){
		        if(ppl[i]['name']=="Waldo"){
		        	dWal = distfromme(ppl[i]['loc']['latitude'],ppl[i]['loc']['longitude']);
			        persondisp('waldo.png', "Waldo ", dWal); 
		        }
		        if(ppl[i]['name']=="Carmen Sandiego"){
		        	dCar = distfromme(ppl[i]['loc']['latitude'],ppl[i]['loc']['longitude']);
			        persondisp('carmen.png', "Carmen Sandiego ", dCar);
			    }
	        }
	    }
}
}

function distfromme(lat, lon){
	Number.prototype.toRad = function() {
   return this * Math.PI / 180;
}
var lat2 = myLat; 
var lon2 = myLong;
var farness = 100;
var t;
 lat1 = lat; 
 lon1 = lon;  
 R = 6371; 
 x1 = lat2-lat1;
 dLat = x1.toRad();  
 x2 = lon2-lon1;
 dLon = x2.toRad();  
 a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * Math.sin(dLon/2) * Math.sin(dLon/2);  
 c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
 t = R * c; 
 return t;
}


function persondisp(icon, name, howfar){

    dude = new google.maps.LatLng(lat1, lon1);
    marker = new google.maps.Marker({
        map: map,
        position: dude,
        icon: icon
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(name + "is " + howfar + " miles away from you.");
        infowindow.open(map, this);
    });
}
