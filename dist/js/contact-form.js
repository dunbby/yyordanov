// Handle Form Submission via Netlify
const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => showAlert())
    .catch((error) => showAlert(error));
};

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);

// Submit Button Interaction
function showAlert(response) {
  const btn = document.querySelector(".contact-btn");
  const sendBtn = document.querySelector(".send-btn");
  const alertSuccess = document.querySelector(".alert-success");
  const alertError = document.querySelector(".alert-error");

  sendBtn.classList.add("hidden");
  btn.classList.add("button-loading");

  setTimeout(() => {
    btn.classList.remove("button-loading");

    if(response) {
      alertError.classList.remove("hidden");
    } 
    else {
      alertSuccess.classList.remove("hidden");
    }
  }, 2200);
}