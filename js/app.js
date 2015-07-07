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
    value: 66,
    color: "#E2EAE9"
  }
]
var options = {
  percentageInnerCutout: 75
};

// "percentGoal" below: defines a variable that is targeting an element 
// with an id of "percentGoal", which is in campaign.html
var thisGoal= $("#percentGoal").get(0).getContext("2d");

// "campaignDonut" below: defines a new variable that creates 
// the new chart for the previous variable "percentGoal" and 
// brings in the different values and defines the options we’ve changed
var campaignDonut = new Chart(thisGoal).Doughnut(percentGoal, options);