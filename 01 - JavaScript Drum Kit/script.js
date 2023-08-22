window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    const key = document.querySelector(`div[data-key=${e.code}]`);

    if(!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    console.log(key);

    key.classList.add('playing');
});
    function removeTransition(e) {
        if (e.propertyName !== 'transform') {

        }
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach( key => key.addEventListener('transitionend', removeTransition))
