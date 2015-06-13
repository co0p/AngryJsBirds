"use strict";

var levels = require('levels');
var loader = require('loader');

var canvas = $('#gamecanvas')[0];
var context = canvas.getContext('2d');

function  init() {

  console.info('init:application');

  levels.init();
  loader.init();

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
