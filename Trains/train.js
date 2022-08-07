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
                            <h5 class="card-title">${a3.name}</h5>
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



function getAllTrains(){   
    var url1 = "http://localhost:3000/data?category_id=2"   
    fetch(url1)
    .then((res) => res.json())
    .then((data) => {
        data.map((a1) => {          
                       
                var element = `
                <div class="card w-100">
                <div class="card-body">
               
                  <h4 class="card-title"><b>${a1.name}</b></h4>
                  <p class="card-text">
                    <div class="row">
                     
                      <div class="col md 2" style="font-size:small; color:gray">
                        
                      ${a1.train_no} | departs on :${a1.departs_on}                   
                   
                      </div>
                      
                    </div>
                    </br>
                    <div class="row" style="font-size:small; color:black">
                     
                      <div class="col md 2">
                                             
                        ${a1.departTime}
                      </div>
                      <div class="col md 2">
                       ${a1.hours}
                      </div>
                      <div class="col md 2">
                        <img >                        
                        ${a1.returntime}
                      </div>
                      
                    </div>
                    <div class="row" style="font-size:small; color:gary">
                     
                        <div class="col md 2">
                                            
                        ${a1.departstation}
                        </div>
                        <div class="col md 2">
                         ------------
                        </div>
                        <div class="col md 2">
                                             
                        ${a1.returnstation}
                        </div>
                    
                  </div>
                  </br>
                  <div class="row" style="font-size:medium; color:black;font-weight:bold">
                     
                        <div class="col md 2" >
                                            
                        ${a1.class}
                        </div>
                        <div class="col md 2">
                        ${a1.price}
                        </div>
                        <div class="col md 2" style="color:green; font-size:small">
                        <img >                        
                        ${a1.seats}
                        </div>
                    
                  </div>
                  </p>
                 
                </div>
              </div>`
                    
                $('#display').append(element);
                })
            })     
        }   

       


