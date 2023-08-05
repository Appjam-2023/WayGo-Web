const back = document.getElementById("back");

back.addEventListener("click", () => {
  location.href = "mypage.html";
});

const visible = document.getElementById("visible");
const password = document.getElementById("password");
visible.addEventListener("click", () => {
  if (password.type === "text") password.type = "password";
  else password.type = "text";
});

const next = document.getElementById("next");
next.addEventListener("click", () => {
  location.href = "mypage.html";
});
