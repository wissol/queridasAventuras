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

secciones.hablaFantasmaAzul = {};
secciones.length++;
secciones.hablaFantasmaAzul.texto = '<h2>Los fantasmas azules</h2>\
<p>Te acercas despacio para no asustar a los fantasmas. <q>Hola, no sé dónde estoy, ¿me pueden ayudar?</q> les dices, pero no te hacen caso. Siguen con su trabajo como si no estuvieras allí. Hasta vuelan atravesando tu cuerpo. Menuda falta de educación. Ahora mismo lo único que les preocupa es limpiar la estatua de una <em title="Es Zrudil, la Gran Maga del Norte, que murió hace 250 años. Su pasatiempo favorito era construir palacios mágicos. ¡Vaya!">señora con el pelo como un champiñón</em>, que parece escribir un libro con su dedo. Muy raro, pero no parece de mucha ayuda.</p><p>Mejor será que intentes otra cosa.</p>';
secciones.hablaFantasmaAzul.opciones = [
  ["puertaRaro", "Vas a la puerta del edificio raro"],
  ["volverCasa", "Te alejas para volver a casa"]
];
secciones.hablaFantasmaAzul.test = [];
secciones.hablaFantasmaAzul.efectos = [];


secciones.puertaRaro = {};
secciones.length++;
secciones.puertaRaro.title = 'Deberías tener miedo';
secciones.puertaRaro.texto = '<p>Una puerta triangular de madera de roble, más vieja que un dragón. Tiene grabada las ilustraciones de una historia, &mdash;modo irónico&mdash; muy bonita. Brujos y brujas volaron desde las nubes, pillaron siete niñas y cuatro niños, dos de ellos humanos. Luego los llevaron a un bosque y los metieron en vasos gigantes. Y estaban muy felices, los brujos y las brujas, digo.</p><p>Por lo demás la puerta es muy sencilla. No tiene aldaba ni manilla, pero sí <em title="Una inscripción pone: <q>dame de comer</q>">una cerradura</em> con forma de <em title="¿Qué comerá una serpiente típica?">cabeza de una serpiente.</em></p>';
secciones.puertaRaro.opciones = [
  ["buscasRaton", "Buscas un ratón para meterlo dentro de la boca de la serpiente"],
  ["ponesPan", "Metes un trocito de pan en la puerta"]
];
secciones.puertaRaro.test = [];

secciones.ponesPan = {};
secciones.length++;
secciones.ponesPan.titulo = '¡Te ha escupido el pan!';
secciones.ponesPan.texto = "<p>La puerta escupe el pan con fuerza dándote en todo el ojo. ¡Eso ha dolido!";
secciones.ponesPan.opciones = [
  ["buscasRaton", "Buscas un ratón para meterlo dentro de la boca de la serpiente"],
  ["ponesPan", "Metes otro trocito de pan en la puerta"]
];
secciones.ponesPan.test = [];
secciones.ponesPan.efectos = ["magullado"];

secciones.buscasRaton = {};
secciones.length++;
secciones.buscasRaton.titulo = 'Entras';
secciones.buscasRaton.texto = '<p>No es demasiado fácil atrapar a un ratón, especialmente si es muy pequeño, pero tu lo has conseguido. Hasta te ha parecido que, después de tu <em title="O sea el intento número 300. Es una exageración, claro. Vale, ya paro de tratarte como un niño pequeño.">tricentésimo intento</em>, el ratón se ha dejado atrapar. Las buenas noticias para él son que no se te ha ocurrido comértelo sino meterlo dentro de la cabeza de serpiente de latón de la puerta.</p> <p>Y es interesante, porque nada más desaparecer en el agujero la puerta se abre; tu primera victoria.</p>';
secciones.buscasRaton.opciones = [
  ["entrasEdificio", "Entra al edifico"]
];
secciones.buscasRaton.test = ["des",3,"dificilRaton"];
secciones.buscasRaton.efectos = [];

secciones.dificilRaton = {};
secciones.length++;
secciones.dificilRaton.titulo = 'Consigues entrar al final';
secciones.dificilRaton.texto = '<p>No es nada fácil atrapar a un ratoncito desvalido. Lo sabes perfectamente porque te ha llevado tres horas y un codo sangrante conseguirlo. Y eso probablemente porque el pobre ratón pensó que eras tan torpe que se confió demasiado. Bueno, fuera por lo que fuera al final triunfaste.</p><p>Las buenas noticias para el animalillo son que no se te ha ocurrido comértelo sino meterlo dentro de la cabeza de serpiente de latón de la puerta.</p> <p>Y es interesante, porque nada más desaparecer en el agujero la puerta se abre; tu primera victoria.</p>';
secciones.dificilRaton.opciones = [
   ["entrasEdificio", "Entra al edifico"],
];
secciones.dificilRaton.test = [];
secciones.dificilRaton.efectos = ["magullado"];

