const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  let isFormValid = true;

  const userData = {};

  formData.forEach((value, key) => {
    userData[key] = value;

    if (value.trim() === "") {
      isFormValid = false;
    }
  });

  if (!isFormValid) {
    alert("All fields must be filled in!");
    return;
  }

  console.log(userData);

  form.reset();
});
