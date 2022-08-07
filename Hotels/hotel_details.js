let url = "http://localhost:3000/dest";
let cityUrl = "http://localhost:3000/data?cityid="

function getDestinationFrom()
{
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')  //<option></option>
            let text = document.createTextNode(data[i].city) // Delhi
            element.appendChild(text) //<option>Delhi</option>
            element.value = data[i].id //<option value="1">Delhi</option>
            document.getElementById('from').appendChild(element)
           
        }
    })
}

const getDestinationTo = () => {
    
    const cityId = document.getElementById('from').value;
    
    while(to.length>0){
        to.remove(0)
    }
    
    fetch(`${cityUrl}${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')         
            let text = document.createTextNode(`${data[i].to}`)
           
            element.appendChild(text)
            document.getElementById('to').appendChild(element)
        }
    })
}


function getTrainsbyCity(){
    var url1="http://localhost:3000/dest"
    var url2 = "http://localhost:3000/data?from="
    fetch(url1)
    .then((res) => res.json())
    .then((data) => {
        data.map((a1) => {          
            fetch(`${url2}${a1.city}`)
            .then((res) =>  res.json())
            .then((a2) => {
                a2.map((a3) =>{                   
                var element = `
                    <div class="card" style="width:25%;height:450px;float:left;margin-left:2%;margin-top:2%">
                        <img src='${a3.image}' class="card-img-top" style="height:50px;"/>
                        <div class="card-body">
                            <h5 class="card-title">${a3.transport_Name}</h5>
                            <h5>${a3.to}-${a3.from}</h5>
                            <p>Departure Time:${a3.depart}</p>
                            <p>Return Time: ${a3.return}</p>
                            <p>Price: ${a3.price}</p>
                        </div>
                    </div>`
                    
                $('#display').append(element);
                })
            })
        })
    })
}

function getAllHotel()
{
    var url1 = "http://localhost:3000/data?category_id=4&id=36" 
    fetch(url1)
    .then((res) => res.json())
    .then((data) => {
        data.map((a1) => {          
                       
                var element = `  <img src='${a1.image_gallery}' style="width:100%;height:100%; position: relative;margin-top:-9%">
                <div class = "content" style=" position: absolute; 
                bottom: 0; 
                background: rgb(0, 0, 0);
                background: rgba(0, 0, 0, 0.5); 
                color: #f1f1f1; 
                width: 100%; 
                padding: 20px; ">
                <div class="row">
                <h1>${a1.name}</h1>
                </div>
                <div class="row">
                <h5> ${a1.stars} star hotel with ${a1.rating} rating from customers </h5>
                </div>
                
                </div>
                <div class="container">
                    <h6 style="color:gray;border:1px solid gray;margin-top:2%;padding:3%">Location: ${a1.location}</h6>
                    <div class="about" style="color:black;font-family:georgia;border:1px solid gray;margin-top:2%;padding:3%">
                    <h4><b>About</b></h4>
                    <hr/>
                    
                    <h6 style="font-family:georgia;">${a1.desc}</h6>
                    </div>
                </div>
                <br/>
                    <div class="container">
                        <div class="card w-50" style="float-left">
                        <div class="card-body">
                
                                                
                            <h2 style="padding:2%;"> ${a1.rooms_category[1].room_type}</h2>
                            
                                <div class="content" style= padding:2%;">   
                                    <div class="row">
                                
                                    <div class="col-lg-8 col-md-8">
                                    <img src="${a1.image_gallery[1]}"  style="width:80%;height:80%">
                                    
                                    </div>
                                
                                </div>
                            
            
                                <p class="card-text">
                                    <div class="row" style="padding:2%">
                                        <div class="col md 4" style="font-size:medium;padding-left:2%;font-family:georgia; color:black;background-color:rgb(223 219 219)">
                                           
                                        ${a1.tag}                                       
                                        </div>                                      
                                                           
                                    </div>
                                <div class="row" style="padding:2%">
                                    <div class="col md 12" style="font-size:medium;font-family:georgia; color:black;background-color:rgb(223 219 219)">
                                        
                                    Breakfast availabilty : ${a1.rooms_category[1].breakfast_availability}   
                                
                                    
                                    </div>                
                                    
                                </div>
                                <div class="row" style="padding:2%">
                                <div class="col md 12" style="font-size:medium;font-family:georgia; color:black;background-color:rgb(223 219 219)">
                                    
                                    Refundable : ${a1.isRefundable}   
                            
                                
                                </div>                
                                
                                </div>
                  
                            </br>
                   
                   
                     <div class="row">
                      <div class="col-md-4" style="font-size:large; color:rgb(7 104 173); float:right">
                                          
                        <b> Per Night <h2>${a1.rooms_category[1].price}</h2></b>
                      </div>
                      <div class="col-md-4" style="font-size:large; color:rgb(7 104 173)">
                                       
                       You save <b>${a1.savings}</b>
                      </div>
                    
                      <div class="col md 4">                   
                                        
                       <a href="./hotel_details.html" type="button" style="margin-left:2%;font-size:large;float:right;text-decoration:none;"><b><h4>Book Now</b></h4></a>
                      </div>
                      </div>                 
                                                      
                  </p>
                 
                </div>
              </div>
              
              </div>


              <div class="card w-50" style="float-left">
                        <div class="card-body">
                
                                                
                            <h2 style="padding:2%;"> ${a1.rooms_category[0].room_type}</h2>
                            
                                <div class="content" style= padding:2%;">   
                                    <div class="row">
                                
                                    <div class="col-lg-8 col-md-8">
                                    <img src="${a1.image_gallery[0]}"  style="width:80%;height:80%">
                                    
                                    </div>
                                
                                </div>
                            
            
                                <p class="card-text">
                                    <div class="row" style="padding:2%">
                                        <div class="col md 4" style="font-size:medium;padding-left:2%;font-family:georgia; color:black;background-color:rgb(223 219 219)">
                                           
                                        ${a1.tag}                                       
                                        </div>                                      
                                                           
                                    </div>
                                <div class="row" style="padding:2%">
                                    <div class="col md 12" style="font-size:medium;font-family:georgia; color:black;background-color:rgb(223 219 219)">
                                        
                                    Breakfast availabilty : ${a1.rooms_category[0].breakfast_availability}   
                                
                                    
                                    </div>                
                                    
                                </div>
                                <div class="row" style="padding:2%">
                                <div class="col md 12" style="font-size:medium;font-family:georgia; color:black;background-color:rgb(223 219 219)">
                                    
                                    Refundable : ${a1.isRefundable}   
                            
                                
                                </div>                
                                
                                </div>
                  
                            </br>
                   
                   
                     <div class="row">
                      <div class="col-md-4" style="font-size:large; color:rgb(7 104 173); float:right">
                                          
                        <b> Per Night <h2>${a1.rooms_category[0].price}</h2></b>
                      </div>
                      <div class="col-md-4" style="font-size:large; color:rgb(7 104 173)">
                                       
                       You save <b>${a1.savings}</b>
                      </div>
                    
                      <div class="col md 4">                   
                                        
                       <a href="./hotel_details.html" type="button" style="margin-left:2%;font-size:large;float:right;text-decoration:none;"><b><h4>Book Now</b></h4></a>
                      </div>
                      </div>                 
                                                      
                  </p>
                 
                </div>
              </div>


              
              </div>
                `
               
                $('#imagecontainer').append(element);
            })
        })     
    }   



