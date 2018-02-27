// assign variables
var table = '';
var rows = 4;
var cols = 24;
var row_headers = ['1:', '2:', '3:', '4:'];
var col_headers = ['MID NIGHT', 'NOON'];
var count = 11;

// create column headers
table += '<tr>';
  col_headers.forEach(function(header) {
    for(var col = 0; col < count + 1; col++) {
      if(col === 0) {
        var time = header;
      } else {
        var time = col;
      }
      table += "<th class='col-header'>" + "<p id='" + time + "'>" + time + '</p>' + '</th>';
    }
  });
table += '</tr>'

// create row headers
// assign unique id and class to each div
row_headers.forEach(function(header) {
  table += '<tr>';
  table += "<th class='row-header'>" + header + '</th>';
    for(var c = 0; c < cols; c++) {
      table += "<td class='time-table-cell'>" +
      "<div class='first-quarter' id='" + header + " hour: " + c +
      "'></div>" +
      "<div class='second-quarter' id='" + header + " hour: " + c +
      "'></div>" +
      "<div class='third-quarter' id='" + header + " hour: " + c +
      "'></div>" +
      "<div class='fourth-quarter' id='" + header + " hour: " + c +
      "'></div>" +
      '</td>';
      }
    table += "<td class='row-total' id='" + header + "'></td>"
  table += '</tr>';
});

var element = document.getElementById('table-wrapper')

element.innerHTML += "<table class='time-table'>" + table + "</table>";
