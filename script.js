function displayPoem(response){
    new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}




function generatePoem(event) {
  event.preventDefault();
let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "9ate0486673b29597db0of00a07a27ea";
  let prompt = `User instructions : Generate an English poem about ${instructionInput.value}`;
  let context = "You are a romantic Poem expert and love to write short poems.Your mission is to generate a 4 line poem in basic html.Make sure to follow the user instructions.Please remove the word html and the back apostrophes at the beginning and end of the poem" ;
  let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating an English poem about ${instructionInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
  
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
