const addCount = document.querySelector('#nextBtn');
const lowerCount = document.querySelector('#prevBtn');
// const counter = document.querySelector('#counter')
// counter.textContent = count
let count = 0;

// Color Change IIFE
(function colorChange(){

  const counter = document.querySelector('#counter')
  counter.textContent = count

  if (count < 0){
  counter.style.color = 'red'
  } else if (count > 0){
  counter.style.color = 'green'
  } else {
  counter.style.color = 'green'
  }
})();

addCount.addEventListener('click', function() {
  return count++
});