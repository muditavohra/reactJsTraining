
import {  NavLink } from 'react-router-dom'
 

function NavigationLink(){ 
    return(
    <header>
       
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"><NavLink to="/" exact={true}></NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"> <NavLink to="/login">Login</NavLink>&nbsp;</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" > <NavLink to="/register">Register</NavLink>&nbsp;</a>
        </li>

        <li class="nav-item">
          <a class="nav-link"> <NavLink to="/userdetails">UserDetails</NavLink>&nbsp;</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"> <NavLink to="/portfolio">Portfolio</NavLink>&nbsp;</a>
        </li>
        </ul>
       
    </div>
  </div>
</nav>





    </header>
)
}
export default NavigationLink


