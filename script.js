function isNull(v){ return v !== null;}

function ejecutarEfecto(efecto){
  switch (efecto) {
    case "herido":
      localStorage["fue"] -= dice(faces=3,rolls=2);
      break;
    case "magullado":
      localStorage["fue"]--;
      break;
    case "grave":
      localStorage["fue"] -= dice(faces=3,rolls=3);
      break;
    case "curado":
      localStorage["fue"] += dice();
      if(localStorage["fue"] > localStorage["fueInicial"]){
        localStorage["fue"] = localStorage["fueInicial"];
      }
      break;
    default:
      //console.log("efecto desconocido", efecto);
  }
}

function dice(faces=6, rolls=1) {
  if(rolls>0){
      return Math.floor(Math.random() * faces) + 1 + dice(faces, rolls-1); 
  } else {
    return 0;
  } 
}

function baraja(inArray) { 
  //shuffles an Array. This is meant for a small Array
  outArray = [];
  inArray.forEach(element=>{
    if(dice(2,1)>1) {
      outArray.push(element);
    } else {
      outArray.unshift(element);
    }
  });
  return outArray;
}

function generaNombre(){
  let nimi = "";
  let silabas = ["fix", "el", "bli", "mus", "ta", "ter", "ve", "ka", "uan", "nio", "vid", "a", "e", "i", "o", "u", "fe", "de", "ri",
                 "suo", "mi", "nel", "ca", "bal", "ni", "mi", "an", "to", "ku", "da", "guel", "ua", "es", "te", "ban", "co",
                 "yo", "de", "ver", "lu", "lui", "ju", "na", "pe", "du", "ar", "te", "bru", "no", "mat", "ti"];
  let numeroSilabas = (dice(faces=4, rolls=3)/3);
  for(let i=1;i<=numeroSilabas;i++){
    nimi += silabas[Math.floor(Math.random()*silabas.length)];
  }
  return nimi;  
}

function prueba_seccion(seccion){
  if(seccion.test.length > 0)
    {
      let puntuacion = localStorage[seccion.test[0]];
      let objetivo = seccion.test[1];
      if(puntuacion - dice(6,3) < objetivo){
        seccion = secciones[seccion.test[2]];
      } 
    } 
    return seccion;   
}

function generaFichaPersonaje(){
  let a = `<em title='Nombre:${localStorage["nombre"]} Edad:${localStorage["edad"]} Fue:${localStorage["fue"]}/${localStorage["fueInicial"]} Des:${localStorage["des"]} Per:${localStorage["per"]}'>&#10086;</em>`;
  return a;
}

function actualizaHtmlSeccionMortal(seccion){
   $( "#textoPrincipal" ).html( seccion.textoPrincipal );
   htmlopciones = "<p id='elFin'>El Fin</p>";
   $( "#opciones" ).html( htmlopciones ) ;  
  $( "#fichaPersonaje" ).html( generaFichaPersonaje()  ) ;
}

function actualiza_html_seccion(seccion){
  if(typeof(seccion)==="undefined"){
    actualiza_html_seccion(secciones["_404"]);
    return;
  }
  if(typeof(seccion.efectos)!=="undefined"){
    ejecutarEfecto(seccion.efectos[0]);
  }
  if( localStorage["fue"] < 1 ){
    return actualizaHtmlSeccionMortal(secciones[seccion.seccionSiMuere]);
    }
  $( "#textoPrincipal" ).html( seccion.textoPrincipal );
  let htmlopciones = "";
  if(seccion.opciones.length === 0){
    htmlopciones = "<p id='elFin'>El Fin</p>";
  } else {
    htmlopciones = "<h2>Tus opciones</h2>";
    baraja(seccion.opciones).forEach(element => 
      htmlopciones += `<li><a href="${element[0]}" class="opcion">${element[1]}</a></li>`);
  }  
  $( "#opciones" ).html( htmlopciones ) ;
  
  $( "#fichaPersonaje" ).html( generaFichaPersonaje()  ) ;
}


$("#opciones").on("click",".opcion", function(){
  event.preventDefault();
  nueva_seccion = $(this).attr("href");  
  vamos_a = secciones[nueva_seccion];
  if(typeof(vamos_a)==="undefined"){
    vamos_a = secciones["_404"];
    }
  
  actualiza_html_seccion(prueba_seccion(vamos_a));
});

$( "#inicial" ).submit(function( event ) {
  console.log("Secciones:", secciones.length);
  let nombre =  $("#inputNombre").val();
  let edad =  dice(faces=4,rolls=3) + 7;
  if(nombre==""){nombre=generaNombre();}
  nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
  localStorage.setItem('nombre', nombre); 
  localStorage.setItem('edad', edad);
  localStorage.setItem('fue', dice(faces=5, rolls=2) + edad - 10);
  localStorage.setItem('fueInicial', localStorage['fue']);
  localStorage.setItem('des', dice(faces=6, rolls=2) + 6);
  localStorage.setItem('per', dice(faces=6, rolls=2) + 6); 
  actualiza_html_seccion(secciones["inicioAventura"]);
  event.preventDefault();
});


