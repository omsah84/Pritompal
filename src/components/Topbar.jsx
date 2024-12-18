export default function Topbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark"
        aria-label="Third navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pritom's kindom
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ outline: "none", boxShadow: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
              <li className="nav-item m-auto">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link" href="#">
                Skills
                </a>
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
