// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import WorkoutLogForm from './WorkoutLogForm';
import ProgressChart from './ProgressChart';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/log" element={<WorkoutLogForm />} />
          <Route path="/progress" element={<ProgressChart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
