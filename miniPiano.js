console.log('Script loaded!');

function playSound(audioElement) {
    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
        console.log('Playing sound', audioElement.id);
    }
}

function setUpKeys() {
    console.log('Setting up keys');

    const keys = document.querySelectorAll('.whitekey, .blackkey');

    keys.forEach(key => {

        const audioElement = key.querySelector('audio');
        console.log('Setting up key:', key.id);

        key.addEventListener('click', () => playSound(audioElement));
    });
}

window.addEventListener('load', setUpKeys);