secciones.entrasEdificio = {};
secciones.length++;
secciones.entrasEdificio.texto = '\
<figure><img src="img/fibo.jpg"></figure>\
<h2>En el edificio raro</h2>\
<p>Una vez dentro del edificio la entrada te sorprende. Es una habitación cuadrada, sin ventanas ni puertas que lleven a otra habitación. Va dividida en dos partes: la más cercana a ti, tiene el suelo de losetas cuadradas que forman una especie de ajedrezado. En cada casilla hay un número de candelabros y <em title="Las piedras de luz son cristales naturales que emiten naturalmente una luz pálida de diversos colores">piedras de luz</em> doradas. En la otra zona, junto a la pared, se llergue la estatua de una persona que lee un libro de piedra.</p><p>Te acercas a la estatua, esquivando los candelabros y las piedras de luz que hay sobre su alfombra. En el libro que sostiene la estatua está escrito: <q>Cuatro candelabros de nueve luces: algo falta, mucho sobra</q>. Otra cosa te interesa: junto a la estatua, escondida de forma que casi no se ve, hay una palanca. Te preguntas qué pasaría si la empleas ahora.</p>';
secciones.entrasEdificio.opciones = [
  ["usaPalanca", "Bajas la palanca"],
  ["quitaDos", "Quitas dos candelabros grandes y pones tres piedras de luz"],
  ["quitaTres","Quitas tres candelabros grandes y pones uno pequeño"]
];
secciones.entrasEdificio.test = []; // habilidad, target, seccion si falla, si acierta se queda en donde estaba

secciones.usaPalanca = {};
secciones.length++;
secciones.usaPalanca.texto = '\
<h2>El laboratorio mágico</h2>\
<p>Pasa esto: Estás en una jaula y un señor gigante te habla: <q>Bienvenido a nuestro laboratorio mágico, querido ratoncito nuevo. Si puedes entender lo que digo, mueve la patita, por favor.</q></p> <p>Te cuesta un poco comprender lo que acaba de pasar. La palanca ha debido de activar alguna trampa mágica y has viajado a una burbuja en el fondo del mar. Una burbuja creada por dos magos y dos magas, los cuatro igual de locos, si nos atenemos a lo que se dedican: transportar niños mágicamente al fondo del mar para probar nuevos conjuros con ellos.</p>\
<p><q>No tengas miedo, es posible que seamos unos magos un poco, no sé, delicuentes. Pero no unos asesinos: no te vamos a matar... bueno siempre que no la fastidiemos de verdad con ningún conjuro, pero no pasa casi nunca. Tú no te muevas por si acaso... fuerpino, fuerpino, ajrumbayá....</q></p> <p>Así comienza una parte de tu vida como conejillo de indias mágico. Espero que alguna vez consigas escapar.</p>';
secciones.usaPalanca.opciones = [];
secciones.usaPalanca.test = []; // habilidad, target, seccion si falla, si acierta se queda en donde estaba

secciones.quitaDos = {};
secciones.length++;
secciones.quitaDos.texto = '\
<p>Quitas dos candelabros y pones tres piedras de luz. Ahora tienes dos candelabros grandes y tres piedras de luz. Un total de 21 luces en la casilla. Pero no pasa nada, hm...<p>'
;
secciones.quitaDos.opciones = [
  ["usaPalanca2", "¿Bajas la palanca ahora?"],
  ["quitaTres",  "Quitas tres candelabros grandes y pones uno pequeño"]
];
secciones.quitaDos.test = []; // habilidad, target, seccion si falla, si acierta se queda en donde estaba

secciones.usaPalanca2 = {};
secciones.length++;
secciones.usaPalanca2.titulo = 'Se abre una pequeña puerta';
secciones.usaPalanca2.texto = '<p>Se abre un túnel de medio metro de diámetro. Es estrecho pero puedes pasar arrastrándote. No te gusta nada meterte dentro. Pero, ¿qué otra cosa puedes hacer? Ya decidiste no abandonar la aventura y tras haber superado la prueba anterior no te vas a rendir ahora. ¡A pesar de que esto esté lleno de bichos!</p>\
<p>Pero lo peor viene cuando el túnel queda en la oscuridad más completa y no tienes ninguna forma de iluminarte. El miedo te pone la piel de gallina y tienes que darte valor a cada paso que das. <q>Todo va a salir bien</q> y esas cosas. Luego te topas con dos luces, a derecha y a izquierda. ¿Qué hacer? Por el de la derecha se escucha absolutamente nada, por el de la izquierda un zumbido raro y voces, pero no entiendes nada de lo que dicen.';
secciones.usaPalanca2.opciones = [
  ["tunelIzq", "¿A la izquierda?"],
  ["tunelDch", "¿A la derecha?"]
];
secciones.usaPalanca2.test = [];

