//siguiente 
var secciones = {};

secciones.length = 0;

secciones.inicioAventura = {};
secciones.length++;
secciones.inicioAventura.textoPrincipal = '\
  <h2>¿Dónde estás?</h2>\
  <p class="letraCapitular">Malas noticias: te has perdido. Aunque, por lo menos, por una buena razón.\
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

secciones.llamasPuerta = {};
secciones.length++;
secciones.llamasPuerta.textoPrincipal = "Una criatura mágica le dice. ¿No pensarías entrar en un lugar mágico solo llamando a la puerta? Y recibe un capón";
secciones.llamasPuerta.opciones = [
  ["buscasRaton", "Buscas un ratón"],
  ["ponesPan", "Metes un trocito de pan en la puerta"],
];
secciones.llamasPuerta.test = [];
secciones.llamasPuerta.efectos = ["magullado"];

secciones.buscasRaton = {};
secciones.length++;
secciones.buscasRaton.textoPrincipal = '<h2>Entras</h2><p>Consigues cazar el ratón, y lo pones en la puerta, entra y vuelve con una llave, que usas para abrir. descripción bla bla. Acertijo... como te gustaría vivir... pulsar palanca</p>';
secciones.buscasRaton.opciones = [
  ["entrasEdificio", "Entra al edifico"]
];
secciones.buscasRaton.test = ["des",3,"dificilRaton"];
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

secciones.teDescuelgas = {};
secciones.length++;
secciones.teDescuelgas.textoPrincipal = '<h2>Después del descuelgue</h2><p>Los fantasmas azules, como siempre, no se fijan en ti y bla bla. Vemos un despacho de ingeniero, en un extremo de la puerta, aire años 70, está abierto, hay unos planos, la mayoría de la famosa máquina y no son muy útiles';
secciones.teDescuelgas.opciones = [
  ["alDespachoIngeniero", "Si quieres colarte en el despacho del ingeniero..."],
  ["buscaSalida", "Intentas buscar una salida"]
];
secciones.teDescuelgas.test = ["des", 2, "descuelgueAccidentado"];
secciones.teDescuelgas.efectos = [];

secciones.descuelgueAccidentado = {};
secciones.length++;
secciones.descuelgueAccidentado.textoPrincipal = 'El intento sale mal y te pegas un tortazo. Menos mal que sigues vivo - Consigues descolgarte limpiamente</h2><p>Los fantasmas azules, como siempre, no se fijan en ti y bla bla. Vemos un despacho de ingeniero, en un extremo de la puerta, aire años 70, está abierto, hay unos planos, la mayoría de la famosa máquina y no son muy útiles';
secciones.descuelgueAccidentado.opciones = [
  ["alDespachoIngeniero", "Si quieres colarte en el despacho del ingeniero..."],
  ["buscaSalida", "Intentas buscar una salida"]
];
secciones.descuelgueAccidentado.test = [];
secciones.descuelgueAccidentado.efectos = ["herido"];
secciones.descuelgueAccidentado.seccionSiMuere = ["muereCaidaDescuelgue"];

secciones.buscaSalida = {};
secciones.length++;
secciones.buscaSalida.textoPrincipal = 'después de buscar un poquito bla bla, te ofrezco dos salidas un nuevo túnel como el principal y una trampilla';
secciones.buscaSalida.opciones = [
  ["nuevoTunel", "Vas al nuevo túnel"],
  ["vasTrampilla", "Vas a la trampilla"]
];
secciones.buscaSalida.test = [];
secciones.buscaSalida.efectos = [];

secciones.nuevoTunel = {};
secciones.length++;
secciones.nuevoTunel.textoPrincipal = 'el túnel se abre a una cueva con estalactitas y eso. un lago subterráneo lo cubre todo y en el centro de todo hay una señora hilando con hebras de oro y planta que va sacando de las monedas';
secciones.nuevoTunel.opciones = [
  ];
