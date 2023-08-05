const back = document.getElementById("back");

back.addEventListener("click", () => {
  location.href = "sign-password.html";
});

const userPhone = document.getElementById("user_phone");

const receivePhoneNumber = location.href.split("?")[1];

document.addEventListener("DOMContentLoaded", function () {
  const userPhone = document.getElementById("user_phone");
  userPhone.value = receivePhoneNumber;
});

const complete = document.getElementById("complete");

complete.addEventListener("click", () => {
  location.href = "signup_complete.html";
});
