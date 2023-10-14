import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TestCategories.css';
const TestCategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch test categories from the API
    fetch('http://localhost:8000/psychology-tests/categories/')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Test Categories</h1>
      <div className="category-list">
        {categories.map(category => (
          <Link to={`/tests/${category.id}`} key={category.id} className="category">
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TestCategoryList;