secciones.nuevoTunel.test = [
  ["teAcercasAElla", "Te acercas a ella"],
  ["vuelves", "Vuelves por dónde has venido"]
];
secciones.nuevoTunel.efectos = [];

secciones.vasTrampilla = {};
secciones.length++;
secciones.vasTrampilla.textoPrincipal = 'uno de los límites de la magia con la que la bruja me dio mis poderes es que solo una de mis víctimas podría vencerme si llegaba hasta aquí - ahora bien hasta ahora ninguna lo ha conseguido y todos son mis servidores en la eternidad. ¿Te rindes ya y acortas tus sufrimientos?';
secciones.vasTrampilla.opciones = [
  ["sA" , "Luchas de forma normal"],    // hay que poner pistas antes para que forma usar
  ["sB" , "Luchas de forma rara B"],
  ["sC" , "Luchas de forma rara c"],
  ["sD" , "Te rindes"],
  ["sE", "Huyes"]
];
secciones.vasTrampilla.test = [];
secciones.vasTrampilla.efectos = [];


secciones.alDespachoIngeniero = {};
secciones.length++;
secciones.alDespachoIngeniero.textoPrincipal = 'Casi no la ves, de no ser por tus ojos... etc...Una discreta y fina cuerda cuelga de un extremo a otro del marco de la puerta. ¡Qué curioso, ¿no?';
secciones.alDespachoIngeniero.opciones = [
  ["tirasCuerda", "Tiras de la cuerda, a ver qué pasa"],
  ["pasaCuerda", "Pasas por encima de la cuerda"]
];
secciones.alDespachoIngeniero.test = ["des",0,"pisasCuerda"];
secciones.alDespachoIngeniero.efectos = [];

secciones.tirasCuerda = {};
secciones.length++;
secciones.tirasCuerda.textoPrincipal = 'Al tirar de la cuerda te llega un respingo a la puerta que te tira al suelo. Suena la alarma. Y ahora aparece la linterna del ingeniero cobra vida, te pega un capón y te pregunta ¿Qué está usted intentando hacer aquí?';
secciones.tirasCuerda.opciones = [
  ["soloExplorando", "Solo estaba explorando, lo prometo, es que me he perdido"],
  ["aRobar", "<q>He venido a robar, por supuesto</q>, declaras muy indignado"]
];
secciones.tirasCuerda.test = [];
secciones.tirasCuerda.efectos = ["magullado"];

secciones.pisasCuerda = {};
secciones.length++;
secciones.pisasCuerda.textoPrincipal = 'No has podido verla, . etc...Una discreta y fina cuerda que colgaba extremo a otro del marco de la puerta. Y ahora aparece la linterna del ingeniero cobra vida y te pregunta ¿Qué está usted intentando hacer aquí?';
secciones.pisasCuerda.opciones = [
  ["soloExplorando", "Solo estaba explorando, lo prometo"],
  ["aRobar", "<q>He venido a robar, por supuesto</q>, declaras muy indignado"]
];
secciones.pisasCuerda.test = [];
secciones.pisasCuerda.efectos = [];

secciones.aRobar = {};
secciones.length++;
secciones.aRobar.textoPrincipal = '¿y por qué no me robas a mí también? te enseñaré el mapa del tesoro pero solo si prometes llevarme contigo.';
secciones.aRobar.opciones = [
  ["valeConmigo", "Vale, te vienes conmigo"],
  ["noMeFio", "¿Por qué debería fiarme de ti?"]
];
secciones.aRobar.test = [];
secciones.aRobar.efectos = []

secciones.valeConmigo = {};
secciones.length++;
secciones.valeConmigo.textoPrincipal = 'Le indica el mapa que se ve como ilustración <img alt="mapa del tesoro"> etc...';
secciones.valeConmigo.opciones = [
  ["alTesoro", "Ve a descubrir el tesoro con tu nuevo amigo"],
];
secciones.valeConmigo.test = [];
secciones.valeConmigo.efectos = [];

