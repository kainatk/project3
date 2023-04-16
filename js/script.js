// map.js
function initMap() {
// Set the map options
const options = {
zoom: 12,
center: { lat: 41.8781, lng: -87.6298 } // Chicago, IL
};

// Create a new map object
const map = new google.maps.Map(document.getElementById("google-map"), options);

// Add a marker to a specific location with a tooltip
const marker = new google.maps.Marker({
position: { lat: 41.8781, lng: -87.6298 },
map: map,
title: "Chicago, IL"
});

// Add a search box to search for locations
const searchBox = new google.maps.places.SearchBox(document.querySelector("#search-box"));

// Show user's location on the map
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(position => {
const userLocation = {
lat: position.coords.latitude,
lng: position.coords.longitude
};
map.setCenter(userLocation);
const userMarker = new google.maps.Marker({
position: userLocation,
map: map,
icon: {
url: "https://maps.google.com/mapfiles/kml/shapes/man.png",
scaledSize: new google.maps.Size(48, 48)
}
});
});
}
}





