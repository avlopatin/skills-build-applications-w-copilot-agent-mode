import React, { useEffect, useState } from 'react';

// API endpoint: https://{codespace}-8000.app.github.dev/api/workouts/
const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const getApiBaseUrl = () => {
    const hostname = window.location.hostname;
    if (hostname.includes('.app.github.dev')) {
      const codespacePrefix = hostname.split('-3000')[0];
      return `https://${codespacePrefix}-8000.app.github.dev`;
    }
    return 'http://localhost:8000';
  };  const endpoint = `${getApiBaseUrl()}/api/workouts/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts endpoint:', endpoint);
        console.log('Fetched workouts:', data);
        setWorkouts(data.results ? data.results : data);
      });
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-danger text-white">
          <h2 className="mb-0">💪 Workouts</h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">User</th>
                  <th scope="col">Workout</th>
                  <th scope="col">Reps</th>
                </tr>
              </thead>
              <tbody>
                {workouts.map((workout, idx) => (
                  <tr key={idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{workout.user}</td>
                    <td>{workout.workout}</td>
                    <td><span className="badge bg-success">{workout.reps}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
