$(document).ready(function () {
  //function that loads the object from local storage

  function displayPlanner() {
    //loop through every hour
    // at each hour var my textDisplay = localStorage.getItem(i);
    //target $(".description").text = myTextDisplay;
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
  //local storage
  // GIVEN I am using a daily planner to create a schedule
  // WHEN I open the planner
  // THEN the current day is displayed at the top of the calendar
  // moments.js 
  // WHEN I click into a timeblock
  // THEN I can enter an event
  $("#currentDay").text(moment().format('dddd MMMM Do'));
  // WHEN I view the timeblocks for that day
  // THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  // still need passed and future
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



// hour < blockId
// else if ... else


// WHEN I click the save button for that timeblock
// make sure the save button actually works 
// THEN the text for that event is saved in local storage
// J.SON PARSE
// Do we need j.son stringify?????

// WHEN I refresh the page
// THEN the saved events persist
// Event.preventDefault(event)