 // conter cod
 var button = document.getElementById('counter');

 button.onclick = function(){
     
     //make a request to counter endpoint
     var request = new XMLHttpRequest();
     
     
     //capture the respone and store it in a variable
     request.onreadystatechange = function(){
        if(request.readyState ===  XMLHttpRequest.DONE ){
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
 
 //submit name
 var nameInput = document.getElementById('name');
 var names = nameInput.value;
 var submit = document.getElementById('submit_btn');
 submit.onclick = function(){
     var names = ['name1','name2','name3','name4'];
     var list = '';
     for(var i=0; i<name.length; i++){
         //list += '<li>' + ['name'] + '</li>';
         
     }
     var ul = document.getElementById('namelist');
     ul.innerHTML = list;
     
     
 };
 