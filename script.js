function init(){
  var el entryinput = document.getElementById("canvas");
  var myLocation = new google.maps.LatLng(41.835117, -87.627130);
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'iit-icon.png'
  });
  // if (input_text.value == "") {
  //     alert("Please enter an entity.");
  //     return false;
  // }
  // alert("Hello " + entryinput + "!");
  // return true
}
//add your JavaScript between these two lines of code








window.addEventListener('load', init);
