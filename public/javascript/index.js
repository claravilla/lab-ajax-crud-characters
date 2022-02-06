
const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then((foundData) => {
      let data = foundData.data
      console.log(data);
      for (i=0;i<data.length;i++) {
        let newCard = document.createElement("div");
        newCard.classList.add("character-info");
        newCard.innerHTML =`
        <div class="name">Character Name: ${data[i].name}</div>
          <div class="occupation">Character Occupation: ${data[i].occupation}</div>
          <div class="cartoon">Is a Cartoon: ${data[i].cartoon}</div>
          <div class="weapon">Character Weapon: ${data[i].weapon}</div>
        </div>
       `
       document.querySelector(".characters-container").appendChild(newCard);
      }
    })
     .catch((error)=>{
      console.log(error);
    })
   
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
