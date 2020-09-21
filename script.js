const EL_FIN = "<p id='elFin'>~~ Fin ~~</p>"

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
                 "yo", "de", "ver", "lu", "lui", "ju", "na", "pe", "du", "ar", "te", "bru", "no", "mat", "ti", "car", "los", "fer", "nan","do", "ma", "ría", "el", "sa", "em", "ma", "li", "via", "lur", "des","pe","do", "re", "ta", "ven", "tu"];
  let numeroSilabas = (dice(faces=2, rolls=2)/2)+1; // 2 to 3 syllables
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
  let a = `<p class="nuevo">&#10086; ${localStorage["nombre"]},&thinsp;${localStorage["edad"]}&thinsp;años &#10086;<br/>&#10086; Fue:&nbsp;${localStorage["fue"]}/${localStorage["fueInicial"]} Des:&thinsp;${localStorage["des"]}  Per:&thinsp;${localStorage["per"]} &#10086;</p>`;
  return a;
}

function actualizaHtmlSeccionMortal(seccion){
   $( "#textoPrincipal" ).html( seccion.textoPrincipal );
   htmlopciones = EL_FIN;
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
    let seccionMuerte = seccion.seccionSiMuere;
    if(typeof(seccionMuerte)=="undefined"){
      seccionMuerte = "muere14";
    } 
    actualizaHtmlSeccionMortal(secciones[seccionMuerte]);
    return;
  }
  $( "#textoPrincipal" ).html( seccion.textoPrincipal );
  let htmlopciones = "";
  if(seccion.opciones.length === 0){
    htmlopciones = EL_FIN;
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

$('body').on('click', 'em', function(e) {  // Inserción de pistas haciendo click
    let em = $(this);
    let pId = em.attr("title").replace(/\s/g , "").replace(/[^\w\s]|_/g, "");  //removes punctuation, then white space
    console.log(pId);
    if(em.hasClass("activo")){
      console.log("con clase");
      $('#' + pId).remove();
      em.removeClass("activo");
    } else {
      var paragraph = $("<p></p>");
      console.log("SIN clase");
      em.addClass("activo");
      paragraph.html(em.attr("title"));
      paragraph.attr( "id", pId);
      paragraph.addClass("nuevo");
      em.parent().after(paragraph);
    }
});



