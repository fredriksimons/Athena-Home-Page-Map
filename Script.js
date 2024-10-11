<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Athena Property Map</title>
  <link rel="stylesheet" href="Style.css">
</head>
<body>

    <div id="map"></div>

    <!-- Define the initMap function inline to ensure it’s available when Google Maps API calls it -->
    <script>
      function initMap() {
          // Initialize the map
          const map = new google.maps.Map(document.getElementById('map'), {
              center: { lat: 51.9058, lng: -2.0796 }, // Coordinates for Francis Close Hall Campus, Cheltenham
              zoom: 16,  // Zoom level set to 16
              mapId: '9c30f2b062cb57db' // Your new Map ID
          });

          // Define the custom house icon
          const houseIcon = {
              url: 'House Icon.png', // Path to your house icon image
              scaledSize: new google.maps.Size(40, 40), // Size of the icon
              origin: new google.maps.Point(0, 0), // Origin of the image
              anchor: new google.maps.Point(20, 40) // Anchor the icon at the bottom center
          };

          // Define the custom university icon
          const universityIcon = {
              url: 'University Icon.png', // Path to your university icon image
              scaledSize: new google.maps.Size(40, 40), // Size of the icon
              origin: new google.maps.Point(0, 0), // Origin of the image
              anchor: new google.maps.Point(20, 40) // Anchor the icon at the bottom center
          };

          // Add markers with custom icons and animation for properties
          const locations = [
              { lat: 51.90589663784391, lng: -2.082536341284594, title: "24 Granville Street, Cheltenham" },
              { lat: 51.905102, lng: -2.079061, title: "5 St Pauls Lane, Cheltenham" },
              { lat: 51.905035468672125, lng: -2.0788358356629195, title: "5 St Pauls Street North, Cheltenham" }
          ];

          locations.forEach(location => {
              new google.maps.Marker({
                  position: { lat: location.lat, lng: location.lng },
                  map: map, // Reference to the initialized map
                  title: location.title,
                  icon: houseIcon, // Use the custom house icon
                  animation: google.maps.Animation.DROP // Apply animation
              });
          });

          // Add a marker for the university with the university icon
          new google.maps.Marker({
              position: { lat: 51.90535186167893, lng: -2.0799602197702884 }, // Coordinates for Francis Close Hall Campus
              map: map, // Reference to the initialized map
              title: "Francis Close Hall Campus",
              icon: universityIcon // Use the custom university icon
          });
      }
    </script>

    <!-- Load your map script AFTER the HTML content and the inline initMap -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAqdEVwbUJDfip8NFdSaIwyoWgb-Vod3UU&map_ids=9c30f2b062cb57db&callback=initMap" async defer></script>

    <!-- Load any additional JS from Script.js -->
    <script src="Script.js"></script>
</body>
</html>
