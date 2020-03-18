var map;
var dcenter;
function initMap() {
  map = /* new google.maps.Map is a fucntion which takes in 2 parameters 
          1st is the object that we have created and 2nd is some options
             */new google.maps.Map(document.getElementById('map'), {
    center: {lat: 28.7041, lng: 77.1025},
    zoom: 8 /* max zoom can be 14 
              1: World
5: Landmass/continent
10: City
15: Streets
20: Buildings*/


    
  });

  // Adding marker on clicking on map//
  google.maps.event.addListener(map,'click',function(event){
    addmarkers({coords:event.latLng});
  });
  
  //Dynamically adding markers//
  var lati = document.getElementById('lat').value;
  var longi = document.getElementById('long').value;
  var btn = document.getElementById('sub');
  btn.addEventListener('click', function(){
    markers.push({coords:{lat:lati, lng:longi}});
    
  });




  var marker;
  var infowindow;
  var markers = [{coords:{lat: 28.7041, lng: 77.1025},
    infowindow:"<h1>Delhi</h1>"},
    {coords:{lat: 28.6692, lng: 77.4538}},
    {coords:{lat: 28.4595, lng: 77.0266}}
  ];
 

  for(var i=0; i < markers.length; i++){
    addmarkers(markers[i]);
  };


  
  
  
  /*
  // Add marker //
  var marker = new google.maps.Marker({
    position:{lat: 28.7041, lng: 77.1025},
    map:map,
    icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'//custom marker//
  });

  var infowindow = new google.maps.InfoWindow({
    content:'<h3>Delhi</h3>' //if we save it there it will not show any info bcoz we have to add an event listener to the marker//
  });
  marker.addListener('click', function(){
    infowindow.open(map, marker); /*To make the info window visible, you need to call the open() method on the InfoWindow,
     passing it the Map on which to open, and optionally,the Marker with which to anchor it
  }); */

  // Add markers function
  function addmarkers(props){
     marker = new window.google.maps.Marker({
      position:props.coords,
      map:map
    });
    var infowindow = new window.google.maps.InfoWindow({
      content:props.infowindow 
    });
    marker.addListener('click', function(){
      infowindow.open(map, marker); 
    });

  };
  
} 