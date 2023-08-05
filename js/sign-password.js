const back = document.getElementById("back");

back.addEventListener("click", () => {
  location.href = "sign-phone.html";
});

const visible = document.getElementById("visible");
const password = document.getElementById("password");
visible.addEventListener("click", () => {
  if (password.type === "text") password.type = "password";
  else password.type = "text";
});

const receivePhoneNumber = location.href.split("?")[1];

document.addEventListener("DOMContentLoaded", function () {
  const userPhone = document.getElementById("user_phone");
  userPhone.value = receivePhoneNumber;
});

const next = document.getElementById("next");
next.addEventListener("click", () => {
  location.href = `sign_parentsphone.html?${receivePhoneNumber}`;
});
