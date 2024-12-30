function closepop(este){
  var este = document.getElementById(este);
  este.style.left = '-200vw';
  este.style.transform = 'rotate(1deg)';
  popspace.style.display = 'none';
}
function popit(aquel){
  var aquel = document.getElementById(aquel);
  aquel.style.left = '0%';
  aquel.style.transform = 'rotate(361deg)';
  popspace.style.display = 'block';
}
function closeall(){
  popspace.style.display = 'none';
  closepop('pop_iglesia');
  closepop('pop_regalos');
  closepop('pop_cocktail');
  closepop('pop_contacto');
}