import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiDataCounter = () => {
  const [dataCount, setDataCount] = useState(0);

  useEffect(() => {
    // Replace 'your_api_url' with the actual URL of the API you want to call
    const apiURL = 'https://api.koios.rest/api/v0/account_list';
    fetchData(apiURL);
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      const apiData = response.data;
      const fieldToCount = 'id'; // Replace with the actual field name containing the data you want to count

      if (apiData[fieldToCount]) {
        setDataCount(apiData[fieldToCount].length);
      } else {
        console.log(`Field '${fieldToCount}' not found in the API response.`);
        setDataCount(0);
      }
    } catch (error) {
      console.error('Failed to fetch data from the API.', error);
      setDataCount(0);
    }
  };

  return (
    <div>
      <h2>Count of data from API: {dataCount}</h2>
    </div>
  );
};

export default ApiDataCounter;
