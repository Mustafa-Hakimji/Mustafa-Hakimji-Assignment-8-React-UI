import axios from "axios";
import React from "react";
import {withRouter} from 'react-router-dom'

import './styles/Search.css'

// import './styles/Search.css'


class QuickSearchAndFilters extends React.Component{
    
        constructor(props){
        super(props)
        this.state={
            ListRes:[]
            
        }
}


    render(){
        
       const {search,filterMenu,filterAll,filterPrice}=this.props
       
          return(
<>
    {/* Heading of Quick Search */}
    <h1 className="mt-5 text-center main-heading ">Quick Search & Order by filters given below....</h1>
    <hr className="quickSearch"/>


{/* My Buttons For filter the Data according to the mealTypes given */}

<h1 className="mealTypeFilter">Filter Restaurants by Meal Types </h1><hr className="quickSearch"/>
    <div className="container d-flex justify-content-around">
<button type="button" class="btn btn-warning All" onClick={()=>filterMenu("Breakfast")} >Breakfast</button>
<button type="button" class="btn btn-warning All" onClick={()=>filterMenu("Lunch")}>Lunch</button>
<button type="button" class="btn btn-warning All" onClick={()=>filterMenu("Snacks")}>Snacks</button>
<button type="button" class="btn btn-warning All" onClick={()=>filterMenu("NightLife")}>Night Life</button>
<button type="button" class="btn btn-warning All" onClick={()=>filterMenu("Veg")}>Veg</button>
<button type="button" class="btn btn-warning All" onClick={()=>filterMenu("Non-Veg")}>Non-Veg</button>
<button type="button" class="btn btn-warning All" onClick={()=>filterMenu("Dinner")}>Dinner</button>
<button type="button" class="btn btn-warning All" onClick={()=>filterAll()}>All Cuisine's</button>
</div><hr className="quickSearch"/>
<hr/>
<h1 className="priceFilter">Filter Restaurants by its Price</h1><hr className="quickSearch"/>

<div className="container d-flex justify-content-around">
    
<button type="button" class="btn btn-success" onClick={()=>filterPrice("150")} >Start's Rs.150</button>
<button type="button" class="btn btn-success" onClick={()=>filterPrice("250")}>Start's Rs.250</button>
<button type="button" class="btn btn-success" onClick={()=>filterPrice("500")}>Start's Rs.500</button>
<button type="button" class="btn btn-success" onClick={()=>filterPrice("1000")}>Start's Rs.1000</button>
<button type="button" class="btn btn-danger" onClick={()=>filterPrice("1500")}>Start's Rs.1500</button>
<button type="button" class="btn btn-danger" onClick={()=>filterPrice("2000")}>Start's Rs.2000</button>
<button type="button" class="btn btn-danger" onClick={()=>filterPrice("2500")}>Start's Rs.2500</button>
<button type="button" class="btn btn-danger" onClick={()=>filterPrice("3000")} >Start's Rs.3000</button>
</div><hr className="quickSearch"/>



<div class="menu-items container-fluid mt-5">
    <div class="row">
        <div class="col-11 mx-auto">
            <div class="row my-1">
                
            
{
    search && search.map((item)=>{
               return(
                <div className="col-lg-6 col-xl-4 my-1 mr-0">
                    <div class=" row item-inside">

                    
                        <div className="col-12 col-md-12 col-lg-4 img-div">
                            <img src={item.image} alt="menuPic" className="img-fluid"/>

                        </div>

                        
<div className="div1 col-12 col-md-12 col-lg-8">
    <div className="mainTitle pt-4 pb-3">
        <h3 className="resName">{item.name}</h3>
        <h4>City = {item.city}</h4>
        <h4 className="MealType"><b>cuisine {item.cuisine}</b></h4>
    </div>
<div className="menu-price">
    <div className="price d-flex justify-content-around">
        <h5>Starting = Rs.{item.min_price}</h5>
        <a href="#"><button class="btn btn-dark btn-sm">Order</button></a>
 </div>
        <h5>serve={item.description}</h5>
</div>

                        </div>
                    </div>
                </div>

        )
    })
}       
                    </div>
                </div>
             </div>
        </div>
</>

        )
    }
}

    
export default QuickSearchAndFilters;