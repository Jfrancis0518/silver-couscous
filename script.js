var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main')

//timer
function countdown () {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft >1) {
            timerEl.textContent = timeLeft + 'seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + 'second remaining';
            time left--;
        } else if {
            timerEl.textcontent = '';
            displayMessage();
        }

    }, 1000);
}

    // questions for the quiz 
    var score = 0;
    var questions = [
        {
            prompt: "Which of this options control the styling for a webpage?\n(a) HTML\n\ (b) Photoshop\n\ (c) Google\n(d) CSS",
            answer: "d" 
        },
        {
            prompt: "What do we use to allow CSS amd JavaScript to select and access specific elements?\n(a) Class\n\ (b) src\n\ (c) alt\n(d) Semantic tags",
            answer: "a"
        },
        {
            prompt: "which of the following formats are used for highligting text? \n(a) sub\n\ (b) mark\n (c) del\n\ (d)em",
            answer: "b"
        },
        {
            prompt: "Which of the following should you add to your ReadMe?n\(a) project name\n\ (b) project description\n\ (c) what you learned\n (d) all of the above?",
            answer: "d"
        },
        {
            prompt: "What is A programming language originally created to be run in the browser with the intention of enhancing a webpage's capabilities?\n\(a) conditional statements\ (b) CSS\n\ (c) JavaScript\n (d)HTML",
            answer: "c"
        },
    ]
    
    for(var i=0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt)
     if(response == questions [i].answer){
       score++;
       alert ("Correct!");
        } else {
            alert("Incorrect!");
        }
    }
    alert("Congratulations! you got" + score + "/" + questions.length);
   
    Countdown();
   
    //var startQuiz = function() {
        //
    //}