import React from "react";
import axios  from "axios";
import './styles/WallpaperStyle.css'
import {withRouter} from 'react-router-dom'
import {API_Link} from '../properties'



// Class component

class Wallpaper extends React.Component{
    constructor(props){
        super(props)
        this.state={
            restaurants:[],
            suggestions:[],
            searchText:''
        }
    }

// Over Here I have defined the Suggession Method 
handleLocationChange=(event)=>{
const locationName =event.target.value;
axios(
    {
        // I am calling the get restaurant by city API to get the suggestions through the city names
        method:'GET',
        url:`${API_Link}/restaurant/getRestaurantByCity?city=${locationName}`,
        headers:{'Content-Type':'application/json'}
    }
    // Over here I am setting the Response data as restaurants empty ARRAY which I have defined in the props
).then(Response=>this.setState({restaurants:Response.data})).catch()
}  

//Over here I am defining the handleRestaurantClick Method which will take me to the details page of the selected restaurant
handleRestaurantClick =(restaurantId)=>{
this.props.history.push(`/details?restaurant=${restaurantId._id}`)
}


// Over here I have defined the handle search method which will filter the list as per the city dropdown
handleSearch=(event)=>{
const {restaurants}=this.state;
const searchText = event.target.value;
let filteredList;
if(searchText === ""){
    filteredList =[];
}else{
    filteredList = restaurants.filter((item) => {
        return item.name.toLowerCase().includes(searchText.toLowerCase());
    })
}
this.setState({suggestions:filteredList,searchText:searchText});
}

// over here I have defined the Render suggestion method which will give me the sugestion against my search text box
renderSuggestions = () => {
    const { suggestions, searchText } = this.state;
    if (suggestions.length === 0 && searchText) {
      return (
        <ul>
          <li className="Nomatch">No Match found</li>
        </ul>
      )
    }
    return (
      <ul className="unorderedList" style={{ color: "yellow",textAlign:"center" }}>
        {suggestions.map((item, index) => {
          return <li key={index} onClick={() => this.handleRestaurantClick(item)} ><img src={`${item.image}`} alt="Myimg" className="resIcon" />{`${item.name}, ${item.city}`}</li>
        })}
      </ul>
    )
  }

    render(){
        const {locationValues}=this.props;
        return(
            <div id="carouselExampleSlidesOnly" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="./image/FINAL.jpg" class="MainPic" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h4 id="h4">E!</h4>
                    <h1 id="h1"> <b>ZOMATO</b></h1>
                    <form>
                        <div class="row">
                            <div class="col">
                                <select class="custom-select" id="validationCustom04" onChange={this.handleLocationChange} required>
                                    <option selected disabled value="">Select</option>
                                    {locationValues && locationValues.map((item)=>{
                                        return <option value={item.location_id}> {`${item.name},${item.city}`} </option>

                                    })}
                                    <option ></option>

                                  </select>
                            </div>
                            <div class="col">
        <input id="query" type="text" class="form-control" placeholder="Search for Reastaurent here" onChange={this.handleSearch}/>
        {this.renderSuggestions()}

                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
        )
    }
}

export default withRouter(Wallpaper);