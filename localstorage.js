const form = document.querySelector('form');

document.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
});
