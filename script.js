function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

function lockOrientation() {
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock('landscape').catch(function(error) {
      console.log('Orientation lock failed: ', error);
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  lockOrientation();
  const phrases = [
    "<span class='elegante2'>D</span>espués de 37 años de amor y unión, seguimos fuertes y comprometidos. Queremos renovar nuestros votos y celebrar nuestro amor con una noche llena de emoción y alegría. ¡Únete a nosotros para compartir este momento especial! <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",

    "<span class='elegante2'>N</span>os encantaría que nos acompañaras en la renovación de nuestros votos después de 37 años de amor y unión. ¡Será una noche inolvidable! <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",

    "<span class='elegante2'>L</span>a vida nos ha llevado por muchos caminos, pero nuestro amor ha sido la constante. Queremos celebrar nuestro 37 aniversario de bodas y renovar nuestros votos con la gente que más nos importa. <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",

    "<span class='elegante2'>E</span>l amor es el ingrediente secreto que hace que la vida sea dulce. Queremos celebrar nuestro 37 aniversario de bodas y renovar nuestros votos con la gente que más nos importa. <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",

    "<span class='elegante2'>C</span>ada día juntos ha sido un regalo, y después de 37 años, nuestro amor sigue creciendo. Te invitamos a ser parte de esta celebración especial mientras renovamos nuestros votos matrimoniales. <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",

    "<span class='elegante2'>E</span>l tiempo ha fortalecido nuestro amor y confirmado nuestra decisión de estar juntos. Después de 37 años, queremos renovar nuestras promesas de amor eterno en compañía de quienes más queremos. <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",

    "<span class='elegante2'>N</span>uestro amor ha madurado como el mejor vino, y después de 37 años, sigue siendo nuestra mayor bendición. Acompáñanos a celebrar la renovación de nuestros votos matrimoniales. <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",

    "<span class='elegante2'>J</span>untos hemos construido una vida llena de momentos inolvidables. Después de 37 años, queremos renovar nuestras promesas de amor y compartir nuestra felicidad contigo. <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",

    "<span class='elegante2'>D</span>icen que el amor verdadero mejora con los años, y después de 37, podemos confirmarlo. Únete a nosotros en esta celebración especial mientras renovamos nuestros votos matrimoniales. <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",

    "<span class='elegante2'>C</span>omo las estrellas que danzan eternamente en el cielo, nuestro amor ha brillado durante 37 años. Hoy queremos renovar nuestra promesa bajo el mismo cielo que nos vio jurarnos amor eterno. Acompáñanos en esta mágica celebración. <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",

    "<span class='elegante2'>T</span>reinta y siete primaveras han florecido desde que unimos nuestros caminos. Cada día juntos ha sido un verso en nuestro poema de amor, y queremos escribir un nuevo capítulo renovando nuestros votos, con ustedes como testigos de nuestra historia. <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",

    "<span class='elegante2'>C</span>omo el mar que besa incansablemente la orilla, nuestro amor se renueva cada día. Después de 37 años de dulce marea, queremos celebrar este océano de amor que nos une, acompañados de quienes han navegado junto a nosotros. <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",

    "<span class='elegante2'>E</span>n el jardín de nuestra vida, hemos cultivado 37 años de amor, regados con sonrisas y podados con paciencia. Hoy queremos renovar nuestros votos y compartir contigo los frutos de este hermoso jardín que hemos cultivado juntos. <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",

    "<span class='elegante2'>N</span>uestro amor es como un fino vino que ha madurado durante 37 años en la bodega de nuestros corazones. Te invitamos a brindar con nosotros mientras renovamos nuestros votos, celebrando este añejo amor que solo mejora con el tiempo. <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>"
  ];

  const invitationText = document.getElementById('invitation-text');
  const randomIndex = Math.floor(Math.random() * phrases.length);
  invitationText.innerHTML = phrases[randomIndex];
});

