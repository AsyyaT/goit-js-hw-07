const form = document.querySelector('.login-form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault()
    const formElements = event.target.elements;

    const formData = {
    email: formElements.email.value.trim(),
    password: formElements.password.value.trim(),
    };
    if (formData.email && formData.password) {
        console.log(formData);
    } else {
        alert('All form fields must be filled in')
    }
    
  event.target.reset();
}