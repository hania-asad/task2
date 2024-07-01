document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
  }
  
  if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }
  
  alert('Form submitted successfully!');
  this.reset();
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}
