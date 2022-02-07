const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((foundData) => {
          let data = foundData.data;
          console.log(data);
          document.querySelector(".characters-container").innerHTML = "";
          for (i = 0; i < data.length; i++) {
            let newCard = document.createElement("div");
            newCard.classList.add("character-info");
            newCard.innerHTML = `
        <div class="id">Character Id: ${data[i].id}</div>
        <div class="name">Character Name: ${data[i].name}</div>
          <div class="occupation">Character Occupation: ${data[i].occupation}</div>
          <div class="cartoon">Is a Cartoon: ${data[i].cartoon}</div>
          <div class="weapon">Character Weapon: ${data[i].weapon}</div>
        </div>
       `;
            document
              .querySelector(".characters-container")
              .appendChild(newCard);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      let id = document.getElementById("character-id").value;
      charactersAPI
        .getOneRegister(id)
        .then((foundData) => {
          let data = foundData.data;
          let newCard = document.createElement("div");
          newCard.classList.add("character-info");
          newCard.innerHTML = `
        <div class="id">Character Id: ${data.id}</div>
        <div class="name">Character Name: ${data.name}</div>
          <div class="occupation">Character Occupation: ${data.occupation}</div>
          <div class="cartoon">Is a Cartoon: ${data.cartoon}</div>
          <div class="weapon">Character Weapon: ${data.weapon}</div>
        </div>
       `;
          document.querySelector(".operation").appendChild(newCard);
        })
        .catch((error) => {
          console.log(error);
        });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      let id = document.getElementById("character-id-delete").value;
      charactersAPI
        .deleteOneRegister(id)
        .then(() => {
          let newMessage = document.createElement("div");
          newMessage.innerHTML = "Character has been deleted";
          document.querySelector(".operation.delete").appendChild(newMessage);
        })
        .catch((error) => {
          console.log(error);
          let newError = document.createElement("div");
          console.log(newError);
          newError.innerHTML = `<p>${error}</p>`;
          document.querySelector(".operation.delete").appendChild(newError);
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let name = document.getElementById("new-name").value;
      let occupation = document.getElementById("new-occupation").value;
      let weapon = document.getElementById("new-weapon").value;
      let cartoon = document.getElementById("new-cartoon").checked;

      charactersAPI
        .createOneRegister({ name, occupation, weapon, cartoon })
        .then((newData) => {
          let character = newData.data;
          let newCharacter = document.createElement("div");
          newCharacter.classList.add("character-info");
          newCharacter.innerHTML = `
        <div class="id">Character Id: ${character.id}</div>
        <div class="name">Character Name: ${character.name}</div>
          <div class="occupation">Character Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon: ${character.cartoon}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>
       `;
          document
            .querySelector("#new-character-display")
            .appendChild(newCharacter);
        })
        .catch((error) => {
          console.log(error);
        });
    });
});
