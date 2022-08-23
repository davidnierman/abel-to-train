// This file holds custom functions  and environmental keys
require('dotenv').config();

// this function allows the attribute "d" to be changed when "aria-expanded" boolean changes
// The d attribute defines a path to be drawn.
function changeD(buttonId, pathId, pathDrawnA, pathDrawnB){
  console.log("Running ChangeD")
  const button = document.getElementById(buttonId)
  const path = document.getElementById(pathId)
  let expanded = button.getAttribute("aria-expanded")
  if (expanded == "true"){
    path.setAttribute("d", pathDrawnA)
  }
  else {
    path.setAttribute("d", pathDrawnB)
  }
}

function TestEnvVarsLoad(){
  console.log("env vars: ", process.env)
}

