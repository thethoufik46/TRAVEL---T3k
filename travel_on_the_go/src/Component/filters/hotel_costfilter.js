import React,{Component} from 'react';
import axios from 'axios';
import hotelListing from '../Listing/hotel_listing';


const url = "https://travel-api12.herokuapp.com/filter_cost";

class hotel_costfilter extends Component {

    filterCost = (event) => {
        let categoryId = this.props.categoryid
        console.log("cost-filter:categoryid",categoryId)
        let cost = (event.target.value).split('-')
        console.log("cost",cost)
        let lprice = cost[0];
        let hprice = cost[1];
        let costUrl = ""
        if(event.target.value === ""){
            costUrl = `${url}/${categoryId}`
        }else{
            costUrl = `${url}/${categoryId}?hprice=${hprice}&lprice=${lprice}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.hotelcostfilters(res.data)})

    }
    render(){
        return(
            <> <hr/>
            <br/>
                <center><h5>Cost Filter</h5></center>
                <div style={{marginLeft:'15%'}} onChange={this.filterCost}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000-3000" name="cuisine"/>1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001-5000" name="cuisine"/>3001-5000
                    </label>
                    <label className="radio">
                        <input type="radio" value="5001-7000" name="cuisine"/>5001-7000
                    </label>
                    <label className="radio">
                        <input type="radio" value="7001-8000" name="cuisine"/>7001-8000
                    </label>
                    <label className="radio">
                        <input type="radio" value="8001-15000" name="cuisine"/>8001-15000
                    </label>
                </div>
            </>
        )
    }
}


export default hotel_costfilter