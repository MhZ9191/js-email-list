/*
Descrizione
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

    Abbellire con CSS o Bootstrap
    Inserire un bottone che al click faccia il fetch altre 10 mail 
    (sostituendo le altre)
    Buon Lavoro
*/

const subContainer = document.getElementById("subcontainer");
const btn = document.querySelector(".btn");
const regenerateBtn = document.querySelector(".regenerate");
btn.addEventListener("click", generate);

regenerateBtn.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    const firstC = subContainer.firstChild;
    subContainer.removeChild(firstC);
  }
  generate();
});

function generate() {
  for (let i = 0; i < 10; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((res) => {
        const mail = res.data.response;
        divMailGenerator(mail);
      });
  }
}

function divMailGenerator(mail) {
  const test = document.createElement("div");
  test.innerText = mail;
  subContainer.append(test);
}