secciones.noMeFio = {};
secciones.length++;
secciones.noMeFio.textoPrincipal = 'No me quieres ayudar, vale, ¿y qué me va a impedir a mí dar la alarma para que te pillen?';
secciones.noMeFio.opciones = [
  ["valeConmigo", "Si solo era una broma, claro que vienes conmigo"],
  ["niCaso", "No le haces caso"],
  ["aPorEl", "Aunque sea mágica es solo una lámpara, sería fácil apagarla de forma traicionera..."]
];
secciones.noMeFio.test = [];
secciones.noMeFio.efectos = [];

secciones.niCaso = {};
secciones.length++;
secciones.niCaso.textoPrincipal = 'Intentas seguir explorando pero se pone a chillar como un condenado';
secciones.niCaso.opciones = [
  ["aLoMio", "Sigues a lo tuyo, esos fantasmas azules les da igual todo"],
  ["salesCorriendo", "Sales corriendo, no sea que haya más gente"]
];
secciones.niCaso.test = [];
secciones.niCaso.efectos = [];

secciones.aLoMio = {};
secciones.length++;
secciones.aLoMio.textoPrincipal = 'pues al final no vino nadie... el pobre linternita se enfada y llora encuentras el <img alt="mapa"> armado con esta información quizás sea más fácil encontrar una salida';
secciones.aLoMio.opciones = [
  ["buscaSalida", "Intentas buscar una salida"]
];
secciones.aLoMio.test = [];
secciones.aLoMio.efectos = [];

secciones.salesCorriendo = {};
secciones.length++;
secciones.salesCorriendo.textoPrincipal = 'parece que pudiste escapar a tiempo';
secciones.salesCorriendo.opciones = [
   ["buscaSalida", "Intentas buscar una salida"]
];
secciones.salesCorriendo.test = [];
secciones.salesCorriendo.efectos = [];

secciones.aPorEl = {};
secciones.length++;
secciones.aPorEl.textoPrincipal = 'pues al final vino un [alguien] a por ti... y te pilló antes de que pudieras escapar... un final bonito etc';
secciones.aPorEl.opciones = [];
secciones.aPorEl.test = [];
secciones.aPorEl.efectos = [];

secciones.tunelDch = {};
secciones.length++;
secciones.tunelDch.textoPrincipal = '<h2>La araña cazadora</h2> Descripción de la araña que casi te atrapó y eso... Hay un príncipe / princesa atrapado en la telaraña';
secciones.tunelDch.opciones = [
  ["intentasRescate", "Intentas rescatar a la víctima"],
  ["buscasSalida", "Buscas una salida"],
  ["tunelIzq", "Vas al otro túnel"]
];
secciones.tunelDch.test = ["per",0,"pilladoAranna"];
secciones.tunelDch.efectos = [];

secciones.intentasRescate = {};
secciones.length++;
secciones.intentasRescate.textoPrincipal = '\
<h2>Intentas el rescate</p>\
<p class="letraCapitular">Una acción noble y aventurera, desde luego. La pregunta principal es, ¿cómo lo vas a hacer? Tienes la posibilidad de hacerlo a lo bruto, claro, o sea buscas los anclajes de la telaraña y los arrancas. Luego ya solo tienes que ir a porla persona que está dentro. Otra posibilidad es tratar de buscar una piedra afilada y usarla para cortar. Por último, pero solo si te atreves... verás hay una cuerda de telaraña colgando del techo, si saltas te puedes agarrar a ella y columpiarte hasta donde está la víctima. No sé, en una novela de aventuras, seguro que sale bien.';
secciones.intentasRescate.opciones = [
  ["piedraAfilada", "Buscas una piedra afilada"],
  ["aLoBruto", "Arrancas la teleraña a lo bruto"],
  ["saltoAventura", "Agarras la cuerda de telaraña y te lanzas"]
];
secciones.intentasRescate.test = [];
secciones.intentasRescate.efectos = [];

