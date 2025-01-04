import { useEffect, useState } from 'react';
import './PostPayFines.css';

const PostPayFine = () => {
  const [fines, setFines] = useState([]);

  useEffect(() => {
    const fetchFines = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/officerfines');
        const data = await response.json();
        setFines(data);
      } catch (error) {
        console.error('Error fetching officer fines:', error);
      }
    };

    fetchFines();
  }, []);

  return (
    <div className="post-pay-fine">
      <h1>Pay Post Fine</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>type</th>
            <th>Amount</th>
            <th>License ID</th>
          </tr>
        </thead>
        <tbody>
          {fines.map((fine, index) => (
            <tr key={index}>
              <td>{fine.fine_id}</td>
              <td>{fine.fine_name}</td>
              <td>{fine.fine_type}</td>
              <td>Rs.{fine.fine_amount}</td>
              <td>{fine.license_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostPayFine;