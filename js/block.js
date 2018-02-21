var url_string = window.location.href;
var url = new URL(url_string);
var block_number = url.searchParams.get("block");

$('#block_number').html(block_number);


$(document).ready(function() {
  $.ajax({
    url : "https://api.blockcypher.com/v1/btc/main/blocks/"+block_number+"?token=a14372287af24e45a90ff493ea6ecde2",
    dataType : "json",
    contentType : "application/json; charset=utf-8",
    type : "GET",
    timeout:  "5000",
    async : false,

    success : function(data) {
      $("#n_tx").html(data.n_tx);
      $('#total').append(data.total);
      $('#fees').append(data.fees);
      $('#height').append(data.height);
      $('#time').append(data.time);
      $('#received_time').append(data.received_time);
      $('#related_by').append(data.related_by);
      $('#bits').append(data.bits);
      $('#size').append(data.size);
      $('#ver').append(data.ver);
      $('#nonce').append(data.nonce);
      $('#hash').append(data.hash);
      $('#prev_block').append(data.prev_block);
      $('#mrkl_root').append(data.mrkl_root);

    },

    error : function(xhr, status, err) {
      $('#block_information').html(err+" N/A");
    }
  });
});
