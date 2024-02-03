import React, { useState, useEffect } from 'react';

function DataFetcher() {
  // Step 1: Initialize State
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Step 2: Fetch Data Function
  const fetchData = async () => {
    try {
      // Simulate API call with a delay (replace with your API endpoint)
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ json: () => [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] }), 1000)
      );

      const result = await response.json();

      // Step 2 (cont.): Update State with Fetched Data
      setData(result);
      setLoading(false);
    } catch (error) {
      // Handle errors
      setError(error);
      setLoading(false);
    }
  };

  // Step 3: useEffect Hook
  useEffect(() => {
    fetchData(); // Trigger the API call on component mount
  }, []); // Empty dependency array ensures it runs only once

  // Step 4: Render Data
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataFetcher;
