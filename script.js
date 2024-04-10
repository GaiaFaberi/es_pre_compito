const map = L.map('map').setView([41.89308809955699, 12.487235760915924], 7);
let btn = document.getElementById("trovaN");


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function creaMarker(){
    
    for(const negozio of negozi){
        let city = negozio.city;
        let latitude = negozio.latitude;
        let longitude = negozio.longitude;
        let address = negozio.address;

        const marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup(address).openPopup();

    }
}

btn.onclick = creaMarker;