/**/

var loader = require('loader');

const data = [{
    foreground: 'street-foreground',
    background: 'city-background',
    entities: []
  }, {
    foreground: 'room-foreground',
    background: 'room-background',
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

}

module.exports = {
  init: init,
  load: load
};
