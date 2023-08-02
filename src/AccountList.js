import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.koios.rest/api/v0/account_list');
      setAccounts(response.data);
    } catch (error) {
      console.error('Failed to fetch data from the API.', error);
    }
  };

  return (
    <div>
      <h2>Account List</h2>
      <ul>
        {accounts.map(account => (
          <li key={account.id}>
            {/* <strong>{account.n}</strong> - {account.email} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
