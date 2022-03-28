// Storing these HTML elements to store them as variables"
var quizContainer = document.getElementById('quiz')
var resultsContainer = document.getElementById('results')
var submitButton = document.getElementById('submit')

// Laying out functions

function buildQuiz() {}

function showResults() {}

// display quiz
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

// displaying quiz questions, using object literals to show questions and an array the questions that make our quiz. Arrays will make questions easy to iterate over

var quizQuestions = [
    {
        question: "No-Face spirit from 'Spirited Away' is based on Japanese Mythoology",
        anwsers: {
            a: "True",
            b: "False",
        }, 
        correctAnwser: "b"
    },
    {
        question: "Which Ghibhli character can tranform into a dragon?",
        anwsers: {
            a: "Howl",
            b: "Haru",
            c: "Haku",

        },
        correctAnwser: "c"
    },
    {
        question: "What is the name of the fiery compainion in 'Howl's Moving Castle'?",
        anwsers: {
            a: "Heatfire",
            b: "Sunray",
            c: "Calipico",
            d:" Calcifer",
        },
        correctAnwser: "d"
    },
    {
        question: "What is the nickname Sophie gives the cursed screcrow who follows her in 'Howl's Moving Castle'?",
        anwsers: {
            a: "Turnip Head",
            b: "Gentleman",
            c: "ScaryCrow",
            d: "Happy Hat",
        },
        correctAnwser: "a"
    },
    {
        question: "What are the names of the orphans that struggle in war-torn Japan in 'Grave of the Fireflies'?",
        anwsers: {
            a: "Haku & Sophie",
            b: "Totoro & Kiki",
            c: "Rin and Rina",
            d: "Seita & Setsuko",
        },
        correctAnwser: "d"
    },
    {
        question: "What is the name of Kiki's kitty in 'Kiki's Delivery Service'?",
        anwsers: {
            a:"Luna",
            b:"Jiji",
            c:"Kiwi",
            d:"Night"
        },
        correctAnwser: "b"
    },
    {
        question: "What natural disaster occurs in 'Ponyo'?",
        anwsers: {
            a:"Earthquake",
            b:"Hurricane",
            c:"Tsunami",
            d:"Tornado"
        },
        correctAnwser: "c"
    },
    {
        question: "What type of animals raise San in 'Princess Mononoke'?",
        anwsers: {
            a:"Tigers",
            b:"Wolves",
            c:"Deer",
            d:"Bears"
        },
        correctAnwser: "b"
    },
    {
        question: "What did Haku tell Chihiro to never forget in 'Spirited Away'?",
        anwsers: {
            a:"Her parents",
            b:"Haku",
            c:"Home",
            d:"Her name"
        },
        correctAnwser: "d"
    },
    {
        question: "What film features the Catbus?",
        anwsers: {
            a:"My Neighbor Totoro",
            b:"Nausicaa of the Valley of the Wind",
            c:"Ponyo",
            d:"Spirited Away"
        },
        correctAnwser: "a"
    },

]