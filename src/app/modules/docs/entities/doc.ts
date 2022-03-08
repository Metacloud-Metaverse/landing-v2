
export class Doc {

  id: number = 0;
  title: string = '';
  caption: string = '';
  photo_header: string = '';
  category_id: number = 0;
  subcategory_id: number = 0;
  publish_date: string = '';
  content: string = '';

  creator_id: number = 0;
  creator: string = '';
  creator_photo: string = '';

  seo_title = '';
  seo_keywords = '';
  seo_description = '';

  static DOCS = [
    {
      slug: 'home',
      date: '15 October, 2021',
      content_html: `<p>Los smartphones han llegado a nuestra vida para quedarse y están ocupando gran parte de nuestro tiempo. Así lo demostró un estudio realizado por WhistleOut que asegura que las personas <b>pasamos un promedio de casi nueve años mirando la pantalla de nuestro smartphone</b>.</p>
      <p>Una persona pasa en promedio un poco <b>más de 76,500 horas en su celular a lo largo de su vida</b>, lo que equivale a 8.74 años, según el estudio. Esto se ve impulsado por el hecho de que la edad promedio de un usuario para adquirir un teléfono móvil es de 10 años, dándole un uso promedio de 3.07 horas diariamente.</p>
      <p>Los millennials pasan la mayor parte del tiempo en sus teléfonos, <b>registrando un promedio de 3.7 horas diarias</b>. Este tiempo promedio diario frente a la pantalla disminuye a medida que aumenta la edad de los usuarios; la <b>Generación X reporta 3 horas</b> de uso diario del teléfono y <b>los boomers pasan solo 2.5 horas</b> por día mirando sus pantallas.</p>
      <p>Efectos negativos: Demasiado tiempo en la pantalla en la mayoría de los casos genera, depresión y/o ansiedad, obesidad, dificultad para dormir, problemas crónicos del cuello y la espalda. A su vez, algunos de estos como por ejemplo la dificultad para dormir, generan otros efectos devastadores en el cuerpo, impactando en órganos y células incluidos el cerebro y la capacidad cognitiva, memoria y neurogénesis (generación de nuevas neuronas).</p>
      <p>Algunas recomendaciones útiles para reducir los malos efectos del uso de pantallas son:</p>
      <ul>
        <li>Dejar de usar tu teléfono (y otras pantallas también!) por al menos 2 hs antes de acostarte a dormir. (Esto permitirá la generación de melatonina, hormona fundamental para el sueño y poder dormirse a una hora razonable).</li>
        <li>Utilizar el modo nocturno en las apps, redes, etc. para que la pantalla sea menos dañina y ayude a mejorar el sueño. Además, se pueden usar lentes color amarillo o rojo que bloquean la luz blanca, impidiendo aún más su efecto negativo sobre la producción de melatonina.</li>
        <li>Cada 20 minutos de trabajo en una pantalla, mirar 20 segundos a lo lejos a modo de descanso. Esto tiene implicancias no sólo en el descanso de la vista, sino también en el descanso del cerebro y sus procesos, algo necesario para la salud mental.</li>
        <li>Ajustar el brillo y contraste de las pantallas para que emitan únicamente la luz necesaria para ver sin forzar la vista: ¡Mucha luz puede dañar tus ojos y tu cerebro!</li>
        <li>Se recomienda que la pantalla se encuentre a unos 50/60 centímetros de distancia de los ojos para cuidarlos.</li>
        <li>El borde superior debe quedar ubicado ligeramente debajo de los ojos (para no lastimar la espalda o el cuello además de generar mala postura).</li>
      </ul>
      <p>También existen algunos ejercicios oculares y mentales que se recomiendan hacer al menos una vez al día para no cansar la vista al usar pantallas:</p>
      <ul>
        <li><b>Cambiá la perspectiva</b>: Al menos cinco minutos cada hora de uso de una pantalla, asomate a la ventana y enfocá objetos lejanos durante 10 minutos. Si es posible, dejá el celular en casa y sal a dar un paseo de media hora. Cuando camines por la calle no mires al suelo. Mirá al frente o a los edificios, y enfocá objetos lejanos. Intentá leer rótulos que estén muy lejos.</li>
        <li><b>Vista cansada</b>: Mirá hacia un lado, donde no haya pantallas ni luces fuertes, y abrí los ojos lo máximo que puedas durante cinco segundos. Después cerralos lo más fuerte que puedas durante el mismo tiempo.</li>
        <li><b>Ojos secos</b>: realizar 10 parpadeos lentos, abriendo y cerrando los ojos por completo. A continuación 5 parpadeos rápidos, y de nuevo 10 lentos. Finalizamos cerrando los ojos durante un minuto.</li>
        <li><b>Relación muscular</b>: realizá un pestañeo muy fuerte, apretando los ojos y los músculos de las mandíbulas y la boca. Seguidamente, abrir los ojos y la boca lo máximo posible. Repetir 5 veces.</li>
        <li><b>Ejercicio de convergencia</b>: Agarrá un lápiz y estirá el brazo para situarlo frente a los ojos, lo más lejos que puedas. Enfocalo y acercalo lentamente a los ojos, sin dejar de mirarlo, hasta situarlo lo más cerca que puedas sin perder el enfoque. Repetí 5 veces.</li>
        <li><b>Ejercicio de refuerzo</b>: mové los ojos en círculo, como si estuviesen sobre una rueda. Primero en una dirección y luego en otra, durante un minuto.</li>
        <li><b>Masaje ocular</b>: Cerrá los ojos y, con los pulgares, realizá suaves masajes en la zona que hay desde los párpados hasta las cejas.</li>
        <li><b>Cambio de enfoque</b>: Colocá el dedo pulgar de la mano derecha a unos 30 centímetros de los ojos. Situá el índice de la mano izquierda unos 20 centímetros por detrás del pulgar. Enfocá al pulgar durante 2 o 3 segundos, y luego al dedo índice. Repetí 10 veces.</li>
        <li></li>
      </ul>
      <p>Recordá que los ojos son una extensión del cerebro. Por lo tanto, realizar estos ejercicios y tener la vista descansada te va a ayudar no solo a entrenar los músculos de los mismos, mejorar la visión y prevenir problemas visuales; sino también a conocer nuestra forma de mirar de una manera más profunda, lo cual ayuda a evitar y saber qué situaciones nos producen más estrés y así ayudar poderosamente a nuestra mente.</p>`,
    },
    {
      slug: 'world-introduction',
      date: '15 October, 2021',
      content_html: `<p>Los smartphones han llegado a nuestra vida para quedarse y están ocupando gran parte de nuestro tiempo. Así lo demostró un estudio realizado por WhistleOut que asegura que las personas <b>pasamos un promedio de casi nueve años mirando la pantalla de nuestro smartphone</b>.</p>
      <p>Una persona pasa en promedio un poco <b>más de 76,500 horas en su celular a lo largo de su vida</b>, lo que equivale a 8.74 años, según el estudio. Esto se ve impulsado por el hecho de que la edad promedio de un usuario para adquirir un teléfono móvil es de 10 años, dándole un uso promedio de 3.07 horas diariamente.</p>
      <p>Los millennials pasan la mayor parte del tiempo en sus teléfonos, <b>registrando un promedio de 3.7 horas diarias</b>. Este tiempo promedio diario frente a la pantalla disminuye a medida que aumenta la edad de los usuarios; la <b>Generación X reporta 3 horas</b> de uso diario del teléfono y <b>los boomers pasan solo 2.5 horas</b> por día mirando sus pantallas.</p>
      <p>Efectos negativos: Demasiado tiempo en la pantalla en la mayoría de los casos genera, depresión y/o ansiedad, obesidad, dificultad para dormir, problemas crónicos del cuello y la espalda. A su vez, algunos de estos como por ejemplo la dificultad para dormir, generan otros efectos devastadores en el cuerpo, impactando en órganos y células incluidos el cerebro y la capacidad cognitiva, memoria y neurogénesis (generación de nuevas neuronas).</p>
      <p>Algunas recomendaciones útiles para reducir los malos efectos del uso de pantallas son:</p>
      <p>Recordá que los ojos son una extensión del cerebro. Por lo tanto, realizar estos ejercicios y tener la vista descansada te va a ayudar no solo a entrenar los músculos de los mismos, mejorar la visión y prevenir problemas visuales; sino también a conocer nuestra forma de mirar de una manera más profunda, lo cual ayuda a evitar y saber qué situaciones nos producen más estrés y así ayudar poderosamente a nuestra mente.</p>`,
    },
    {
      slug: 'world-faq',
      date: '15 October, 2021',
      content_html: `<p><b>registrando un promedio de 3.7 horas diarias</b>. Este tiempo promedio diario frente a la pantalla disminuye a medida que aumenta la edad de los usuarios; la <b>Generación X reporta 3 horas</b> de uso diario del teléfono y <b>los boomers pasan solo 2.5 horas</b> por día mirando sus pantallas.</p>
      <p>Efectos negativos: Demasiado tiempo en la pantalla en la mayoría de los casos genera, depresión y/o ansiedad, obesidad, dificultad para dormir, problemas crónicos del cuello y la espalda. A su vez, algunos de estos como por ejemplo la dificultad para dormir, generan otros efectos devastadores en el cuerpo, impactando en órganos y células incluidos el cerebro y la capacidad cognitiva, memoria y neurogénesis (generación de nuevas neuronas).</p>
      <p>Algunas recomendaciones útiles para reducir los malos efectos del uso de pantallas son:</p>
      <p>Recordá que los ojos son una extensión del cerebro. Por lo tanto, realizar estos ejercicios y tener la vista descansada te va a ayudar no solo a entrenar los músculos de los mismos, mejorar la visión y prevenir problemas visuales; sino también a conocer nuestra forma de mirar de una manera más profunda, lo cual ayuda a evitar y saber qué situaciones nos producen más estrés y así ayudar poderosamente a nuestra mente.</p>`,
    },
  ];
}
