const baseUrl = "https://fathomless-temple-12276.herokuapp.com/";
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState } from "react";

export default function Customer() {
  const navbarLinks = [
    {name: "Customers", link: "/customers"},
    {name: "Revenue", link: "/ho"},
    {name: "Integrations", link: "/integrations"}
  ]
  const addBankAccount = () => {
    fetch(baseUrl + "gocardless/customer", {
      method: "POST",
      headers: {"Authorization": localStorage.getItem("sessionId")},
      redirect: 'follow'
    })
    .then(response => Promise.all([response, response.json()]))
    .then(([response, body]) => {
      if (response.ok) {
          window.open(body.redirect_url, "_blank");
          return
        }
    })
    .catch(function(object) {
      console.log("error setting up bank accounts");
    });

  }

  const [customer, setCustomer] = useState('');
  const [payments, setPayments] = useState('');
  const [subscriptions, setSubscriptions] = useState('');
  const [mandates, setMandates] = useState('');
  
  const router = useRouter();
  let pid = router.query.id;

  const getCustomerData = async event => {    
    useEffect(() => {
        const sessionId = localStorage.getItem("sessionId");  
        if (sessionId == null) {
            Router.push('/login')
        }

        //Get customer details
        fetch("https://fathomless-temple-12276.herokuapp.com/customer/"+pid, {
            method: "GET",
            headers: {"Authorization": sessionId}
        })
        .then(response => Promise.all([response, response.json()]))
        .then(([response, body]) => {
            if (response.ok) {
               setCustomer(body)
               return
            } else {
               return response
            }
        })
        .then(function(object) {
            if(object != undefined) {
                if(object.status === 401) {
                   Router.push('/login')
                }
            }
        });

       //Get mandates
       fetch("https://fathomless-temple-12276.herokuapp.com/gocardless/mandates/"+pid, {
          method: "GET",
          headers: {"Authorization": sessionId}
          })
          .then(response => Promise.all([response, response.json()]))
          .then(([response, body]) => {
              if (response.ok) {
                console.log(body)
                setMandates(body)
                return
              } else {
                return response
              }
          })
          .then(function(object) {
              if(object != undefined) {
                  if(object.status === 401) {
                    Router.push('/login')
                  }
              }
          });

        //Get customer payments
       fetch("https://fathomless-temple-12276.herokuapp.com/gocardless/payments/"+pid, {
          method: "GET",
          headers: {"Authorization": sessionId}
          })
          .then(response => Promise.all([response, response.json()]))
          .then(([response, body]) => {
              if (response.ok) {
                setPayments(body)
                return
              } else {
                return response
              }
          })
          .then(function(object) {
              if(object != undefined) {
                  if(object.status === 401) {
                    Router.push('/login')
                  }
              }
          });

          //Get customer subscriptions
          fetch("https://fathomless-temple-12276.herokuapp.com/gocardless/subscriptions/"+pid, {
            method: "GET",
            headers: {"Authorization": sessionId}
            })
            .then(response => Promise.all([response, response.json()]))
            .then(([response, body]) => {
                if (response.ok) {
                  setSubscriptions(body)
                  console.log(body)
                  return
                } else {
                  return response
                }
            })
            .then(function(object) {
                if(object != undefined) {
                    if(object.status === 401) {
                      Router.push('/login')
                    }
                }
            });
        }, []);
   }

  getCustomerData()
  return (
    <div style={{ backgroundColor: '#edf2f9', paddingBottom: '50px'}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">BigCharge</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navbarLinks.map((navbar) => {
              return (
                <li className="nav-item">
                  <a className="nav-link" href={navbar.link}>{navbar.name}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
      <div className="container"> 
        <div className="row">
          <div className="col-12">
            <div className="card px-0 mt-5" style={{border:0, boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)', backgroundColor: '#f8f9fa'}}>
              <div className="card-body text-center">
               {customer && (
                <div>
                  <h5 className="card-title">{customer.first_name} {customer.last_name} <a href="#">({customer.email})</a></h5>
                  <h6 className="text-muted" style={{fontWeight: 300, fontSize: 13}}>Created on ({customer.create_date})</h6>
                </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card px-0 mt-3" style={{border:0, boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)', backgroundColor: '#f8f9fa'}}>
              <div className="card-body">
                <h5 className="card-title">Details</h5>
                <div className="row">
                  <div className="col-6">
                  <table className="table">
                    <tbody>
                      <tr style={{ fontSize: '12px'}}>
                        <th scope="row" style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0, paddingLeft: 0 }}>ID</th>
                        <td style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0}}>
                          {customer && (<span className="error"> {customer.id} </span>)}
                          </td>
                      </tr>
                      <tr style={{ fontSize: '12px'}}>
                        <th scope="row" style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0, paddingLeft: 0}}>Name</th>
                        <td style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0}}>{customer && (<span className="error"> {customer.first_name} {customer.last_name}</span>)}</td>
                      </tr>
                      <tr style={{ fontSize: '13px'}}>
                        <th scope="row" style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0, paddingLeft: 0}}>Language</th>
                        <td style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0}}>English</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  <div className="col-6">
                    <table className="table">
                      <tbody>
                        <tr style={{ fontSize: '12px'}}>
                          <th scope="row" style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0, paddingLeft: 0 }}>Billing Details</th>
                          <td style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0}}>{customer && (<span className="error"> {customer.address_line} </span>)}</td>
                        </tr>
                        <tr style={{ fontSize: '12px'}}>
                          <th scope="row" style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0, paddingLeft: 0}}>Billing Email</th>
                          <td style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0}}>{customer && (<span className="error"> {customer.email} </span>)}</td>
                        </tr>
                        <tr style={{ fontSize: '13px'}}>
                          <th scope="row" style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0, paddingLeft: 0}}>Phone</th>
                          <td style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0}}>{customer && (<span className="error"> {customer.phone} </span>)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card px-0 mt-3" style={{border:0, boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)', backgroundColor: '#f8f9fa'}}>
              <div className="card-body">
                <h5 className="card-title">Payment Methods</h5>
                <div className="jumbotron">

                {subscriptions &&
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Mandate</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Scheme</th>
                      <th scope="col">Status</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  
                    {mandates.map((mandate, index) => {
                      return (
                        <tr>
                          <td scope="col" style={{fontSize:'13px'}}>
                            {mandate.mandate_id}
                          </td>
                          <td scope="col" style={{fontSize:'13px'}}>
                            {mandate.created_at}
                          </td>
                          <td scope="col" style={{fontSize:'13px'}}>
                           {mandate.scheme} 
                          </td>
                          <td scope="col" style={{fontSize:'13px'}}><a href="#">{mandate.status}</a></td>
                          <td>
                          <Button style={{fontSize:'13px'}} variant="primary">
                                Add Payment
                          </Button>
                          </td>
                          <td>
                          <Button style={{fontSize:'13px'}} variant="primary">
                               Add Subscription
                          </Button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                }

               {!subscriptions &&
                  <p className="text-center">No payment methods linked to customer</p>
               }

                  <div className="row justify-content-center">
                  <button onClick={addBankAccount} className="btn btn-info mx-2">Add bank account</button>
                  <button className="btn btn-info mx-2">Add card</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card px-0 mt-3" style={{border:0, boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)', backgroundColor: '#f8f9fa'}}>
              <div className="card-body">
                <h5 className="card-title">Payments</h5>
                
                
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Mandate</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Products</th>
                      <th scope="col">Payment Method</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                    {payments && payments.map((payment, index) => {
                      return (
                        <tr>
                          <td scope="col" style={{fontSize:'13px'}}>
                            {payment.mandate}
                          </td>
                          <td scope="col" style={{fontSize:'13px'}}>
                            £{payment.amount/100} 
                          </td>
                          <td scope="col" style={{fontSize:'13px'}}>
                            Amazing products
                          </td>
                          <td scope="col" style={{fontSize:'13px'}}><a href="#">Direct Debit</a></td>
                          <td scope="col" style={{fontSize:'13px'}}>{payment.created_at}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="card px-0 mt-3" style={{border:0, boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)', backgroundColor: '#f8f9fa'}}>
              <div className="card-body">
                <h5 className="card-title">Subscriptions</h5>

                 <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Mandate</th>
                      <th scope="col">Interval</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">Next Payment Date</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                    {subscriptions && subscriptions.map((subscription, index) => {
                      return (
                        <tr>
                          <td scope="col" style={{fontSize:'13px'}}>
                            {subscription.mandate}
                          </td>
                          <td scope="col" style={{fontSize:'13px'}}>
                            {subscription.interval}
                          </td>
                          <td scope="col" style={{fontSize:'13px'}}>
                           £{subscription.amount/100} 
                          </td>
                          <td scope="col" style={{fontSize:'13px'}}><a href="#">{subscription.start_date}</a></td>
                          <td scope="col" style={{fontSize:'13px'}}><a href="#">{subscription.upcoming_payments[0].charge_date}</a></td>
                          <td scope="col" style={{fontSize:'13px'}}>{subscription.status}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>

                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}