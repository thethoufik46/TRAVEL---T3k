import React,{Component} from 'react';
import './placeOrder.css';
import Header from '../../Header';
import axios from 'axios';

const url = "https://travel-api12.herokuapp.com/reviewdetail/1?id=";
const postData = "https://travel-api12.herokuapp.com/bookticket";
//const postData = "http://localhost:6700/orders"


class PlaceOrder extends Component{
    constructor(props){
        super(props);

        let userData = sessionStorage.getItem('userData')

        // this.state={
        //     id:Math.floor(Math.random()*100000),            
        //     name:userData? userData.split(',')[0]:'',
        //     email:userData? userData.split(',')[1]:'',
        //     cost:0,
        //     phone:userData? userData.split(',')[2]:'',
        //     address:'Hno 30',
        //    ticket_no:'',
        //     categoryId:'',
        //     status:'Pending',
        //     menuItem:''
         
        // }
        this.state={
            id:Math.floor(Math.random()*100000),
            //ticket_no:this.props.match.params.id,
            name:userData? userData.split(',')[0]:'',
            email:userData? userData.split(',')[1]:'',
            cost:0,
            phone:userData? userData.split(',')[2]:'',
            address:'Hno 30',
            menuItem:''
        }
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = () => {
        let obj = this.state;
        //obj.ticket_no = sessionStorage.getItem('id');
        //obj.menuItem = sessionStorage.getItem('menu');
        //obj.categoryId = sessionStorage.getItem('category');
        fetch(postData,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        //.then(this.props.history.push('/viewBooking'))
        .then(console.log('ticket booked'))
    }
    
    renderMenu = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <div className="orderTicket" key={item.id}>
                        <img src={item.image} alt={item.name}/>
                        <h3>{item.name}</h3>
                        <h4>Rs. {item.price}</h4>
                    </div>
                )
            })
        }
    }
    

    render(){
        if(sessionStorage.getItem('loginStatus') === 'loggedOut'){
            return(
                <>
                    <Header/>
                    <center>
                        <h2>Login First To Place Order</h2>
                    </center>
                </>

            )
        }
        console.log(this.state)
        return(
            <>
            <Header/>
                <div className="container">
                    <hr/>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>Your Ticket booking - {this.props.match.params.id} </h3>
                        </div>
                        <div className="panel-body">
                         <form action="https://developerpayment.herokuapp.com/paynow" method="POST">
                                <input type="hidden" name="cost" value={this.state.cost}/>
                                <input type="hidden" name="id" value={this.state.id}/>
                               {/* k <input type="hidden" name="ticket_no" value={this.state.ticket_no}/> */}
                             
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label for="fname">Name</label>
                                    <input id="fname" name="name" className="form-control"
                                    value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input id="email" name="email" className="form-control"
                                    value={this.state.email}  onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="phone">Phone</label>
                                    <input id="phone" name="phone" className="form-control"
                                    value={this.state.phone} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="address">Address</label>
                                    <input id="address" name="address" className="form-control"
                                    value={this.state.address}  onChange={this.handleChange}/>
                                </div>
                            </div>
                            {this.renderMenu(this.state.menuItem)}
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Total Price is Rs.{this.state.cost}</h2>
                                </div> 
                            </div>
                            <button className="btn btn-success" onClick={this.checkout}>Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }

  
        async componentDidMount(){
        console.log("id",this.props.location.search.split('=')[1])
        let flightbookId = this.props.location.search.split('=')[1]
     
        let response = await axios.get(`${url}${flightbookId}`)
        //window.alert(this.props.match.params.category_id)
        let totalPrice = 0;
        // response.map((item) => {
        //     totalPrice += parseFloat(item.price)
        //     window.alert(item.price)
            
        // })
        this.setState({cost: response.data[0].price,categoryId:response.data[0].category_id, menuitem:response.data[0],ticket_name:response.data[0].name})
      
    }
        
    

}

export default PlaceOrder