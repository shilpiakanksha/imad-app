 // conter cod
 var button = document.getElementById('counter');
 var counter = 0;
 button.onclick = function(){
     
     //make a request to counter endpoint
     var request = new XMLHttpRequest();
     
     
     //capture the respone and store it in a variable
     
   //make the request

  counter = counter + 1;
                 var span = document. getElementById('count');
                      span.innerHTML = counter.toString();
 
 };