secciones.tunelIzq = {};
secciones.length++;
secciones.tunelIzq.titulo = 'La máquina de hacer magia';
secciones.tunelIzq.texto = '<p>El túnel termina súbitamente en una abertura en una pared altísima. Te encuentras a seis metros del suelo, demasiado para descolgarte con seguridad aunque podrías intentarlo supongo. Porque, ¿qué otra cosa podrías hacer?</p><p>Aquí debajo hay una extraña máquina, como una caldera gigante, solo que unos fantasmas azules la están alimentando con piedras de luz naranja y emite como unas cabezas fantasmales que vuelan por todas partes, hablan, discuten entre ellas y luego desaparecen.</p>'; //encuentra un mapa pero le falta un cacho o algo y realmente lleva a un sitio rápido pero peligroso
secciones.tunelIzq.opciones = [
  ["teDescuelgas", "Te descuelgas"],
  ["tunelDch", "Vas al otro túnel"],
  ["hablaCara", "Tratas de llamar la atención de una de las caras, para hablar con ella."]
];
secciones.tunelIzq.test = [];
secciones.tunelIzq.efectos = [];

secciones.hablaCara = {};
secciones.length++;
secciones.hablaCara.titulo = 'Un fantasma reciclado';
secciones.hablaCara.texto = '<p>La conversación con una cabeza fantasmal es tan extraña como puedes imaginarte. Para empezar el propietario original de la cabeza está un poco muerto. Su cadáver se pudre en la fosa de un pantano. De joven llegó a ser aprendiz de mago, pero se perdió por el vino. Una pena que alguien tan prometedor acabara ahogándose en el lodo al caerse bocabajo de una borrachera; pero por lo visto eso puede pasar.</p><p>Ahora bien, todo lo que puedes sacar de la conversación es que esta máquina sirve para atrapar espíritus de personas con energía mágica, para luego atraparla en amuletos, previsible para el uso de un mago o bruja. Pero aquí no aparece venir nadie y los fantasmas azules no hacen sino reciclar una y otra vez los fantasmas, esperando por un propietario que no viene nunca. Curioso.';
secciones.hablaCara.opciones = [
  ["teDescuelgas", "Te descuelgas"],
  ["tunelDch", "Vas al otro túnel"],
];
secciones.hablaCara.test = [];
secciones.hablaCara.efectos = []; 

secciones.teDescuelgas = {};
secciones.length++;
secciones.teDescuelgas.texto = '<h2>Después del descuelgue</h2><p>Los fantasmas azules, como siempre, no se fijan en ti y bla bla. Vemos un despacho de ingeniero, en un extremo de la puerta, aire años 70, está abierto, hay unos planos, la mayoría de la famosa máquina y no son muy útiles';
secciones.teDescuelgas.opciones = [
  ["alDespachoIngeniero", "Si quieres colarte en el despacho del ingeniero..."],
  ["buscaSalida", "Intentas buscar una salida"]
];
secciones.teDescuelgas.test = ["des", 2, "descuelgueAccidentado"];
secciones.teDescuelgas.efectos = [];

secciones.descuelgueAccidentado = {};
secciones.length++;
secciones.descuelgueAccidentado.texto = 'El intento sale mal y te pegas un tortazo. Menos mal que sigues vivo - Consigues descolgarte limpiamente</h2><p>Los fantasmas azules, como siempre, no se fijan en ti y bla bla. Vemos un despacho de ingeniero, en un extremo de la puerta, aire años 70, está abierto, hay unos planos, la mayoría de la famosa máquina y no son muy útiles';
secciones.descuelgueAccidentado.opciones = [
  ["alDespachoIngeniero", "Si quieres colarte en el despacho del ingeniero..."],
  ["buscaSalida", "Intentas buscar una salida"]
];
secciones.descuelgueAccidentado.test = [];
secciones.descuelgueAccidentado.efectos = ["herido"];
secciones.descuelgueAccidentado.seccionSiMuere = ["muereCaidaDescuelgue"];

secciones.buscaSalida = {};
secciones.length++;
secciones.buscaSalida.texto = 'después de buscar un poquito bla bla, te ofrezco dos salidas un nuevo túnel como el principal y una trampilla';
secciones.buscaSalida.opciones = [
  ["nuevoTunel", "Vas al nuevo túnel"],
  ["vasTrampilla", "Vas a la trampilla"]
];
secciones.buscaSalida.test = [];
secciones.buscaSalida.efectos = [];

secciones.nuevoTunel = {};
secciones.length++;
secciones.nuevoTunel.texto = 'el túnel se abre a una cueva con estalactitas y eso. un lago subterráneo lo cubre todo y en el centro de todo hay una señora hilando con hebras de oro y plata que va sacando de las monedas';
secciones.nuevoTunel.opciones = [
  ["teAcercasAElla", "Te acercas a ella"],
  ["vuelves", "Vuelves por dónde has venido"]
];
secciones.nuevoTunel.test = [];
secciones.nuevoTunel.efectos = [];

