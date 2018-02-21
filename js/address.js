var url_string = window.location.href;
var url = new URL(url_string);
var address_url = url.searchParams.get("address");

$('#address_hash').html(address_url);

$(document).ready(function() {
  $.ajax({
    url : "https://api.blockcypher.com/v1/btc/main/addrs/"+address_url+"?token=a14372287af24e45a90ff493ea6ecde2",
    dataType : "json",
    contentType : "application/json; charset=utf-8",
    type : "GET",
    timeout:  "5000",
    async : false,

    success : function(data) {
      $("#address").html(data.address);
      $('#total_received').append(data.total_received);
      $('#total_sent').append(data.total_sent);
      $('#balance').append(data.balance);
      $('#n_tx').append(data.n_tx);
    },

    error : function(xhr, status, err) {
      $('#address_information').html(err+" N/A");
    }
  });
});




var qrcode = new QRCode(document.getElementById("qrcode"), {
  text: address_url,
  width: 200,
  height: 200,
  colorDark : "#000000",
  colorLight : "#ffffff",
  correctLevel : QRCode.CorrectLevel.H
});

