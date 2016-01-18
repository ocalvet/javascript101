(function(document) {
  
  // Initialize counter
  var counter = 0;
  
  // Display counter value inside h1
  var counterDisplay = document.getElementById('counter');
  
  counterDisplay.innerText = "Count = " + counter;
  
})(document);
