//mappa
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

//grafico

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Xiaomi Note 11S', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})


//funzioni mappa
btn.onclick = creaMarker;

//funzioni grafico