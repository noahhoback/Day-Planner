moment(Date);
$("#todaysDate").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();
currentTime = currentTime.startOf("hour");
var before = moment().startOf("day").add(9, "hours")