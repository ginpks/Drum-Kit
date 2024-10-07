const clap = new Audio("sounds/clap.wav");
const hiHat = new Audio("sounds/hihat.wav");
const kick = new Audio("sounds/kick.wav");
const openHat = new Audio("sounds/openhat.wav");
const boom = new Audio("sounds/boom.wav");
const ride = new Audio("sounds/ride.wav");
const snare = new Audio("sounds/snare.wav");
const tom = new Audio("sounds/tom.wav");
const tink = new Audio("sounds/tink.wav");


const buttons = document.querySelectorAll(".btn")

function audioHandler(value) {
    switch(value) {
        case "A - Clap":
            clap.play();
            break;
        case "S - Hi-hat":
            hiHat.play();
            break;
        case "D - Kick":
            kick.play();
            break;
        case "F - Open-hat":
            openHat.play();
            break;
        case "G - Boom":
            boom.play();
            break;
        case "H - Ride":
            ride.play();
            break;
        case "J - Snare":
            snare.play();
            break;
        case "K - Tom":
            tom.play();
            break;
        case "L - Tink":
            tink.play();
            break;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        audioHandler(value);
    })
})

document.addEventListener('keydown', (event) => {
        switch(event.key) {
            case "a":
                clap.play();
                break;
            case "s":
                hiHat.play();
                break;
            case "d":
                kick.play();
                break;
            case "f":
                openHat.play();
                break;
            case "g":
                boom.play();
                break;
            case "h":
                ride.play();
                break;
            case "j":
                snare.play();
                break;
            case "k":
                tom.play();
                break;
            case "l":
                tink.play();
                break;
        }
})
