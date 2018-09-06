// Javascript Trivia Game - Answer basic questions about Javascript

// var startDisabled = $("#start").disabled = true;

// Create a timer
window.onload = function () {
  tQuestions();
  trivia.autoStart();
  $("#start").on("click", function () {
    trivia.start();
    $("#start").html("RUNNING");
    // trivia.startDisabled();
    $("#start").off();
  })
};

// Create a function that counts correct, incorrect, and unanswered questions when the time runs out or the "Done" button is clicked

// var location = location;
var corrects = document.getElementsByClassName("correct");
var incorrects = document.getElementsByClassName("incorrect");

function reset() {
  numCorrects = [];
  numIncorrects = []
  numUnanswered = 0;
}

// numCorrects = [];
// numIncorrects = []
// numUnanswered = 0;

var intervalId;
var clockRunning = false;

var trivia = {
  time: 120,
  // the clock start function
  start: function () {
    reset();
    if (!clockRunning) {
      intervalId = setInterval(trivia.count, 1000);
      clockRunning = true;
      $("#start").html("RUNNING");
      // trivia.startDisabled();
    }
    // trivia.startDisabled();
  },

  // the clock stop function
  stop: function () {
    clearInterval(intervalId);
    clockRunning = false;
  },

  // startDisabled: function () {
  //   if (clockRunning) {
  //     $("#start").disabled = true;
  //   }
  // },

  // count the timer down in the DOM. Stop the clock when the time remaining is "0"
  count: function () {
    // trivia.startDisabled();
    trivia.time--;
    // console.log(trivia.time);
    $("#timer").text("Time Remaining: " + trivia.time + " Seconds");
    if (trivia.time < 1) {
      trivia.stop();
      trivia.gameOver();
      $("#timer").text("Time's Up");
    }
  },

  countCorrects: function () {
    for (var i = 0, length = corrects.length; i < length; i++) {
      if (corrects[i].checked) {
        numCorrects.push(corrects[i]);
        // console.log(corrects[i].value);
        // console.log(numCorrects);

        // break;
      }
    }
    // console.log("You got " + numCorrects.length + " correct.");
  },

  countIncorrects: function () {
    for (var i = 0, length = incorrects.length; i < length; i++) {
      if (incorrects[i].checked) {
        numIncorrects.push(incorrects[i]);
        // console.log(incorrects[i].value);
        // console.log(numIncorrects);

        // break;
      }
    }
    // console.log("You got " + numIncorrects.length + " incorrect.");
  },

  // Create an event listener that listens for a click on the "Done" button
  done: $("#done").on("click", function () {
    trivia.stop();
    trivia.gameOver();
    $("#timer").text("Done");
  }),

  // Function to run stats at the end of the game and output results to the DOM
  gameOver: function () {
    trivia.countCorrects();
    trivia.countIncorrects();
    numUnanswered = 10 - numCorrects.length - numIncorrects.length;
    // TODO: make the #start button reset the page to original state
    $("#start").html("PLAY AGAIN");
    // $("#done").empty();
    $("#trivia").html(`
      <p>You had ${numCorrects.length} correct answers.</p>
      <p>You had ${numIncorrects.length} incorrect answers.</p>
      <p>You had ${numUnanswered} unanswered questions.</p>
    `);
    $("#start").on("click", function () {
      reset();
      // trivia.startDisabled();
      $("#start").html("RUNNING");
      trivia.time = 120;
      tQuestions();
      trivia.start();
      $("#start").off();
      console.log("Play Again");
    });
    // trivia.startDisabled();
  },
  autoStart: function () {
    $(".correct").on("click", trivia.start);
    $(".incorrect").on("click", trivia.start);
    // $("#start").html("RUNNING");
    // startDisabled;
  }
};

// There is a fair amount of repetition in the code that I can clean up with variables and functions