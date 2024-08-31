//Toggle mode
const toggle = document.getElementById("toggle");
const bg = document.getElementById("bg");
const card = document.getElementById("card");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const about = document.getElementById("about");
const btns = document.querySelectorAll(".btn");

toggle.addEventListener("click", () => {
  if (toggle.classList.contains("toggle-light")) {
    toggle.classList.remove("toggle-light");
    toggle.classList.add("toggle-dark");

    bg.classList.remove("bg-light");
    bg.classList.add("bg-dark");

    card.classList.remove("card-light");
    card.classList.add("card-dark");

    title.classList.remove("text-primary-light");
    title.classList.add("text-primary-dark");

    subtitle.classList.remove("text-secondary-light");
    subtitle.classList.add("text-secondary-dark");

    about.classList.remove("text-primary-light");
    about.classList.add("text-primary-dark");

    btns.forEach((btn) => {
      btn.classList.remove("btn-light");
      btn.classList.add("btn-dark");
      btn.children[0].classList.remove("icon-light");
      btn.children[0].classList.add("icon-dark");
    });
  } else {
    toggle.classList.remove("toggle-dark");
    toggle.classList.add("toggle-light");

    bg.classList.remove("bg-dark");
    bg.classList.add("bg-light");

    card.classList.remove("card-dark");
    card.classList.add("card-light");

    title.classList.remove("text-primary-dark");
    title.classList.add("text-primary-light");

    subtitle.classList.remove("text-secondary-dark");
    subtitle.classList.add("text-secondary-light");

    about.classList.remove("text-primary-dark");
    about.classList.add("text-primary-light");

    btns.forEach((btn) => {
      btn.classList.remove("btn-dark");
      btn.classList.add("btn-light");
      btn.children[0].classList.remove("icon-dark");
      btn.children[0].classList.add("icon-light");
    });
  }
});
