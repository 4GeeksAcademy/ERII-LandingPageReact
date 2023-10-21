import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black text-bg-dark">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand text-white ms-5" href="#">Stoicism 101</a>

          <div className="d-flex me-4">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span id="menuBurger" className="text-light fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse me-auto" id="navbarNav">
              <ul className="navbar-nav me-5">
                <li className="nav-item">
                  <a className="nav-link text-light" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>


  );
};

export default Navbar;