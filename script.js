const sounds = {
    "A - Clap": "sounds/clap.wav",
    "S - Hi-hat": "sounds/hihat.wav",
    "D - Kick": "sounds/kick.wav",
    "F - Open-hat": "sounds/openhat.wav",
    "G - Boom": "sounds/boom.wav",
    "H - Ride": "sounds/ride.wav",
    "J - Snare": "sounds/snare.wav",
    "K - Tom": "sounds/tom.wav",
    "L - Tink": "sounds/tink.wav"
};

const buttons = document.querySelectorAll(".btn");

function audioHandler(value) {
    const audio = new Audio(sounds[value]);
    audio.play();
}

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        audioHandler(value);
    });
});

document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case "a":
            audioHandler("A - Clap");
            break;
        case "s":
            audioHandler("S - Hi-hat");
            break;
        case "d":
            audioHandler("D - Kick");
            break;
        case "f":
            audioHandler("F - Open-hat");
            break;
        case "g":
            audioHandler("G - Boom");
            break;
        case "h":
            audioHandler("H - Ride");
            break;
        case "j":
            audioHandler("J - Snare");
            break;
        case "k":
            audioHandler("K - Tom");
            break;
        case "l":
            audioHandler("L - Tink");
            break;
    }
});
