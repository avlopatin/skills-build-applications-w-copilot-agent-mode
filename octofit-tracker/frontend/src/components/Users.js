import React, { useEffect, useState } from 'react';

// API endpoint: https://{codespace}-8000.app.github.dev/api/users/
const Users = () => {
  const [users, setUsers] = useState([]);
  const getApiBaseUrl = () => {
    const hostname = window.location.hostname;
    if (hostname.includes('.app.github.dev')) {
      const codespacePrefix = hostname.split('-3000')[0];
      return `https://${codespacePrefix}-8000.app.github.dev`;
    }
    return 'http://localhost:8000';
  };
  const endpoint = `${getApiBaseUrl()}/api/users/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Users endpoint:', endpoint);
        console.log('Fetched users:', data);
        setUsers(data.results ? data.results : data);
      });
  }, [endpoint]);

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-warning text-dark">
          <h2 className="mb-0">Users</h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Team</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{user.name}</td>
                    <td><a href={`mailto:${user.email}`} className="link-primary">{user.email}</a></td>
                    <td><span className="badge bg-secondary">{user.team}</span></td>
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

export default Users;
