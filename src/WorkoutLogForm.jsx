// src/components/WorkoutLogForm.jsx
import React, { useState } from 'react';

const WorkoutLogForm = () => {
  const [workoutType, setWorkoutType] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Workout Logged:', { workoutType, duration, calories });
    setWorkoutType('');
    setDuration('');
    setCalories('');
  };

  return (
    <div className="card">
      <h2>Log Your Workout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Workout Type</label>
          <input
            type="text"
            value={workoutType}
            onChange={(e) => setWorkoutType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Duration (minutes)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Calories Burned</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log Workout</button>
      </form>
    </div>
  );
};

export default WorkoutLogForm;
