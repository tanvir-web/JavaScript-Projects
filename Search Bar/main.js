"use strict";

const searchText = document.querySelector("#text");
const contentBox = document.querySelector(".content");

const url = "http://hp-api.herokuapp.com/api/characters";
let data = [];

// Search Filter
searchText.addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filtered = data.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchData) ||
      character.house.toLowerCase().includes(searchData)
    );
  });

  displayData(filtered);
});

// Fetch API
const loadChar = async () => {
  try {
    const response = await fetch(url);
    data = await response.json();
    displayData(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// Display Data
const displayData = (profiles) => {
  const html = profiles
    .map((profile) => {
      if (profile.image && profile.house) {
        return `<div class="col">
          <figure>
            <img src="${profile.image}" alt="Profile" class="img-fluid"/>
          </figure>
          <h2 class="h5">${profile.name}</h2>
          <p>${profile.house}</p>
        </div>
      `;
      }
    })
    .join("");
  contentBox.innerHTML = html;
};
loadChar();
