import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';

export default function Payouts() {
  const [payouts, setPayouts] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    // fetch from api
    setPayouts(
      [
        {id: "124", name: "Monthly Debit", amount: "24.99", created_on: "15/05/2021", payout_date: "20/05/2021", status: "completed"}
      ]
    )

  });

  return (
    <div style={{ backgroundColor: '#edf2f9', height: '100vh' }}>
      <Navbar />
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <table className="table" style={{ backgroundColor: 'white', fontSize: '14px'}}>
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Created On</th>
                  <th scope="col">Payout Date</th>
                </tr>
              </thead>
              <tbody>
                {payouts.map((row) => {
                  return (
                    <tr>
                      <th style={{fontWeight: 300, backgroundColor: 'white', fontSize: '12px'}} scope="col">{row.id}</th>
                      <th style={{fontWeight: 300, backgroundColor: 'white', fontSize: '12px'}} scope="col">{row.name}</th>
                      <th style={{fontWeight: 300, backgroundColor: 'white', fontSize: '12px'}} scope="col">{row.amount}</th>
                      <th style={{fontWeight: 300, backgroundColor: 'white', fontSize: '12px'}} scope="col">{row.amount}</th>
                      <th style={{fontWeight: 300, backgroundColor: 'white', fontSize: '12px'}} scope="col">{row.created_on}</th>
                      <th style={{fontWeight: 300, backgroundColor: 'white', fontSize: '12px'}} scope="col">{row.payout_date}</th>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
