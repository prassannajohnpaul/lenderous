import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './index.css';

function App() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/loans')
      .then(response => {
        setLoans(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the loans data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Dynamic Loan Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Borrower Name</th>
            <th>Principal Amount</th>
            <th>Interest Rate (%)</th>
            <th>Loan Date</th>
            <th>Term (Months)</th>
          </tr>
        </thead>
        <tbody>
          {loans.map(loan => (
            <tr key={loan.id}>
              <td>{loan.borrowerName}</td>
              <td>${loan.principalAmount.toLocaleString()}</td>
              <td>{loan.interestRate}</td>
              <td>{new Date(loan.loanDate).toLocaleDateString()}</td>
              <td>{loan.term}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
