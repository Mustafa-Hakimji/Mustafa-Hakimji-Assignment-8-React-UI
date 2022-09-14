import React from 'react'
import axios from 'axios'

// className Component
 class Nav extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">ZOMATO | MUSTAFA</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
     
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle navbar-brand" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select Meal Type
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Breakfast</a>
          <a class="dropdown-item" href="#">Lunch</a>
          <a class="dropdown-item" href="#">Snacks</a>
          <a class="dropdown-item" href="#">Dinner</a>
          <a class="dropdown-item" href="#">Night Life</a>

          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Veg-Meals</a>
          <a class="dropdown-item" href="#">Non-Veg Meals</a>

        </div>
      </li>
     
    </ul>
    <div class="mx-3">
                <button class="btn btn-success" data-toggle="modal" data-target="#LoginModal">Login</button>
                <button class="btn btn-primary" data-toggle="modal" data-target="#SignUpModal">Sign Up</button>
            </div>
  </div>
</nav>

    




        );
    }
}

export default  Nav;