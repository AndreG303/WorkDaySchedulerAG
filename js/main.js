$(document).ready(function () {
  //function that loads the object from local storage

  function displayPlanner() {
    //loop through every hour
    for (var i = 9; i < 18; i++) {
      var userTextDiplay = localStorage.getItem(i);
      var target = "#" + i;
      $(target).children(".description").val(userTextDiplay);
      console.log(target);
    }
  }
  displayPlanner();

  //function to save a planner entry
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var txt = $(this).prev().val();
    localStorage.setItem(time, txt);
  });


  // the current day is displayed at the top of the calendar
  $("#currentDay").text(moment().format('dddd MMMM Do'));
  // timeblock is color coded to indicate whether it is in the past, present, or future
  function upTimes() {
    var hour = moment().hours();
    $(".time-block").each(function(i) {
      var blockId = parseInt($(this).attr("id"));
      $(this).removeClass();
      if (hour === blockId) {
        $(this).addClass("row time-block present");
      } else if (hour > blockId) {
        $(this).addClass("row time-block past");
      } else {
        $(this).addClass("row time-block future");
      }
    });
  }
  upTimes();
});


