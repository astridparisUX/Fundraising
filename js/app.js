// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();



// Doughnut chart to display goal progress on campaign pages
var percentGoal = [
  {
    value: 33,
    color:"#4eddc1"
  },
  {
    value : 66,
    color : "#E2EAE9"
  }
]
var options = {
  percentageInnerCutout : 75
};
var goalPie= $("#percentGoal").get(0).getContext("2d");
var campaignDonut = new Chart(goalPie).Doughnut(percentGoal, options);