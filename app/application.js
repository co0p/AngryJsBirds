"use strict";


var App = {
  init: function init() {
    $('.gamelayer').hide();
    $('#gamestartscreen').show();

    App.canvas = $('#gamecanvas')[0];
    App.context = App.canvas.getContext('2d');

    console.log('App', App);
  }
};

module.exports = App;
