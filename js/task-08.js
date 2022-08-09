const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Ви ввели не всі потрібні дані");
  }
  event.currentTarget.reset();
}
