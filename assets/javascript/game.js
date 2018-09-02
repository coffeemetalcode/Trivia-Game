// Javascript Trivia Game - Answer basic questions about Javascript

// Create a timer
window.onload = function () {
  $("#start").on("click", clock.start);
};

var intervalId;
var clockRunning = false;

var clock = {
  time: 120,
  // the clock start function
  start: function () {
    if (!clockRunning) {
      intervalId = setInterval(clock.count, 1000);
      clockRunning = true;
    }
  },

  // the clock stop function
  stop: function () {
    clearInterval(intervalId);
    clockRunning = false;
    $("#timer").text("Time's Up");
  },

  // count the timer down in the DOM. Stop the clock when the time remaining is "0"
  count: function () {
    clock.time--;
    // console.log(clock.time);
    $("#timer").text("Time Remaining: " + clock.time + " Seconds");
    if (clock.time < 1) {
      clock.stop();
    }
  },
};

// Create a function that counts correct, incorrect, and unanswered questions when the time runs out or the "Done" button is clicked

var corrects = document.getElementsByName("correct");
var incorrects = document.getElementsByName("incorrect");
numCorrects = [];
numIncorrects = []
numUnanswered = 0;

function countCorrects() {

  for (var i = 0, length = corrects.length; i < length; i++) {
    if (corrects[i].checked) {
      numCorrects.push(corrects[i]);
      // console.log(corrects[i].value);
      // console.log(numCorrects);

      // break;
    }
  }
  console.log("You got " + numCorrects.length + " correct.");
}

function countIncorrects() {
  for (var i = 0, length = incorrects.length; i < length; i++) {
    if (incorrects[i].checked) {
      numIncorrects.push(incorrects[i]);
      // console.log(incorrects[i].value);
      // console.log(numIncorrects);

      // break;
    }
  }
  console.log("You got " + numIncorrects.length + " incorrect.");
}

// Create an event listener that listens for a click on the "Done" button
$("#done").on("click", function () {
  clock.stop();
  $("#timer").text("Done");
  countCorrects();
  countIncorrects();
  numUnanswered = 10 - numCorrects.length - numIncorrects.length;
  console.log("You had " + numUnanswered + " unanswered questions.");
  $("#trivia").html(`
    <p>You had ${numCorrects.length} correct answers.</p>
    <p>You had ${numIncorrects.length} incorrect answers.</p>
    <p>You had ${numUnanswered} unanswered questions.</p>
  `);
  console.log("Done");
});