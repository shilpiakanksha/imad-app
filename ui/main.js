//counter code
var button = document.getElementById('counter');
button.onclick = function(){
    
     //create a request object
  var request = new XMLHttpRequest();
  //capture a response and store it in a variable
  
  request.onreadystatechange = function(){
     if(request.onreadyState ===  XMLHttpRequest.DONE){
         //take some action
         
         if ( request.status === 200 ){
            var names = ['name1','name2','name3','name4'];
             var list = '';
         for(var i=0; i<name.length;  i++){
             list += '<li>' + name[i] + '</li>';
  }
  
    var counter = request.ResponseText;
    var span = document. getElementById('count');
    span.innerHTML(counter.toString());
    
   var ul = document.getElementById('namelist');
   ul.innerHTML = list;
         }
     }  
     //not done yet
  };
  //make the request
  request.open('GET','http://akanksha2340.imad.hasura-app.io/counter',true);
  request.send(null);
};


//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    

   //create a request object
   
  var request = new XMLHttpRequest();
  //capture a response and store it in a variable
  
  request.onreadystatechange = function(){
     if(request.readyState ===  XMLHttpRequest.DONE){
         //take some action
         if ( request.status === 200 ){
              var names = request.responseText;
              
              names = JSON.parse(names);
               var list = '';
          for(var i=0; i< names.length;  i++){
           list += '<li>' + names[i] + '</li>';
    }
   var ul = document.getElementById('namelist');
   
   ul.innerHTML = list;
         }
     } //not done yet
  };
  
  //make the request

  request.open('GET','http://akanksha2340.imad.hasura-app.io/submit_name?name='+ name ,true);
 request.send(null);
};

