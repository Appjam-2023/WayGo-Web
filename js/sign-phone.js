const back = document.getElementById("back");
const phone = document.getElementById("user_phone");
const error = document.getElementById("error");
const img = document.getElementById("error-img");
const button2 = document.getElementById("buttons");

back.addEventListener("click", () => {
  location.href = "sign-select.html";
});

var format = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;

button2.addEventListener("click", () => {
  if (format.test(phone.value)) {
    location.href = `sign-password.html?${phone.value}`;
  } else {
    img.style.filter = "none";
    error.style.color = "red";
  }
});
