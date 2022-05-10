// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-05-JS/sw.js", {
    scope: "/ICS20-Unit5-05-JS/",
  })
}

/**
 * This function calculates if you get free admission
 */
function myButtonClicked() {
  // input
  var lengthOne = document.getElementById("length-one").value
  var lengthTwo = document.getElementById("length-two").value
  var lengthThree = document.getElementById("length-three").value

  
  // process and output
  if ((lengthOne <= 0) || (lengthTwo <= 0) || (lengthThree <= 0)) {
    document.getElementById("triangle").innerHTML = 'Please input a positive number.'
  } else {
    if ((lengthOne == lengthTwo) && (lengthTwo == lengthThree)) {
      document.getElementById("triangle").innerHTML = 'Your triangle is an equilateral triangle!'
    } else if ((lengthOne != lengthTwo) && (lengthTwo != lengthThree)) {
      document.getElementById("triangle").innerHTML = 'Your triangle is a scalene triangle!'
    } else {
      document.getElementById("triangle").innerHTML = 'Your triangle is an isosceles triangle!'
    }
  }
}
  