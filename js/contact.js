document.getElementById('contact-form').addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name.toLowerCase() === 'ironhack') {
    alert('You cannot be Ironhack, because I am Ironhack.');
    return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (message.length < 10) {
      alert('Message must be at least 10 characters long.');
      return;
    }
  });
