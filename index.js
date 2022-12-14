const drumButtons = document.querySelectorAll('button.drum'),
instruments = {
    w: 'tom-1', a: 'tom-2', s: 'tom-3', d: 'tom-4',
    j: 'snare', k: 'crash', l: 'kick-bass'
}
for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener('click', function (){
         playDrum(this.innerHTML);
    });
}

document.addEventListener('keydown', function(e) {
    playDrum(e.key);
});


playDrum = (which) => {
    if (instruments.hasOwnProperty(which)){
        document.querySelector('.' + which).classList.add('pressed');
        let audio = new Audio('./sounds/'+ instruments[which] +'.mp3');
        audio.play();
        setTimeout(() => { document.querySelector('.' + which).classList.remove('pressed'); }, 100);
    }
    else console.log('Wrong entry!! ' + which);
}