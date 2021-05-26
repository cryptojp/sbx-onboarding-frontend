import React, {useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Router from 'next/router'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
  
export default function Customers(){
  const navbarLinks = [
    {name: "Customers", link: "/customers"},
    {name: "Revenue", link: "/ho"},
    {name: "Integrations", link: "/integrations"},
  ]

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function includesNull(obj) {
    for (var key in obj) {
        if (obj[key] === null || obj[key] === "")
            return true;
    }

    return false;
  }

  const [customers, setCustomers] = useState('');
  const getCustomers = async event => {    
    useEffect(() => {
        const sessionId = localStorage.getItem("sessionId");  
        if (sessionId == null) {
            Router.push('/login')
        }

        const res = fetch("https://fathomless-temple-12276.herokuapp.com/customers", {
            method: "GET",
            headers: {"Authorization": sessionId}
        })
        .then(response => Promise.all([response, response.json()]))
        .then(([response, body]) => {
            if (response.ok) {
               setCustomers(body)
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

   const [errorMessage, setErrorMessage] = useState('');
   const addCustomer = async event => {
    event.preventDefault()

    let obj = {
      "email" :  event.target.email.value,
      "first_name" : event.target.first_name.value,
      "last_name" : event.target.last_name.value,
      "phone" : event.target.phone.value,
      "currency" : "GBP",
      "company_name" : event.target.company_name.value,
      "address_line" : event.target.address_line.value,
      "city" : event.target.city.value,
      "postal_code" : event.target.postal_code.value
   }

   if(includesNull(obj) == true) {
       setErrorMessage("Please complete form")
       return;
   }

   const sessionId = localStorage.getItem("sessionId");      
   const res = await fetch("https://fathomless-temple-12276.herokuapp.com/customer", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {"Authorization": sessionId}
    })
    .then(response => Promise.all([response, response.json()]))
    .then(([response, body]) => {
        if (response.ok) {
            window.location.reload(false)
           return
        } else {
           return response
        }
    })
    .then(function(object) {
        if(object != undefined) {
            if(object.status === 401) {
               Router.push('/login')
               return
            }

            setErrorMessage(object.message)
            return
        }
    });
  }

  //getCustomers();
  return (
    <div id="root" style={{ backgroundColor: '#edf2f9', height: '100vh'}}>
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

      <div className="col-3 mb-3" >
            <div className="flex justify-content-center" style={{ marginTop: 50, marginBottom: 50, marginLeft: -200 }}>
                <div className="text-center">
                    <h5 className="card-title"> </h5>
                </div>

                <div className="text-center">
                   <Button variant="primary" onClick={handleShow}>
                      Add Customer
                    </Button>
                </div>
            </div>

          </div>

          <table className="table" style={{ width: 1200, marginTop: 50, marginLeft: 50}}>
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Company Name</th>
                <th></th>
                </tr>
            </thead>
            <tbody id={'customers'}>
            {customers && customers.map(function(customer, key){
                    return(<tr key={key}>
                        <th scope="row">{customer.id}</th>
                        <td>{customer.first_name}</td>
                        <td>{customer.last_name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.company_name}</td>
                        <td><a href={'/customer/' + customer.id}>View Customer</a></td>
                  </tr>);                                        
                    })
                  }
            </tbody>
        </table>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Customer</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <form type="POST" onSubmit={addCustomer} style={{ marginBottom: '20px' }}>
                <Form.Group  style={{ borderRadius: '0px' }}>
                <Form.Control type="text" name="first_name" placeholder="Enter First Name" style={{ fontSize: 14, borderRadius: '0px' }}/>
                </Form.Group>

                <Form.Group style={{ borderRadius: '0px' }}>
                <Form.Control type="text" name="last_name" placeholder="Enter Last Name" style={{ fontSize: 14, borderRadius: '0px' }} />
                </Form.Group>


                <Form.Group controlId="formBasicEmail" style={{ borderRadius: '0px' }}>
                <Form.Control type="email" name="email" placeholder="Enter email" style={{ fontSize: 14, borderRadius: '0px' }} />
                </Form.Group>

                <Form.Group style={{ borderRadius: '0px' }}>
                <Form.Control type="text" name="phone" placeholder="Enter phone" style={{ fontSize: 14, borderRadius: '0px' }} />
                </Form.Group>

                <Form.Group style={{ borderRadius: '0px' }}>
                <Form.Control type="text" name="company_name" placeholder="Enter company name" style={{ fontSize: 14, borderRadius: '0px' }} />
                </Form.Group>
                
                <Form.Group style={{ borderRadius: '0px' }}>
                <Form.Control type="text" name="address_line" placeholder="Enter address line" style={{ fontSize: 14, borderRadius: '0px' }} />
                </Form.Group>

                <Form.Group style={{ borderRadius: '0px' }}>
                <Form.Control type="text" name="city" placeholder="Enter city" style={{ fontSize: 14, borderRadius: '0px' }} />
                </Form.Group>

                <Form.Group style={{ borderRadius: '0px' }}>
                <Form.Control type="text" name="postal_code" placeholder="Enter postal code" style={{ fontSize: 14, borderRadius: '0px' }} />
                </Form.Group>
                <Button
                variant="success"
                type="submit"
                block={true}
                style={{ borderRadius: '5px', padding: '10px', fontSize: '15px'}}
                > Submit
                </Button>
            </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            
            </Modal.Footer>
        </Modal>
    </div>
  )
}

