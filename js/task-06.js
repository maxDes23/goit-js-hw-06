const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const expectedLength = parseInt(input.getAttribute("data-length"), 6);
  const currentLength = input.value.length;

  if (currentLength === expectedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
