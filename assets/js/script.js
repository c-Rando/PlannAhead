$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
        console.log(time, value);
    })

    function timeUpdater() {

        var currentTime = moment().hours();
        // loop through timeblocks to return the correct class
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr("id")); // .split('-')[1] if it utilized a string containing a number
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

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
});
