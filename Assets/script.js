

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
   
    //countdown();
   
    //var startQuiz = function() {
        //
    //}

    var startQuiz = function startButtonClicked() {
        console.log('Start button Clicked');
    }

    const startButtin.addEventListener('click', startButtonClicked);