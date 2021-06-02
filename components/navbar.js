export default function Navbar() {
  const navbarLinks = [
    {name: "Customers", link: "/customers"},
    {name: "Revenue", link: "/ho"},
    {name: "Integrations", link: "/integrations"},
    {name: "Payouts", link: "/payouts"}
  ]
  return (
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
  )
}