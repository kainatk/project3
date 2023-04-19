function initMap() {
    // Create a map centered on New York City
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7128, lng: -74.0060},
      zoom: 12
    });
  
    // Add a marker for the Empire State Building
    var empireStateBuilding = new google.maps.Marker({
      position: {lat: 40.7484, lng: -73.9857},
      map: map,
      title: 'Empire State Building'
    });
  
    // Add an info window to the Empire State Building marker
    var empireStateInfoWindow = new google.maps.InfoWindow({
      content: '<h2>Empire State Building</h2><p>A 102-story skyscraper located in Midtown Manhattan.</p>'
    });
    empireStateInfoWindow.open(map, empireStateBuilding);
  
    // Add a button to center the map on the Statue of Liberty
    var centerButton = document.getElementById('center-btn');
    centerButton.addEventListener('click', function() {
      map.setCenter({lat: 40.6892, lng: -74.0445});
      map.setZoom(15);
    });
  }