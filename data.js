var secciones = {};

secciones.length = 0;

secciones.inicioAventura = {};
secciones.length++;
secciones.inicioAventura.textoPrincipal = '\
  <h2>¿Dónde estás?</h2>\
  <p class="letraCapitular">Malas noticias: te has perdido. Aunque, por lo menos, por una buena razón.\
  Todo el mundo sabe que los <em title="Un bello animal con pelo en el torso y plumas en las alas y que parece exactamente la mezcla de un gato y un búho. Aunque dicen que no hay dos iguales.">gatobúhos</em> son mágicos. Y claro, cuando viste uno en el patio del\
  orfanato tuviste que seguirle hasta que se te escapó en lo más profundo del <em>Bosque de la Luna Grande</em>.</p>\
  <p>Desde entonces no has hecho sino <strong>perderte más y más</strong>. Has llegado al sitio más raro que puedas imaginars en un bosque: un jardín. Sí, un jardín cuadrado, con caminos, estatuas y fuentes. Pero no hay rastro de ningún jardinero, si no cuentas a esos simpáticos <em title="No son fantasmas de verdad, sino personas de luz azul que no hacen daño a nadie, pero tampoco hablan contigo. Solo hacen lo que la magia les manda.">fantasmas azules,</em> ¡claro!  \
  <p>Luego está el edificio raro. Vamos a llamarlo así porque parece una serpiente gigante de piedra enredada en sí misma. Y para colmo la mitad está cubierta de hiedra y flores.</p>\
    <p>Lo bueno es que es mediodía y no da tanto miedo tomar una decisión. </p>\
  ';
secciones.inicioAventura.opciones = [
  ["puertaRaro", "Vas a la puerta del edificio raro"],
  ["hablaFantasmaAzul", "Hablas a los fantasmas azules"],
  ["volverCasa", "Te alejas para volver a casa"]
]; // [[sección, texto del enlace],[...]]
secciones.inicioAventura.test = []; // habilidad, target, seccion si falla, si acierta se queda en donde estaba

secciones.hablaFantasmaAzul = {};
secciones.length++;
secciones.hablaFantasmaAzul.textoPrincipal = '<h2>Los fantasmas azules</h2>\
<p class="letraCapitular">Te acercas despacio para no asustar a los fantasmas. <q>Hola, no sé dónde estoy, ¿me pueden ayudar?</q> les dices, pero no te hacen caso. Siguen con su trabajo como si no estuvieras allí. Hasta vuelan atravesando tu cuerpo. Menuda falta de educación. Ahora mismo lo único que les preocupa es limpiar la estatua de una <em title="Es Zrudil, la Gran Maga del Norte, que murió hace 250 años. Su pasatiempo favorito era construir palacios mágicos. ¡Vaya!">señora con el pelo como un champiñón</em>, que parece escribir un libro con su dedo. Muy raro, pero no parece de mucha ayuda.</p><p>Mejor será que intentes otra cosa.</p>';
secciones.hablaFantasmaAzul.opciones = [
  ["puertaRaro", "Vas a la puerta del edificio raro"],
  ["volverCasa", "Te alejas para volver a casa"]
];
secciones.hablaFantasmaAzul.test = [];
secciones.hablaFantasmaAzul.efectos = [];


secciones.puertaRaro = {};
secciones.length++;
secciones.puertaRaro.textoPrincipal = '\
<h2>Deberías tener miedo</h2>\
<p class="letraCapitular">La puerta tiene forma triangular, es de roble y es evidente que no se abre desde hace ya mucho tiempo. No tiene cerrojo pero si <em title="una inscripción pone, <<dame de comer>> ">una oquedad donde</em> debería estar la cerradura con la forma de la cabeza de una serpiente. También hay unas <em title="No intentes rescatarme, por favor. ¡Es muy peligroso!">letras garabateadas</em> en la puerta.</p>';
secciones.puertaRaro.opciones = [
  ["buscasRaton", "Buscas un ratón"],
  ["ponesPan", "Metes un trocito de pan en la puerta"],
  ["llamasPuerta", "Simplemente llamas a la puerta"]
];
secciones.puertaRaro.test = [];

