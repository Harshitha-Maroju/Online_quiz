# Online_quiz
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Online Quiz Application - Description</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f4f4f9;
      color: #333;
    }
    .container {
      max-width: 800px;
      margin: 50px auto;
      padding: 20px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    h1, h2 {
      color: #4caf50;
    }
    pre, code {
      background: #f4f4f9;
      padding: 10px;
      display: block;
      border-radius: 5px;
      margin: 20px 0;
      overflow-x: auto;
    }
    ul {
      margin: 20px 0;
      padding-left: 20px;
    }
    li {
      margin-bottom: 10px;
    }
    a {
      color: #4caf50;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Online Quiz Application</h1>
    <p>This is a responsive and interactive online quiz application built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. It demonstrates front-end development skills through dynamic content rendering, user interaction, and visual feedback.</p>

    <h2>Features</h2>
    <ul>
      <li>Welcome screen with user name input.</li>
      <li>Dynamic questions loaded from a JavaScript array.</li>
      <li>Visual feedback for the selected option.</li>
      <li>Score tracking and results display at the end of the quiz.</li>
      <li>Responsive design for both desktop and mobile.</li>
      <li>Option to restart the quiz after completion.</li>
    </ul>

    <h2>Project Structure</h2>
    <pre>
📁 quiz-app/
├── index.html       # Main HTML file
├── style.css        # Styling for the application
├── script.js        # Core JavaScript logic for the quiz
    </pre>

    <h2>How It Works</h2>
    <ol>
      <li><strong>Start Quiz:</strong> Enter your name and click "Start Quiz" to begin.</li>
      <li><strong>Answer Questions:</strong> Select an option for each question, which will be visually highlighted.</li>
      <li><strong>View Results:</strong> See your final score and the total number of questions at the end.</li>
      <li><strong>Restart Quiz:</strong> Restart the quiz to play again.</li>
    </ol>

    <h2>Technologies Used</h2>
    <ul>
      <li><strong>HTML:</strong> For structuring the application.</li>
      <li><strong>CSS:</strong> For styling and responsive design.</li>
      <li><strong>JavaScript:</strong> For dynamic content rendering and user interaction.</li>
    </ul>

    <h2>Customization</h2>
    <p>To add or modify questions, edit the <code>questions</code> array in the <strong>script.js</strong> file:</p>
    <pre>
const questions = [
  {
    question: "New question here",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: 2, // Index of the correct answer
  },
];
    </pre>

    <h2>Future Enhancements</h2>
    <ul>
      <li>Add a timer for each question.</li>
      <li>Include different difficulty levels.</li>
      <li>Integrate a backend for dynamic question management.</li>
    </ul>

    <h2>How to Run</h2>
    <ol>
      <li>Clone this repository:
        <pre>git clone https://github.com/your-username/online-quiz-app.git</pre>
      </li>
      <li>Navigate to the project directory:
        <pre>cd online-quiz-app</pre>
      </li>
      <li>Open the <code>index.html</code> file in your preferred browser.</li>
    </ol>

    <p>Check out the live demo or contribute to the project on <a href="https://github.com/" target="_blank">GitHub</a>.</p>
  </div>
</body>
</html>
