let level 

function createThing() {
    if (level === 1) {
        //create a rock
        const rock = document.createElement('div');
        rock.className = 'rock';
        game.appendChild('rock');
        
        console.log('rock');
        
    };
    if (level === 2) {
        let selector = 1 + Math.floor(Math.random() * 2);
        switch (selector) {
            case 1:
                console.log('rock');
                break;
            case 2:
                console.log('bigRock');
                break;
        }
    }
    if (level === 3) {
        let selector = 1 + Math.floor(Math.random() * 3);
        switch (selector) {
            case 1:
                console.log('rock');
                break;
            case 2:
                console.log('bigRock');
                break;
            case 3:
                console.log('star');
                break;
        }
    }
    if (level === 4) {
        let selector = 1 + Math.floor(Math.random() * 4);
        switch (selector) {
            case 1:
                console.log('rock');
                break;
            case 2:
                console.log('bigRock');
                break;
            case 3:
                console.log('star');
                break;
            case 4:
                console.log('wobbler');
                break;
        }
    }
}

