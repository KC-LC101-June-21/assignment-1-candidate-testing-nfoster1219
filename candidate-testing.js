const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = askForName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = askQuestion;
let correctAnswer = 'Sally Ride';
let candidateAnswer = false;
let questions;
let correctAnswers;
let candidateAnswers;



  // TODO 1.1b: Ask for candidate's name //
function askForName(candidateName) { 
  input.question('What is your name? ');
  console.log("Hello, " + candidateName + "!");
}


function askQuestion() {
  input.question('Who was the first American woman in space? ');
  

}
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //



function gradeQuiz(candidateAnswers) {
if (candidateAnswer == correctAnswer) {
  console.log('Correct!')
} else {
  console.log('Please try again')
}


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};