secciones.teAcercasAElla = {};
secciones.length++;
secciones.teAcercasAElla.titulo = 'Has demostrado valor';
secciones.teAcercasAElla.texto = '<p>La señora te mira y te sonríe, dejando que te acerques, pero sin abandonar su labor. <q>Has demostrado valor</q>, te dice, <q>superando todas estas pruebas. Mira que precisamente andaba yo buscando una personita para enseñarle toda mi magia, antes de que me muera, y me parece que tendrías madera para ello. Tendrías que vivir en mi torre, sin embargo. ¿Te apetece hacerlo o prefieres volver a tu vida normal?</q> ¿Qué le respondes?</p>';
secciones.teAcercasAElla.opciones = [
  ["vidaNormal", "Prefiero volver a mi vida normal"],
  ["aprendizaje", "Me encantaría aprender magia. ¡Es mi sueño!"]
  ];
secciones.teAcercasAElla.test = [];
secciones.teAcercasAElla.efectos = [];


secciones.vidaNormal = {};
secciones.length++;
secciones.vidaNormal.titulo = 'Vuelta a la vida normal';
secciones.vidaNormal.texto = 'Has sido tú quien ha eligido este final, así que no podrás quejarte. Bueno, sí, pero no te haré ni pizca de caso. En fin, lo que ha pasado es que has vuelto al orfanato en la mañana anterior a que todo esto pasara, como si hubiera sido un sueño muy raro.';
secciones.vidaNormal.opciones = [];
secciones.vidaNormal.test = [];
secciones.vidaNormal.efectos = []; 

secciones.aprendizaje = {};
secciones.length++;
secciones.aprendizaje.titulo = 'Feliz aprendizaje';
secciones.aprendizaje.texto = '<p>A partir de ahora vivirás con una maga y todo eso, será una existencia peculiar, sin duda, pero genial.</p>';
secciones.aprendizaje.opciones = [];
secciones.aprendizaje.test = [];
secciones.aprendizaje.efectos = []; 

secciones.vuelves.error = "";
secciones.sA.error = "";
secciones.sB.error ="";
secciones.sC.error ="";
secciones.sD.error ="";


secciones.vasTrampilla = {};
secciones.length++;
secciones.vasTrampilla.texto = 'uno de los límites de la magia con la que la bruja me dio mis poderes es que solo una de mis víctimas podría vencerme si llegaba hasta aquí - ahora bien hasta ahora ninguna lo ha conseguido y todos son mis servidores en la eternidad. ¿Te rindes ya y acortas tus sufrimientos?';
secciones.vasTrampilla.opciones = [
  ["sA" , "Luchas de forma normal"],    // hay que poner pistas antes para que forma usar
  ["sB" , "Luchas de forma rara B"],
  ["sC" , "Te rindes"],
  ["sD", "Huyes"]
];
secciones.vasTrampilla.test = [];
secciones.vasTrampilla.efectos = [];


secciones.alDespachoIngeniero = {};
secciones.length++;
secciones.alDespachoIngeniero.texto = 'Casi no la ves, de no ser por tus ojos... etc...Una discreta y fina cuerda cuelga de un extremo a otro del marco de la puerta. ¡Qué curioso, ¿no?';
secciones.alDespachoIngeniero.opciones = [
  ["tirasCuerda", "Tiras de la cuerda, a ver qué pasa"],
  ["pasaCuerda", "Pasas por encima de la cuerda"]
];
secciones.alDespachoIngeniero.test = ["des",0,"pisasCuerda"];
secciones.alDespachoIngeniero.efectos = [];

secciones.tirasCuerda = {};
secciones.length++;
secciones.tirasCuerda.texto = 'Al tirar de la cuerda te llega un respingo a la puerta que te tira al suelo. Suena la alarma. Y ahora aparece la linterna del ingeniero cobra vida, te pega un capón y te pregunta ¿Qué está usted intentando hacer aquí?';
secciones.tirasCuerda.opciones = [
  ["soloExplorando", "Solo estaba explorando, lo prometo, es que me he perdido"],
  ["aRobar", "<q>He venido a robar, por supuesto</q>, declaras muy indignado"]
];
secciones.tirasCuerda.test = [];
secciones.tirasCuerda.efectos = ["magullado"];

secciones.pisasCuerda = {};
secciones.length++;
secciones.pisasCuerda.texto = 'No has podido verla, . etc...Una discreta y fina cuerda que colgaba extremo a otro del marco de la puerta. Y ahora aparece la linterna del ingeniero cobra vida y te pregunta ¿Qué está usted intentando hacer aquí?';
secciones.pisasCuerda.opciones = [
  ["soloExplorando", "Solo estaba explorando, lo prometo"],
  ["aRobar", "<q>He venido a robar, por supuesto</q>, declaras muy indignado"]
];
secciones.pisasCuerda.test = [];
secciones.pisasCuerda.efectos = [];

secciones.aRobar = {};
secciones.length++;
secciones.aRobar.texto = '¿y por qué no me robas a mí también? te enseñaré el mapa del tesoro pero solo si prometes llevarme contigo.';
secciones.aRobar.opciones = [
  ["valeConmigo", "Vale, te vienes conmigo"],
  ["noMeFio", "¿Por qué debería fiarme de ti?"]
];
secciones.aRobar.test = [];
secciones.aRobar.efectos = []

