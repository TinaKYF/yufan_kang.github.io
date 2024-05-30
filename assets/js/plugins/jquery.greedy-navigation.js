/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // Record the width of the list
  breaks.push($vlinks.width());

  // Move item to the hidden list
  $vlinks.children('*:not(.masthead__menu-item--lg)').last().prependTo($hlinks);

  // Show the dropdown btn

  $btn.removeClass('hidden');

  // Keep counter updated
  $btn.attr("count", breaks.length);

  updateNav();

}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
