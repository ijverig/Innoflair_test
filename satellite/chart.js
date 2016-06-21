google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  // data table
  var data = [['Component', 'Quantity', { role: 'style' }, { role: 'annotation' } ]]
  var color = [0,253,135,5]
  var componentsTotal = dataJSON.components.length
  for (var type in componentsByType.types) {
      var typeTotal = componentsByType.types[type].length
      data.push([type, componentsByType.types[type].length, newColor(), Math.ceil(typeTotal/componentsTotal * 100) + "%"])
  }
  var content = google.visualization.arrayToDataTable(data);
console.log(data)
  // chart options
  var options = {
    "titlePosition" : "none",
    "width"         : "95%",
    "height"        : 700,
    "bar"           : { groupWidth: "95%" },
    "legend"        : { position: "none" },
  };

  // draw chart
  var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
  chart.draw(content, options);

  // helper function for color
  function newColor() {
      if (color[0]++ == 9) {
          color[1] = 21
      }

      color[2] += 13
      color[3] += 24
      if (color[2] > 255) {
          color[2] -= 255
      }
      if (color[3] > 255) {
          color[3] -= 255
      }

      return 'rgb(' + color[1] + ',' + color[2] + ',' + color[3] + ')'
  }
}
