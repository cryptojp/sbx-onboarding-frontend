import { useRouter } from 'next/router'

export default function Customer({id}) {
  const navbarLinks = [
    {name: "Customers", link: "/customers"},
    {name: "Revenue", link: "/ho"},
    {name: "Integrations", link: "/integrations"}
  ]

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
        <div className="row">
          <div className="col-12">
            <div className="card px-0 mt-5" style={{border:0, boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)', backgroundColor: '#f8f9fa'}}>
              <div className="card-body text-center">
                <h5 className="card-title">Alistair Marshall <a href="#">(am@gc.com)</a></h5>
                <h6 className="text-muted" style={{fontWeight: 300, fontSize: 13}}>Created on Feb 02, 2020</h6>
                <h6 className="text-muted" style={{fontWeight: 300, fontSize: 13}}><strong>Total Orders:</strong> 21</h6>
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
                        <td style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0}}>0329902</td>
                      </tr>
                      <tr style={{ fontSize: '12px'}}>
                        <th scope="row" style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0, paddingLeft: 0}}>Name</th>
                        <td style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0}}>Ali</td>
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
                          <td style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0}}>12 Red Street, London, SE5 5SE</td>
                        </tr>
                        <tr style={{ fontSize: '12px'}}>
                          <th scope="row" style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0, paddingLeft: 0}}>Billing Email</th>
                          <td style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0}}>ali@gc.com</td>
                        </tr>
                        <tr style={{ fontSize: '13px'}}>
                          <th scope="row" style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0, paddingLeft: 0}}>Phone</th>
                          <td style={{ border: '0', fontSize: '13px', paddingTop: 0, paddingBottom: 0}}>678 999 8212</td>
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
                  <p className="text-center">No payment methods linked to customer</p>
                  <div className="row justify-content-center">
                  <button className="btn btn-primary mx-2">Add bank account</button>
                  <button className="btn btn-primary mx-2">Add card</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card px-0 mt-3" style={{border:0, boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)', backgroundColor: '#f8f9fa'}}>
              <div className="card-body">
                <h5 className="card-title">Orders</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Products</th>
                      <th scope="col">Payment Method</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1344, 23435, 43550, 53561].map((i, index) => {
                      return (
                        <tr>
                          <td scope="col" style={{fontSize:'13px'}}>
                            {i}
                          </td>
                          <td scope="col" style={{fontSize:'13px'}}>
                            £24.99 {index !== 0 ? <span className="badge badge-success">Succeeded</span> : <span className="badge badge-danger">Failed</span> }
                          </td>
                          <td scope="col" style={{fontSize:'13px'}}>
                            Amazing products
                          </td>
                          <td scope="col" style={{fontSize:'13px'}}><a href="#">Direct Debit</a></td>
                          <td scope="col" style={{fontSize:'13px'}}>05/0{4-index}/2021</td>
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