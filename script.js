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

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        switch(value) {
            case "Clap":
                clap.play();
                break;
            case "Hi-hat":
                hiHat.play();
                break;
            case "Kick":
                kick.play();
                break;
            case "Open-hat":
                openHat.play();
                break;
            case "Boom":
                boom.play();
                break;
            case "Ride":
                ride.play();
                break;
            case "Snare":
                snare.play();
                break;
            case "Tom":
                tom.play();
                break;
            case "Tink":
                tink.play();
                break;
        }
    })
})