secciones.ponesPan = {};
secciones.length++;
secciones.ponesPan.textoPrincipal = "<h2>Te ha escupido el pan!</h2><p>La puerta escupe el pan con fuerza dándote en todo el ojo!";
secciones.ponesPan.opciones = [
  ["buscasRaton", "Buscas un ratón"],
  ["ponesPan", "Metes otro trocito de pan en la puerta"],
  ["llamasPuerta", "Simplemente llamas a la puerta"]
];
secciones.ponesPan.test = [];
secciones.ponesPan.efectos = ["magullado"];

secciones.buscasRaton = {};
secciones.length++;
secciones.buscasRaton.textoPrincipal = '<h2>Entras</h2><p>Consigues cazar el ratón, y lo pones en la puerta, entra y vuelve con una llave, que usas para abrir. descripción bla bla. Acertijo... como te gustaría vivir... pulsar palanca</p>';
secciones.buscasRaton.opciones = [
  ["entrasEdificio", "Entra al edifico"]
];
secciones.buscasRaton.test = ["des",1,"dificilRaton"];
secciones.buscasRaton.efectos = [];

secciones.dificilRaton = {};
secciones.length++;
secciones.dificilRaton.textoPrincipal = '<h2>Consigues entrar al final</h2>\
<p>Consigues cazar el ratón, tras muchos problemas y un pequeño accidente entra y vuelve con una llave, que usas para abrir. descripción bla bla.</p>';
secciones.dificilRaton.opciones = [
   ["entrasEdificio", "Entra al edifico"],
];
secciones.dificilRaton.test = [];
secciones.dificilRaton.efectos = ["magullado"];

secciones.entrasEdificio = {};
secciones.length++;
secciones.entrasEdificio.textoPrincipal = '\
<figure><img src="img/acertijo1.jpg"></figure>\
<h2>En el edificio raro</h2>\
<p>Te acercas a la estatua, esquivando los candelabros y las piedras de luz que hay sobre su alfombra. En el libro que sostiene la estatua está escrito: <q>Cuatro candelabros de nueve luces: algo falta, mucho sobra</q>. Otra cosa te interesa: junto a la estatua, escondida de forma que casi no se ve, hay una palanca<p>\
';
secciones.entrasEdificio.opciones = [
  ["usaPalanca", "Bajas la palanca"],
  ["quitaDos", "Quitas dos candelabros grandes y pones tres piedras de luz"],
  ["quitaTres","Quitas tres candelabros grandes y pones uno pequeño"]
];
secciones.entrasEdificio.test = []; // habilidad, target, seccion si falla, si acierta se queda en donde estaba

secciones.usaPalanca = {};
secciones.length++;
secciones.usaPalanca.textoPrincipal = '\
<h2>El laboratorio mágico</h2>\
<p class="letraCapitular">Pasa esto: <q>Bienvenido a nuestro laboratorio mágico, querido ratoncito nuevo. Si puedes entender lo que digo, mueve la patita, por favor.</q> Te cuesta un poco entneder lo que acaba de pasar. La palanca ha debido de activar alguna trampa mágica y has viajado a una burbuja en el fondo del mar. Una burbuja creada por dos magos y dos magas, los cuatro igual de locos, si nos atenemos a lo que se dedican: transportar niños mágicamente al fondo del mar para probar nuevos conjuros con ellos.</p>\
<p><q>No tengas miedo, solo somos secuestradores, no te vamos a matar... bueno vamos a ver si este conjuro nos sale bien. Tú no te muevas por si acaso... fuerpino, fuerpino, ajrumbayá....</q>Así comienza una parte de tu vida como conejillo de indias mágico. Espero que alguna vez consigas escapar.</p>';
secciones.usaPalanca.opciones = [];
secciones.usaPalanca.test = []; // habilidad, target, seccion si falla, si acierta se queda en donde estaba

