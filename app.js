//grab DOM elements
const hatForm = document.querySelector('#hatForm');
const pickBtn = document.querySelector('#pick-btn');
const clrBtn = document.querySelector('#clr-btn');
const error = document.querySelector('#error');
const h2 = document.querySelector('h2');
let hat = []; //empty hat array to be filled

//adds value entered into the empty hat array and saves to local storage
hatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const hatItem = hatForm.elements.hatitem;
  if (!hatItem.value) {
    error.style.display = 'block';
    error.classList.add('error-banner');
    setTimeout(function(){
      error.style.display = 'none';
      error.classList.remove('error-banner');
    }, 3500);
    
  } else {
    hat.push(hatItem.value);
    localStorage.setItem('hat', JSON.stringify(hat));
    hatItem.value = '';
  }
  
});

//picks a random item from the hat array
pickBtn.addEventListener('click', () => {
  const rand = Math.floor(Math.random() * hat.length);
  let storedHat = JSON.parse(localStorage.getItem('hat'));
  hat = storedHat;
  h2.textContent = hat[rand];
});

//clears local storage
clrBtn.addEventListener('click', () => {
  localStorage.clear(hat);
  h2.textContent = 'Add items to the hat and then click the pick button to pull from the hat';
});

//toggle list

//===to be added===
//remove item when picked
//toggle item list
//error banner animation
//remove an item from the list
