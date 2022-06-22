goku = document.querySelector('.goku');
esfera = document.querySelector('.esfera-game');
kaio = document.querySelector('.kaio');
textStart = document.querySelector('text-start');
audioStart = new Audio('./audio/dbztheme.mp3');
audioGameOver = new Audio('./audio/dbzgameover.mp3');
// let pulos = document.getElementById('pulos');
// let counter = 0


/*================ Função Start ===================*/ 

const start = () => {


  esfera.classList.add('esfera-animation');

  goku.src = './images/goku.gif';
  goku.style.width = '150px';
  goku.style.marginLeft = '100px';

  function kaioAnimation(){
      kaio.classList.add('kaio-animation');
          }setInterval(kaioAnimation, 8000);

  audioStart.play();
}

document.addEventListener('keydown', start);
document.addEventListener("click", start);

/*================ Função Pulo ===================*/ 

const jump = () => {
  goku.classList.add('jump');

  setTimeout(() => {
      goku.classList.remove('jump');
  }, 500); 
}

document.addEventListener('keydown', jump);
document.addEventListener("click", jump);


/*================ recorde jumps ===================*/

// const jump = () =>{
//     goku.classList.add("jump");
//     setTimeout(() =>{
//         counter++;
//         pulos.innerHTML = counter;
//         goku.classList.remove("jump");
//     },500);

   
// }

// document.addEventListener('keydown', jump);

// if (pulos >= 3) {
//   kaio.src = './images/pilaf.png';
//   kaio.style.width = '75px';
//   kaio.style.marginLeft = '50px';
// } else if (pulos >= 10){
//   kaio.src = './images/bubble.png';
//   kaio.style.width = '75px';
//   kaio.style.marginLeft = '50px';
// } else {
//   kaio.src = './images/fantasma.png';
//   kaio.style.width = '75px';
//   kaio.style.marginLeft = '50px';
  
// }     

/*================ Código para acabar o jogo ===================*/ 

const checkGameOver = setInterval(() => {
  const esferaPosition = esfera.offsetLeft;
  const gokuPosition = +window.getComputedStyle(goku).bottom.replace('px', '');
  const kaioPosition = kaio.offsetLeft;
 
      if (esferaPosition <= 100 && esferaPosition > 0 && gokuPosition < 60 ) {

          esfera.style.animation = 'none';
          esfera.style.left = `${esferaPosition}px`;

          goku.style.animation = 'none';
          goku.style.bottom = `${gokuPosition}px`;

          goku.src = './images/goku-game-over.png';
          goku.style.width = '170px';
          goku.style.marginLeft = '50px';

          kaio.style.animation = 'none';
          kaio.style.left = `${kaioPosition}px`;


          function stopAudioStart(){
              audioStart.pause();
              }stopAudioStart();

          audioGameOver.play();

          function stopAudio(){
              audioGameOver.pause();
              }setTimeout(stopAudio, 34000);
              document.addEventListener("keydown",function() {
    
                location.reload();
            });
            document.addEventListener("click",function() {
    
              location.reload();
          });

          clearInterval(checkGameOver);
       }
}, 10);
 