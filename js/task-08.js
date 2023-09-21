const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const userData = {}; //

  formData.forEach((value, key) => {
    userData[key] = value;
  });

  console.log(userData);

  form.reset();
});
