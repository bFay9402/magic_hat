const hatForm = document.querySelector('#hatForm');
const pickBtn = document.querySelector('#pick-btn');
const clrBtn = document.querySelector('#clr-btn');
const error = document.querySelector('#error');
const h2 = document.querySelector('h2');
let hat = [];
hatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const hatItem = hatForm.elements.hatitem;
  //if value is empty do nothing otherwise add item
  if (!hatItem.value) {
    error.style.display = 'block';
    error.classList.add('active');
    setTimeout(function(){
      error.style.display = 'none';
      error.classList.remove('active');
    }, 3500);
    
  } else {
    hat.push(hatItem.value);
    localStorage.setItem('hat', JSON.stringify(hat));
    hatItem.value = '';
  }
  
});

pickBtn.addEventListener('click', () => {
  const rand = Math.floor(Math.random() * hat.length);
  let storedHat = JSON.parse(localStorage.getItem('hat'));
  hat = storedHat;
  h2.textContent = hat[rand];
});

clrBtn.addEventListener('click', () => {
  localStorage.clear(hat);
});


//===to be added===
//remove item when picked
//toggle item list
//error banner animation