secciones.valeConmigo = {};
secciones.length++;
secciones.valeConmigo.texto = 'Le indica el mapa que se ve como ilustración <img alt="mapa del tesoro"> etc...';
secciones.valeConmigo.opciones = [
  ["alTesoro", "Ve a descubrir el tesoro con tu nuevo amigo"],
];
secciones.valeConmigo.test = [];
secciones.valeConmigo.efectos = [];

secciones.noMeFio = {};
secciones.length++;
secciones.noMeFio.texto = 'No me quieres ayudar, vale, ¿y qué me va a impedir a mí dar la alarma para que te pillen?';
secciones.noMeFio.opciones = [
  ["valeConmigo", "Si solo era una broma, claro que vienes conmigo"],
  ["niCaso", "No le haces caso"],
  ["aPorEl", "Aunque sea mágica es solo una lámpara, sería fácil apagarla de forma traicionera..."]
];
secciones.noMeFio.test = [];
secciones.noMeFio.efectos = [];

secciones.niCaso = {};
secciones.length++;
secciones.niCaso.texto = 'Intentas seguir explorando pero se pone a chillar como un condenado';
secciones.niCaso.opciones = [
  ["aLoMio", "Sigues a lo tuyo, esos fantasmas azules les da igual todo"],
  ["salesCorriendo", "Sales corriendo, no sea que haya más gente"]
];
secciones.niCaso.test = [];
secciones.niCaso.efectos = [];

secciones.aLoMio = {};
secciones.length++;
secciones.aLoMio.texto = 'pues al final no vino nadie... el pobre linternita se enfada y llora encuentras el <img alt="mapa"> armado con esta información quizás sea más fácil encontrar una salida';
secciones.aLoMio.opciones = [
  ["buscaSalida", "Intentas buscar una salida"]
];
secciones.aLoMio.test = [];
secciones.aLoMio.efectos = [];

secciones.salesCorriendo = {};
secciones.length++;
secciones.salesCorriendo.texto = 'parece que pudiste escapar a tiempo';
secciones.salesCorriendo.opciones = [
   ["buscaSalida", "Intentas buscar una salida"]
];
secciones.salesCorriendo.test = [];
secciones.salesCorriendo.efectos = [];

secciones.aPorEl = {};
secciones.length++;
secciones.aPorEl.texto = 'pues al final vino un [alguien] a por ti... y te pilló antes de que pudieras escapar... un final bonito etc';
secciones.aPorEl.opciones = [];
secciones.aPorEl.test = [];
secciones.aPorEl.efectos = [];

secciones.tunelDch = {};
secciones.length++;
secciones.tunelDch.texto = '<h2>La araña cazadora</h2> <p>Casi te pilló la araña cazadora cuando entraste deprisa en el túnel. Menos mal que la viste justo antes de que te lanzara su tela pegajosa. Un segundo más tarde y habrías sido como una momia de mosca.</p> <p>Pero eso es lo que <em title="Si tu personaje hubiera fallado la tirada de percepción">pudo haber pasado</em>, aunque lograste escapar. Has corrido hasta el fondo del túnel, y no ves dónde seguir huyendo.</p><p>Y en el fondo de esta cámara, hay una telaraña, grande como nunca has visto, y en el centro una momia de seda que, por su forma, parece alojar una <em title="Como un niño, por ejemplo.">persona pequeña</em>.';
secciones.tunelDch.opciones = [
  ["intentasRescate", "Intentas rescatar a la víctima"],
  ["tunelIzq", "Vas al otro túnel"]
];
secciones.tunelDch.test = ["per",0,"pilladoAranna"];
secciones.tunelDch.efectos = [];

secciones.intentasRescate = {};
secciones.length++;
secciones.intentasRescate.texto = '\
<h2>Intentas el rescate</h2>\
<p>Una acción noble y aventurera, desde luego. La pregunta principal es, ¿cómo lo vas a hacer? Tienes la posibilidad de hacerlo a lo bruto, claro, o sea buscas los anclajes de la telaraña y los arrancas. Luego ya solo tienes que ir a porla persona que está dentro. Otra posibilidad es tratar de buscar una piedra afilada y usarla para cortar. Por último, pero solo si te atreves... verás hay una cuerda de telaraña colgando del techo, si saltas te puedes agarrar a ella y columpiarte hasta donde está la víctima. No sé, en una novela de aventuras seguro que sale bien.';
secciones.intentasRescate.opciones = [
  ["piedraAfilada", "Buscas una piedra afilada"],
  ["aLoBruto", "Arrancas la teleraña a lo bruto"],
  ["saltoAventura", "Agarras la cuerda de telaraña y te lanzas"]
];
secciones.intentasRescate.test = [];
secciones.intentasRescate.efectos = [];

