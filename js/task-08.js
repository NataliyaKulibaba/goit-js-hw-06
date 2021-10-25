'use strict'
const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }


const formData = {
    email: email.value,
    password: password.value,
  };
  
   
  console.log(formData);
  event.currentTarget.reset();
}
