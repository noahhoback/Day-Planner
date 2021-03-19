moment(Date);
$("#todaysDate").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();
currentTime = currentTime.startOf("hour");
var before = moment().startOf("day").add(9, "hours");

var timeSlot1 = before.add(0, "h");
timeSlot1 = timeSlot1.format('hh:mm A');
$(".block1").text(timeSlot1);