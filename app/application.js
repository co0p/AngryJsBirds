"use strict";

var levels = require('levels');

var canvas = $('#gamecanvas')[0];
var context = canvas.getContext('2d');

function  init() {

  levels.init();

  $('.gamelayer').hide();
  $('#gamestartscreen').show();

  $('#playgamebutton').click(function() {
    showLevelScreen();
  });
}

function showLevelScreen() {
  $('.gamelayer').hide();
  $('#levelselectscreen').show('slow');
}

module.exports = {
  init: init
};
