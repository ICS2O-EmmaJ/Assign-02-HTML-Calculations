// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Modified by: Emma Janani
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

// declare constants
const TAX_BRACKET = 0.1805

/**
 * This function calculates surface area and volume of sphere.
 */
function calculateSphere () {
  // get user input
  let radius = parseFloat(document.getElementById('radius').value)

  // calculate the surface area and volume
  let pi = 3.141592653589793238462643383279502884197169399375105820974944592307816406286 
  let surface_area = radius ** 2 * 4 * pi
  let volume = radius ** 3 * 4/3 * pi

  // display the results
  document.getElementById('surface-area').innerHTML = "The surface area will be " + surface_area.toFixed(2)
  document.getElementById('volume').innerHTML = "The volume will be " + volume.toFixed(2)
}