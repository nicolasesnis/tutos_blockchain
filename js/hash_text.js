var sha256 = require('js-sha256');

$('#sha256-btn-text').click(function() {
  $('#result-text').html("The Hash is: "+sha256(($('#message').val())))
})