secciones.aLoBruto = {};
secciones.length++;
secciones.aLoBruto.texto = '<h2>¡Era una emboscada!</h2><p>Pero ahora viene una malvada araña contra tí y te atrapa con su tela</p>';
secciones.aLoBruto.opciones = [];
secciones.aLoBruto.test = [];
secciones.aLoBruto.efectos = [];

//
secciones.pilladoAranna = {}; 
secciones.length++; 
secciones.pilladoAranna.texto = '<h2>Preso de la araña</h2>\
<p>Sigilosa, sigilosa, sin que <em title="Tu personaje falló la tirada de PERcepción">pudieras verla, ni oírla siquiera</em> la araña te lanzó un chorro de tela pegajosa. Ahora que una araña te ha atrapado y envuelto en su tela te lleva al centro de tu red solo puedes pensar en que todo se acabe pronto, por favor.</p>';
secciones.pilladoAranna.opciones = []; 
secciones.pilladoAranna.test = [];
secciones.pilladoAranna.efectos = [];//

secciones.piedraAfilada = {};
secciones.length++;
secciones.piedraAfilada.texto = '<h2>Un precioso instrumento</h2><p>En realidad no era tan fácil encontrarla. El mundo está lleno de rocas hasta que necesitas una. Pero lo cierto es que <em title="Tu personaje pasó la tirada de PERcepción">la encontraste</em> y ya tienes tu bonita piedra, dura, resistente y afilada, ¿ahora qué vas a hacer con ella?</p>';
secciones.piedraAfilada.opciones = [
  ["cortarTelaraña", "Cortas la telaraña para hacerla caer"],
  ["saltaConPiedra", "Saltas a la cuerda de la telaraña, pero bien pertrechado con tu piedra afilada"]
];
secciones.piedraAfilada.test = ["per",2,"noEncuentrasPiedra"];
secciones.piedraAfilada.efectos = [];

secciones.noEncuentrasPiedra = {};
secciones.length++;
secciones.noEncuentrasPiedra.titulo = 'Pues no la encuentras';
secciones.noEncuentrasPiedra.texto = 'Era en realidad complicado buscar en la penumbra de este túnel la piedra perfecta. Que además tiene la mal costumbre de ser pequeñas y grises, tirando a negras, como las sombras. Bueno, merece que no pierdas más el tiempo...';
secciones.noEncuentrasPiedra.opciones = [
  ["aLoBruto", "Arrancas la teleraña a lo bruto"],
  ["saltoAventura", "Agarras la cuerda de telaraña y te lanzas"]
];
secciones.noEncuentrasPiedra.test = [];
secciones.noEncuentrasPiedra.efectos = []; 

secciones.cortarTelaraña= {};
secciones.length++;
secciones.cortarTelaraña.titulo = '<h2>¡Sorpresa!</h2>';
secciones.cortarTelaraña.texto = '<p>Cortas los extremos de la telaraña con rapidez hasta que se derrumba. Corres a salvar a la criatura atrapada, cortando las fibras de la red, hasta que descubres que se trata de un muñeco. La araña te ha engañado y ahora va a por tí!</p>';
secciones.cortarTelaraña.opciones = [
   ["huirAranna", "Sales corriendo, buscando una salida"],
   ["lucharAranna", "Tampoco es tan grande y tu piedra de obsidiana corta tan bien como un cuchillo"]
];
secciones.cortarTelaraña.test = [];
secciones.cortarTelaraña.efectos = [];

secciones.huirAranna = {};
secciones.length++;
secciones.huirAranna.titulo = '¡Por los pelos!';
secciones.huirAranna.texto = '<p>Conseguiste esquivar a la araña y dejarla atrás. Fue <em title="Pasaste la tirada de fuerza">difícil</em> porque no había más salida que la entrada de dónde viniste. Eso significa que tienes que explorar el túnel que antes desechaste.</p>';
secciones.huirAranna.opciones = [
  ["tunelIzq", "Ve entonces al túnel de la izquierda"]
];
secciones.huirAranna.test = ["fue", 0, "pilladoAranna2"];
secciones.huirAranna.efectos = [];

secciones.pilladoAranna2 = {};
secciones.length++;
secciones.pilladoAranna2.titulo = 'No hay esperanza';
secciones.pilladoAranna2.texto = '<p>Intentaste huir, pero la araña fue más <em title="Fallaste la tirada de fuerza">rápida</em>. En parte porque no había más salida que la entrada. Pero eso no importa ya, porque sus mandíbulas se claraon en tu espalda y su veneno también...</p>';
secciones.pilladoAranna2.opciones = [];
secciones.pilladoAranna2.test = [];
secciones.pilladoAranna2.efectos = [];

