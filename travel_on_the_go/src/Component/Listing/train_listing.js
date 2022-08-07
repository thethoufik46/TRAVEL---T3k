import React,{Component} from 'react'
import axios from 'axios';

import './flight_listing.css'
import TrainListingDisplay from './train_listingDisplay';
import Header from '../../Header'
import TrainCostFilter from '../filters/train_costfilter';
import TrainOtherFilter from '../filters/train_otherfilter';

const restUrl = "https://travel-api12.herokuapp.com/category"
const fromurl = "https://travel-api12.herokuapp.com/fromDestination";
const tourl = "https://travel-api12.herokuapp.com/toDestination_details/2?from="
//const serachurl ="https://travel-api12.herokuapp.com/flightsearch/1?from=NewDelhi&to=Chennai&passengers=4Adult";
const serachurl ="https://travel-api12.herokuapp.com/trainsearch/2";




class trainListing extends Component{
    constructor(props){
        super(props);
        this.state = {
            fromcity:'',
             flightsList: '',
             searchdata:'',
             searcharray1:'',
             searcharray2:'',
             searcharray3:'',
             searcharray4:'',
             searcharray5:''

        };
    }


    renderFromCity = (data) => {
      if(data){
          return data.map((item) => {
            //console.log("data",item)
          
              return(
              <option value={item.city} key={item.city}>{item.city}</option>
              )
          })
      }
   
  }

 

  

  handleFromCity = (event) => {
      let fromdest = event.target.value;
      console.log("fromdest",fromdest)
      fetch(`${tourl}${fromdest}`,{method:'GET'})
      .then((res) => res.json())
      .then((data) => {
          this.setState({tocity:data})
      })
  }


  handleToCity = (event) =>{
      let FlightId =event.target.value;
      this.props.history.push(`/details/${FlightId}`)
  }

    setDataPerFilter = (data) => {
      this.setState({flightsList:data})
  }



handleChange1 = (event) => {
    
   this.setState({searcharray1:event.target.value})
   console.log("from",this.state.searcharray1)
 
 
}

handleChange2 = (event) => {   
   this.setState({searcharray2:event.target.value})
   console.log("to",this.state.searcharray2)
  
 
}
handleChange3 = (event) => {   
   
   this.setState({searcharray3:event.target.value})

  
}
handleChange4 = (event) => {
  
   this.setState({searcharray4:event.target.value})


}
handleChange5 = (event) => {
 
   this.setState({searcharray5:event.target.value})
   console.log(this.state.searcharray5)


}

handleSubmit = () => {
  // if(this.props.location){
  //   let queryp = this.props.location.search;
  //   if(queryp){
  //     let from = queryp.split('?')[1].split('&')[0].split('=')[1]
  //     let to = queryp.split('?')[1].split('&')[1].split('=')[1]
  //     let passengers = queryp.split('?')[1].split('&')[2].split('=')[1]
     //}} 
     
    console.log("searchdata",this.state.searcharray1)
    
    fetch(`${serachurl}?from=${this.state.searcharray1}&to=${this.state.searcharray2}&class=${this.state.searcharray5}`,
    {method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        this.setState({searchdata:data})
    console.log("searchdata",this.state.searchdata)
    if(this.state.searchdata)
    {
      this.setState({flightsList:this.state.searchdata})
    }
  })

}

    render(){
        return(
            <>
            <Header/>
                {/* <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <h3>Filter</h3>
                            </center>
                        </div>
                        <FlightListingDisplay listData={this.state.flightsList}/>
                    
                    </div>
                </div> */}

          <div className="menu">
          <nav className="navbar  navbar" style={{backgroundColor: 'rgb(6, 6, 36)'}}>
         
            
            <div className="search">
              <div className= "row">
                <div className="col md 4">
                  <a className="navbar-brand" href="#">
                    <img src="../Image/logo.PNG" alt="travel" width="40" height="30" className="d-inline-block align-text-top"/>
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div className="col md 4">
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item me-2">
                        <a className="nav-link active" aria-current="page" href="#" style={{fontFamily: 'Impact',color: 'rgb(110, 73, 17)'}}>Travel on the Go</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="#" style={{float:'right'}}>Log In</a>
                      </li>
                      </ul>
                    </div>
                  </div>
            
  
              </div>
           

              <div className="row">
              
                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">                 
                      <select id="from" className="form-select" name="from"  onChange={this.handleChange1} aria-label="Example select with button addon">
                        <option >FROM...</option>
                        {this.renderFromCity(this.state.fromcity)}
                      </select>
                     
                    </div>
                  </div>
                </div>
               

                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">                 
                      <select  id="to"  className="form-select" name="to" onChange={this.handleChange2} aria-label="Example select with button addon">
                        <option selected>TO...</option>
                        {this.renderFromCity(this.state.fromcity)}
                       
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">
                    <label for="depart" style={{color:'white'}}>TRAVEL DATE</label>    
                    <input type="date" id="depart" name="depart" onChange={this.handleChange3}/> 
                               
                      
                    </div>
                  </div>
                </div>

              
                
                
                <div className="col md 2">
                  <div className="menuitem">
                  <span for="label" className="passengersandclasses" style={{color:'white'}}>PASSENGERS</span>
                  <input id="passengers" type="text" className="passenger"onChange={this.handleChange4}/>
                  </div>
                </div>
                <div className="col md 2">
                  <div className="menuitem">
                    <div className="input-group mb-3">                 
                      <select id="class" name= "class" onChange={this.handleChange5} className="form-select"  aria-label="Example select with button addon">
                        <option selected>CLASS...</option>
                        <option >1AC</option>
                        <option >2AC </option>
                        <option >3AC</option>
                        <option >Executive-Chair</option>
                        <option >Sleeper</option>
                       
                      </select>
                   
                    </div>
                  </div>
                </div>
               
                <div className="col md 2">
                  <div className="menuitem">                    
                    <button type="button" className="btn btn-primary" style={{borderRadius: '40%', fontWeight: 'bold',width:'60%'}} onClick={this.handleSubmit}  >SEARCH </button>                 
                    
                  </div>
                </div>  
                           
             
            
              
              </div>
            </div>
          </nav>
        </div>
          {/* <div className="row"> */}
                    <div className="maincontainer1" >
                        <div className="filter">
                            <center>
                                <h3>Filters</h3>
                            </center>
                            <TrainOtherFilter categoryid={this.props.match.params.category_id}
                            trainotherfilters={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <TrainCostFilter  categoryid={this.props.match.params.category_id}
                            traincostfilters={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                        </div>
                        <div className="filtercontent">
                            <h3 style={{fontWeight: 'bold',fontFamily:'georgia'}}>Trains available</h3>
                        
                            
                            <TrainListingDisplay listData={this.state.flightsList}/>
                    
                            
                        </div>
                       
                    </div>
                {/* </div> */}
            </>
        )
    }


    async componentDidMount(){
        let categoryid = this.props.match.params.category_id;
        console.log("catgeoryid",categoryid)
        let response = await axios.get(`${restUrl}/${categoryid}`)
        let fromdata = await axios.get(`${fromurl}`)
       
        
            this.setState({flightsList:response.data,fromcity:fromdata.data})
           
       
        

    }

  //   componentDidMount(){
  //     console.log("inside componentDidMount>>>")
  //     fetch(fromurl,{method:'GET'})
  //     .then((res) =>  res.json())
  //     .then((data) => {
  //         this.setState({fromcity:data})
  //     })
  // }
}


export default trainListing
