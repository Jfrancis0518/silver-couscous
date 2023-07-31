
// questions for the quiz 
var score = 0;
var questions = [
  {
    question: "Which of this options control the styling for a webpage?",
    options: ["HTML", "Photoshop", "Google", "CSS"],
    answer: "CSS"
  },
  {
    question: "What do we use to allow CSS amd JavaScript to select and access specific elements?",
    options: ["Class", "src", "alt", "Semantic tags"],
    answer: "Class"
  },
  /*{
    question: "which of the following formats are used for highligting text?",
    options: ["(a) sub", "(b) mark", "(c) del", "(d) em"],
    answer: "b"
  },
  {
    question: "Which of the following should you add to your ReadMe?",
    options: ["(a) project name", "(b) project description", "(c) what you learned", "(d) all of the above?"],
    answer: "d"
  },
  {
    question: "What is A programming language originally created to be run in the browser with the intention of enhancing a webpage's capabilities?",
    options: ["(a) conditional statements", "(b) CSS", "(c) JavaScript", "(d)HTML"],
    answer: "c"
  }*/
];

var countdownEl = document.getElementById('countdown');
var quiz = document.getElementById('quiz-window');
var startWindow = document.getElementById("start-window");
var startButton = document.getElementById("start-button");
var playAgainButton = document.getElementById("play-again-button");
var homeButton = document.getElementById("home-button");
var questionWindow = document.getElementById('questions');
var answersWindow = document.getElementById('answers');
var feedbackWindow = document.getElementById('feedback');
var timerEl = document.getElementById("time-remaining");
var resultWindow = document.getElementById("result-window");
var scoreWindow = document.getElementById('final-score');
var scoreForm = document.getElementById("score-form");
var initialsContainer = document.getElementById('initials');
var viewHighscoresButton = document.getElementById('view-highscores');
var highscoresList = document.getElementById('highscores-list');
var highscoresWindow = document.getElementById('highscores-container');

var currentQuestionIndex = 0;
var timeLeft = 60;
var timeInterval;

document.getElementById("result-container").setAttribute("style", "display:none;");


//highscoresWindow.style.display = 'none';

// onclick event to check if user chooses the coreect or wrong answer
/*for (var i = 0; i < questions.length; i++) {
  var response = window.prompt(questions[i].options)
 console.log("++++==", questions[i]);

  if (response == questions[i].answer) {
    score++;
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
}
alert("Congratulations! you got" + score + "/" + questions.length);
*/
//countdown();

//var startQuiz = function() {
//
//}

function answerCheck(){
  var userAns = this.getAttribute("data-answer");
  console.log(userAns);
  if(userAns === questions[currentQuestionIndex].answer)
  {
    score = score + 10;
    currentQuestionIndex++;

    if(currentQuestionIndex === questions.length){
      endQuiz();
    }
    else{
      startButtonClicked();
    }
    
  }
  else{
    timeLeft = timeLeft - 5;
    currentQuestionIndex++;

    if(currentQuestionIndex === questions.length){
      endQuiz();
    }
    else{
      startButtonClicked();
    }
  }
}

function startButtonClicked() {
  document.getElementById("quiz-container").textContent = "";
  console.log('Start button Clicked');
  document.getElementById("start-container").setAttribute("style", "display:none;");

  var h2 = document.createElement("h2");
  h2.textContent = questions[currentQuestionIndex].question;
  document.getElementById("quiz-container").appendChild(h2);

  for(var i=0; i<questions[currentQuestionIndex].options.length; i++)
  {
    var btn = document.createElement("button");
    btn.textContent = questions[currentQuestionIndex].options[i];
    btn.setAttribute("data-answer",questions[currentQuestionIndex].options[i]);
    document.getElementById("quiz-container").appendChild(btn);
    btn.onclick = answerCheck;
  }
}

//startButtin.addEventListener('click', startButtonClicked);



// // 5.---------------------------------------------------------------

/*for (var i=0;) i < questions.length; i++) {
  var response
}
 
else {
  timeRemaining -= 10;
  feedbackWindow.textContent = "Wrong!";
}*/

// // 6.---------------------------------------------------------------
// currentQuestionIndex++;
// if (currentQuestionIndex < questions.length) {
//   showQuestion();
// } else {
//   currentQuestionIndex = 0;
//   endQuiz();
// };


// // 7.----------------------------------------------------------------
function endQuiz() {
  clearInterval(timeInterval);
  document.getElementById("quiz-container").setAttribute("style", "display:none;")
  document.getElementById("result-container").setAttribute("style", "display:block;")
}

// // 8.---------------------------------------------------------------
function saveScore(event) {
  // event.preventDefault();

  initialsContainer.value.toUpperCase();
  // Save initials and score to storage
  var initials = initialsContainer.value;
  localStorage.setItem("Initials", initials);
  localStorage.setItem("Score", score);

  var highScoresElement = document.createElement("p");
  highScoresElement.textContent = initials + ": " + score;
  highscoresWindow.appendChild(highScoresElement);

  var scoreForm = document.getElementById("score-form");
  scoreForm.style.display = "none";
}





// Function to print high scores
function printHighScores() {
  startButton.style.display = 'none';
  highscoresWindow.style.display = 'block';
  highscoresList.innerHTML = '';

  // Retrieve scores from localStorage
  var scoreData = localStorage.getItem("Score");

  // Display the high scores
  if (scoreData) {
    var scores = JSON.parse(scoreData);
    var uniqueScores = [];

    for (var i = 0; i < scores.length; i++) {
      var scoreItem = scores[i].initials + ' - ' + scores[i].score;

      uniqueScores[scoreItem] = true;
    }

    Object.keys(uniqueScores).forEach(function (score) {
      var listItem = document.createElement('li');
      listItem.textContent = scoreItem;
      highscoresList.appendChild(scoreItem);
    });
  }
  homeButton.addEventListener("click", function () {
    startWindow.style.display = "block";
    startButton.style.display = 'block';
    quiz.style.display = "none";
    resultWindow.style.display = "none";
    highscoresWindow.style.display = "none";
    timerEl.style.display = "none";
    feedbackWindow.style.display = "none";
    clearInterval(timerInterval);
    currentQuestionIndex = 0;
    score = 0;
  });
}



function countdown() {
  //var timeLeft = 60;

  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      countdownEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      countdownEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      countdownEl.textContent = 'Time is up!';
      clearInterval(countdownInterval);
    }
  }, 1000);
}

startButton.addEventListener('click', function () {
  countdown();
  startButtonClicked();
 // startGame
});

//startButton.addEventListener("click", startGame);
//viewHighscoresButton.addEventListener('click', printHighScores);