secciones.quitaDos = {};
secciones.length++;
secciones.quitaDos.textoPrincipal = '\
<figure><img src="img/acertijo1.jpg"></figure>\
<h2>Quitas dos candelabros y pones tres piedras de luz</h2>\
<p>Ahora tienes dos candelabros grandes y tres piedras de luz. Un total de 21 luces en la casilla. Pero no pasa nada, hm...<p>'
;
secciones.quitaDos.opciones = [
  ["usaPalanca2", "¿Bajas la palanca ahora?"],
  ["quitaTres",  "Quitas tres candelabros grandes y pones uno pequeño"]
];
secciones.quitaDos.test = []; // habilidad, target, seccion si falla, si acierta se queda en donde estaba

secciones.usaPalanca2 = {};
secciones.length++;
secciones.usaPalanca2.textoPrincipal = '<h2>Se abre una pequeña puerta</h2>\
<p class="letraCapitular">Se abre un túnel de medio metro de diámetro. Es estrecho pero puedes pasar arrastrándote. No te gusta nada meterte dentro. Pero, ¿qué otra cosa puedes hacer? Ya decidiste no abandonar la aventura y tras haber superado la prueba anterior no te vas a rendir ahora. ¡A pesar de que esto esté lleno de bichos!</p>\
<p>Pero lo peor viene cuando el túnel queda en la oscuridad más completa y no tienes ninguna forma de iluminarte. El miedo te pone la piel de gallina y tienes que darte valor a cada paso que das. <q>Todo va a salir bien</q> y esas cosas. Luego te topas con dos luces, a derecha y a izquierda. ¿Qué hacer? Por el de la derecha se escucha absolutamente nada, por el de la izquierda un zumbido raro y voces, pero no entiendes nada de lo que dicen.';
secciones.usaPalanca2.opciones = [
  ["tunelIzq", "¿A la izquierda?"],
  ["tunelDch", "¿A la derecha?"]
];
secciones.usaPalanca2.test = [];

secciones.tunelIzq = {};
secciones.length++;
secciones.tunelIzq.textoPrincipal = '<h2>La máquina de hacer magia</h2>\
<p class="letraCapitular">El túnel termina súbitamente en una abertura en una pared altísima. Te encuentras a seis metros del suelo, demasiado para descolgarte con seguridad aunque podrías intentarlo supongo. Porque, ¿qué otra cosa podrías hacer?</p>\
<p>Aquí debajo hay una extraña máquina, como una caldera gigante, solo que unos fantasmas azules la están alimentando con piedras de luz naranja y emite como unas cabezas fantasmales que vuelan por todas partes, hablan, discuten entre ellas y luego desaparecen.</p>'; //encuentra un mapa pero le falta un cacho o algo y realmente lleva a un sitio rápido pero peligroso
secciones.tunelIzq.opciones = [
  ["teDescuelgas", "Te descuelgas"],
  ["tunelDch", "Vas al otro túnel"],
  ["hablaCara", "Tratas de llamar la atención de una de las caras, para hablar con ella."]
];
secciones.tunelIzq.test = [];
secciones.tunelIzq.efectos = [];

secciones.tunelDch = {};
secciones.length++;
secciones.tunelDch.textoPrincipal = '<h2>La araña cazadora</h2> Descripción de la araña que casi te atrapó y eso... Hay un príncipe / princesa atrapado en la telaraña';
secciones.tunelDch.opciones = [
  ["intentasRescate", "Intentas rescatar a la víctima"],
  ["buscasSalida", "Buscas una salida"],
  ["tunelIzq", "Vas al otro túnel"]
];
secciones.tunelDch.test = [];
secciones.tunelDch.efectos = [];

