import { useState } from "react";

const baseUrl = "https://fathomless-temple-12276.herokuapp.com/";

export default function Integrations() {
  const [isLoading, setIsLoading] = useState(false);
  const integrationsTabs = [
    {name: "All", icon: ""},
    {name: "Payment", icon: ""},
    {name: "Accounting", icon: ""},
    {name: "Sales", icon: ""},
    {name: "Productivity", icon: ""},
  ]
  const navbarLinks = [
    {name: "Customers", link: "/ho"},
    {name: "Revenue", link: "/ho"},
    {name: "Integrations", link: "/integrations"},


  ]
  const integrations = [
    {name: "GoCardless", description: "Manage and collect Direct Debits from your customers", image: "https://jotformapps.s3.amazonaws.com/156311755883146450838_gocardless.png", isPreferred: true},
    {name: "Stripe", description: "Accepted card payments online", image: "https://jotformapps.s3.amazonaws.com/156362680544445564115_Stripe.png", isPreferred: true},
    {name: "PayPal", description: "Allow your customers to checkout via PayPal", image: "https://jotformapps.s3.amazonaws.com/148194369076432851122_paypal_2x.png"},
    {name: "Braintree", description: "Accepted card payments online",  image: "https://jotformapps.s3.amazonaws.com/148150324233240513136_braintree_2x.png"},
    
    {name: "Xero", description: "Manage you business finances", image: "https://upload.wikimedia.org/wikipedia/en/archive/9/9f/20171204173437%21Xero_software_logo.svg"},
    {name: "Checkout", description: "Integrate your checkout experience", image: "https://lever-client-logos.s3-us-west-2.amazonaws.com/98f56fb1-6a30-479d-92da-87b5dc8c95a7-1592296941989.png"},
    {name: "Ayden", description: "Accepted card payments online", image: "https://res.cloudinary.com/practicaldev/image/fetch/s--mKSV67Zo--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/2288/2bc231f0-951a-4eeb-8dfa-0ba1ce108adc.jpg"},
    {name: "Quickbooks", description: "Manage you business finances", image: "https://lslcpas.com/wp-content/uploads/2021/04/logo-qbo.png"},
  ]

  const changeTab = (e) => console.log(e);

  const beginIntegration = (name) => {
    if (name !== "GoCardless"){
      alert(name + " integration not yet complete");
      return;
    }

    let obj = {
      "first_name" : "Peters",
      "last_name" : "Joe",
      "email" : "joepeteres@gmail.com",
      "password" : "beatbox",
      "company_name" : "The Best Ever"
  }

    setIsLoading(true);
    fetch(baseUrl + "login", {
      method: "POST",
      body: JSON.stringify(obj),
    })
    .then(response => response.json())
    .then(data => {
      let sessionId = data["session_id"];
      console.log(sessionId)
      fetch(baseUrl + "/gocardless/authorize/signup", {
        method: "GET",
        headers: {"Authorization": sessionId},
        redirect: 'follow'
      })
        .then(response => response.json())
        .then(data => console.log(data));
    });


    
  }

  return (
    <div style={{ backgroundColor: '#edf2f9', height: '100vh'}}>
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
      <div className="jumbotron bg-white text-center mt-5">
        <h1 className="display-4">Connect to your apps</h1>
        <p className="lead">
          Choose from a range of smart integrations that allow you to connect your SuperCharger app with all your key products and services, from your accountancy software to your payments platform.
        </p>
      </div>
      <ul className="nav nav-pills justify-content-center mb-3">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        {integrationsTabs.map((tab) => {
          return (
            <li key={tab.name} onClick={changeTab} className="nav-item">
              <a className="nav-link" href="#">{tab.name}</a>
            </li>
          )
        })}
      </ul>
      <div className="row">
        {isLoading ?
          <div className="col text-center">
            <div className="spinner-border text-secondary my-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          :
          integrations.map((integration) => {
            return(
              <div className="col-3 mb-3" key={integration.name}>
                <div className="card flex justify-content-center" style={{boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)'}}>
                  <a href="#" onClick={() => beginIntegration(integration.name)}>
                    <img className="card-img-top " src={integration.image} alt="Card image cap" style={{width: "75px", margin: "auto",  display: "block"}} />
                  </a>
                  <div className="card-body text-center">
                    <h5 className="card-title"> {integration.name} {integration.isPreferred && <span style={{size: "10px", borderRadius: 0}} className="badge badge-warning">Preferred</span>}</h5>
                    <p className="card-text text-small text-muted">
                      {integration.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    </div>
  )
}