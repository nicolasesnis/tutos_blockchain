
$(document).ready(function() {
  $.ajax({
    url : "//api.blockcypher.com/v1/btc/main",
    dataType : "json",
    contentType : "application/json; charset=utf-8",
    type : "GET",
    timeout:  "5000",
    async : false,

    success : function(data) {
      $('#name').append(data.name);
      $('#height').append(data.height);
      $('#hash').append(data.hash);
      $('#fee_in_satoshi').append(data.medium_fee_per_kb);
      $('#last_fork').append(data.last_fork_height );
    },

    error : function(xhr, status, err) {
      $('latestblock').append(err+" N/A");
    }
  });
});


$('#block_search').click(function(data) {
  $.ajax({
    url : "https://api.blockcypher.com/v1/btc/main/blocks/"+block_number.value,
    dataType : "json",
    contentType : "application/json; charset=utf-8",
    type : "GET",
    timeout:  "5000",
    async : false,

    success : function(data) {
      $("#button_hide_block_info").removeClass("d-none");
      $('#block_search_result').html("\
        <table class=table table-dark table-striped'>\
    <thead>\
      <tr>\
        <th>Attribut</th>\
        <th>Description</th>\
        <th>Valeur</th>\
      </tr>\
    </thead>\
    <tbody>\
      <tr>\
        <td>hash</td>\
        <td>The hash of the block; in Bitcoin, the hashing function is SHA256(SHA256(block))</td>\
        <td>"+data.hash+"</td>\
      </tr>\
      <tr>\
        <td>height</td>\
        <td>The height of the block in the blockchain; i.e., there are height earlier blocks in its blockchain.</td>\
        <td>"+data.height+"</td>\
      </tr>\
      <tr>\
        <td>chain</td>\
        <td>The name of the blockchain represented, in the form of $COIN.$CHAIN</td>\
        <td>"+data.chain+"</td>\
      </tr>\
      <tr>\
        <td>total</td>\
        <td>The total number of satoshis transacted in this block.</td>\
        <td>"+data.total+"</td>\
      </tr>\
      <tr>\
        <td>fees</td>\
        <td>The total number of fees—in satoshis—collected by miners in this block.</td>\
        <td>"+data.fees+"</td>\
      </tr>\
      <tr>\
        <td>size</td>\
        <td>Raw size of block (including header and all transactions) in bytes. Not returned for bitcoin blocks earlier than height 389104.</td>\
        <td>"+data.size+"</td>\
      </tr>\
      <tr>\
        <td>time</td>\
        <td>Recorded time at which block was built. Note: Miners rarely post accurate clock times.</td>\
        <td>"+data.time+"</td>\
      </tr>\
      <tr>\
        <td>bits</td>\
        <td>The block-encoded difficulty target.</td>\
        <td>"+data.bits+""+data.hash+"</td>\
      </tr>\
      <tr>\
        <td>n_tx</td>\
        <td>Number of transactions in this block.</td>\
        <td>"+data.n_tx+"</td>\
      </tr>\
      <tr>\
        <td>mrkl_root </td>\
        <td>The Merkle root of this block.</td>\
        <td>"+data.mrkl_root+"</td>\
      </tr>\
    </tbody>\
  </table>")
    },

    error : function(xhr, status, err) {
      $('latestblock').append(err+" N/A");
    }
  });
});
