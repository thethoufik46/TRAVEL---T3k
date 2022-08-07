import React,{Component} from 'react';

import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './holidayDetails.css';
import Header from '../../Header';

import HolidayDetailsDisplay from './holidayDetailsDisplay';



const reviewurl ="https://travel-api12.herokuapp.com/reviewdetail/5?id="

class HolidayDetails extends Component {
    constructor(props) {
        super(props)

        this.state={
            reviewdetails:'',
            total:'',
           
        }
    }



    render(){
        let {reviewdetails}= this.state;
   
        console.log("deatils",reviewdetails)
        console.log("deatilsprice",reviewdetails.price)
        return(
            <>
            
            <Header/>
            <HolidayDetailsDisplay listData={this.state.reviewdetails}/>
            
            </>
        )
    }

  
    async componentDidMount(){
        console.log("id",this.props.location.search.split('=')[1])
        let flightbookId = this.props.location.search.split('=')[1]
        let response = await axios.get(`${reviewurl}${flightbookId}`)
       
        this.setState({reviewdetails:response.data})
        //console.log("room",this.state.reviewdetails.rooms_category[1].room_type)
    }
}
export default HolidayDetails