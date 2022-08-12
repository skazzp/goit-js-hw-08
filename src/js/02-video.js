import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (data) {
  //   console.log(data);
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
