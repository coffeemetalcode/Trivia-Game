// Javascript Trivia Game - Answer basic questions about Javascript

// Create a timer
window.onload = function () {
  $("#start").on("click", clock.start);
};

var intervalId;

var clockRunning = false;

var clock = {

  time: 5,

  reset: function () {

    clock.time = 0;

    $("#timer").text("Time Remaining: 120 Seconds");

  },
  start: function () {

    if (!clockRunning) {
      intervalId = setInterval(clock.count, 1000);
      clockRunning = true;
    }

  },
  count: function () {

    clock.time--;

    console.log(clock.time);

    $("#timer").text("Time Remaining: " + clock.time + " Seconds");
  },
};


// Create an event listener that listens for a click on the "Start" button

// Create an event listener that listens for a click on the "Done" button

// Create a function that counts correct, incorrect, and unanswered questions when the time runs out or the "Done" button is clicked