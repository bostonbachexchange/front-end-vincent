import React from 'react';
import styles from './Semblanzas.module.css';
import emiliano from '../assets/Alvaro-Emiliano.webp';
import alvar from '../assets/Emiliano-Alvar.webp';
import olin from '../assets/Olin.webp';
import joseEmilio from '../assets/Jose-Emilio.webp';
import anaGalan from '../assets/Ana-Galan.webp';
import joaquinMartinez from '../assets/Joaquin-Martinez.webp';
import santiagoMorales from '../assets/Santiago-Morales.webp';
import anaidScandon from '../assets/Anaid-Scandon.webp';
import pabloGalan from '../assets/pablo-galan.webp'
import fernandaBada from '../assets/Fernanda-Bada.webp'

const currentProfiles = [
  {
    name: 'OLINMENKIN SOSA NÁJERA',
    city: 'Ciudad de México',
    year: '1993',
    description: (
      <>
        Licenciado en Literatura Dramática y Teatro, por la Facultad de Filosofía y Letras, de la Universidad Nacional Autónoma de México. Medalla Gabino Barreda de su generación. Participante del curso de verano convocado por la Fundación para las Letras Mexicanas en Xalapa, Veracruz: 2012 (narrativa) y 2013 (dramaturgia). En 2012, obtuvo el segundo lugar en el XIII concurso Nacional de Cuento Preuniversitario Juan Rulfo, convocado por la Universidad Iberoamericana. Además de tener textos publicados en <em>La Cigarra</em>, revista literaria y en <em>Círculo de Poesía</em>. En 2015, participó como adaptador y actor en <em>Un enemigo del Pueblo</em>, obra finalista del XXIII Festival Internacional de Teatro Universitario de la UNAM. Su compañía en la Universidad, Teatro Argüende, fue seleccionada en el 2017 por el programa Incubadoras de grupos teatrales de la UNAM. Estrenaron <em>La Cisma de Inglaterra</em>, de Pedro Calderón de la Barca. En donde participó activamente como dramaturgo adaptador y como actor. Desde el 2018 es parte de la Vincent company para actores y no-actores fracasados, en donde se ha desempeñado en varios ámbitos: como codirector y actor en <em>Perro muerto en Klondike</em>, que se estrenó en Junio del 2018 dentro del ciclo <em>Dramaturgias Ambulantes</em>. Como iluminador en <em>Y la guerra sigue</em>, obra ganadora del Festival Internacional de Teatro Universitario en 2019. Como actor en <em>La ciencia de la despedida</em>, coproducción entre la Vincent company y Teatro la Capilla 2020. Las tres obras mencionadas son autoría del dramaturgo José Emilio Hernández Martín.
      </>
    ),
    image: olin
  },
  {
    name: 'JOSÉ EMILIO HERNÁNDEZ MARTÍN',
    city: 'Ciudad de México',
    year: '1993',
    description: (
      <>
        Ha cursado estudios de escritura creativa y literatura por la Universidad del Claustro de Sor Juana. Estudió el diplomado de creación literaria de la Sociedad de Escritores de México. Es miembro de la 14° promoción de la fundación Antonio Gala para jóvenes creadores en el área de literatura. Tiene textos publicados en revistas como <em>Círculo de poesía</em>, <em>Voluta de Aliento</em>, <em>La cigarra</em>, <em>Punto en línea</em> y <em>Punto de partida</em>. Fue becario en dos ocasiones por la Fundación para las Letras Mexicanas y la Universidad Veracruzana en el área de dramaturgia para el curso de creación literaria para jóvenes. Seleccionado en 2013 para el taller de dramaturgia del Festival Internacional de Teatro Universitario de la Universidad Veracruzana, impartido por Estela Leñero. Becario por el Festival de la Joven Dramaturgia para asistir al taller de narrativa y dramaturgia: <em>Nuevas técnicas del teatro narrado</em>, impartido por Edgar Chías y Eduardo Antonio Parra. Participó en el segundo encuentro nacional de escritores jóvenes “Jesús Gardea” en Chihuahua, con la obra <em>Flamingo Express</em>. Ganador del primer lugar en la categoría de poesía en el 46 concurso <em>Punto de Partida</em> de la Universidad Nacional Autónoma de México. En el 2017 su obra <em>Y la guerra sigue</em> fue elegida para conformar la programación del decimoquinto festival de joven dramaturgia en Querétaro y su extensión en Oaxaca. Su obra <em>Sobre la importancia de las cosas</em> fue elegida para integrar el ciclo <em>Irrepetibles</em> en el Teatro La Capilla.
      </>
    ),
    image: joseEmilio
  },
  {
    name: 'ANA GALÁN SOUTO',
    city: 'Ciudad de México',
    year: '1995',
    description: (
      <>
        Egresada de la licenciatura en Artes Visuales de la ENPEG “La Esmeralda” y estudiante de Filosofía en la UNAM. Realizó un intercambio académico en la Universidad Nacional de Colombia sede Medellín, en la Facultad de Arquitectura en la carrera de Artes. Ha participado en varias exposiciones colectivas como <em>Después del Sinaia. Introspecciones de un exilio</em> (2014) <em>Querido otro</em> (2015) <em>Inventaria</em> (2016) <em>Rastro</em> (2019) y <em>No sólo se trata de mí</em> (2019). Ha colaborado en la producción de los cortos animados <em>Ver arder y no meter las manos al fuego</em> (2014) y <em>Hueyapan</em> (2017). Cuenta también con una exposición individual, titulada <em>Enclave</em> (2019) en Pandeo Galería, en el ciclo de exposiciones <em>Uno a lado de otro uno</em>, coordinado por Sofía Taboas. Tiene experiencia como auxiliar de investigación y adjunta en las clases de Historia del Arte IV y Teoría del Arte I. Desde el 2017 forma parte del equipo creativo de la compañía de teatro Vincent Company para actores y no actores fracasados, en el área de escenografía.
      </>
    ),
    image: anaGalan
  },
  {
    name: 'JOAQUÍN MARTÍNEZ TERRÓN',
    city: 'Ciudad de México',
    year: '1993',
    description: (
      <>
        Actualmente es estudiante de la carrera de Sociología en la Facultad de Ciencias Políticas de la UNAM, donde se ha desempeñado como profesor adjunto en la materia Sociología Funcionalista. Participa como becario en el proyecto PAPIIT- <em>Prácticas Cotidianas y Emancipación en la Lengua</em>. Ha participado en el taller literario <em>“Ficción y Realidad. Literatura y vida cotidiana”</em> impartido por el Lic. Luis Téllez Tejeda y en taller virtual de la Universidad del Claustro de Sor Juana, <em>“La versión paranoica: Taller de cuento contemporáneo”</em> a cargo de Daniel Rodríguez Barrón. Desde los quince años compone de manera independiente música popular para guitarra. Además, estudió guitarra flamenca en la escuela de Música DIM y guitarra clásica en la Academia de Música Yamaha. Finalista del Concurso Nacional de Guitarra Acústica Yamaha 2011. Su música original para <em>Y la guerra sigue</em> ganó el premio de Mejor musicalización en el XXVI FITU.
      </>
    ),
    image: joaquinMartinez
  },
  {
    name: 'EMILIANO ALVAR RODRÍGUEZ CASSIGOLI',
    city: 'Santiago de Chile',
    year: '1995',
    description: (
      <>
        Pasante de la carrera de Filosofía en la UNAM. Invitado como expositor en la sesión <em>“Teatro del oprimido”</em> en la universidad Salamon-Allys, en Berlín, y coordinador del taller de teatro político para la asociación Amaro Foro: Sinti und Roma, también en Berlín. Ha publicado diversos artículos en las revistas de filosofía <em>Reflexiones Marginales</em>, <em>Theoria</em> y la revista del Seminario de Metafísica de la FFyL-UNAM. Fue presentador del libro <em>Heidegger y los judíos</em>, de Donatella di Cesare, para la editorial Gedisa. En el ámbito teatral, cursó talleres de actuación con Mariana Gándara, Antonio Peñuñuri, Laura Furlán y Diana Sedano. Protagonizó la tesis de titulación del CUEC <em>La noche oscura del alma</em>, y la cápsula <em>Nocturna rosa</em> para TV UNAM. Es miembro fundador de la compañía Vincent Company para actores y no-actores fracasados, donde ha protagonizado las obras <em>Y la guerra sigue</em> (ganadora del XXVI FITU) y <em>Perro Muerto en Klondike</em>. Su actuación en <em>Y la guerra sigue</em> fue meritoria de la mención a Mejor actuación masculina, en el XXVI FITU. Formó parte del elenco de la obra <em>Extirpados</em>, bajo la dirección de Antonio Peñuñuri y <em>Tal vez esto no se trata de amor</em>, bajo la dirección de Gabriela Guraieb, obra que también co-escribió. Fue miembro del elenco de <em>Titus</em>, bajo la dirección de Angélica Rogel, en el Teatro Helénico, y miembro del elenco de la obra <em>La ciencia de la despedida</em>, ganadora de la Coproducción 2020 del Teatro La Capilla, estrenada en marzo del 2020.
      </>
    ),
    image: alvar
  },
  {
    name: 'PABLO GALÁN SOUTO',
    city: 'Ciudad de México',
    year: '1999',
    description: (
      <>
        Diseñador escénico con 6 años de experiencia laboral, licenciado de la carrera de Escenografía, con orientación en vestuario, de la Escuela Nacional de Arte Teatral. En el 2018 inicia su formación artística profesional al graduarse del diplomado de caracterización, maquillaje y body paint perfomático de la Facultad de Artes y Diseño de la Universidad Nacional Autónoma de México (UNAM). Desde 2017 participó como miembro fundador de la Vincent Company, donde funge hasta el día de hoy como vestuarista, caracterizador y asistente de producción. Esta compañía cuenta con mas siete obras producidas con más de una temporada cada una, presentadas en más de seis foros y cuatro festivales distintos. En el 2021 retoma su trabajo en cine en cortometrajes como <em>La partida</em>, <em>El Fondo</em> y <em>Rojo oscuro</em>, como asistente de dirección de arte, vestuarista y maquillista, entre otros. En el 2022 trabajo junto con Martín Acosta y la diseñadora Sandra Colina en la temporada académica de la ENAT como diseñador de vestuario en la producción de <em>Cercenada Belleza que defiendo</em>, basada en trabajos de Elena Garro. Ganador de una estancia académica en La Universidad de las Artes en Buenos Aires, Argentina. En 2023 Participo como asistente de vestuario para la diseñadora Gilda Navarro y las productoras Red Rum y Huasteca casa cinematográfica en la película <em>Vainilla</em>, actualmente en post producción, y se tituló de la ENAT con el montaje de <em>Un sueño de noche de verano</em> de el maestro Chucho Dias junto a la diseñadora de vestuario Alejandra Álvarez. Actualmente continúa con su trabajo en La Vincent Company y en cine independiente.
      </>
    ),
    image: pabloGalan
  },
  {
    name: 'ÁLVARO EMILIANO LÓPEZ REYES',
    city: 'Ciudad de México',
    year: '1994',
    description: (
      <>
        Cuenta con estudios en etnomusicología por la Facultad de Música de la UNAM, además de estudios de guitarra clásica en la Academia de Arte de Florencia, bajo la tutela del maestro Carlos Martínez Larráuri, y en la escuela de música Vida y Movimiento, con el maestro César Lara. Posee estudios de guitarra de Jazz en la academia de música LaFaro, con los maestros Héctor Rodríguez y Agustín Bernal. En el rubro de composición, ha estudiado armonía clásica con el maestro Jorge Vidales. En las artes escénicas, cuenta con estudios de teatro por la Escuela de teatro CADAC. Actualmente estudia en diplomado como intérprete de Jazz en New England Consevatory.
      </>
    ),
    image: emiliano
  },
  {
    name: 'FERNANDA BADA',
    city: 'Veracruz',
    year: '1991',
    description: (
      <>
        Estudió teatro en la Facultad de Artes de la Universidad Veracruzana. Como interprete ha participado en montajes bajo la dirección de Gerardo Trejo Luna, Mariana García Franco, Patricio Ruiz, Edson Martínez, Ricardo Rodríguez, Luis Eduardo Yee, Adriana Dutch, entre otros. En el 2014 fue nominada por la ACPT en la categoría co-actuación femenina por la obra <em>Ceremonia sin flores</em>. Como dramaturga escribió <em>bikini redquiem in pace</em>, obra finalista del premio Nacional de Dramaturgia Gerardo Mancebo del Castillo 2019. <em>Mirracio</em> obtuvo una mención honorífica y está publicada en el premio Independiente de Joven Dramaturgia 2015, TSP. <em>Zulema</em>, obra montada por la compañía los Bocanegra, se puede leer en la antología de <em>Dramaturgia para leer en el baño vol.2 Edit.</em> Zamora Siete. Fue residente de la Fundación Antonio Gala en Córdoba, España y becaría de la Fundación para las Letras Mexicanas.
      </>
    ),
    image: fernandaBada
  }
];

