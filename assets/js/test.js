$(document).ready(function() {


    $(".saveBtn").on("click", function () {
        console.log();
    })
    // $(".saveBtn") = document.getElementbyID 
    // todo: we need time and text area values
    var value = $(this).siblings(".userInput").val();
    var time = $(this).parent().attr("id");
    var demo = $(this).siblings().attr("value")

    localStorage.setItem(time, value);


    // create a function to update time as applications runs
    function timeUpdater() {

        var currentTime = moment().hours();

        // loop through timeblocks to return the correct class
        $('time-block').each(function () {
            var blockHour = parseInt($(this).attr("id").split('-')[1]);

            if (blockHour < currentTime) {
                $(this).addClass('past');
            } else if (blockHour === currentTime) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }


        })

    }

    timeUpdater();




    // TODO Load things in from local storage

    $("#hour-9 .userInput").val(localStorage.getItem("hour-9"));
    $("#hour-10 .userInput").val(localStorage.getItem("hour-10"));
    $("#hour-11 .userInput").val(localStorage.getItem("hour-11"));
    $("#hour-12 .userInput").val(localStorage.getItem("hour-12"));
    $("#hour-13 .userInput").val(localStorage.getItem("hour-13"));
    $("#hour-14 .userInput").val(localStorage.getItem("hour-14"));
    $("#hour-15 .userInput").val(localStorage.getItem("hour-15"));
    $("#hour-16 .userInput").val(localStorage.getItem("hour-16"));

});
