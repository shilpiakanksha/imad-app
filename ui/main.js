 // conter cod
 var button = document.getElementById('counter');
 button.onclick = function(){
     
     //make a request to counter endpoint
     
     //capture the respone and store it in a variable
     
     //render variable in correct span
     
     counter = counter + 1;
     var span = document. getElementById('count');
     span.innerHTML = counter.toString();
 };