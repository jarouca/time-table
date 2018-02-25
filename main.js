// assign variable
var table = '';
var rows = 4;
var cols = 24;
var row_headers = ['1:', '2:', '3:', '4:'];
var col_headers = ['MID NIGHT', 'NOON'];
var count = 11;

// create column column headers
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
