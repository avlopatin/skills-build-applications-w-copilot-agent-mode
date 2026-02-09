import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const getApiBaseUrl = () => {
    const hostname = window.location.hostname;
    if (hostname.includes('.app.github.dev')) {
      const codespacePrefix = hostname.split('-3000')[0];
      return `https://${codespacePrefix}-8000.app.github.dev`;
    }
    return 'http://localhost:8000';
  };
  const endpoint = `${getApiBaseUrl()}/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Activities endpoint:', endpoint);
        console.log('Fetched activities:', data);
        setActivities(data.results ? data.results : data);
      });
  }, [endpoint]);

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((activity, idx) => (
          <li key={idx}>{activity.user} - {activity.activity} ({activity.duration} min)</li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
