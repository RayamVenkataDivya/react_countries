import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return (
        <div>
           <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        
        <span class="fs-4">Simple header</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><Link to="/" class="nav-link active" aria-current="page">Home</Link></li>
        <li class="nav-item"><Link to="#" class="nav-link">Features</Link></li>
        <li class="nav-item"><Link to="/pricing" class="nav-link">Pricing</Link></li>
        <li class="nav-item"><Link to="/Countries" class="nav-link">Countries</Link></li>
        <li class="nav-item"><Link to="#" class="nav-link">About</Link></li>
      </ul>
    </header>
   
    
  </div> 
</div>
    )
}
export default Header;