const formerProfiles = [
  {
    name: 'SANTIAGO MORALES OLEA',
    city: 'Ciudad de México',
    year: '1996',
    description: (
      <>
        Pasante de la licenciatura en Letras Clásicas en la FFyL de la UNAM. Actualmente participa en el proyecto PAPIIT <em>“Intertextualidad y alusividad en los géneros poéticos griegos y latinos. Perspectivas formales y pragmáticas para el estudio de los sistemas literarios y sus modelos”</em> en el Instituto de Investigaciones Filológicas, UNAM. Ha asistido adiversos seminarios en la misma dependencia. En abril del 2018 participó en el XV Coloquio de Estudiantes de Letras Clásicas con la ponencia: <em>“La poética de Marcial en los epigramas de Quevedo”</em>. También se ha desempeñado como adjunto de las materias <em>“Latín V”, Latín VI”, “Griego V” y “Griego VI”</em> en el último año en la FFyL, UNAM. Trabajó como capturista de texto en el Fondo de Cultura Económica y ha participado en la revisión y corrección de textos académicos relacionados con su área de conocimiento, en el Instituto de Investigaciones Filológicas, UNAM.
      </>
    ),
    image: santiagoMorales
  },
  {
    name: 'ANAID A. ZENDEJAS ESCANDÓN',
    city: 'Ciudad de México',
    year: '1984',
    description: (
      <>
        Licenciada en Biología por la UNAM, especializada en Historia de la Ciencia. Actualmente escribe su tesis de para obtener el título de Maestría en Traducción impartida por El Colegio de México. Se ha desempeñado como traductora y correctora de estilo (Francés e Inglés), de numerosas publicaciones para editoriales como: Elsevier, McGraw-Hill, Pearson, Cengage Learning, etc. Cuenta con una publicación en la colección de libros <em>Las palas y las musas: encuentros entre la ciencia y el arte</em>. Desde 2016 es miembro fundador de la empresa de traducción Verba Volant. Recientemente se ha dedicado a la traducción de guiones de cine y la creación de subtítulos para varias óperas primas del CUEC y CCC.
      </>
    ),
    image: anaidScandon
  }
];

const Semblanzas = () => {
  return (
    <section className={styles.semblanzas}>
      <div className={styles.container}>
        {/* <h1 className={styles.heading}>Current Participants</h1> */}
        {currentProfiles.map((profile, index) => (
          <div className={styles.profile} key={index}>
            <img src={profile.image} alt={profile.name} className={styles.profileImage} />
            <div className={styles.profileDetails}>
              <h2>{profile.name}</h2>
              <p className={styles.cityYear}>{profile.city}, {profile.year}</p>
              <p>{profile.description}</p>
            </div>
          </div>
        ))}
        <h1 className={styles.heading}>Antiguos participantes</h1>
        {formerProfiles.map((profile, index) => (
          <div className={styles.profile} key={index}>
            <img src={profile.image} alt={profile.name} className={styles.profileImage} />
            <div className={styles.profileDetails}>
              <h2>{profile.name}</h2>
              <p className={styles.cityYear}>{profile.city}, {profile.year}</p>
              <p>{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Semblanzas;
