import axios from "axios";
import React from "react";
import {API_Link} from '../properties'
import '../Home/styles/details.css'
import queryString from 'query-string';


class Details extends React.Component{
    constructor(props){
        super(props)
        this.state={
            restaurants:{}
        }
    }


componentDidMount(){
    const qs = queryString.parse(this.props.location.search)
    const restaurantId = qs.restaurant;
    axios(
        {
            method:'GET',
            url:`${API_Link}/restaurant/getRestaurantById/${restaurantId}`,
            headers:{'Content-Type':'application/json'}
        }
    ).then(Response=>this.setState({restaurants:Response.data})).catch((Error)=>{console.log("Axios Error = ",Error)})
}


    render(){
        const {restaurants}= this.state
        return(
                    <div className="card mb-3 MainDiv">
  <img className="card-img-top detailIMG" src={restaurants.image} alt="Card image cap"/>
  <div className="card-body RestaurantDetails"><hr className="HRTAG1"/>
    <h1 className="card-title">Restaurant "<b className="RestaurantName">{restaurants.name}</b>"</h1><hr className="HRTAG1"/>
    <h2 className="card-text">Description  "<b className="RestaurantName">{restaurants.description}</b>"</h2><hr className="HRTAG1"/>
    <h1 className="card-text">Cuisine Type "<b className="CuisineType">{restaurants.cuisine}</b>"</h1><hr className="HRTAG1"/>
  </div>

  {/* Collapse Property of Bootstrap for Restaurants Details information */}
  <p>
  <a class="btn btn-warning Overview" type="button" data-toggle="collapse" data-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">Restaurant Overview</a>
  <button class="btn btn-primary Contact" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Restaurant Contact Details</button>
  <button class="btn btn-success BOTH" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Click here for BOTH</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body Button1 ">
<h1 className="About">About this place</h1><hr className="HRTAG"/>
<h2 className="cuisine">Cuisine we Serve:-</h2>
<h1 className="cuisineT">"{restaurants.cuisine}"</h1><hr className="HRTAG"/>
<h2 className="Price">Starting Price:-</h2>
<h2 className="PriceT">"R.s. {restaurants.min_price}"</h2><hr className="HRTAG"/>
<h3 className="Desc">{restaurants.description}</h3><hr className="HRTAG"/>
</div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body Button2">
      <h1 className="About">Contact Details of this Place</h1><hr className="HRTAG"/>
<h2 className="cuisine">Contact Number:-</h2>
<h1 className="cuisineT">"{restaurants.contact}"</h1><hr className="HRTAG"/>
<h2 className="Price">City Or Area:-</h2>
<h2 className="PriceT">"City {restaurants.city}"</h2><hr className="HRTAG"/>
<h3 className="Desc">At {restaurants.address}</h3>  <hr className="HRTAG"/>    
</div>
    </div>
  </div>
</div>
</div>



        )
    }
}


export default Details;