secciones.lucharAranna = {};
secciones.length++;
secciones.lucharAranna.titulo = 'Victoria';
secciones.lucharAranna.texto = '<p>Deberías ser ahora pienso para arañas, pero triunfaste en la pelea y ahora, aunque algo maltrecho puedes ir al otro túnel</p>';
secciones.lucharAranna.opciones = [
  ["tunelIzq", "Ve entonces al túnel de la izquierda"]
];
secciones.lucharAranna.test = [];
secciones.lucharAranna.efectos = ["grave"];
//seccionSiMuere no pongo para probar sección de muerte genérica (muere14)

secciones.saltoAventura = {};
secciones.length++;
secciones.saltoAventura.titulo = 'Una idea desafortunada bien ejecutada'
secciones.saltoAventura.texto = '<p>Consigues saltar y todo eso, pero al llegar a la parte central de la telaraña te quedas pegado a ella, sin poder escapar... creo que te vas con la araña</p>';
secciones.saltoAventura.opciones = [];
secciones.saltoAventura.test = ["fue",1,"muereGoryAleluya"];
secciones.saltoAventura.efectos = [];

secciones.quitaTres = {};
secciones.length++;
secciones.quitaTres.texto = '\
<h2>Quitas tres candelabros grandes y pones uno pequeño</h2>\
<p>Ahora tienes un candelabro grande y uno pequeño. Un total de 14 luces en la casilla. Pero no pasa nada, hm...<p>';
secciones.quitaTres.opciones = [
  ["usaPalanca3", "¿Bajas la palanca ahora?"],
  ["quitaDos",  "Quitas tres candelabros grandes y pones uno pequeño"]
];
secciones.quitaTres.test = []; // habilidad, target, seccion si falla, si acierta se queda en donde estabaTres

secciones.usaPalanca3 = {};
secciones.length++;
secciones.usaPalanca3.titulo = 'De vuelta al orfanato';
secciones.usaPalanca3.texto = '<p>Una nube de humo, un aroma a fósforo y te desmayas. Cuando recuperas la consciencia apareces en el orfanato. Concretamente sobre el tejado, y en ropa interior, a las tres de la madrugada. Vas a tener mucho que explicar</p><p>Suerte.</p>';
secciones.usaPalanca3.opciones = [];
secciones.usaPalanca3.test = [];

secciones.volverCasa = {};
secciones.length++;
secciones.volverCasa.titulo = 'De noche en el bosque';
secciones.volverCasa.texto = '<p>Te alejas corriendo porque sabes que las aventuras son peligrosas. Sobre todo si tienen fantasmas. Cuando ya no puedes correr más, caminas muy despacio hasta que te recuperas y luego vuelves a correr. No sabes dónde estás, ni por dónde se vuelve a casa. Aunque tu casa sea un orfanato sigue siendo tu casa. Y da miedo no saber dónde estás.</p>\
<p>Piensas en subirte a un árbol para comprobar si puedes encontrar la salida. Pero es casi de noche, y no sabes trepar muy bien. Sería demasiado peligroso intentarlo ahora. Si te caes o vas directo a las rocas o a las zarzas. </p>';
secciones.volverCasa.opciones = [
  ["hacerRefugio", "Haces un refugio"],
  ["sigueCaminando", "Sigues Caminando"]
];
secciones.volverCasa.test = [];
secciones.volverCasa.efectos = [];

secciones.sigueCaminando = {};
secciones.length++;
secciones.sigueCaminando.texto = '\
<h2>Te encuentran, ¡bien!</h2>\
<p>La noche fue horrible. Muchas veces creías que te seguían y te has pasado la mitad del tiempo huyendo de ruidos raros entre los matorrales. Seguro que no eran sino animales que se asustaban al verte pasar. Pero a ver quién se arriesga. Te has llevando un par de tortazos, hasta una vez tropezaste con una raíz y rodaste por el suelo. Pero todo eso ha pasado ya, porque del pueblo mandaron una patrulla en tu búsqueda, y a primera hora de la mañana te encontraron, sucio y magullado, pero vivo. Hoy desayunas con el alcalde y por la tarde, bueno, seguro que tienes que dar muchas explicaciones a la rectora del orfanato. ¡Suerte! </p>';
secciones.sigueCaminando.opciones = [];
secciones.sigueCaminando.test = ["per",0,"pilladoKarppis"]; // habilidad, target, seccion si falla, si acierta se queda en donde estaba

secciones.pilladoKarppis = {};
secciones.length++;
secciones.pilladoKarppis.texto = '<h2>Te han pillado</h2>\
<p>Hay un torre de piedra en medio del bosque, apenas más alta que los árboles que la circundan. Allí vive una tribu de seres como los humanos, pero algo más bajitos, de cuatro dedos en manos y pies, y con la piel en varios tonos marrones, a manera de camuflaje. Se les suele llamar <em title="Se pronuncia karp-pis, marcando las dos <q>p</q>">karppis.</em></p>\
<p>Desde esa torre salen a cazar conejos y ciervos. Pero si detectan algún viajero solitario, sobre todo si es un niño perdido, organizan una emboscada. Esperan a la noche, porque conocen tan bien la zona que parece que vieran en la oscuridad. En realidad te siguieron con sus grandes orejas y sus finas narices. Se quedaron quietos agazapados hasta estar seguros que no tuvieras una oportunidad ni de defenderte ni escapar. Ahora te llevan, vivo y sano, pero prisionero a su torre. ¿Tu futuro? Hay comerciantes que compran niños para llevarlos a países extranjeros, donde venderlos como esclavos en el palacio del algún reyezuelo. Aunque, ¿quién puede decir que nunca conseguirás escapar?</p>';
secciones.pilladoKarppis.opciones = [];
secciones.pilladoKarppis.test = [];

