//map code
var marker;
var markerdogwalk;
function initMap(){
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: -41.132085, lng: 175.029932},
          mapTypeId: google.maps.MapTypeId.STREET
        });
        console.log(map);


        var flightPlanCoordinates = [
          {lat:  -41.130020, lng:175.031356},
          {lat: -41.135417, lng:175.034820},
          {lat: -41.136600, lng: 175.032479},
          {lat: -41.133292, lng: 175.027011},
          {lat: -41.130020, lng: 175.027011},
          {lat: -41.129152, lng: 175.026280},
          {lat:  -41.130020, lng:175.031356},


        ];
        var dogWalk = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        
        var myLatLng = {lat: -41.130020, lng: 175.031356};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: myLatLng
        });

        markerdogwalk = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Dog walk Starts and finishes here!',
          icon: "img/rsz_pink-logo.jpg"
          
        });

        
      markerdogwalk.addListener('click', toggleBounce);

      dogWalk.setMap(map);
}

    function toggleBounce() {
      if (markerdogwalk.getAnimation() !== null) {
        markerdogwalk.setAnimation(null);
      } else {
        markerdogwalk.setAnimation(google.maps.Animation.BOUNCE);
      }
        
}






$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
  });
});

$( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
  });
});

//Accordian code
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}


     
    
    

