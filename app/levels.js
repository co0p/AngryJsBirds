/**/

var game = require('application');
var loader = require('loader');

const data = [{
    foreground: 'images/levels/street-foreground.png',
    background: 'images/levels/city-background.png',
    slingshot: 'images/slingshot.png',
    slingshotFront: 'images/slingshotFront.png',
    entities: []
  }, {
    foreground: 'images/levels/room-foreground.png',
    background: 'images/levels/room-background.png',
    slingshot: 'images/slingshot.png',
    slingshotFront: 'images/slingshotFront.png',
    entities: []
  }];


function init() {
  console.info('init:levels');
  var html = '';

  // add input buttons
  for (var i = 0; i < data.length; i++) {
    html += '<input type="button" value="' + (i+1) + '">';
  }

  // add click handlers
  $('#levelselectscreen').html(html);
  $('#levelselectscreen input').click(function() {
    load(this.value - 1);
    $('#levelselectscreen').hide();
  });
}

function load(levelNumber) {
  game.currentLevel = {
    number: levelNumber,
    hero:[]
  };

  game.score = 0;

  $('#score').html('Score: ' + game.score);
  var level = data[levelNumber];

  game.currentLevel.foregroundImage = loader.loadImage(level.foreground);
  game.currentLevel.backgroundImage = loader.loadImage(level.background);

  game.slingshotImage = loader.loadImage(level.slingshot);
  game.slingshotFrontImage = loader.loadImage(level.slingshotFront);

  if (loader.loaded) {
    game.start();
  } else {
    loader.onload = game.start;
  }
}

module.exports = {
  init: init,
  load: load
};
