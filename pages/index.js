import Head from 'next/head'

export default function Home() {
  const navbarLinks = [
    {name: "Customers", link: "/ho"},
    {name: "Revenue", link: "/ho"},
    {name: "Integrations", link: "/integrations"},


  ]
  const cards = [
    {stat: "3294", title: "New Subscribers", change: 5.6, info: "since last month"},
    {stat: "£ 103,507", title: "Monthly Recurring Revenue", change: -12.6, info: "since last month"},
    {stat: "164", title: "Churned Customers", change: + 0.6, info: "since last month"},
  ]

  const tables = [
    { title: "New Customer", 
      headings: ["Name", "Email", "Subscription Amount"], 
      data: [["Itachi", "it@gmail.com", "£25.99"], ["Lebron", "lbj@gmail.com", "£17.99"], ["Boris", "bj@gmail.com", "£25.99"], ["Headie", "1@gmail.com", "£12.99"], ["Khabib", "khabib@gmail.com", "£25.99"]] ,
    },
    {title: "Failed Payments Customer", headings: ["Customer Id", "Contact", "Failed On"],
    data: [["29385", "it@gmail.com", "03/05"], ["32356", "lbj@gmail.com", "03/05"], ["56543", "mm@gmail.com", "02/05"], ["445674", "kdb@gmail.com", "02/05"], ["2565", "khabib@gmail.com", "30/04"]] ,
    },
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
        <div className="row my-5">
          {cards.map((card) => {
            return (
              <div className="col">
                <div className="card text-center" style={{boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)'}}>
                  <div className="card-header pb-0" style={{backgroundColor: "#fff", borderWidth: 0, color: '#5e6e82', fontSize: 14}}>
                    {card.title}
                  </div>
                  <div className="card-body">
                    <div className="mb-1">
                      <span style={{ fontWeight: 800, color: '#202020', fontSize: '24px'}}>{card.stat}</span>
                    </div>
                    <div style={{ fontSize: '12px'}}>
                      <span className={card.change > 0 ? 'text-success' : 'text-danger'  } >{card.change} % change </span>
                      <span classNAme="text-muted text-sm">{card.info}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="row">
          {tables.map((table) => {
            return (
              <div className="col">
                <table className="table" style={{ boxShadow: '0 7px 14px 0 rgb(65 69 88 / 10%), 0 3px 6px 0 rgb(0 0 0 / 7%)'}}>
                  <thead className="thead">
                    <tr style={{ backgroundColor: 'white', fontSize: '14px'}}>
                      {table.headings.map((heading) => {
                        return (
                          <th scope="col">{heading}</th>
                        )
                      })
                      }
                    </tr>
                  </thead>
                  <tbody>
                    {table.data.map((row) => {
                      return (
                        <tr>
                          {row.map((c) =>
                            <th style={{fontWeight: 300, backgroundColor: 'white', fontSize: '12px'}} className="font-weight-400">{c}</th>
                          )}
                        </tr>
                      )
                    })
                    }
                    <tr>
                      <th colSpan={3} style={{fontWeight: 300, backgroundColor: 'white', textDecoration: 'underline'}}>
                        <a href="#">View all <i class="fas fa-long-arrow-alt-right"></i></a>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
