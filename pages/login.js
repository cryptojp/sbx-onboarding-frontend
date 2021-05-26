import {Container, Row, Col, Navbar, Image} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Router from 'next/router'

const backgroundImg = "https://cdn.dribbble.com/users/1633085/screenshots/6697520/shot_4x.jpg";


function Login(){
  const [errorMessage, setErrorMessage] = useState('');

  const loginUser = async event => {
    event.preventDefault()

    let obj = {
      "email" : event.target.email.value,
      "password" : event.target.password.value
  }


  const res = await fetch("https://fathomless-temple-12276.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(obj),
    })
    .then(response => Promise.all([response.ok, response.json()]))
    .then(([responseOk, body]) => {
      if (responseOk) {
        window.localStorage.setItem("sessionId", body['session_id'])
        Router.push('/')
        return
      } else {
        return body
      }
    })
    .then(function(object) {
      if(object != undefined) {
        setErrorMessage(object.message)
      }
      
    });
  }

  return (
    <div style={{ backgroundColor: 'white', padding: '40px', marginTop: '70px', border: '1px solid #e8e8e8', boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)' }}>
      <Image width={495} src="https://chagency.co.uk/blog/wp-content/uploads/2018/12/coloured-logo-review-saas-company-1024x421.jpg" rounded />
      <p className="text-center mb-5">Log in to your account</p>
      {errorMessage && (
        <p className="error"> {errorMessage} </p>
      )}
      <form type="POST" onSubmit={loginUser} style={{ marginBottom: '20px' }}>
        <Form.Group controlId="formBasicEmail" style={{ borderRadius: '0px' }}>
          <Form.Control type="email" name="email" placeholder="Enter email" style={{ fontSize: 14, borderRadius: '0px' }} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" style={{ marginBottom: '30px' }}>
          <Form.Control type="password" name="password" placeholder="Password" style={{ fontSize: 14, borderRadius: '0px' }} />
        </Form.Group>
        <Button
          variant="success"
          type="submit"
          block={true}
          style={{ borderRadius: '5px', padding: '10px', fontSize: '15px'}}
        > Login
        </Button>
      </form>
      <div className='text-center'><a className='text-muted' href="/sign-up">Forgot your password?</a></div>
    </div>
  )
}

function Page() {
  return (
    <div
      style={{  
        backgroundColor: '#edf2f9' 
      }}
    >
    <Container style={{ height: '100vh' }}>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} sm={{ size: 6, offset: 3 }} style={{ marginTop: 50 }}>
          <Login/>
        </Col>
      </Row>
    </Container>
    </div>

  )
}

export default Page;