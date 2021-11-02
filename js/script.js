const play = document.querySelector('.play');

let difficoltà = 'facile';

const facile = document.getElementById('facile');
const medio = document.getElementById('medio');
const difficile = document.getElementById('difficile');

facile.addEventListener('click',function(){
  difficoltà = 'facile';
  console.log('ciao');
})

medio.addEventListener('click',function(){
  difficoltà = 'medio';
})

difficile.addEventListener('click',function(){
  difficoltà = 'difficile';
})

play.addEventListener('click',function(){
  let numeroCaselle = 0 ;

  if(difficoltà==='facile'){
    numeroCaselle = 100;
  } 
  else if(difficoltà==='medio'){
    numeroCaselle = 81;
  } else{
    numeroCaselle=49;
  }

  console.log(numeroCaselle);


})

