(function(document) {
  
  // Initialize counter
  var counter = 0;
  
  // Get h1 object representation
  var counterDisplay = document.getElementById('counter');
  
  // Display the initialized value of counter
  counterDisplay.innerText = "Count = " + counter;
  
  // Add 'click' event listener
  var image = document.getElementById('stopwatch');
  image.addEventListener('click', function() {
    // increment the counter 
    counter = counter + 1;
    // display the new count
    counterDisplay.innerText = "Count = " + counter;    
  });
  
})(document);
