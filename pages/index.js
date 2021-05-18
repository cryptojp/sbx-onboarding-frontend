import Head from 'next/head'

export default function Home() {
  const cards = [
    {stat: 329, title: "New Subscribers"},
    {stat: 329, title: "New Subscribers"},
    {stat: 329, title: "New Subscribers"},
  ]
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">BigCharge</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <h2 className="text-muted my-3">Overview</h2>
        <div className="row">
          {cards.map((card) => {
            return (
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">
                      {card.stat}
                    </p>
                    <p className="card-text">
                      {card.title}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
