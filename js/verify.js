var sha256 = require('js-sha256');

$('#textTextarea').click(function() { \TO DO NICO
  $('#result-text').html("The Hash is: "+sha256(($('#message').val())))
})

