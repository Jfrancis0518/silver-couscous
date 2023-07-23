

    // questions for the quiz 
    var score = 0;
    var questions = [
        {
            question: "Which of this options control the styling for a webpage?",
            options: ["(a) HTML", "(b) Photoshop", "(c) Google", "(d) CSS"],
            answer: "d" 
        },
        {
            question: "What do we use to allow CSS amd JavaScript to select and access specific elements?"
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
    
    /*for(var i=0; i < questions.length; i++){
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

    var currentQuestionsIndex = 0;
    var timeRemaining = 75;
    var scores = [];

    highscoresWindow.style.display = 'none';
