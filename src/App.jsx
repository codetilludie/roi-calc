import React, { useState } from 'react';
import './App.css';

function App() {
  const [tenders, setTenders] = useState(1);
  const [hoursPerTender, setHoursPerTender] = useState(40);
  const [showResults, setShowResults] = useState(false);

  const calculateResults = () => {
    const manualTime = tenders * hoursPerTender;
    const automatedTime = manualTime * 0.1;
    const timeSaved = manualTime - automatedTime;

    return {
      manualTime,
      automatedTime,
      timeSaved,
    };
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  const results = calculateResults();

  return (
    <div className="App">
      <div className="background-animation"></div>
      <div className="logo">bidpoint.ai</div>
      <div className="container">
        <h1 className="title">AI Tender Automation ROI Calculator</h1>
        <div className="calculator">
          <div className="input-group">
            <label htmlFor="tenders">Number of tenders per year:</label>
            <input
              id="tenders"
              type="number"
              min="1"
              value={tenders}
              onChange={(e) => {
                setTenders(Math.max(1, parseInt(e.target.value) || 1));
                setShowResults(false);
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="hoursPerTender">Hours spent per tender:</label>
            <input
              id="hoursPerTender"
              type="number"
              min="1"
              value={hoursPerTender}
              onChange={(e) => {
                setHoursPerTender(Math.max(1, parseInt(e.target.value) || 1));
                setShowResults(false);
              }}
            />
          </div>
          <button onClick={handleShowResults} className="show-results-btn">
            Calculate Time Saved
          </button>
        </div>
        {showResults && (
          <div className="results">
            <div className="result-item">
              <span className="result-label">Manual process time:</span>
              <span className="result-value">{results.manualTime} hours</span>
            </div>
            <div className="result-item">
              <span className="result-label">Automated process time:</span>
              <span className="result-value">{results.automatedTime.toFixed(1)} hours</span>
            </div>
            <div className="result-item highlight">
              <span className="result-label">Time saved:</span>
              <span className="result-value">{results.timeSaved.toFixed(1)} hours</span>
            </div>
            <div className="result-item highlight">
              <span className="result-label">Percentage saved:</span>
              <span className="result-value">90%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
