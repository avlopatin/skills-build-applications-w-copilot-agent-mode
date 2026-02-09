import React, { useEffect, useState } from 'react';

// API endpoint: https://{codespace}-8000.app.github.dev/api/leaderboard/
const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const getApiBaseUrl = () => {
    const hostname = window.location.hostname;
    if (hostname.includes('.app.github.dev')) {
      const codespacePrefix = hostname.split('-3000')[0];
      return `https://${codespacePrefix}-8000.app.github.dev`;
    }
    return 'http://localhost:8000';
  };
  const endpoint = `${getApiBaseUrl()}/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard endpoint:', endpoint);
        console.log('Fetched leaderboard:', data);
        setLeaderboard(data.results ? data.results : data);
      });
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-success text-white">
          <h2 className="mb-0">🏆 Leaderboard</h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">User</th>
                  <th scope="col">Points</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry, idx) => (
                  <tr key={idx} className={idx < 3 ? 'table-warning' : ''}>
                    <th scope="row">{idx + 1}</th>
                    <td>{entry.user}</td>
                    <td><span className="badge bg-primary">{entry.points}</span></td>
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

export default Leaderboard;
