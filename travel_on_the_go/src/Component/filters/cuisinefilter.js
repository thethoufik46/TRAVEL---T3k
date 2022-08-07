import React,{Component} from 'react'
import axios from 'axios'

const url = "https://travel-api12.herokuapp.com/filter";


class CuisineFilter extends Component{

    filterCuisine = (event) =>{
        console.log("event",event.target.value)
      
        let stops = event.target.value;
        console.log("stops",stops)
        let categoryId = this.props.categoryid;
        let cuisineUrl =""
        if(event.target.value === "")
        {
            cuisineUrl = `${url}/${categoryId}`
        }
        else{
            cuisineUrl =  `${url}/${categoryId}?stop=${stops}`
            console.log(cuisineUrl)
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.restPerCuisine(res.data)})
    }


    filterFlightsWithName = (event) =>{
       
      
        let flightName = event.target.value;

        let categoryId = this.props.categoryid;
        let cuisineUrl =""
        if(event.target.value === "")
        {
            cuisineUrl = `${url}/${categoryId}`
        }
        else{
            cuisineUrl =  `${url}/${categoryId}?name=${flightName}`
            console.log(cuisineUrl)
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.restPerCuisine(res.data)})
    }

    filterAirlines = (event) =>{
       
      
        let flightName = event.target.value;

        let categoryId = this.props.categoryid;
        let cuisineUrl =""
        if(event.target.value === "")
        {
            cuisineUrl = `${url}/${categoryId}`
        }
        else{
            cuisineUrl =  `${url}/${categoryId}?name=${flightName}`
            console.log(cuisineUrl)
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.restPerCuisine(res.data)})
    }

    // filterFlights = (event) =>{
       
      
    //     let flightName = event.target.value;
    //     let value= (event.target.value).split('-')
    //     let stop = value[0];
    //     let name= value[1];
    //     let categoryId = this.props.categoryid;
    //     let cuisineUrl =""
    //     if(event.target.value === "")
    //     {
    //         cuisineUrl = `${url}/${categoryId}`
    //     }
    //     else if(name !=""){
    //         cuisineUrl =  `${url}/${categoryId}?name=${name}`
    //         console.log(cuisineUrl)
    //     }
    //     else if(stop !=""){
    //         cuisineUrl =  `${url}/${categoryId}?stop=${stop}`
    //         console.log(cuisineUrl)
    //     }
    //     else{
    //         cuisineUrl =  `${url}/${categoryId}?stop=${stop}&name=${name}`
    //         console.log(cuisineUrl)
    //     }
    //     axios.get(cuisineUrl)
    //     .then((res) => {this.props.restPerCuisine(res.data)})
    // }

    render(){
        return(
            <>
        
                {/* <div style={{marginLeft:'15%'}} onChange={this.filterCuisine}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine"/>North Indian
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="cuisine"/>South Indian
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="cuisine"/>Chinese
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="cuisine"/>Fast Food
                    </label>
                    <label className="radio">
                        <input type="radio" value="5" name="cuisine"/>Street Food
                    </label>
                </div> */}
        <div className="popularfilter" style={{marginLeft:'15%'}}>
          <hr/>
          <br/>
                <h5>Popular Filters</h5>
           
             
              <div className="form-check" onChange={this.filterCuisine}>
                <input className="form-check-input" type="checkbox" value="Non-stop" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                  Non Stop
                </label>              
              </div>
              <div className="form-check" onChange={this.filterFlightsWithName}>
                <input className="form-check-input" type="checkbox" value="Indigo" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                  Indigo
                </label>              
              </div>
             
            <br/>
          <div className="airlinefilter"   >
            <h5>Airlines</h5>
            <hr/>
              <div className="form-check" >
              <input className="form-check-input" type="radio" name="flexRadioDefault" value="Indigo" id="flexRadioDefault1" onChange={this.filterAirlines}/>
              <label className="form-check-label" for="flexRadioDefault1">
                 Indigo
                </label>              
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="Spicejet" id="flexRadioDefault2" onChange={this.filterAirlines}/>
                <label className="form-check-label" for="flexRadioDefault2">
                  SpiceJet
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="Vistara" id="flexRadioDefault3" onChange={this.filterAirlines}/>
                <label className="form-check-label" for="flexRadioDefault3">
                  Vistara
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault"  value="AirIndia" id="flexRadioDefault4" onChange={this.filterAirlines}/>
                <label className="form-check-label" for="flexRadioDefault4">
                  Air India
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="Air Asia" id="flexRadioDefault5" onChange={this.filterAirlines}/>
                <label className="form-check-label" for="flexRadioDefault5">
                  Air Asia
                </label>              
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="GoFirst" id="flexRadioDefault6" onChange={this.filterAirlines}/>
                <label className="form-check-label" for="flexRadioDefault6">
                  Go First
                </label>              
              </div>
                {/* <div class="form-check" onChange={this.filterAirlines}>
                <input class="form-check-input" type="checkbox" value="Indigo" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                 Indigo
                </label>              
              </div>
              <div class="form-check" onChange={this.filterAirlines}>
                <input class="form-check-input" type="checkbox" value="Spicejet" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  SpiceJet
                </label>              
              </div>
              <div class="form-check" onChange={this.filterAirlines}>
                <input class="form-check-input" type="checkbox" value="Vistara" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Vistara
                </label>              
              </div>
              <div class="form-check" onChange={this.filterAirlines}>
                <input class="form-check-input" type="checkbox" value="AirIndia" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Air India
                </label>              
              </div>
              <div class="form-check" onChange={this.filterAirlines}>
                <input class="form-check-input" type="checkbox" value="AirAsia" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Air Asia
                </label>              
              </div>
              <div class="form-check" onChange={this.filterAirlines}>
                <input class="form-check-input" type="checkbox" value="GoFirst" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                  Go First
                </label>              
              </div> */}

             </div>
            </div>

            </>
        )
    }
}

export default CuisineFilter