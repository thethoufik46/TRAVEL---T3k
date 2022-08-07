import React,{Component} from 'react';

import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './details.css';
import Header from '../../Header';



const reviewurl ="https://travel-api12.herokuapp.com/reviewdetail/2?id="

class trainDetails extends Component {
    constructor(props) {
        super(props)

        this.state={
            reviewdetails:'',
            total:''
        }
    }



    render(){
        let {reviewdetails}= this.state;
        console.log("deatils",reviewdetails)
        console.log("deatilsprice",reviewdetails.price)
        return(
            <>
            <Header/>
                <div className="maincontainer2">  
                        <div className="heading">
                        
                            <h2 style={{marginLeft:'5%',paddingTop:'1%'}}><b>Review your booking</b></h2>
                        
                        </div>
                        <div className="filter2">
                        <h4><b>Fare Summary</b></h4>
                        <br/>
                        <div id="fare">

                        <div className="row">
                            <div className="col md 2">
                            Base Fares 
                            
                            </div>
                            <div className="col md 2">
                            Rs.{reviewdetails.price}
                            
                            </div>              
                                        
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col md 2">
                                Catering service charge 
                            
                            </div>
                            <div className="col md 2">
                                Rs. 275
                                
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                        <div className="col md 2">
                                Tax
                        </div>
                            <div className="col md 2">
                            Rs. 45      
                            </div>
                            </div>
                            <br/>
                            <div className="row">
                            <div className="col md 2">
                                Total Amount
                            
                            </div>
                            <div className="col md 2">
                                Rs.{
                                    
                                    this.state.total = reviewdetails.price+275+45
                                }
                              
                               
                                
                            </div>
                            </div>
                            </div>       
                            
                                            

                            
                            </div>                 
                            
                        
                        </div>
                        
                    

            <div className="filtercontent2">
    
              
              <div id="display">
                     <div className="card w-100">
                        <div className="card-body">
                           
                         <hr/>
                        <h4 className="card-title"><b>{reviewdetails.name}</b></h4>
                          <h6 style={{float:'right'}}><b>{reviewdetails.class} </b></h6>
                          <p className="card-text">
                          
                                <div className="row">
                                    
                              
                                <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                        
                                  {reviewdetails.train_no} | departs on :{reviewdetails.departs_on}                   
                     
                                              
                                </div>
                               
                                </div>
                             <br/>
                            <div className="row">
                             
                              <div className="col md 2">
                                
                              {reviewdetails.departTime}                   
                             ---
                              {reviewdetails.departstation} | {reviewdetails.from}
                           
                             
                              
                            </div>
                            </div>
                            
                            
                            
                            <div className="row">
                             
                              <div className="col md 2">
                                
                              {reviewdetails.returnTime}                   
                             
                                ---
                              {reviewdetails.returnstation} |{reviewdetails.to}
                           
                             
                              
                            </div>
                            </div>
                          </p>
                         
                          <div className="row">
                          <div className="col md 2">
                            <button onclick="document.location='../Review_reviewdetails/review.html'" className="btn btn-primary" type="button"  style={{float:'left'}}>
                            Proceed to payment
                            </button>
                          </div>
                          <div>
                          
                         
                          </div>
                          </div>
                         
                           
                            <div className="card w-100" style={{backgroundColor:'rgb(239 230 230)'}}>
                            <div className="card-body">
                                 <p className="card-text">
                                <div className="row">
                                 
                                  <div className="col md 2">
                                    
                                  {reviewdetails.departTime}                   
                                  </div>
                                  <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                    
                                  {reviewdetails.hours} 
                                  </div>
                                  <div className="col md 2">
                                 
                                 {reviewdetails.returnTime}                   
                                  </div>
                                  
                                  <div className="col md 2">
                                    
                                  Seats Available
                                  </div>
                                  <div className="col md 2">
                                 
                                  Depart                
                                  </div>
                                  
                                </div>
                                <div className="row">
                                 
                                  <div className="col md 2" style={{fontSize:'small', color:'black'}}>
                                                         
                                    {reviewdetails.departstation}
                                  </div>
                                  <div className="col md 2">
                                   ------
                                  </div>
                                  <div className="col md 2" style={{fontSize:'small', color:'black'}}>
                                                         
                                    {reviewdetails.returnstation}
                                  </div>
                                 
                                  <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                  {reviewdetails.seats}
                                  </div>
                                  <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                                        
                                    {reviewdetails.depart}
                                  </div>
                                  
                                </div>
                               
                                <div className="row">
                                <div className="col md 2" style={{fontSize:'small', color:'gray'}}>
                                                       
                                {reviewdetails.from}
                                </div>
                                <div className="col md 2">
                               
                                </div>
                                <div className="col md 2">
                               
                               </div>
                                <div className="col md 2"  style={{fontSize:'small', color:'gray'}}>
                                                      
                                {reviewdetails.to}
                                </div>
                                <div className="col md 2">
                              
                                </div>
                                <div className="col md 2">
                               
                                </div>
                                <div className="col md 2">
                                                      
                               
                                </div>
        
                              </div>
                                
                              </p>
                              </div>
                              </div>
        
                         
                          </div>                 
                        
                       
                      </div>
              </div>
            
            </div>
            <div className="cancel" style={{marginTop: '10%'}}>
                <div className="card w-100" >
                <h4 style={{color:'rgba(6, 33, 142)',paddingLeft:'2%',paddingtop: '2%',marginTop:'5%'}}><b>Cancellations</b></h4>
                 <hr/>
                <p style={{paddingLeft: '2%'}}>100% refund on cancellations guaranteed.</p>
                </div>
            </div>

            {/* <div className="information">
               <div className="card w-100" style={{paddingTop:'2%',paddingLeft: '2%',marginTop:'10%'}}>
                 
                    <h5 style={{color:'rgba(6, 33, 142)'}}><b>Important Information</b></h5>
                    <hr/>
                    <p>
                    <h6><b>Check travel guidelines issued by Karnataka below:</b></h6>
                    
                    <ul style={{fontSize: 'small'}}>
                    <li><b>COVID test/vaccination rules :</b>
                         All travellers, irrespective of their vaccination status, arriving from the state of Maharashtra, Kerala and Goa must carry a negative RT-PCR report with a sample taken within 72 hours before arrival. RT-PCR test timeline starts from the swab collection time. Travellers from all states will have to undergo health screening at the airport. Anyone with COVID-19 symptoms will not be allowed to travel.
                    Following category of travellers are exempted from the above-mentioned requirement:.
                    - Constitutional functionaries and healthcare professionals.
                    - Children below the age of 2 years.
                    </li>
                    
                    <li>It is compulsory to wear a mask that covers the nose and mouth properly while at the airport and on the flight. Any lapse might result in de-boarding. Know More
                    Remember to download the baggage tag(s) and affix it on your bag(s).
                    </li>
                    <h7><b>Baggage information</b></h7>
                    <hr/>
                    
                    <li>Carry no more than 1 check-in baggage and 1 hand baggage per passenger. Additional pieces of Baggage will be subject to additional charges per piece in addition to the excess baggage charges.</li>
                   </ul>   
                </p>
               </div>
            </div> */}
        <div className="traveller" style={{paddingTop:'6%',paddingLeft: '5%',marginTop:'20%'}}>
            <div className="card w-100">
                <h5 style={{color:'rgba(6, 33, 142)',paddingLeft:'2%',paddingTop: '2%'}}><b>Traveller reviewdetails</b></h5>
                <h7 style={{paddingLeft: '2%',paddingTop: '2%'}}><b>Booking reviewdetails will be sent to</b></h7>
                <p>
                    <div className="row" style={{paddingLeft: '2%',paddingTop: '2%'}}>
                        <div className="col md 2">
                            <label>Mobile Number</label>
                        </div>
                        <div className="col md 2">
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="row" style={{paddingLeft: '2%',paddingTop: '2%'}}>
                        <div className="col md 2">
                           
                            <input type="text" placeholder="Mobile Number"></input>
                        </div>
                        <div className="col md 2">
                            
                            <input type="email" placeholder="Email"></input>
                        </div>
                    </div>
                </p>
            </div>
        </div>
        <button className="btn btn-primary" style={{color:'aliceblue',marginTop:'50%',paddingLeft:'2%'}}>Continue</button>
      
       
            </>
        )
    }

    // async componentDidMount(){
    //     let restid = this.props.location.search.split('=')[1];
    //     let response = await axios.get(`{url}/{restid}`)
    //     let mealData = await axios.get(`{menuUrl}/{restid}`)
    //     .then((res)=>
    //     {
    //         this.setState({reviewdetails:response.data[0],menuList:mealData.data})
    //     })
    // }
    async componentDidMount(){
        console.log("id",this.props.location.search.split('=')[1])
        let flightbookId = this.props.location.search.split('=')[1]
        let response = await axios.get(`${reviewurl}${flightbookId}`)
       
        this.setState({reviewdetails:response.data[0]})
    }
}
export default trainDetails