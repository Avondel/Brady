// common function to apply one transition rule
function transition(elem, styleProps) {
  return new Promise((resolve, reject) => {
    function handleTransitionEnd() {
      console.log("Transition Ended...");
      resolve(elem);
    }
    elem.addEventListener("transitionend", handleTransitionEnd, { once: true });
    Object.entries(styleProps).forEach(([prop, value]) => {
      elem.style.setProperty(prop, value);
    });
  });
}

// common function to apply animations to an element.
function animate(elem, animation) {
  return new Promise((resolve, reject) => {
    function handleAnimationEnd() {
      console.log("animation ended...");
      resolve(elem);
    }
    elem.addEventListener("animationend", handleAnimationEnd, { once: true });
    elem.classList.add(animation);
  });
}

async function init() {
  const content = document.querySelector(".content");
  const drawer = document.querySelector(".drawer");
  const para = content.querySelector("p");
  const header = drawer.querySelector("header");
  // first fadeout text
  await animate(para, "fadeOut");
  // shrink height
  await transition(content, {
    height: "0px",
    margin: "0px",
    padding: "0px"
  });
  console.log("now shrinking width");
  // then shrink width
  await transition(drawer, {
    width: "400px"
  });
  // change header colour
  await animate(header, "fill");
  // change text to "maximize"'
  document.querySelector("#minimize").innerText = "maximize";
}

document.addEventListener("DOMContentLoaded", (e) => {
  document.querySelector("#minimize").addEventListener("click", init);
});
