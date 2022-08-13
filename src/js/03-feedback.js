const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const feedbackFormState = {
  emailInput: '',
  messageInput: '',
};
try {
  let savedFormInput = JSON.parse(localStorage.getItem('feedback-form-state'));
  email.value = savedFormInput.emailInput;
  message.value = savedFormInput.messageInput;
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // "Unexpected token u in JSON at position 1"
}

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  console.log('123');
  feedbackFormState.emailInput = email.value;
  feedbackFormState.messageInput = message.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}
function onFormSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}
