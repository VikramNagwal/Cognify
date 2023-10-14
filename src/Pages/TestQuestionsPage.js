import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './TestQuestionsPage.css';
import { useNavigate } from 'react-router-dom';

const TestQuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const { testId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch questions for the specific test from the API
    fetch(`http://localhost:8000/psychology-tests/tests/${testId}/`)
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.log(error));
  }, [testId]);

  const handleOptionSelect = (questionId, optionIndex) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [questionId]: optionIndex
    }));
  };

  const handleSubmit = () => {
    // Submit each question's response individually
    Object.entries(responses).forEach(([questionId, responseIndex]) => {
      const requestBody = {
        question: Number(questionId),
        response: responseIndex + 1
      };

      const token=localStorage.getItem('token');

      fetch(`http://localhost:8000/psychology-tests/tests/${testId}/submit/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify(requestBody)
      })
        .then(response => response.json())
        .then(data => {
        })
        .catch(error => console.log(error));
    });
    //use navigate
    
    navigate('/thank-you');
  };

  return (
    <div className="container">
      <h1>Test Questions</h1>
      <ul>
        {questions.map(question => (
          <li key={question.id}>
            <p>{question.question}</p>
            <ul className="options">
              {Array.from(Array(5)).map((_, index) => (
                <li
                  key={index}
                  className={`option ${responses[question.id] === index ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(question.id, index)}
                >
                  {question[`option${index + 1}`]}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TestQuestionsPage;
