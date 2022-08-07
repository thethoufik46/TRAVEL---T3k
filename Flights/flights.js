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


function getFlightsbyCity(){
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



function getAllFlights(){   
    var url1 = "http://localhost:3000/data?category_id=1"   
    fetch(url1)
    .then((res) => res.json())
    .then((data) => {
        data.map((a1) => {          
                       
                var element = `
                <div class="card w-100">
                <div class="card-body">
                  <img src='${a1.image}' style="width:10%;height:10%;">
                  <h5 class="card-title">${a1.name}</h5>
                  <p class="card-text">
                    <div class="row">
                     
                      <div class="col md 2">
                        
                      ${a1.departtime}                   
                      </div>
                      <div class="col md 2">
                        
                      ${a1.hours} 
                      </div>
                      <div class="col md 2">
                     
                     ${a1.returntime}                   
                      </div>
                      
                    </div>
                    <div class="row">
                     
                      <div class="col md 2">
                                             
                        ${a1.from}
                      </div>
                      <div class="col md 2">
                       ${a1.Stop}
                      </div>
                      <div class="col md 2">
                        <img >                        
                        ${a1.to}
                      </div>
                      
                    </div>
                  </p>
                  <p>
                   
                    <button class="btn btn-outline-primary" type="button"  style="float:right;margin-right: 10%;" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      View Flight Details
                    </button>
                  </p>
                  <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                    <div class="card w-100">
                    <div class="card-body">
                      <img src='${a1.image}' style="width:5%;height:5%;float:left">
                      <h5 class="card-title"style="margin-left:2%">${a1.name}</h5>
                      <p class="card-text">
                        <div class="row">
                         
                          <div class="col md 2">
                            
                          ${a1.departtime}                   
                          </div>
                          <div class="col md 2" style="font-size:small; color:gray">
                            
                          ${a1.hours} 
                          </div>
                          <div class="col md 2">
                         
                         ${a1.returntime}                   
                          </div>
                          <div class="col md 2">
                            
                          BAGGAGE              
                          </div>
                          <div class="col md 2">
                            
                          CHECK IN
                          </div>
                          <div class="col md 2">
                         
                          CABIN                 
                          </div>
                          
                        </div>
                        <div class="row">
                         
                          <div class="col md 2" style="font-size:small; color:black">
                                                 
                            ${a1.depart}
                          </div>
                          <div class="col md 2">
                           ---------
                          </div>
                          <div class="col md 2" style="font-size:small; color:black">
                                                 
                            ${a1.return}
                          </div>
                          <div class="col md 2" style="font-size:small; color:gray">
                                                 
                          ${a1.baggage}
                          </div>
                          <div class="col md 2" style="font-size:small; color:gray">
                          ${a1.checkin}
                          </div>
                          <div class="col md 2" style="font-size:small; color:gray">
                                                
                            ${a1.cabin}
                          </div>
                          
                        </div>
                        <div class="row">
                          <div class="col md 2" style="font-size:small; color:gray">
                                                 
                          ${a1.departTerminal}
                          </div>
                          <div class="col md 2">
                         
                          </div>
                          <div class="col md 2" style="font-size:small; color:gray">
                                                
                          ${a1.returnTerminal}
                          </div>
                          <div class="col md 2">
                        
                          </div>
                          <div class="col md 2">
                         
                          </div>
                          <div class="col md 2">
                                                
                         
                          </div>

                        </div>
                        <div class="row">
                        <div class="col md 2" style="font-size:smaller; color:gray">
                                               
                        ${a1.from}
                        </div>
                        <div class="col md 2">
                       
                        </div>
                        <div class="col md 2"  style="font-size:smaller; color:gray">
                                              
                        ${a1.to}
                        </div>
                        <div class="col md 2">
                      
                        </div>
                        <div class="col md 2">
                       
                        </div>
                        <div class="col md 2">
                                              
                       
                        </div>

                      </div>
                        
                      </p>
                      </div>
                      </div>

                    </div>
                  </div>                 
                
                </div>
              </div>`
                    
                $('#display').append(element);
                })
            })     
        }   

       


