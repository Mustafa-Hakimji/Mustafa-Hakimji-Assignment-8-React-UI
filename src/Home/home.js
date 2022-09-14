import React from 'react'
import axios from 'axios'
import Nav from './navbar'
import Wallpaper from './wallpaper'
import QuickSearchAndFilters from './quickSearchAndFilters'
import {API_Link} from '../properties'
// import PriceFilter from '../Filters/priceFilter'

// className Component
 class Home extends React.Component{
    constructor(props){
        
        super(props);
        this.state = {
            location : [],
            mealType:[],
            ListRes:[],
            updatedItems:[]
        }
    }

    componentDidMount(){
        axios(
            {
                method:'GET',
                url:`${API_Link}/city/getCity`,
                headers:{'Content-Type':'application/json'}
            }
        ).then(Response=>this.setState({location:Response.data})).catch()

        axios(
            {
                method:'GET',
                url:`${API_Link}/meals/getMeals`,
                headers:{'Content-Type':'application/json'}
            }
        ).then(Response=>this.setState({mealType:Response.data})).catch()

      
            axios(
                {
                    method:'GET',
                    url:`${API_Link}/restaurant/getRestaurants`,
                    headers:{'Content-Type':'application/json'}
        
                }
            ).then(Response=>this.setState({ListRes:Response.data,updatedItems:[...Response.data]})).catch()
        
    }

// Button Funcionality for filtering the Restaurants by Price 

filterPrice=(min_price)=>{
    const {ListRes}=this.state;
    let cloneList = [...ListRes];
    cloneList = cloneList.filter((item)=>{
        return item.min_price === min_price;
    })
    console.log(cloneList);
    this.setState({updatedItems:cloneList})

}
 

 // Button Functionality For filtering the Cisine By Meat Types 
 filterMenu=(cuisine)=>{
     const {ListRes} = this.state;
    let clonedListRes = [...ListRes];
    clonedListRes = clonedListRes.filter((item)=>{
    return item.cuisine === cuisine
     })
     console.log(clonedListRes);
     this.setState({updatedItems: clonedListRes});
 };
 filterAll=()=>{
    const {ListRes} = this.state
    let cloneList = [...ListRes]
    cloneList = cloneList.filter((item)=>{
        return item.cuisine
    })
    this.setState({updatedItems:cloneList})
 }


   

    render(){
        const {location, updatedItems,mealType}=this.state;
        
        
        return (           
            <>
            <Nav />
            <Wallpaper locationValues = {location}/>
            <QuickSearchAndFilters search = {updatedItems} filterMenu={this.filterMenu} mealType={mealType} filterPrice={this.filterPrice} filterAll={this.filterAll}/>
                     
            </>
           
        );
    }
}

export default  Home;