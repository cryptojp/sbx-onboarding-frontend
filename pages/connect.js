import React, {useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Router from 'next/router'
  
export default function Connect(){
  const navbarLinks = [
    {name: "Customers", link: "/customers"},
    {name: "Revenue", link: "/ho"},
    {name: "Integrations", link: "/integrations"},
  ]

  const [message, setMessage] = useState("Completing Authorization With Gocardless");
  
  const completeAuthorization = async event => {    
    useEffect(() => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let code = params.get('code');

        if (code === null || code == undefined) {
            Router.push('/')
        }
        
        const sessionId = localStorage.getItem("sessionId");  
        if (sessionId == null) {
            Router.push('/login')
        }

        const res = fetch("https://fathomless-temple-12276.herokuapp.com/gocardless/connect/"+code, {
            method: "GET",
            headers: {"Authorization": sessionId}
        })
        .then(response => Promise.all([response, response.json()]))
        .then(([response, body]) => {
            if (response.ok) {
               setMessage("Completed Authorization with Gocardless")
               return
            } else {
               return body
            }
        })
        .then(function(object) {
            if(object != undefined) {
                if(object.status === 401) {
                   Router.push('/login')
                }

                setMessage(object.message)
                return
            }
        });
    }, []);
   }

  completeAuthorization();
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

      <div className="col-3 mb-3" style={{ width: 1200, marginTop: 50, marginLeft: 50}}>
            <div className="card flex justify-content-center" style={{boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)'}}>
                <div className="card-body text-center">
                <p className="card-text text-small text-muted">
                    {message}
                </p>
                </div>
            </div>
        </div>

    </div>
  )
}

