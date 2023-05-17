import { useEffect, useState } from 'react';
import './App.css';
// import questions from './data/questions';
import questions from './data/questions2';

function App() {
  const [results, setResults] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [randomizedArr, setRandomizedArr] = useState([]);
  const [showAnswersButton, setShowAnswersButton] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const newResults = [];
    randomizedArr.forEach((question, index) => {
      const inputs = document.querySelectorAll(`input[name="${index}"]`);
      inputs.forEach((input) => {
        if (input.checked) {
          const isCorrect = input.value === String(true);
          input.parentElement.classList.add(
            isCorrect ? 'correct' : 'incorrect'
          );
          // newResults.push({ question: question.question, isCorrect });
        }
      });
    });
    setShowAnswersButton(true);
    // setResults(newResults);
  };
  useEffect(() => {
    randomizedArr.forEach((question, index) => {
      const inputs = document.querySelectorAll(`input[name="${index}"]`);
      inputs.forEach((input) => {
        input.parentNode.classList.remove('correct', 'incorrect');
      });
    });
    let element = document.getElementById('form');
    element.reset();
    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
    const shuffledQuestions = shuffle(questions);
    const randomAndSliced = shuffledQuestions.slice(0, 80);
    setRandomizedArr(randomAndSliced);
    setShowAnswersButton(false);
  }, [buttonClicked]);

  const handleButtonClick = () => {
    setButtonClicked((prevState) => !prevState);
  };
  const handleShowAnswers = (index) => {
    const inputs = document.querySelectorAll(`input[name="${index}"]`);
    inputs.forEach((input) => {
      const isCorrect = input.value === 'true';
      const className = isCorrect ? 'correct' : 'incorrect';
      input.parentNode.classList.add(className);
    });
  };
  return (
    <>
      <h1>SAP Project Systems Certification Quiz</h1>
      <div className='warning-wrapper'>
        <p className='warning'>
          This are not questions from the actul certification exam these
          quesitons have been generated by myself in order to learn faster and
          maybe help someone else prepare better for exam!
        </p>
        <span className='top'></span>
        <span className='right'></span>
        <span className='bottom'></span>
        <span className='left'></span>
      </div>
      <div className='changle-questions--wraper'>
        <button className='change-questions' onClick={handleButtonClick}>
          New Questions
        </button>
      </div>
      <form id='form' onSubmit={handleSubmit}>
        <ol>
          {randomizedArr.map((question, index) => (
            <div key={index} className='questions-container'>
              <li>
                <h3>{question.question}</h3>
                {showAnswersButton && (
                  <div className='show-answers--button'>
                    <button onClick={() => handleShowAnswers(index)}>
                      Show Answers
                    </button>
                  </div>
                )}
                {question.options.map((option, optionIndex) => {
                  if (
                    question.type === 'true_false' ||
                    question.type === 'multiple_choice'
                  ) {
                    return (
                      <div key={optionIndex}>
                        <label>
                          <input
                            type='radio'
                            name={index}
                            value={option.value}
                          />{' '}
                          {option.option}{' '}
                        </label>
                      </div>
                    );
                  } else if (question.type === 'multiple_right_answers') {
                    return (
                      <div key={optionIndex}>
                        <label>
                          <input
                            type='checkbox'
                            name={index}
                            value={option.value}
                          />
                          {option.option}
                        </label>
                      </div>
                    );
                  }
                })}
              </li>
            </div>
          ))}
        </ol>
        <div className='button-wrapper'>
          <button type='button' onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
