/* loads sound and images */

var gameState = require('gameState');

var loaded = true;
var loadedCount = 0;
var totalCount = 0;
var soundExtension = null;

function init() {
  console.info('init:loader');

  var mp3support = false;
  var oggSupport = false;
  var audio = document.createElement('audio');

  if (audio.canPlayType) {
    mp3support = "" != audio.canPlayType('audio/mpeg');
    oggSupport = "" != audio.canPlayType('audio/ogg; codecs="vorbis"');
  }

  // prefer ogg over mp3
  soundExtension = oggSupport ? ".ogg" : mp3support ? ".mp3" : undefined;
}


function loadImage(url) {
  totalCount++;
  loaded = false;
  $('#loadingscreen').show();

  var image = new Image();
  image.src = url;
  image.onload = itemLoaded;

  return image;
}


function loadSound(url) {
  totalCount++;
  loaded = false;
  $('#loadingscreen').show();

  var audio = new Audio();
  audio.src = url + soundExtension;
  audio.addEventListener('canPlayThrough', itemLoaded, false);

  return audio;
}

function itemLoaded() {
  loadedCount++;
  $('loadingmessage').html('Loaded ' + loadedCount + ' of ' + totalCount);

  if (loadedCount === totalCount) {
    Loaded = true;
    $('loadingscreen').hide();

    if (onload) {
      onload();
      onload = undefined;
    }
  }
}


module.exports = {
    init: init,
    loadImage: loadImage,
    loadSound: loadSound,
    itemLoaded: itemLoaded
}
