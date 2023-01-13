var map = L.map('map').setView([25.1260333,-101.5661374], 5);
var popup = L.popup();
var latitud = document.getElementById("latitud");
var longitud = document.getElementById("longitud");
var colores = document.getElementById("colores");
var contador = 0;
var pMark = 0;
var nombre = document.getElementById("nombre");
var nMarcadores = [];
var latMarcadores = [];
var lonMarcadores = [];
var greenIcon = L.icon({
    iconUrl: 'M_Verde.png',
    shadowUrl: 'M_Sombra.png',

    iconSize:     [38, 50], 
    shadowSize:   [45, 24], 
    iconAnchor:   [22, 50],
    shadowAnchor: [4, 26],  
    popupAnchor:  [-3, -50] 
});
var YellowIcon = L.icon({
    iconUrl: 'M_Amarillo.png',
    shadowUrl: 'M_Sombra.png',

    iconSize:     [38, 50], 
    shadowSize:   [45, 24], 
    iconAnchor:   [22, 50], 
    shadowAnchor: [4, 26],  
    popupAnchor:  [-3, -50] 
});
var BlueIcon = L.icon({
    iconUrl: 'M_Azul.png',
    shadowUrl: 'M_Sombra.png',

    iconSize:     [38, 50], 
    shadowSize:   [45, 24], 
    iconAnchor:   [22, 50], 
    shadowAnchor: [4, 26],  
    popupAnchor:  [-3, -50] 
});
var OrangeIcon = L.icon({
    iconUrl: 'M_Naranja.png',
    shadowUrl: 'M_Sombra.png',

    iconSize:     [38, 50], 
    shadowSize:   [45, 24], 
    iconAnchor:   [22, 50], 
    shadowAnchor: [4, 26],  
    popupAnchor:  [-3, -50] 
});
var RedIcon = L.icon({
    iconUrl: 'M_Rojo.png',
    shadowUrl: 'M_Sombra.png',

    iconSize:     [38, 50], 
    shadowSize:   [45, 24], 
    iconAnchor:   [22, 50], 
    shadowAnchor: [4, 26],  
    popupAnchor:  [-3, -50] 
});



document.getElementById("dibujar").setAttribute("onclick", "crearMarcador()");
document.getElementById("reset").addEventListener('click', refreshPage);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function refreshPage(){
    location.reload();
}

function bienvenida() {
    alert("Bienvenido al mapa interactivo, aquí podrás:\n1.Dibujar un marcador mediante el formulario (Si se pueden arrastrar)\n2.Dibujar un marcador al hacer click sobre el mapa (No se pueden arrastrar)");
}

