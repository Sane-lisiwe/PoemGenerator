
function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: " The Tomb said to the Rose",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
