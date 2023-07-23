

    // questions for the quiz 
    var score = 0;
    var questions = [
        {
            question: "Which of this options control the styling for a webpage?",
            options: ["(a) HTML", "(b) Photoshop", "(c) Google", "(d) CSS"],
            answer: "d" 
        },
        {
            question: "What do we use to allow CSS amd JavaScript to select and access specific elements?",
            options: ["(a) Class", "(b) src", "(c) alt", "(d) Semantic tags"],
            answer: "a"
        },
        {
            question: "which of the following formats are used for highligting text?"
            options: ["(a) sub", "(b) mark", "(c) del", "(d)em"],
            answer: "b"
        },
        {
            question: "Which of the following should you add to your ReadMe?"
            options: ["(a) project name", "(b) project description", "(c) what you learned", "(d) all of the above?"],
            answer: "d"
        },
        {
            question: "What is A programming language originally created to be run in the browser with the intention of enhancing a webpage's capabilities?"
            options: ["(a) conditional statements", "(b) CSS", "(c) JavaScript", "(d)HTML"],
            answer: "c"
        }
    ];

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
    var timeRemaining = 60;
    

    highscoresWindow.style.display = 'none';

    
   /* for(var i=0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt)
     if(response == questions [i].answer){
       score++;
       alert ("Correct!");
        } else {
            alert("Incorrect!");
        }
    }
    alert("Congratulations! you got" + score + "/" + questions.length);
   
    //countdown();
   
    //var startQuiz = function() {
        //
    //}

    var startQuiz = function startButtonClicked() {
        console.log('Start button Clicked');
    }

    const startButtin.addEventListener('click', startButtonClicked);*/

    
        
      // // 5.---------------------------------------------------------------
      else {
        timeRemaining -= 10;
        feedbackWindow.textContent = "Wrong!";
      }
    
    // // 6.---------------------------------------------------------------
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        currentQuestionIndex = 0;
        endQuiz();
      };

      
      // // 7.----------------------------------------------------------------
      function endQuiz() {
        clearInterval(timerInterval);
        quiz.style.display = 'none';
        resultWindow.style.display = "block";
        timerEl.style.display = 'none';
        scoreWindow.textContent = score;
      
        scoreForm.addEventListener("submit", function(event) {
          event.preventDefault();
          saveScore();
          playAgainButton.style.display = 'block';
          playAgainButton.addEventListener('click', function(event) {
            event.preventDefault();
            startWindow.style.display = "block";
            quiz.style.display = "none";
            resultWindow.style.display = "none";
            highscoresWindow.style.display = "none";
            initialsContainer.value = "";
            scoreForm.style.display = 'block';
            timerEl.style.display = "block";
            feedbackWindow.style.display = "none";
            timeRemaining = 75;
            currentQuestionIndex = 0;
            score = 0;
            timerEl.textContent = timeRemaining;
            startGame();
          });
        });
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
      
          Object.keys(uniqueScores).forEach(function(score) {
            var listItem = document.createElement('li');
            listItem.textContent = scoreItem;
            highscoresList.appendChild(scoreItem);
          });
        }
        homeButton.addEventListener("click", function() {
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
      
      startButton.addEventListener("click", startGame);
      viewHighscoresButton.addEventListener('click', printHighScores);
    
