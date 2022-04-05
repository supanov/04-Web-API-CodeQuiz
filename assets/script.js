var quizQuestions = [


    {
        question: "Which Ghibhli character can tranform into a dragon?",
        anwsers: ["Howl", "Haru", "Haku", "Hatsumaru"],

        correctAnwser: "Haku"
    },
    {
        question: "What is the name of the fiery compainion in 'Howl's Moving Castle'?",
        anwsers: ["Heatfire", "Sunray", "Calipico", "Calcifer"],

        correctAnwser: "Calicfer"
    },
    {
        question: "What is the nickname Sophie gives the cursed screcrow who follows her in 'Howl's Moving Castle'?",
        anwsers: ["Turnip Head", "Gentleman", "ScaryCrow", "Happy Hat"],

        correctAnwser: "Turnip Head"
    },
    {
        question: "What are the names of the orphans that struggle in war-torn Japan in 'Grave of the Fireflies'?",
        anwsers: ["Haku & Sophie", "Totoro & Kiki", "Rin & Rina", "Seita & Setsuko"],

        correctAnwser: "Seita & Setsuko"
    },
    {
        question: "What is the name of Kiki's kitty in 'Kiki's Delivery Service'?",
        anwsers: ["Luna", "Jiji", "Kiwi", "Night"],

        correctAnwser: "Jiji"
    },
    {
        question: "What natural disaster occurs in 'Ponyo'?",
        anwsers: ["Earthquake", "Hurricane", "Tsunami", "Tornado"],

        correctAnwser: "Tsunami"
    },
    {
        question: "What type of animals raise San in 'Princess Mononoke'?",
        anwsers: ["Tigers", "Wolves", "Deer", "Bears"],

        correctAnwser: "Wolves"
    },
    {
        question: "What did Haku tell Chihiro to never forget in 'Spirited Away'?",
        anwsers: ["Her parents", "Haku", "Her Home", "Her name"],

        correctAnwser: "Her Name"
    },
    {
        question: "What film features the Catbus?",
        anwsers: ["My Neighbor Totoro", "Nausicaa of the Valley of the Wind", "Ponyo", "Spirited Away"],

        correctAnwser: "My Neighnor Totoro"
    },

];

var totaltime = quizQuestions.length * 10



// Creating functions/logic
var introduction = document.querySelector('.Introduction')
var StartQuiz = document.querySelector('#StartQuiz')
var Trivia = document.querySelector('.Trivia')
var intials = document.querySelector('.Initials')
var score = document.querySelector('.Score')
var goBack = document.querySelector("#goBack")
var clearScore = document.querySelector('#clearScore')
var Time = document.querySelector('.Time')
var question = document.querySelector('#question')
var currentQuestion = 0;
var choiceContainer = document.querySelector('#choiceContainer')
var questionIndex = 0;

var clockid = null



var choiceOne = document.querySelector('#choiceOne')
var choiceTwo = document.querySelector('#choiceTwo')
var choiceThree = document.querySelector('#choiceThree')
var choiceFour = document.querySelector('#choiceFour')

// Addidng Questions and Anwsers to quiz card
StartQuiz.addEventListener('click', function () {
    console.log("Hello world")
    introduction.classList.add('hide')
    question.textContent = quizQuestions[currentQuestion].question
    choiceOne.textContent = quizQuestions[currentQuestion].anwsers[0]
    choiceTwo.textContent = quizQuestions[currentQuestion].anwsers[1]
    choiceThree.textContent = quizQuestions[currentQuestion].anwsers[2]
    choiceFour.textContent = quizQuestions[currentQuestion].anwsers[3]

    choiceContainer.addEventListener('click', function (event) {
        console.log(event.target.textContent)

        var userChoice = event.target.textContent
        var currentQuestionAnwser = quizQuestions[currentQuestion].correctAnwser
        console.log(userChoice)
        console.log(currentQuestionAnwser)

        // User Pick      // actual anwer is
        if (userChoice === currentQuestionAnwser) {
            alert("Proud of you! :)")
            // We need to {add points} 

        } else {
            // Loose points
            alert("I'm not mad.. just disappointed.");
        }
    })


    // function render(questionIndex) {
    //     for (var i = 0; i < questions.length; i++) {
    //         // Appends question title only
    //         var userQuestion = questions[questionIndex].title;
    //         var userChoices = questions[questionIndex].choices;
    //         questionsDiv.textContent = userQuestion;
    //     }
    // }





    Trivia.classList.remove('hide')
    clockid = setInterval(() => {
        clock()
    }, 1000);
})

function clock() {
    Time.textContent = totaltime
    totaltime--
}



// displaying the quiz
choiceOne.textContent = quizQuestions[currentQuestion].anwsers[0]


