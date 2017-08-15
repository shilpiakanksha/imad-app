 // conter cod
 var button = document.getElementById('counter');

 button.onclick = function(){
     
     //make a request to counter endpoint
     var request = new XMLHttpRequest();
     
     
     //capture the respone and store it in a variable
     request.onreadystatechange = function(){
        if(request.readystate ===  XMLHttpRequest.DONE ){
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                    var span = document. getElementById('count');
                      span.innerHTML = counter.toString();
            }
            
        }
     };
     
   //make the request
   request.open ('GET','http://akanksha2340.imad.hasura-app.io/counter',true);
   request.send(null);
  
 
 };