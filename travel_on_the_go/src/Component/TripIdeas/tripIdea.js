import React,{Component} from 'react'
import axios from 'axios';
import TripIdea_Display from './tripIdea_Display';

import './tripIdea.css'
import Header from '../../Header'


const restUrl = "https://travel-api12.herokuapp.com/category"
const tripUrl = "https://travel-api12.herokuapp.com/type";


class TripIdeas extends Component{
    constructor(props){
        super(props);
        this.state = {
            fromcity:'',
             flightsList: ''

        };
    }


  
    render(){
        return(
            <>
            <Header/>
            <div class="container">
            <div id="displayTrip" style={{marginTop:'10%'}}>
                     
                   
                        <TripIdea_Display listData={this.state.flightsList}/>
                            
                   
            </div>
            </div>
         
                 </>
        )
    }


    async componentDidMount(){
        let typeId = this.props.match.params.type;
        console.log("typeid",typeId)
        let response = await axios.get(`${tripUrl}/${typeId}`)    
               
            this.setState({flightsList:response.data})
           
       
        

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


export default TripIdeas
