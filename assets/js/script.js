//*! ACCEPTED 1 - 29
var check = 0;
var hourEl = $("#hour");
var timeSet = $("#time-display");


// var nineAm = [09, textArea, saveBtn9]
// var tenAm = [10, textArea, saveBtn10]
// var elevenAm = [11, textArea, saveBtn9]
// var midNight = [09, textArea, saveBtn9]


function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    console.log(typeof rightNow);
    timeSet.text(rightNow);
    var present = rightNow.substring(16, 18);
    var check = parseInt(present);
    console.log("this is check's value", check)

    return check;
};

function checkpresent(present) {
    console.log("value of present" + present)
};

setInterval(displayTime, 1000)
//*! ACCEPTED 1 - 29

