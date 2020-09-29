//siguiente 
var secciones = {};

secciones.length = 0;

secciones.inicioAventura = {};
secciones.length++;
secciones.inicioAventura.titulo = '¿Dónde estás?';
secciones.inicioAventura.texto = '\
  <p>Malas noticias: te has perdido. Aunque, por lo menos, por una buena razón.\
  Todo el mundo sabe que los <em title="Un bello animal con pelo en el torso y plumas en las alas y que parece exactamente la mezcla de un gato y un búho. Aunque dicen que no hay dos iguales.">gatobúhos son mágicos.</em></p>\
  <p>Y claro, cuando viste uno en el patio del\
  orfanato tuviste que seguirle hasta que se te escapó en lo más profundo del <em title="Tiene forma de luna llena,y siempre te han advertido de que no vayas de noche, porque hay bandidos. ¿Te lo crees?">Bosque de la Luna Grande.</em></p>\
  <p>Desde entonces no has hecho sino <strong>perderte más y más</strong>. Has llegado al sitio más raro que puedas imaginars en un bosque: un jardín. Sí, un jardín cuadrado, con caminos, estatuas y fuentes. Pero no hay rastro de ningún jardinero, si no cuentas a esos simpáticos <em title="No son fantasmas de verdad, sino personas de luz azul que no hacen daño a nadie, pero tampoco hablan contigo. Solo hacen lo que la magia les manda.">fantasmas azules.</em>  \
  <p>Luego está el edificio raro. Vamos a llamarlo así porque parece una serpiente gigante de piedra enredada en sí misma. Y para colmo la mitad está cubierta de hiedra y flores.</p>\
    <p>Lo bueno es que es mediodía y no da tanto miedo tomar una decisión. </p>\
  ';
secciones.inicioAventura.opciones = [
  ["puertaRaro", "Vas a la puerta del edificio raro"],
  ["hablaFantasmaAzul", "Hablas a los fantasmas azules"],
  ["volverCasa", "Te alejas para volver a casa"]
]; // [[sección, texto del enlace],[...]]
secciones.inicioAventura.test = []; // habilidad, target, seccion si falla, si acierta se queda en donde estaba
secciones.inicioAventura.efectos = [];



secciones._404 = {};
secciones._404.titulo = 'Esto es un error'
secciones._404.texto = "<p>Aquí debería haber una sección, pero ha salido un bug de esos tan frustrantes.</p>";
secciones._404.opciones = [];
secciones._404.test = [];
secciones._404.efectos = [];

//secciones.ñ = {};
//secciones.length++;
//secciones.ñ.texto = '';
//secciones.ñ.opciones = [];
//secciones.ñ.test = [];
//secciones.ñ.efectos = []; 