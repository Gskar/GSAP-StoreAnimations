const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");
let currentDate = document.querySelector(".cover-date");

const tl = new TimelineLite({ paused: true, reversed: true });

tl.to(".cover", 1, {
  width: "60%",
  ease: Power2.easeOut,
})
  .to(
    "nav",
    1,
    {
      height: "100%",
      borderRadius: "0px",
      ease: Power2.easeOut,
    },
    "-=0.5"
  )
  .fromTo(
    ".nav-open",
    0.5,
    {
      opacity: 0,
      x: -50,
      ease: Power2.easeOut,
    },
    {
      opacity: 1,
      x: 0,

      onComplete: function () {
        navOpen.style.pointerEvents = "auto";
        navButton.textContent = "Close";

        console.log("done");
      },
    }
  );

navButton.addEventListener("click", () => {
  toggleTween(tl);
});

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
  navButton.textContent = "Shop";
}

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();
today = `${dd}/${mm}/${yyyy}`;
currentDate.textContent = today;
