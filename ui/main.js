
//submit username/password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
    //create request
     var request = new XMLHttpRequest();
    
  //capture a response and store it in a variable
  request.onreadystatechange = function(){
     if(request.readyState ===  XMLHttpRequest.DONE){
         //take some action
         if ( request.status === 200 ){
            alert('logged in successfully');
         }
          else if(request.status === 403)
         {
             alert('username/pasword is incorrect');
         }
         else if(request.status === 500)
         {
             alert('something went wrong on server');
         }
         
         
     } //not done yet
  };
  
  //make the request
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  console.log(username);
  console.log(password);
  request.open('POST','http://akanksha2340.imad.hasura-app.io/login',true);
  request.setRequestHeader('Content-Type', 'application/json');
 request.send(JSON.stringify({username: username, password: password}));
};

