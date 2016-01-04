// Get user name
var name = prompt("What is your name:");

// Get the node with the id of message-text
var nameHeader = document.getElementById("message-text");

// Change the inner html of the node to the greeting message
nameHeader.innerHTML = "Hello " + name + "!";
