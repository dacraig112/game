const GAME = document.querySelector('#game'); 
const GAME_HEIGHT = 400;
const GAME_WIDTH = 400;
const START = document.querySelector('#start');
//for 'wobble'
let currentPos = 0;
let x;
let amp = 30;
let freq = 0.1;
// for 'rotation'
let spinner = 0;
let thing;
let level = 1;


let raf = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

function createRock() {
    const rock = document.createElement('div');
    rock.className = 'rock';
    GAME.appendChild(rock);
    thing = rock;
}

function createBigRock() {
    const bigRock = document.createElement('div');
    bigRock.className = 'bigRock';
    GAME.appendChild(bigRock);
    thing = bigRock;
}

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    GAME.appendChild(star);
    thing = star;
}

function createWobbler() {
    const wobbler = document.createElement('div');
    wobbler.className = 'wobbler';
    GAME.appendChild(wobbler);
    thing = wobbler;
}

function createThing() {
    if (level === 1) {
        //create a rock
        createRock();
    };
    if (level === 2) {
        let selector = 1 + Math.floor(Math.random() * 2);
        switch (selector) {
            case 1:
                createRock();
                break;
            case 2:
                createBigRock();
                break;
        }
    }
    if (level === 3) {
        let selector = 1 + Math.floor(Math.random() * 3);
        switch (selector) {
            case 1:
                createRock();
                break;
            case 2:
                createBigRock();
                break;
            case 3:
                createStar()
                break;
        }
    }
    if (level === 4) {
        let selector = 1 + Math.floor(Math.random() * 4);
        switch (selector) {
            case 1:
                createRock();
                break;
            case 2:
                createBigRock();
                break;
            case 3:
                createStar()
                break;
            case 4:
                createWobbler()
                break;
        }
    }
    console.log(thing.className);
    if (thing.className === 'rock') {
        raf(moveRock)
    };
    if (thing.className === 'bigRock') {
        raf(moveRock)
    };
    if (thing.className === 'star') {
        raf(moveStar)
    };
    if (thing.className === 'wobbler') {
        raf(moveDiag)
    };
   

}


function moveRock() {
    x = amp * Math.sin(freq * currentPos);
    if (currentPos < 800) {
        thing.style.top = currentPos + 'px';
        thing.style.left = 480 + x + 'px';
        currentPos += 1.5;
    }
    if (currentPos >= 400) {
        thing.remove();
        return;
    }
    raf(moveRock)
}

function moveRock() {
    x = amp * Math.sin(freq * currentPos);
    if (currentPos < 800) {
        thing.style.top = currentPos + 'px';
        thing.style.left = 480 + x + 'px';
        currentPos += 1.5;
    }
    if (currentPos >= 400) {
        thing.remove();
        return;
    }
    raf(moveRock)
}

function moveDiag() {
    x = amp * Math.sin(freq * currentPos);
    if (currentPos < 800) {
        thing.style.top = currentPos + 'px';
        thing.style.left = 480 + x + 'px';
        currentPos += 1;
    }
    if (currentPos >= 400) {
        thing.remove();
        return;
    }
    raf(moveDiag)
}  


function moveStar() {
    thing.style.top = currentPos + 'px';
    let spin = "rotate(" + spinner + "deg)";
    thing.style.transform = spin;
    spinner += 50; // 60 deg rotation preserves 'star' shape
     
    currentPos += 3;
    raf(moveStar)
}; 

start.addEventListener('click', createThing);

/*
function start(e) {
   if (e.which == 13 /*|| e.type === 'click'*//*) {
    localStorage.user1 = PLAYER_1.value;
    window.addEventListener('keydown', moveDodger);
    window.addEventListener('keyup', stopDodger);
  
  
    START.style.display = 'none'
  
    gameInterval = setInterval(function () {
      createRock(Math.floor(Math.random() * (GAME_WIDTH - 20)))
    }, 1500)
  }
  }
  */