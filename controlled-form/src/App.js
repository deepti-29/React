import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [showText, setShowText] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div className="App">
      <h1>Controlled Form</h1>
      <form className="form-container">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
      </form>

      <div className="display-data">
        <h2>Entered Data:</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>

      <div className="toggle-section">
        <button onClick={toggleText} className="toggle-button">
          {showText ? 'Hide Text' : 'Show Text'}
        </button>
        {showText && <p className="toggle-text">This is some hidden text!</p>}
      </div>
    </div>
  );
}

export default App;