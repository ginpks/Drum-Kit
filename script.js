const clap = new Audio("clap.wav");
const hiHat = new Audio("hihat.wav");
const kick = new Audio("kick.wav");
const openHat = new Audio("openhat.wav");
const boom = new Audio("boom.wav");
const ride = new Audio("ride.wav");
const snare = new Audio("snare.wav");
const tom = new Audio("tom.wav");
const tink = new Audio("tink.wav");


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