secciones.aLoBruto = {};
secciones.length++;
secciones.aLoBruto.textoPrincipal = '<h2>¡Era una embosacada!</h2><p class="letraCapitular">Pero ahora viene una malvada araña contra tí y te atrapa con su tela</p>';
secciones.aLoBruto.opciones = [
  ["pilladoAranna", "la araña te va a hacer algo no muy bueno..."]
];
secciones.aLoBruto.test = [];
secciones.aLoBruto.efectos = [];

secciones.piedraAfilada = {};
secciones.length++;
secciones.piedraAfilada.textoPrincipal = '<h2>Ya tienes tu bonita piedra afilada, ¿ahora qué vas a hacer con ella?';
secciones.piedraAfilada.opciones = [
  ["cortarTelaraña", "Cortas la telaraña para hacerla caer"],
  ["saltaConPiedra", "Saltas a la cuerda de la telaraña, pero bien pertrechado con tu piedra afilada"]
];
secciones.piedraAfilada.test = ["per",2,"noEncuentrasPiedra"];
secciones.piedraAfilada.efectos = [];

secciones.cortarTelaraña= {};
secciones.length++;
secciones.cortarTelaraña.textoPrincipal = 'Cortas la telaraña, el crío que resulta ser un goblin se cae y una araña va a por tí...';
secciones.cortarTelaraña.opciones = [
   ["huirAranna", "Sales corriendo, buscando una salida"],
   ["lucharAranna", "Tampoco es tan grande y tu piedra de obsidiana corta tan bien como un cuchillo"]
];
secciones.cortarTelaraña.test = [];
secciones.cortarTelaraña.efectos = [];

secciones.saltoAventura = {};
secciones.length++;
secciones.saltoAventura.textoPrincipal = 'Consigues saltar y todo eso, pero al llegar a la parte central de la telaraña te quedas pegado a ella... se entera que la víctima no era n niño sino un kobold... creo que te vas con la araña';
secciones.saltoAventura.opciones = [
   ["pilladoAranna", "la araña te va a hacer algo no muy bueno..."]
];
secciones.saltoAventura.test = ["des",3,"teLaPegas"];
secciones.saltoAventura.efectos = [];

secciones.teLaPegas = {};
secciones.length++;
secciones.teLaPegas.textoPrincipal = 'gory, gory, aleluya... y si sobreviviste viene la araña';
secciones.teLaPegas.opciones = [
   ["pilladoAranna", "la araña te va a hacer algo no muy bueno..."]
];
secciones.teLaPegas.test = [];
secciones.teLaPegas.efectos = ["grave"];
secciones.teLaPegas.seccionSiMuere = ["muereGoryAleluya"];

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
<p class='letraCapitular'>Te alejas corriendo porque sabes que las aventuras son peligrosas. Sobre todo si tienen fantasmas. Cuando ya no puedes correr más, caminas muy despacio hasta que te recuperas y luego vuelves a correr. No sabes dónde estás, ni por dónde se vuelve a casa. Aunque tu casa sea un orfanato sigue siendo tu casa. Y da miedo no saber dónde estás.</p>\
<p>Piensas en subirte a un árbol para comprobar si puedes encontrar la salida. Pero es casi de noche, y no sabes trepar muy bien. Sería demasiado peligroso intentarlo ahora. Si te caes o vas directo a las rocas o a las zarzas. </p>\
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
secciones.sigueCaminando.textoPrincipal = '\
<h2>Te encuentran, ¡bien!</h2>\
<p class="letraCapitular">La noche fue horrible. Muchas veces creías que te seguían y te has pasado la mitad del tiempo huyendo de ruidos raros entre los matorrales. Seguro que no eran sino animales que se asustaban al verte pasar. Pero a ver quién se arriesga. Te has llevando un par de tortazos, hasta una vez tropezaste con una raíz y rodaste por el suelo. Pero todo eso ha pasado ya, porque del pueblo mandaron una patrulla en tu búsqueda, y a primera hora de la mañana te encontraron, sucio y magullado, pero vivo. Hoy desayunas con el alcalde y por la tarde, bueno, seguro que tienes que dar muchas explicaciones a la rectora del orfanato. ¡Suerte! </p>';
secciones.sigueCaminando.opciones = [];
secciones.sigueCaminando.test = ["per",0,"pilladoKarppis"]; // habilidad, target, seccion si falla, si acierta se queda en donde estaba

