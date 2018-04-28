function myFunction() {
  var map = L.map('map').setView([51.101516, 10.313446], 6);
  if (map.tap) map.tap.disable();
  L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);
  map._layersMinZoom=5;
 
// add a layer group, yet empty
var markersLayer = new L.LayerGroup();  
map.addLayer(markersLayer); 
 
// add the search bar to the map
  var controlSearch = new L.Control.Search({
    position:'topleft',    // where do you want the search bar?
    layer: markersLayer,  // name of the layer
    initial: false,
    zoom: 11,        // set zoom to found location when searched
    marker: false,
    textPlaceholder: 'search...' // placeholder while nothing is searched
  });
 
  map.addControl(controlSearch); // add it to the map