function onMapClick(e){
    let lati = e.latlng.lat;
    let lon = e.latlng.lng;
    var cValor = colores.value;
    

    
    if(cValor == "Verde"){
        contador++;
    nombre.value = "Marcador " + contador;
    latitud.value = lati;
    longitud.value =lon;
        var marker = L.marker(e.latlng, {icon: greenIcon}).addTo(map);
    marker.title = "Marcador " + contador;
    marker.bindPopup("Este es el marcador "+ contador + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
    marker.on('click', function(lati,lon){
        document.getElementById('nombre').value = marker.title;
        document.getElementById('latitud').value = marker.getLatLng().lat;
        lati = document.getElementById('latitud').value;
        document.getElementById('longitud').value = marker.getLatLng().lng;
        lon = document.getElementById('longitud').value;
    })
    } else if(cValor == "Amarillo"){
        contador++;
    nombre.value = "Marcador " + contador;
    latitud.value = lati;
    longitud.value =lon;
        var marker = L.marker(e.latlng, {icon: YellowIcon}).addTo(map);
    marker.title = "Marcador " + contador;
    marker.bindPopup("Este es el marcador "+ contador + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
    marker.on('click', function(lati,lon){
        document.getElementById('nombre').value = marker.title;
        document.getElementById('latitud').value = marker.getLatLng().lat;
        lati = document.getElementById('latitud').value;
        document.getElementById('longitud').value = marker.getLatLng().lng;
        lon = document.getElementById('longitud').value;
    })
    } else if (cValor == "Azul"){
        contador++;
    nombre.value = "Marcador " + contador;
    latitud.value = lati;
    longitud.value =lon;
        var marker = L.marker(e.latlng, {icon: BlueIcon}).addTo(map);
    marker.title = "Marcador " + contador;
    marker.bindPopup("Este es el marcador "+ contador + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
    marker.on('click', function(lati,lon){
        document.getElementById('nombre').value = marker.title;
        document.getElementById('latitud').value = marker.getLatLng().lat;
        lati = document.getElementById('latitud').value;
        document.getElementById('longitud').value = marker.getLatLng().lng;
        lon = document.getElementById('longitud').value;
    })
    } else if (cValor == "Naranja") {
        contador++;
    nombre.value = "Marcador " + contador;
    latitud.value = lati;
    longitud.value =lon;
        var marker = L.marker(e.latlng, {icon: OrangeIcon}).addTo(map);
    marker.title = "Marcador " + contador;
    marker.bindPopup("Este es el marcador "+ contador + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
    marker.on('click', function(lati,lon){
        document.getElementById('nombre').value = marker.title;
        document.getElementById('latitud').value = marker.getLatLng().lat;
        lati = document.getElementById('latitud').value;
        document.getElementById('longitud').value = marker.getLatLng().lng;
        lon = document.getElementById('longitud').value;
    })
    } else if (cValor == "Rojo"){
        contador++;
    nombre.value = "Marcador " + contador;
    latitud.value = lati;
    longitud.value =lon;
        var marker = L.marker(e.latlng, {icon: RedIcon}).addTo(map);
    marker.title = "Marcador " + contador;
    marker.bindPopup("Este es el marcador "+ contador + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
    marker.on('click', function(lati,lon){
        document.getElementById('nombre').value = marker.title;
        document.getElementById('latitud').value = marker.getLatLng().lat;
        lati = document.getElementById('latitud').value;
        document.getElementById('longitud').value = marker.getLatLng().lng;
        lon = document.getElementById('longitud').value;
    })
    } else {
        alert("Por favor selecciona un color");
        
    }
    
    
    
}
map.on('click', onMapClick);

function crearMarcador() {
    
    var cValor = colores.value;
    lati = latitud.value;
    lon = longitud.value; 
    marcador = nombre.value;
    nMarcadores.push(marcador);
    latMarcadores.push(lati);
    lonMarcadores.push(lon);
    console.log(nMarcadores);
    console.log(latMarcadores);
    console.log(lonMarcadores);

    if(lati == "" || lon == "" || marcador == ""){
        alert("Por favor llene los campos necesarios");
    } else if(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,20})?))$/.test(lati) == false) {
        alert("Por favor ingresa el formato de latitud 'xx.xxxxx'");
    } else if(/^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,20})?))$/.test(lon) == false){
        alert("Por favor ingresa el formato de la longitud correctamente 'xx.xxxxxx' o 'xxx.xxxxx'");
    } else if(cValor == "Verde"){

        var marker = L.marker(new L.LatLng(lati, lon), {
            draggable: true, icon:greenIcon
            }).addTo(map);
            marker.title= marcador;
            marker.bindPopup("Este es el marcador "+ marcador + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
            nombre.value = "";
            latitud.value = "";
            longitud.value = "";
    
            marker.on('click', function(lati,lon){
                document.getElementById('nombre').value = marker.title;
                document.getElementById('latitud').value = marker.getLatLng().lat;
                lati = document.getElementById('latitud').value;
                document.getElementById('longitud').value = marker.getLatLng().lng;
                lon = document.getElementById('longitud').value;
            })
    
            marker.on('dragend', function (lati,lon) {
                document.getElementById('nombre').value = marker.title;
                document.getElementById('latitud').value = marker.getLatLng().lat;
                lati = document.getElementById('latitud').value;
                document.getElementById('longitud').value = marker.getLatLng().lng;
                lon = document.getElementById('longitud').value;
                marker.bindPopup("Este es el marcador "+ marker.title + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
            });
        
    } else if(cValor == "Amarillo"){
        var marker = L.marker(new L.LatLng(lati, lon), {
            draggable: true, icon:YellowIcon
            }).addTo(map);
            marker.title= marcador;
            marker.bindPopup("Este es el marcador "+ marcador + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
            nombre.value = "";
            latitud.value = "";
            longitud.value = "";
    
            marker.on('click', function(lati,lon){
                document.getElementById('nombre').value = marker.title;
                document.getElementById('latitud').value = marker.getLatLng().lat;
                lati = document.getElementById('latitud').value;
                document.getElementById('longitud').value = marker.getLatLng().lng;
                lon = document.getElementById('longitud').value;
            })
    
            marker.on('dragend', function (lati,lon) {
                document.getElementById('nombre').value = marker.title;
                document.getElementById('latitud').value = marker.getLatLng().lat;
                lati = document.getElementById('latitud').value;
                document.getElementById('longitud').value = marker.getLatLng().lng;
                lon = document.getElementById('longitud').value;
                marker.bindPopup("Este es el marcador "+ marker.title + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
            });
    } else if(cValor == "Azul"){
        var marker = L.marker(new L.LatLng(lati, lon), {
            draggable: true, icon:BlueIcon
            }).addTo(map);
            marker.title= marcador;
            marker.bindPopup("Este es el marcador "+ marcador + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
            nombre.value = "";
            latitud.value = "";
            longitud.value = "";
    
            marker.on('click', function(lati,lon){
                document.getElementById('nombre').value = marker.title;
                document.getElementById('latitud').value = marker.getLatLng().lat;
                lati = document.getElementById('latitud').value;
                document.getElementById('longitud').value = marker.getLatLng().lng;
                lon = document.getElementById('longitud').value;
            })
    
            marker.on('dragend', function (lati,lon) {
                document.getElementById('nombre').value = marker.title;
                document.getElementById('latitud').value = marker.getLatLng().lat;
                lati = document.getElementById('latitud').value;
                document.getElementById('longitud').value = marker.getLatLng().lng;
                lon = document.getElementById('longitud').value;
                marker.bindPopup("Este es el marcador "+ marker.title + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
            });

    } else if(cValor == "Naranja"){
        var marker = L.marker(new L.LatLng(lati, lon), {
            draggable: true, icon:OrangeIcon
            }).addTo(map);
            marker.title= marcador;
            marker.bindPopup("Este es el marcador "+ marcador + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
            nombre.value = "";
            latitud.value = "";
            longitud.value = "";
    
            marker.on('click', function(lati,lon){
                document.getElementById('nombre').value = marker.title;
                document.getElementById('latitud').value = marker.getLatLng().lat;
                lati = document.getElementById('latitud').value;
                document.getElementById('longitud').value = marker.getLatLng().lng;
                lon = document.getElementById('longitud').value;
            })
    
            marker.on('dragend', function (lati,lon) {
                document.getElementById('nombre').value = marker.title;
                document.getElementById('latitud').value = marker.getLatLng().lat;
                lati = document.getElementById('latitud').value;
                document.getElementById('longitud').value = marker.getLatLng().lng;
                lon = document.getElementById('longitud').value;
                marker.bindPopup("Este es el marcador "+ marker.title + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
            });

    } else if(cValor == "Rojo"){
        var marker = L.marker(new L.LatLng(lati, lon), {
            draggable: true, icon:RedIcon
            }).addTo(map);
            marker.title= marcador;
            marker.bindPopup("Este es el marcador "+ marcador + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
            nombre.value = "";
            latitud.value = "";
            longitud.value = "";
    
            marker.on('click', function(lati,lon){
                document.getElementById('nombre').value = marker.title;
                document.getElementById('latitud').value = marker.getLatLng().lat;
                lati = document.getElementById('latitud').value;
                document.getElementById('longitud').value = marker.getLatLng().lng;
                lon = document.getElementById('longitud').value;
            })
    
            marker.on('dragend', function (lati,lon) {
                document.getElementById('nombre').value = marker.title;
                document.getElementById('latitud').value = marker.getLatLng().lat;
                lati = document.getElementById('latitud').value;
                document.getElementById('longitud').value = marker.getLatLng().lng;
                lon = document.getElementById('longitud').value;
                marker.bindPopup("Este es el marcador "+ marker.title + "<br>" + "Y esta es su latitud: " + lati +"<br>"+ "Y esta su longitud  "+ lon).openPopup();
            });

    } else {
        alert("Por favor selecciona un color");
    }         
        console.log(cValor);
    }



bienvenida();