secciones.pilladoKarppis = {};
secciones.length++;
secciones.pilladoKarppis.textoPrincipal = '<h2>Te han pillado</h2>\
<p class="letraCapitular">Hay un torre de piedra en medio del bosque, apenas más alta que los árboles que la circundan. Allí vive una tribu de seres como los humanos, pero algo más bajitos, de cuatro dedos en manos y pies, y con la piel en varios tonos marrones, a manera de camuflaje. Se les suele llamar <em title="Se pronuncia karp-pis, marcando las dos <q>p</q>">karppis.</em></p>\
<p>Desde esa torre salen a cazar conejos y ciervos. Pero si detectan algún viajero solitario, sobre todo si es un niño perdido, organizan una emboscada. Esperan a la noche, porque conocen tan bien la zona que parece que vieran en la oscuridad. En realidad te siguieron con sus grandes orejas y sus finas narices. Se quedaron quietos agazapados hasta estar seguros que no tuvieras una oportunidad ni de defenderte ni escapar. Ahora te llevan, vivo y sano, pero prisionero a su torre. ¿Tu futuro? Hay comerciantes que compran niños para llevarlos a países extranjeros, donde venderlos como esclavos en el palacio del algún reyezuelo. Aunque, ¿quién puede decir que nunca conseguirás escapar?</p>';
secciones.pilladoKarppis.opciones = [];
secciones.pilladoKarppis.test = [];

secciones.hacerRefugio = {};
secciones.length++;
secciones.hacerRefugio.textoPrincipal = '<h2>Consigues hacerte un refugio</h2>\
<p>Te pones a trabajar con rapidez. Buscas primero una piedra puntiaguda con la que improvisas una especie de pala. Con ella sacas raíces jóvenes, flexibles como cuerdas. Después buscas ramas caídas que anclas al suelo y atas, formando una estructura que cubres con hojas y todo lo que encuentras. Aún así careces de lo más importante: un fuego. Yesca hay de sobra en el bosque, pero no trajiste pedernal y ya es demasiado oscuro para buscarlo.</p>\
<p>Pasas la noche aterido de frío, casi sin dormir. Pero a la mañana siguiente, a pesar del hambre y el cansancio, vives. Y lo que es mejor, pronto escuchas las voces de la patrulla ciudadana que ha venido a buscarte. Hoy desayunas con el alcalde, aunque por la tarde tendrás mucho que explicar. ¡Suerte!';
secciones.hacerRefugio.opciones = [];
secciones.hacerRefugio.test = ["des",3,"pasasFrio"];

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

secciones.muereGoryAleluya = {};
secciones.length++;
secciones.muereGoryAleluya.textoPrincipal = "<h2>Has muerto por el castañazo que te pegaste al caer de la telaraña</h2>";
secciones.muereGoryAleluya.opciones = [];
secciones.muereGoryAleluya.test = [];
secciones.muereGoryAleluya.efectos = [];

secciones.muereCaidaDescuelgue = {};
secciones.length++;
secciones.muereCaidaDescuelgue.textoPrincipal = 'Te has roto una mano y un pie y no te puedes levantar. Los fantasmas azules no te prestan atención, llores, grites, insultes o supliques. Una hora después una maga viene y te salva... para mantenerte encerrado, usado como batería mágica';
secciones.muereCaidaDescuelgue.opciones = [];
secciones.muereCaidaDescuelgue.test = [];
secciones.muereCaidaDescuelgue.efectos = [];

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