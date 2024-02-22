    import { Howl, Howler} from 'howler';
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    var playButton = document.getElementById('play-button');
    var playing = false;

    var song = new Howl({
      src: ['song.mp3'],
      html5: true
    });

    canvas.width = 500
    canvas.height = 500

    playButton.addEventListener('click', function(){
      switch (playing){
        case false:
          song.play();
          playing = true;
          console.log('Le diste al play');
          break;
        case true:
          song.stop();
          playing = false;
          console.log('Le diste al stop');
          break;
      }
    });
