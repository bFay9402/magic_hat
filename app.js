const hatForm = document.querySelector('#hatForm');
const pickBtn = document.querySelector('#pick-btn');
const h2 = document.querySelector('h2');
let hat = [];
hatForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const hatItem = hatForm.elements.hatitem;
  hat.push(hatItem.value);
  hatItem.value = '';
});

pickBtn.addEventListener('click', () => {
  const rand = Math.floor(Math.random() * hat.length);
  h2.textContent = hat[rand];
});