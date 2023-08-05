const back = document.getElementById("back");
const phone = document.getElementById("user_phone");
const buttons = document.getElementById("buttons");

back.addEventListener("click", () => {
  location.href = "mypage.html";
});

var format = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;

buttons.addEventListener("click", () => {
  if (format.test(phone.value)) {
    location.href = "mypage.html";
  } else {
    img.style.filter = "none";
    error.style.color = "red";
  }
});
