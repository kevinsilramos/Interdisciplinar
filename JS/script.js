var map = L.map("map").setView([-23.57080, -46.49082], 16); 


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

var greenIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.marker([-23.57080, -46.49082], { icon: greenIcon })
  .addTo(map)
  .bindPopup(
    "<strong>JWC Eletrônica</strong><br>Rua Luís Norberto Freire, 448<br>Jardim Brasília<br>São Paulo - SP"
  )
  .openPopup(); 