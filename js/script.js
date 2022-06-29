goku = document.querySelector('.goku');
esfera = document.querySelector('.esfera-game');
kaio = document.querySelector('.kaio');
textStart = document.querySelector('text-start');
audioStart = new Audio('./audio/dbztheme.mp3');
audioGameOver = new Audio('./audio/dbzgameover.mp3');

const score =  document.querySelector('.score');

/*================ Função Start ===================*/ 

const start = () => {


  esfera.classList.add('esfera-animation');

  goku.src = './images/goku.gif';
  goku.style.width = '150px';
  goku.style.marginLeft = '100px';

  function kaioAnimation(){
      kaio.classList.add('kaio-animation');
          }setInterval(kaioAnimation, 2000);
       

  audioStart.play();
}

document.addEventListener('keydown', start);
document.addEventListener('click', start);

/*================ Função Pulo ===================*/ 

const jump = () => {
  goku.classList.add('jump');

  setTimeout(() => {
      goku.classList.remove('jump');
  }, 500); 
}

document.addEventListener('keydown', jump);
document.addEventListener("click", jump);


/*================ Score jumps ===================*/


let scoreValue = 0;
let counter = true;


// const scorePoint = setInterval(() => {
 
//   if (counter >= 10) {
//     kaio.src = './images/bubble.png';
//     kaio.style.width = '30px';
//     kaio.style.marginLeft = '50px';
//     kaioAnimation();
//   } else if (counter >= 20){
//     kaio.src = './images/kaio.png';
//     kaio.style.width = '75px';
//     kaio.style.marginLeft = '50px';
//   } 
//   else if(counter >= 30){
//     kaio.src = './images/vogohan.png';
//     kaio.style.width = '75px'
//     kaio.style.marginLeft = '50px';
//   }     
//   else {
//     kaio.src = './images/gregory.png';
//     kaio.style.width = '25px'
//     kaio.style.marginLeft = '50px';
//     kaio.style.bottom = 50;
//   }     

// }, 10);

/*================ Código para acabar o jogo ===================*/ 

const checkGameOver = setInterval(() => {
  const esferaPosition = esfera.offsetLeft;
  const gokuPosition = +window.getComputedStyle(goku).bottom.replace('px', '');
  const kaioPosition = kaio.offsetLeft;
 
      if (esferaPosition <= 120 && esferaPosition > 60 && gokuPosition < 60 ) {

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
      else if (esferaPosition - gokuPosition <= -60 && counter) {
        scoreValue += 1;
        score.textContent = scoreValue;
        counter = false;
      } 
      else if (esferaPosition - gokuPosition > 60) {
        counter = true;
      } 
      else {
    
      }
}, 10);
 
