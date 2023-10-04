import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Fullstack</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
    //     <div className="container-fluid">
    //         <a className="navbar-brand">Fullstack</a>
    //         <li className="nav-item">
    //             <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    //         </li>
    //         <li className="nav-item">
    //             <Link className="nav-link" to="/product">Product</Link>
    //         </li>
    //         <li className="nav-item">
    //             <Link className="nav-link" to="/contact">Contact</Link>
    //         </li>
    //         <Link className="btn btn-outline-light" to="/add-employee" >Add Employee</Link>
    //     </div>
    // </nav>
  )
}
export default Navbar