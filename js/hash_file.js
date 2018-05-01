
var hashFiles = require('hash-files');

hashFiles('/README.md', function(error, hash) {
  if (error) throw error
    console.log(hash);
  // hash will be a string if no error occurred
});
