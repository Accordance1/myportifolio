
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementsByName('name')[0].value;
  const email = document.getElementsByName('email')[0].value;
  const subject = document.getElementsByName('subject')[0].value;
  const message = document.getElementsByName('message')[0].value;

  if (name === '' || email === '' || subject === '' || message === '') {
    alert('Please fill out all fields.');
  } else {
    // Submit form data using AJAX or fetch API
    console.log('Form submitted successfully!');
  }
});


