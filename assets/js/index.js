window.addEventListener("DOMContentLoaded", () => {
  // FORM SUBMIT
  const formBtn = document.querySelector(".form__button");
  const succesAlert = document.querySelector(".form__message");

  // const formBtn2 = document.querySelector(".form-btn2");
  // const succesAlert2 = document.querySelector(".form__message2");

  formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    succesAlert.style.display = "block";
  });

  // formBtn2.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   succesAlert2.style.display = "block";
  // });

  //COOKIES
  const cookieBar = document.querySelector(".cookie-bar");

  if (localStorage.getItem("kangaroo-cookies")) {
    cookieBar.style.display = "none";
  }
  cookieBar.querySelectorAll(".btn").forEach((item) => {
    item.addEventListener("click", () => {
      localStorage.setItem("kangaroo-cookies", true);
      cookieBar.style.display = "none";
    });
  });
});
