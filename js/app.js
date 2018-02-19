
$(document).ready(function() {
  $.ajax({
    url : "//api.blockcypher.com/v1/btc/main?token=a14372287af24e45a90ff493ea6ecde2",
    dataType : "json",
    contentType : "application/json; charset=utf-8",
    type : "GET",
    timeout:  "5000",
    async : false,

    success : function(data) {
      $("#last_block_number").html(data.height);
      $('#name').append(data.name);
      $('#height').append(data.height);
      $('#hash').append(data.hash);
      $('#fee_in_satoshi').append(data.medium_fee_per_kb);
      $('#last_fork').append(data.last_fork_height );
    },

    error : function(xhr, status, err) {
      $('latestblock').html(err+" N/A");
    }
  });
});


$('#block_search').click(function(data) {
  $.ajax({
    url : "https://api.blockcypher.com/v1/btc/main/blocks/"+block_number.value+"?token=a14372287af24e45a90ff493ea6ecde2",
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
            <td>"+data.bits+"</td>\
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
      </table>")},
    error : function(xhr, status, err) {
      var last_block_number = $("#last_block_number").text();
      if (block_number.value < 1 || block_number.value > last_block_number) {
        console.log(last_block_number)
        $('#block_search_result').html("Entrez une valeur comprise entre 1 et "+last_block_number)
      }
      $('block_search_result').append(err+" N/A");
    }
  });
});


$("#button_hide_block_info").click(function() {
  if ($("#button_hide_block_info").text() == "Afficher") {
    $("#button_hide_block_info").html("Masquer");
  }
  else {
    console.log("to")
    $("#button_hide_block_info").html("Afficher")
  }
})


$('#transaction_search').click(function(data) {
  $.ajax({
    url : "https://api.blockcypher.com/v1/btc/main/txs/"+transaction_hash.value+"?token=a14372287af24e45a90ff493ea6ecde2",
    dataType : "json",
    contentType : "application/json; charset=utf-8",
    type : "GET",
    timeout:  "5000",
    async : false,


    success : function(data) {
      $("#button_hide_transaction_info").removeClass("d-none");
      $('#transaction_search_result').html("\
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
            <td>block_height</td>\
            <td>Height of the block that contains this transaction. If this is an unconfirmed transaction, it will equal -1.</td>\
            <td>"+data.block_height+"</td>\
          </tr>\
          <tr>\
            <td>addresses</td>\
            <td>Array of bitcoin public addresses involved in the transaction.</td>\
            <td>"+data.addresses+"</td>\
          </tr>\
          <tr>\
            <td>total</td>\
            <td>The total number of satoshis exchanged in this transaction.</td>\
            <td>"+data.total+"</td>\
          </tr>\
          <tr>\
            <td>fees</td>\
            <td>The total number of fees—in satoshis—collected by miners in this transaction.</td>\
            <td>"+data.fees+"</td>\
          </tr>\
          <tr>\
            <td>preference</td>\
            <td>The likelihood that this transaction will make it to the next block; reflects the preference level miners have to include this transaction. Can be high, medium or low.</td>\
            <td>"+data.preference+"</td>\
          </tr>\
          <tr>\
            <td>double_spend</td>\
            <td>true if this is an attempted double spend; false otherwise.</td>\
            <td>"+data.double_spend+"</td>\
          </tr>\
          <tr>\
            <td>confirmations</td>\
            <td>Number of subsequent blocks, including the block the transaction is in. Unconfirmed transactions have 0 confirmations.</td>\
            <td>"+data.confirmations+"</td>\
          </tr>\
          <tr>\
            <td>confidence</td>\
            <td>The percentage chance this transaction will not be double-spent against, if unconfirmed.</td>\
            <td>"+data.confidence+"</td>\
          </tr>\
          <tr>\
            <td>block_hash</td>\
            <td>Hash of the block that contains this transaction; only present for confirmed transactions.</td>\
            <td>"+data.block_hash+"</td>\
          </tr>\
        </tbody>\
      </table>")},
    error : function(xhr, status, err) {
      if (!/^0x([A-Fa-f0-9]{64})$/.test(transaction_hash.value)) {
        $('#transaction_search_result').html("Entrez une transaction valide")
      }
      $('transaction_search_result').append(err+" N/A");
    }
  });
});


$("#button_hide_transaction_info").click(function() {
  if ($("#button_hide_transaction_info").text() == "Afficher") {
    $("#button_hide_transaction_info").html("Masquer");
  }
  else {
    console.log("to")
    $("#button_hide_transaction_info").html("Afficher")
  }
})
