const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const formData = {
  email: savedData.email || '',
  message: savedData.message || '',
};

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener('input', ({ target }) => {
  formData[target.name] = target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
});