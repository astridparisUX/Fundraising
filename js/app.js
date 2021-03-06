// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


// Put polish on tooltips later: https://github.com/nnnick/Chart.js/blob/master/samples/pie-customTooltips.html





// Doughnut chart to display goal progress on campaign pages
var percentGoal = [
  {
    value: 500,
    color:"#e3b470",
    label: "Raised"
  },
  {
    value: 1000,
    color: "#eeeeee",
    label: "Goal"
  }
]
var options = {
  percentageInnerCutout: 60
};

// "goalPie" defines a variable that is targeting an element 
// with an id of "percentGoal" which is located in campaign.html
var goalPie= $("#percentGoal").get(0).getContext("2d");
new Chart(goalPie).Doughnut(percentGoal, options);