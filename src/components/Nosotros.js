import React from 'react';
import './Nosotros.css';
import { useNavigate } from 'react-router-dom';

const Nosotros = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/semblanzas');
    };
  return (
    <section className="nosotros">
      <div className="container">
        <div className='heading-container'>
            <h1 className="heading">Manifiesto</h1>
            <button className="semblanzas-button" onClick={handleButtonClick}>Semblanzas</button>
        </div>
        <article className='article'>
            <p className="quote">"El teatro está muerto. Me voy a casa."</p>
            <p>
            Esto lo dijo, o lo pudo haber dicho –no lo sabemos de cierto– Vincent Jean Kompany cuando salió de su primera y única audición para el papel de Estragón de la compañía belga Les Têtes Ailleurs. Corría el año 2001. Días después y sumido en una aparente depresión –a consecuencia del rechazo– Kompany decidió probar suerte en las fuerzas básicas del Royal Sporting Club Anderlecht. Se le daba el fútbol. No tardó en hacerse notar; años después subiría al primer equipo.
            </p>
            <p>
            En el 2006, gracias a 5 brillantes temporadas en el Anderlecht, sería fichado por el Hamburgo, y en 2008 Kompany sería contratado por el Manchester City. Lo que sigue es historia conocida. Desde el 2004 juega en la selección de su país y tiene un sueldo aproximado de 10.4 millones de libras. Se sabe, por fuentes cercanas, que nunca abandonó la vocación actoral y a pesar de su atareada agenda futbolística, sigue, de vez en cuando, haciendo pequeños papeles en compañías independientes de teatro en Londres.
            </p>
            <p>
            Esta no es una historia de fracaso. O sí. Es la ambigüedad de lo que resulta significativo. En la actualidad Vincent Kompany tiene una exitosa carrera como futbolista. Es capitán en su club y en la selección belga. Sin embargo, nunca pudo desarrollar su vocación de actor o de director o de iluminador, y lo que se suele acumular en el camino. Y es que a veces el destino, o el azar (ese hermano bastardo), se vale de estas crueles paradojas. Nuestra compañía hace de esta historia su emblema. Por el fracaso, por la frustración, por el cansancio. Pero también por todo eso que está junto a todo lo anterior; la valentía y el coraje de sobreponerse y seguir y no abandonar aquello que nos pudo hacer felices.
            </p>
            <p> 
                La <span className='bold-color'>Vincent Kompany para actores y no-actores fracasados</span> es un grupo de jóvenes que busca asimilar el fracaso, no para convertirlo en éxito (eso se lo dejamos a los que se afilan los codos, porque creen que la vida es una competencia), sino para hacer de él una trinchera donde, armados hasta los dientes, podamos hacer lo que queremos, cuando nos han dicho que no podemos.
            </p>
            <p>
                No se trata de cumplir este sueño o el otro, ni de seguir aquel camino o el que está a un lado del primero, sino de crear caminos propios y tender puentes hacia eso que deja de ser una posibilidad para convertirse en certeza. Y nosotros no nos vamos a casa, ni creemos que el teatro esté muerto.
            </p>
            <p>
                La mayor parte de los miembros de la Vincent no cuenta con formación teatral. No conocen las escuelas de teatro, y nunca han abierto un manual de actuación (a excepción del Manual de Carreño, ese folletín maravilloso que todo actor debe leer). Algunos intentaron leer alguna vez una obra de Shakespeare, pero les aburrió a la mitad. Otros se tragaron completa la poética de Aristóteles, pero ya no se acuerdan bien de cuál es la diferencia entre la comedia y la tragedia (y en verdad, ¿quién sabe cuál es la diferencia?). Pensar que lo anterior es un obstáculo, denota únicamente una pobre interpretación de lo que es el teatro. Para nosotros, el teatro no depende de una formación académica, de una ortodoxia técnica, ni siquiera de una aproximación intelectual. Para nosotros, el teatro es una experiencia. Y como experiencia, es accesible a todos.
            </p>
            <p>No estudiamos teatro. Hacemos teatro.</p>
            <p>
                Por eso, en la Vincent hay filósofos, músicos, ilustradores, traductores, biólogos y algún ocasional estudiante de preparatoria. No nos malinterpreten. No queremos un grupo interdisciplinario. No nos interesa el teatro desde la filosofía o desde la traducción. No queremos las distintas miradas que apuntan a un centro. El teatro no es una suma. Y no tiene centro. Hay jóvenes promesas y fracasados desempleados. Hay doctores y analfabetas. Pero no nos importa demasiado. Son palabras que se dicen. Lo que nos importa es el espacio donde el doctor se transforma en vagabundo, y el vagabundo en doctor, o mejor aún, el espacio donde ambos olvidan que la vida se trata de algo, y se sientan a fumar cigarros y contar chistes vulgares. Sí, no nos interesan las disciplinas. No queremos ejércitos de especialistas. Lo que nos interesa son los biólogos teatrales, el teatro de los músicos, los filósofos tramoyistas, los guitarristas directores, las traductoras dramaturgas, los futbolistas exitosos con carreras actorales truncas, y los sociólogos maquillistas. Lo que nos interesa no es nada más que esto: un escenario, un puñado de personas, y alguien que esté dispuesto a entregarse. Nada más. Nada menos. Ya sabemos que los manifiestos son tediosos. Y estar en contra ya no está de moda. Pero es que estamos cansados. Sí, un poco cansados. Porque basta con comprar una entrada en el teatro Insurgentes, o en el Helénico, para darse cuenta de que en el teatro institucional los rostros son siempre los mismos (se disfracen de Edipos o de Otelos), que los nombres que se escriben después de la palabra “Dirección” no son más que unos cuantos, y que los títulos de las obras se cuentan con los dedos de las manos.
            </p>
            <p>
                ¿Cuándo aparecerán en las marquesinas los nombres de esos miles que quieren hacer teatro (como quería y quiere aún, Vincent), pero que no conocen a nadie, que estudiaron Contaduría y no han leído a Chejov? ¿Dónde se pueden ver los rostros de esos anónimos que nunca se han subido a un escenario, y que, sin embargo, hacen y comprenden el teatro, como lo hace y comprende cualquiera? ¿cuándo se llenará la sala de una obra que no habla del ser y la trascendencia, sino de un joven que un día, saliendo de una fiesta, se sintió solo y no supo qué decir?  Hay que decirlo. No estamos en contra del teatro académico o institucional. Nos gusta Vicente Leñero. En serio, nos gusta. Y no tenemos nada contra López Tarso, ni contra Rodrigo Murray. Simplemente es un teatro que no nos interesa. Porque hay muchas formas de hacer teatro. Y es que el teatro no es una disciplina de especialistas. Es una actividad humana que tiene que ver con la vida en todas sus formas. Como tal, no responde a un canon o decálogo, y los que piensan que hay una sola forma de hacer teatro son críticos tristes o intelectuales deprimidos obsesionados con las reglas. Mejor harían buscando un psiquiatra. O un exorcista. Tratamos de ser originales. Ya sabemos que es una palabra oscura. Pero es una forma de hablar. Lo que pasa es que tenemos algo que decir. Y queremos decirlo con nuestras palabras, porque estamos hartos de pedir prestado. De vez en cuando nos gusta ir a ver una obra de Esquilo o de Ibsen. Pero nos gusta más sentarnos a hablar de lo que nos pasó en la mañana, cuando un hombre en el metro nos miró con indiferencia, o cuando fuimos a pedir trabajo y nos miraron las piernas debajo de la falda. Nos gusta más porque es nuestro, y porque no queremos morir enfermos y sobrecargados, en una cama de un hospital vacío, sin habérselo dicho nunca a nadie.
            </p>
            <p>
                Aquí nos detenemos. No por falta de tiempo. Ni de ingenio. Nos detenemos porque podríamos seguir por toda la eternidad, y hay otras cosas que hacer. Y porque en unos minutos juega el Manchester City, y queremos ver jugar a Vincent. 
            </p>
        </article>
      </div>
    </section>
  );
};

export default Nosotros;