secciones.hacerRefugio = {};
secciones.length++;
secciones.hacerRefugio.texto = '<h2>Consigues hacerte un refugio</h2>\
<p>Te pones a trabajar con rapidez. Buscas primero una piedra puntiaguda con la que improvisas una especie de pala. Con ella sacas raíces jóvenes, flexibles como cuerdas. Después buscas ramas caídas que anclas al suelo y atas, formando una estructura que cubres con hojas y todo lo que encuentras. Aún así careces de lo más importante: un fuego. Yesca hay de sobra en el bosque, pero no trajiste pedernal y ya es demasiado oscuro para buscarlo.</p>\
<p>Pasas la noche aterido de frío, casi sin dormir. Pero a la mañana siguiente, a pesar del hambre y el cansancio, vives. Y lo que es mejor, pronto escuchas las voces de la patrulla ciudadana que ha venido a buscarte. Hoy desayunas con el alcalde, aunque por la tarde tendrás mucho que explicar. ¡Suerte!';
secciones.hacerRefugio.opciones = [];
secciones.hacerRefugio.test = ["des",3,"pasasFrio"];

secciones.pasasFrio = {};
secciones.length++;
secciones.pasasFrio.texto = '<h2>Una noche horrible</h2>\
<p>Es más fácil en los cuentos. En la vida real hacerte un refugio con lo que ofrece el bosque lleva mucho tiempo y esfuerzo. Sobre todo cuando solo eres un niño con miedo. Encima se te hace de noche y es imposible ver nada. Mucho menos hacer un fuego. Como último remedio te refugias bajo un gran tronco caído y medio podrido. El frío es horrible y no te duermes del miedo que te da despertar. Pero a la mañana siguiente, a pesar del hambre y el cansancio, vives. Y lo que es mejor, pronto escuchas las voces de la patrulla ciudadana que ha venido a buscarte. Hoy desayunas con el alcalde, aunque por la tarde tendrás mucho que explicar. ¡Suerte!';
secciones.pasasFrio.opciones = [];
secciones.pasasFrio.test = [];
secciones.pasasFrio.efectos = ["herido"];
secciones.pasasFrio.seccionSiMuere = "muere1";

secciones.muere1 = {};
secciones.length++;
secciones.muere1.texto = "<h2>Has muerto de frío y hambre</h2><p>Intentaste hacer un refugio, pero no es fácil para un niño y luego fue una noche horrible, especialmente para un niño mal alimentado como tú. Cuando te encontraron ya habías muerto. La única buena noticia es que nunca llegaste a despertar...</p>";
secciones.muere1.opciones = [];
secciones.muere1.test = [];
secciones.muere1.efectos = [];

secciones.muereGoryAleluya = {};
secciones.length++;
secciones.muereGoryAleluya.titulo = 'Una caída brutal';
secciones.muereGoryAleluya.texto = '<p>Las manos <em title="Fallaste la tirada de FUErza">te resbalaron</em> al agarrar la cuerda de telaraña que resultó ser más sedosa de lo que esperaban. Podrías haberte matado de la caída, pero la red de la araña es blandita. Lástima que también sea pegajosa y no te puedas escapar.</p><p>Esto pinta muy mal</p>';
secciones.muereGoryAleluya.opciones = [];
secciones.muereGoryAleluya.test = [];
secciones.muereGoryAleluya.efectos = [];

secciones.muereCaidaDescuelgue = {};
secciones.length++;
secciones.muereCaidaDescuelgue.titulo = 'Un extraño destino';
secciones.muereCaidaDescuelgue.texto = 'Te has roto una mano y un pie y no te puedes levantar. Los fantasmas azules no te prestan atención, llores, grites, insultes o supliques. Una hora después una maga viene y te salva... para mantenerte encerrado, usado como batería mágica';
secciones.muereCaidaDescuelgue.opciones = [];
secciones.muereCaidaDescuelgue.test = [];
secciones.muereCaidaDescuelgue.efectos = [];

secciones.muere14 = {};
secciones.length++;
secciones.muere14.titulo = 'Se acabó tu aventura';
secciones.muere14.texto = '<p>Estás inconsciente y ya no importa mucho cómo pasó, salvo por el hecho que tu corazón está a punto de dejar de latir.</p>';
secciones.muere14.opciones = [];
secciones.muere14.test = [];
secciones.muere14.efectos = [];

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