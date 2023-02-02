const myForm = document.getElementById('form1');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.email-error');
const submitBtn = document.querySelector('.submit');

myForm.addEventListener('submit', (event) => {
  if (email.value.match(/[A-Z]/g)) {
    event.preventDefault();
    errorMessage.textContent = 'Please use lowercases for the email field';
  } else if (email.validity.valueMissing) {
    event.preventDefault();
    errorMessage.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    event.preventDefault();
    errorMessage.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    event.preventDefault();
    errorMessage.textContent = 'You need to enter an e-mail address.';
  }
});

function validateForm(){
  if(email.value.match(/[A-Z]/g)) {
  errorMessage.innerHTML = "Please use lowercase letters for the email fields."
  errorMessage.style.display = 'block';
  setTimeout(() => {
    errorMessage.style.display = 'none'
    
  }, 3000);
}
}

submitBtn.addEventListener('click', validateForm);

