$(document).ready(function(){
  $('.customers-carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    autoplay:true,
    responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }]
  });
});
function init_map(){
  var myOptions = {
    zoom:10,
    center:new google.maps.LatLng(52.5302157,4.895167899999933),mapTypeId: google.maps.MapTypeId.ROADMAP};
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(52.3702157,4.895167899999933)});
    infowindow = new google.maps.InfoWindow({content:'<strong>Dangelo Brusorio</strong><br>Ontwerp1, Nederland<br>'});
    google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
    infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);
