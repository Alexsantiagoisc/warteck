var map = L.map('map').setView([19.562025, -96.946951], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Computo-soluciones WARTECK'
}).addTo(map);


//--------------------iconos------------------------------------------------------//
var greenIcon = L.icon({
    iconUrl: '/assets/img/ubicacion.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [50, 50], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([19.562009, -96.946965], {icon: greenIcon}).addTo(map);





