// Creating Variables
var quizContainer = document.querySelector('quiz')
var resultsContainer = document.querySelector('results')
var submitButton = document.querySelector('submit')
var time = document.querySelector('timer')





// displaying quiz questions, using object literals to show questions and an array the questions that make our quiz. Arrays will make questions easy to iterate over

var quizQuestions = [
    {
        question: "No-Face spirit from 'Spirited Away' is based on Japanese Mythoology",
        anwsers: ["True", "False"],

        correctAnwser: "1"
    },
    {
        question: "Which Ghibhli character can tranform into a dragon?",
        anwsers: ["Howl","Haru","Haku"],

        correctAnwser: "2"
    },
    {
        question: "What is the name of the fiery compainion in 'Howl's Moving Castle'?",
        anwsers: ["Heatfire","Sunray","Calipico","Calcifer"],

        correctAnwser: "3"
    },
    {
        question: "What is the nickname Sophie gives the cursed screcrow who follows her in 'Howl's Moving Castle'?",
        anwsers: ["Turnip Head","Gentleman","ScaryCrow","Happy Hat"],

        correctAnwser: "0"
    },
    {
        question: "What are the names of the orphans that struggle in war-torn Japan in 'Grave of the Fireflies'?",
        anwsers: ["Haku & Sophie", "Totoro & Kiki","Rin & Rina","Seita & Setsuko"], 

        correctAnwser: "3"
    },
    {
        question: "What is the name of Kiki's kitty in 'Kiki's Delivery Service'?",
        anwsers: ["Luna","Jiji","Kiwi","Night"],
    
        correctAnwser: "1"
    },
    {
        question: "What natural disaster occurs in 'Ponyo'?",
        anwsers: ["Earthquake","Hurricane","Tsunami","Tornado"],
    
        correctAnwser: "2"
    },
    {
        question: "What type of animals raise San in 'Princess Mononoke'?",
        anwsers: ["Tigers","Wolves","Deer","Bears"],
       
        correctAnwser: "2"
    },
    {
        question: "What did Haku tell Chihiro to never forget in 'Spirited Away'?",
        anwsers: ["Her parents","Haku","Her Home","Her name"],
    
        correctAnwser: "3"
    },
    {
        question: "What film features the Catbus?",
        anwsers: ["My Neighbor Totoro","Nausicaa of the Valley of the Wind","Ponyo","Spirited Away"],
    
        correctAnwser: "0"
    },

];
var totaltime= quizQuestions.length*15

// Creating functions/logic
var introduction = document.querySelector('.Introduction')
var StartQuiz = document.querySelector('#StartQuiz')
var Trivia = document.querySelector('.Trivia')
var choiceOne = document.querySelector('#choiceOne')
var choiceTwo = document.querySelector('#choiceTwo')
var choiceThree = document.querySelector('#choiceThree')
var choiceFour = document.querySelector('#choiceFour')
var intials = document.querySelector('.Initials')
var score = document.querySelector('.Score')
var goBack = document.querySelector("#goBack")
var clearScore = document.querySelector('#clearScore')
var Time = document.querySelector('.Time')
var clockid=null

// Created a function to add hide and remove hide 
StartQuiz.addEventListener('click', function(){
introduction.classList.add('hide')
Trivia.classList.remove('hide')
clockid=setInterval(() => {
    clock()
}, 1000);
})

function clock(){
    Time.textContent=totaltime
    totaltime--
}

// Time function to subtract points when you miss an anwser


// Scoreboard that saves progress

// start with the start button 



