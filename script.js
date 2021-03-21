moment(Date);
$("#todaysDate").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();

// the following line of code changes the current time to the most recent hour, i.e. 9:30 is read as 9:00
currentTime = currentTime.startOf("hour");

//the following line of code adds 9 to "start of day" so that the day starts at 9am (start of work day)
var before = moment().startOf("day").add(9, "hours");


//the following code is for the time blocks, one for each hour from 9am-5pm. 
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

//the following function compares the "hour" in the above time slots to the current time. A class of past, present, or future is given to 'var currentTime'.
// just like above where we added 9 hours to make 9am the start of the day, we are adding hours to the various time slots. 
//".form" is named based on the actual time. for example, "timeSlot8" is for the 4pm hour, and ".form4" is used.
function timeTest() {
    timeSlot1 = moment().startOf('day').add(9, "hours");
    currentTime = currentTime.startOf("hour");

    if (currentTime.isAfter(timeSlot1)) {
        $(".form9").addClass("past");
    }else if (currentTime.isBefore(timeSlot1)) {
        $(".form9").addClass("future");
    }else if (currentTime.isSame(timeSlot1)) {
        $(".form9").addClass("present");
    };
    timeSlot2 = moment().startOf('day').add(10, "hours");
currentTime = currentTime.startOf("hour");

if (currentTime.isAfter(timeSlot2)) {
    $(".form10").addClass("past");
}
else if (currentTime.isBefore(timeSlot2)) {
    $(".form10").addClass("future");
}
else if (currentTime.isSame(timeSlot2)) {
    $(".form10").addClass("present");
};

timeSlot3 = moment().startOf('day').add(11, "hours");
currentTime = currentTime.startOf("hour");

if (currentTime.isAfter(timeSlot3)) {
$(".form11").addClass("past");
}
else if (currentTime.isBefore(timeSlot3)) {
$(".form11").addClass("future");
}
else if (currentTime.isSame(timeSlot3)) {
$(".form11").addClass("present");
};

timeSlot4 = moment().startOf('day').add(12, "hours");
currentTime = currentTime.startOf("hour");

if (currentTime.isAfter(timeSlot4)) {
$(".form12").addClass("past");
}
else if (currentTime.isBefore(timeSlot4)) {
$(".form12").addClass("future");
}
else if (currentTime.isSame(timeSlot4)) {
$(".form12").addClass("present");
};

timeSlot5 = moment().startOf('day').add(13, "hours");
currentTime = currentTime.startOf("hour");

if (currentTime.isAfter(timeSlot5)) {
$(".form1").addClass("past");
}
else if (currentTime.isBefore(timeSlot5)) {
$(".form1").addClass("future");
}
else if (currentTime.isSame(timeSlot5)) {
$(".form1").addClass("present");
};

timeSlot6 = moment().startOf('day').add(14, "hours");
currentTime = currentTime.startOf("hour");

if (currentTime.isAfter(timeSlot6)) {
$(".form2").addClass("past");
}
else if (currentTime.isBefore(timeSlot6)) {
$(".form2").addClass("future");
}
else if (currentTime.isSame(timeSlot6)) {
$(".form2").addClass("present");
};

timeSlot7 = moment().startOf('day').add(15, "hours");
currentTime = currentTime.startOf("hour");

if (currentTime.isAfter(timeSlot7)) {
$(".form3").addClass("past");
}
else if (currentTime.isBefore(timeSlot7)) {
$(".form3").addClass("future");
}
else if (currentTime.isSame(timeSlot7)) {
$(".form3").addClass("present");
};

timeSlot8 = moment().startOf('day').add(16, "hours");
currentTime = currentTime.startOf("hour");

if (currentTime.isAfter(timeSlot8)) {
$(".form4").addClass("past");
}
else if (currentTime.isBefore(timeSlot8)) {
$(".form4").addClass("future");
}
else if (currentTime.isSame(timeSlot8)) {
$(".form4").addClass("present");
};
timeSlot9 = moment().startOf('day').add(16, "hours");
currentTime = currentTime.startOf("hour");

if (currentTime.isAfter(timeSlot9)) {
    $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(timeSlot9)) {
    $(".form5").addClass("future");
    }
    else if (currentTime.isSame(timeSlot9)) {
    $(".form5").addClass("present");
  };
}

timeTest();
//the following for loop cycles through the input area to get item from local storage.
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < x.length; i++) {
    var localHour = localStorage.getItem(x[i]);
    $(".form" + x[i]).val(localHour);
} 

// the following code saves input to local storage when the ".saveBtn" is clicked
    $(".saveBtn").click(function() {
        event.preventDefault();
        var form = $(this).siblings(".form-control").val();
        var list =$(this).parent().data("hour");
        localStorage.setItem(list, form);
    });

    