const mario = document.querySelector('.Mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump')
    console.log("teste")
    setTimeout(()=> {

        mario.classList.remove('jump');
    }, 500);
}


const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    
        if (pipePosition <= 101 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`; 

            mario.style.animation = 'none';
            mario.style.bottom = `${pipePosition}px`;

            mario.src = './img/newGameOver.gif';
            mario.style.width = '120px'
            mario.style.marginLeft = '70px'

            clearInterval(loop);
        } 
}, 10);


document.addEventListener('keydown', jump);

