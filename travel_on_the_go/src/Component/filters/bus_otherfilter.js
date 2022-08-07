import React,{Component} from 'react'
import axios from 'axios'

const url1 = "https://travel-api12.herokuapp.com/filter_class_hrs";
const url2 = "https://travel-api12.herokuapp.com/filter";
const busurl ="https://travel-api12.herokuapp.com/category";


class busOtherFilter extends Component{

    filterClass = (event) =>{
        console.log("event",event.target.value)
      
        let Class = event.target.value;
        console.log("class",Class)
        let categoryId = this.props.categoryid;
        let cuisineUrl =""
        if(event.target.value === "")
        {
            cuisineUrl = `${busurl}/${categoryId}`
        }
        else{
            cuisineUrl =  `${url1}/${categoryId}?class=${Class}`
            console.log(cuisineUrl)
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.busotherfilters(res.data)})
    }


    // filterTrainSeatAvailablility = (event) =>{
       
      
    //     let seat = event.target.value;

    //     let categoryId = this.props.categoryid;
    //     let cuisineUrl =""
    //     if(event.target.value === "")
    //     {
    //         cuisineUrl = `${trainurl}/${categoryId}`
    //     }
    //     else{
    //         cuisineUrl =  `${url}/${categoryId}?seat_avalilablity=${seat}`
    //         console.log(cuisineUrl)
    //     }
    //     axios.get(cuisineUrl)
    //     .then((res) => {this.props.trainotherfilters(res.data)})
    // }

    filterBusHrs = (event) =>{
       
      
        let hours = event.target.value;

        let categoryId = this.props.categoryid;
        let cuisineUrl =""
        if(event.target.value === "")
        {
            cuisineUrl = `${busurl}/${categoryId}`
        }
        else{
            cuisineUrl =  `${url1}/${categoryId}?hours=${hours}`
            console.log(cuisineUrl)
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.busotherfilters(res.data)})
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
           
             
              <div className="form-check" onChange={this.filterClass}>
                <input className="form-check-input" type="checkbox" value="AC_sleeper" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                  AC_Sleeper
                </label>              
              </div>
              <div className="form-check" onChange={this.filterBusHrs}>
                <input className="form-check-input" type="checkbox" value="6hrs_30min" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                  6 hrs
                </label>              
              </div>
             
            <br/>
          <div className="airlinefilter"   >
            <h5>Journey Types</h5>
            <hr/>
              <div className="form-check" >
              <input className="form-check-input" type="radio" name="flexRadioDefault" value="AC_sleeper" id="flexRadioDefault1" onChange={this.filterClass}/>
              <label className="form-check-label" for="flexRadioDefault1">
                AC_Sleeper
                </label>              
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="Non_AC_sleeper" id="flexRadioDefault2" onChange={this.filterClass}/>
                <label className="form-check-label" for="flexRadioDefault2">
                Non_AC_sleeper
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="AC_semi_sleeper" id="flexRadioDefault3" onChange={this.filterClass}/>
                <label className="form-check-label" for="flexRadioDefault3">
                AC_semi_sleeper
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault"  value="AC_seater" id="flexRadioDefault4" onChange={this.filterClass}/>
                <label className="form-check-label" for="flexRadioDefault4">
                AC_seater
                </label>              
              </div>
              <div className="form-check" >
                <input className="form-check-input" type="radio"  name="flexRadioDefault" value="Non_AC_seater" id="flexRadioDefault5" onChange={this.filterClass}/>
                <label className="form-check-label" for="flexRadioDefault5">
                 Non_AC_seater
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

export default busOtherFilter