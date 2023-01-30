'use strict'

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elementsLeft = document.querySelectorAll('.element-animation-left');
  let elementsRight = document.querySelectorAll('.element-animation-right');
  
  for (let elm of elementsLeft) {
    observer.observe(elm);
  } 
  for (let elm of elementsRight) {
    observer.observe(elm);
  } 
