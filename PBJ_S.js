(function(window) {

  'use strict';

  function define_PBJS() {

    var PBJS = {};

    ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>beginning of library Functions<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    PBJS.I = function(elem){
      return document.getElementById(elem);
    };
    PBJS.C = function(elem){
      return document.getElementsByClassName(elem);
    };
    PBJS.T = function(elem){
      return document.getElementsByTagName(elem);
    };

    // About
    PBJS.ver = function() {
      console.log(" Version: 0.1\n Author:  'Kyler Love'\n Updated: '11 March 2016'");
    };
    //greet
    PBJS.greet = function() {
      console.log("Welcome to Peanut Butter JavaScript...\n or Peanut Butter Jelly Sandwich...\n Both are delicious");
    };

    //adds values.  pass in the 'id' of the two inputs
    PBJS.add = function(a, b) {
  /* jshint ignore:start */
      let A = PBJS.I(a).value;
      let B = PBJS.I(b).value;
      /* jshint ignore:end */
      console.log(parseInt(A) + parseInt(B));
      return A + B;
    };

    //subtracts values.  pass in the 'id' of the two inputs
    PBJS.subtract = function(a, b) {
      /* jshint ignore:start */
      let A = PBJS.I(a).value;
      let B = PBJS.I(b).value;
      /* jshint ignore:end */
      console.log(parseInt(A) - parseInt(B));
      return A - B;
    };

    //fuck it all
    PBJS.fuckitall = function() {
      /* jshint ignore:start */
      let fucks = document.querySelectorAll("h1, h2, h3, h4, h5, h6, button, input, p, a");
      /* jshint ignore:end */
      console.log(fucks.innerHTML);
      for (var i = 0; i < fucks.length; i++) {

        //input fields change placeholder
        if (fucks[i].tagName.toLowerCase() === 'input') {
          fucks[i].placeholder = 'FUCK IT ALL';
        }

        //testing
        console.log(fucks[i].tagName.toLowerCase());
        console.log(fucks[i].innerHTML);

        //change dom
        fucks[i].innerHTML = 'FUCK IT ALL';
      }

    };

    //Tracey's take on current events
    PBJS.The_Tracey_Harrison_Manifesto = function() {
      var NothingMatters = "<div style='Font-size: 200px;'>NOTHING MATTERS<div>";
      var bod = PBJS.T('body');
      bod.innerHTML = NothingMatters;
    };

    //turn the innerHTML of any element into a clock
    PBJS.AddClock = function(elem) {
      var tag = PBJS.I(elem);
      var now = new Date();
      tag.innerHTML = now.toLocaleTimeString();
    };

    //writes all text field values from the
    //first textbox, into all other text values
    PBJS.QuickGuide = function (){
      var stuff = PBJS.T("input");
        for(var i = 0; i < stuff.length; i++)
        {
             console.log(stuff[i]);
             stuff[i].value = stuff[0].value;
        }

    };

    //im tired
    PBJS.NewFunc = function (){
      var UserName = PBJS.I('first').value;
    var ng = {
      Name: UserName,
      Time: Date(),
      IsAdmin: true
    };

    for (var n in ng){

    }
  };

    ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>End of library Functions<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    return PBJS;

  }

  if (typeof(PBJS) === 'undefined') {

    window.PBJS = define_PBJS();
  }

})(window);
