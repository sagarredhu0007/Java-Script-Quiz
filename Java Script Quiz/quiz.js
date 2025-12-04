const quizQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is 7 × 8?", answer: "56" },
  { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
  { question: "Which language styles web pages?", answer: "CSS" },
  { question: "What is Earth’s largest ocean?", answer: "Pacific Ocean" }
];

function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    const userResponse = prompt(quizQuestions[i].question);
    const normalizedUserAnswer = userResponse ? userResponse.trim().toLowerCase() : "";
    const normalizedCorrectAnswer = quizQuestions[i].answer.trim().toLowerCase();

    if (normalizedUserAnswer === normalizedCorrectAnswer) {
      score++;
      alert("Correct!");
    } else {
      alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
    }
  }

  alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}

runQuiz();