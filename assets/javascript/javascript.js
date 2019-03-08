// Trivia Game

// target game area
var startScreen = $("#game");

var questions = [
    {
        question: "Which country is home to the kangaroo?",
        answers: ["United States", "Australia"],
        correctAnswer: "Australia"
    }, 
    {
        question: "Name the school that Harry Potter attended?",
        answers: ["UCLA", "Hogwarts"],
        correctAnswer: "Hogwarts"
    },
    {
        question: "Bees create what sweet substance?",
        answers: ["Honey", "Catnip"],
        correctAnswer: "Honey"
    },
    {
        question: "In which year did the Titanic sink?",
        answers: ["1999", "1912"],
        correctAnswer: "1912"
    },
    {
        question: "Who invented the telephone?",
        answers: ["Alexander Graham Bell", "George Washington"],
        correctAnswer: "Alexander Graham Bell"
    },
];

// declare a variable `timer`
var timer

// create object called game
var game = {
    // property correct set to value of 0
    correct: 0,
    incorrect: 0,
    counter: 30,
    countDown: function() {
        game.counter--;
        $("#countDown").html(game.counter);
        if(game.counter===0){
            console.log("Time is up!");
            alert("Time is up!");
            game.done();
        }
    },

    start: function(){
        timer = setInterval(game.countDown, 1000);
        $(".questions").prepend(
            "<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>"
        )

        $("#sub-wrapper").prepend(
          "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
        );
    
        $("#start").remove();
    
        for (var i = 0; i < questions.length; i++) {
          card.append("<h2>" + questions[i].question + "</h2>");
          for (var j = 0; j < questions[i].answers.length; j++) {
            card.append("<input type='radio' name='question-" + i +
              "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
          }
        }
    
        card.append("<button id='done'>Done</button>");
      },
    
      done: function() {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
          if ($(inputs[i]).val() === questions[i].correctAnswer) {
            game.correct++;
          } else {
            game.incorrect++;
          }
        }
        this.result();
      },
    
      result: function() {
        clearInterval(timer);
    
        $("#sub-wrapper h2").remove();
    
        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
      }
    };
    
    // CLICK EVENTS
    
    $(document).on("click", "#start", function() {
      game.start();
    });
    
    $(document).on("click", "#done", function() {
      game.done();
    });


// Click events

$(document).on("click", "#start", function() {
    game.start(); 
});

$(document).on("click", "#done", function() {
    game.done(); 
});












