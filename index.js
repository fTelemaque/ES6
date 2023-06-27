/*
    You are to use arrow functions for this task.

    Every second, change the background color of <span> according to the elements in `colours` array. The display of color should repeat from the top.

    Hint:
    - Look for interval setting functions.
    - You should use DOM Manipulation to update the style of <div> element.

    Code Challenge:
    - Provide a checkbox "stop". When it is checked, the colour change will not repeat and end at the last element.
*/




const locateDiv = document.getElementById('target');

let createSpan = document.createElement('span');
createSpan.textContent = "";

locateDiv.appendChild(createSpan);




let color =  ["red", "green", "blue", "cyan", "magenta", "yellow", "black"];

let  i = 0;

changeColor = () => {
  locateDiv.style.background = color[i];
  i++;
  
  if(i > color.length - 1) {
    i = 0;
  }
}

let xInterval = setInterval(changeColor, 1000);

function stopTextColor() {
    clearInterval(xInterval);
    xInterval = null;
}

document.getElementById("stop").addEventListener("click", stopTextColor);











