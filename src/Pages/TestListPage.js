import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './TestListPage.css';

const TestListPage = () => {
  const [tests, setTests] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // Fetch tests for the specific category from the API
    fetch(`http://localhost:8000/psychology-tests/${categoryId}/tests/`)
      .then(response => response.json())
      .then(data => setTests(data))
      .catch(error => console.log(error));
  }, [categoryId]);

  return (
    <div className="test-list">
      <h1 className="test-list-heading">Tests</h1>
      <ul className="test-list-items">
        {tests.map(test => (
          <li key={test.id} className="test-item">
            <Link to={`/tests/${test.id}/questions`}>{test.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestListPage;
