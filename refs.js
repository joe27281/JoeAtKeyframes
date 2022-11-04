var boxOne = document.getElementsByClassName('box')[0];
var boxTwo = document.getElementsByClassName('box1')[0];
var boxThree = document.getElementsByClassName('box2')[0];
var boxFour = document.getElementsByClassName('box3')[0];
var boxFive = document.getElementsByClassName('box4')[0];
var running = false;

var toggleTransition = function() {
  if(!running) 
  { 
    boxOne.classList.add('horizTranslate');
  } else {
    boxOne.classList.remove('horizTranslate'); 
  }  

  running = !running;
}

var toggleTransition = function() {
  if(!running) 
  { 
    boxTwo.classList.add('horizTranslate');
  } else {
    boxTwo.classList.remove('horizTranslate'); 
  }  

  running = !running;
}

var toggleTransition = function() {
  if(!running) 
  { 
    boxThree.classList.add('horizTranslate');
  } else {
    boxThree.classList.remove('horizTranslate'); 
  }  

  running = !running;
}


var toggleTransition = function() {
  if(!running) 
  { 
    boxFour.classList.add('horizTranslate');
  } else {
    boxFour.classList.remove('horizTranslate'); 
  }  

  running = !running;
}

var toggleTransition = function() {
  if(!running) 
  { 
    boxFive.classList.add('horizTranslate');
  } else {
    boxFive.classList.remove('horizTranslate'); 
  }  

  running = !running;
}