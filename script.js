function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
  const phrases = [
    "<span class='elegante2'>D</span>espués de 37 años de amor y unión, seguimos fuertes y comprometidos. Queremos renovar nuestros votos y celebrar nuestro amor con una noche llena de emoción y alegría. ¡Únete a nosotros para compartir este momento especial! <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",
    "<span class='elegante2'>N</span>os encantaría que nos acompañaras en la renovación de nuestros votos después de 37 años de amor y unión. ¡Será una noche inolvidable! <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>",
    "<span class='elegante2'>L</span>a vida nos ha llevado por muchos caminos, pero nuestro amor ha sido la constante. Queremos celebrar nuestro 37 aniversario de bodas y renovar nuestros votos con la gente que más nos importa. <br><center><span class='elegante'>Teresa y Miguel </span> </p></center>"
  ];

  const invitationText = document.getElementById('invitation-text');
  const randomIndex = Math.floor(Math.random() * phrases.length);
  invitationText.innerHTML = phrases[randomIndex];
});

