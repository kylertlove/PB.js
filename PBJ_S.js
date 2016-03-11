

(function (window) {

'use strict';


function define_PBJS(){

  var PBJS = {};

  ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>beginning of library<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

	// About
PBJS.ver = function(){
      console.log("Version: 0.1\n Author: 'Kyler Love'\n Updated: '11 March 2016'");
};
PBJS.greet = function(){
      console.log("Welcome to Peanut Butter JavaScript... or Peanut Butter Jelly Sandwich... Both are delicious");
};

//adds values.  pass in the 'id' of the two inputs
PBJS.add = function(a, b){
  var A = document.getElementById(a).value;
  var B = document.getElementById(b).value;
  console.log(parseInt(A) + parseInt(B));
    return A + B;
};

//subtracts values.  pass in the 'id' of the two inputs
PBJS.subtract = function(a, b){
  var A = document.getElementById(a).value;
  var B = document.getElementById(b).value;
  console.log(parseInt(A) - parseInt(B));
    return A - B;
};

PBJS.fuckyou = function(){
  var fucks = document.querySelectorAll("h1, h2, h3, h4, h5, h6, button, input, p");
  console.log(fucks.innerHTML);
  for(var i = 0; i < fucks.length; i++){
   fucks[i].innerHTML = 'FUCK YOU';
}
};


///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>End of library<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

return PBJS;

}

if(typeof(PBJS) === 'undefined'){

  window.PBJS = define_PBJS();
}

}) (window);
