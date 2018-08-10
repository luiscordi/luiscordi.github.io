var myImage = document.querySelector('img');

//image changer function
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hello.jpg') {
      myImage.setAttribute ('src','images/helloEye.jpg');
    } else {
      myImage.setAttribute ('src','images/hello.jpg');
    }
}


//Change user code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Programing is cool, ' + myName;
}	

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Programing is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
