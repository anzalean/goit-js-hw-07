const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (event.currentTarget.elements.password.value === '' || event.currentTarget.elements.email.value === '') {
    return alert('All form fields must be filled in');
  }
    const obj = {};
    obj.email = event.currentTarget.elements.email.value;
    obj.password = event.currentTarget.elements.password.value;
    console.log(obj);
    form.reset();
}