secciones.quitaTres = {};
secciones.length++;
secciones.quitaTres.textoPrincipal = '\
<h2>Quitas tres candelabros grandes y pones uno pequeño</h2>\
<p>Ahora tienes un candelabro grande y uno pequeño. Un total de 14 luces en la casilla. Pero no pasa nada, hm...<p>\
<figure><img src="img/acertijo1.jpg"></figure>';
secciones.quitaTres.opciones = [
  ["usaPalanca3", "¿Bajas la palanca ahora?"],
  ["quitaDos",  "Quitas tres candelabros grandes y pones uno pequeño"]
];
secciones.quitaTres.test = []; // habilidad, target, seccion si falla, si acierta se queda en donde estabaTres

secciones.usaPalanca3 = {};
secciones.length++;
secciones.usaPalanca3.textoPrincipal = '<h2>De vuelta al orfanato</h2>\
<p class="letraCapitular">Apareces en el orfanato. Concretamente sobre el tejado. ¡Vas a tener mucho que explicar! Suerte.</p>';
secciones.usaPalanca3.opciones = [];
secciones.usaPalanca3.test = [];

secciones.volverCasa = {};
secciones.length++;
secciones.volverCasa.textoPrincipal = "\
<h2>De noche en el bosque</h2>\
<p>Se va a hacer de noche en el bosque y hace mucho frío...\
";
secciones.volverCasa.opciones = [
  ["hacerRefugio", "Haces un refugio"],
  ["sigueCaminando", "Sigues Caminando"]
];
secciones.volverCasa.test = [];
secciones.volverCasa.efectos = ["herido"];
secciones.volverCasa.seccionSiMuere = "muere0";

secciones.sigueCaminando = {};
secciones.length++;
secciones.sigueCaminando.textoPrincipal = "\
<h2>Te encuentran, ¡bien!</h2>";
secciones.sigueCaminando.opciones = [];
secciones.sigueCaminando.test = ["per",0,"pilladoGoblins"]; // habilidad, target, seccion si falla, si acierta se queda en donde estaba

secciones.pilladoGoblins = {};
secciones.length++;
secciones.pilladoGoblins.textoPrincipal = "<h2>Te han pillado los goblins!</h2>";
secciones.pilladoGoblins.opciones = [];
secciones.pilladoGoblins.test = [];

secciones.hacerRefugio = {};
secciones.length++;
secciones.hacerRefugio.textoPrincipal = "<h2>Consigues hacerte un refugio</h2>";
secciones.hacerRefugio.opciones = [["vuelveACasa", "Vuelve a casa"]];
secciones.hacerRefugio.test = ["des",0,"pasasFrio"];

secciones.vuelveACasa = {};
secciones.length++;
secciones.vuelveACasa.textoPrincipal = "<h2>Consigues volver a casa, el orfanato, ¡bien!</h2>";
secciones.vuelveACasa.opciones = [];
secciones.vuelveACasa.test = [];

secciones.pasasFrio = {};
secciones.length++;
secciones.pasasFrio.textoPrincipal = "<h2>Pasa frío, pero probablemente sobrevivas</h2>";
secciones.pasasFrio.opciones = [["vuelveACasa", "Vuelve a casa"]];
secciones.pasasFrio.test = [];
secciones.pasasFrio.efectos = ["herido"];
secciones.pasasFrio.seccionSiMuere = "muere1";

secciones.muere0 = {};
secciones.length++;
secciones.muere0.textoPrincipal = "<h2>Has muerto de frío y hambre, qué pena</h2>";
secciones.muere0.opciones = [];
secciones.muere0.test = [];
secciones.muere0.efectos = [];


secciones.muere1 = {};
secciones.length++;
secciones.muere1.textoPrincipal = "<h2>Has muerto de frío y hambre, qué pena</h2>";
secciones.muere1.opciones = [];
secciones.muere1.test = [];
secciones.muere1.efectos = [];


secciones._404 = {};
secciones._404.textoPrincipal = "<h2>Esto es un error</h2><p>Aquí debería haber una sección, pero ha salido un bug</p>";
secciones._404.opciones = [];
secciones._404.test = [];
secciones._404.efectos = [];

//secciones.x = {};
//secciones.length++;
//secciones.x.textoPrincipal = '';
//secciones.x.opciones = [];
//secciones.x.test = [];
//secciones.x.efectos = [];