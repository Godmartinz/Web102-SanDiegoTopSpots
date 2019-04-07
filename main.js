$(document).ready(function(){

  $.getJSON("data.json", function(data){
    var spot_data = '';
    $.each(data, function(key, value){
      spot_data += '<tr>';
      spot_data += '<td>'+value.name+'</td>';
      spot_data += '<td>'+value.description+'</td>';
      spot_data += '<td>'+ "<a href="+"https://www.google.com/maps?q="+value.location+'>Open in Google Maps</td>';
      spot_data += '</tr>';
    })
    $('tbody').append(spot_data);
  });
});
  