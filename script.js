moment(Date);
$("#todaysDate").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();
currentTime = currentTime.startOf("hour");
var before = moment().startOf("day").add(9, "hours");

var timeSlot1 = before.add(0, "h");
timeSlot1 = timeSlot1.format('hh:mm A');
$(".block1").text(timeSlot1);

var timeSlot2 = before.add(1, "h");
timeSlot2 = timeSlot2.format('hh:mm A');
$(".block2").text(timeSlot2);

var  timeSlot3 = before.add(1, "h");
 timeSlot3 =  timeSlot3.format('hh:mm A');
$(".block3").text(timeSlot3);

var  timeSlot4 = before.add(1, "h");
 timeSlot4 =  timeSlot4.format('hh:mm A');
$(".block4").text(timeSlot4);

var  timeSlot5 = before.add(1, "h");
 timeSlot5 =  timeSlot5.format('hh:mm A');
$(".block5").text(timeSlot5);

var  timeSlot6 = before.add(1, "h");
 timeSlot6 =  timeSlot6.format('hh:mm A');
$(".block6").text(timeSlot6);

var  timeSlot7 = before.add(1, "h");
 timeSlot7 =  timeSlot7.format('hh:mm A')
$(".block7").text(timeSlot7);

var  timeSlot8 = before.add(1, "h");
 timeSlot8 =  timeSlot8.format('hh:mm A');
$(".block8").text(timeSlot8);

var timeSlot9 = before.add(1, "h");
 timeSlot9 =  timeSlot9.format('hh:mm A');
$(".block9").text(timeSlot9); 