function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector('.close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
closeModal.addEventListener('click', crossClose);

function crossClose() {
  modalbg.style.display = "none";
}


// Form validation

    // Retrieve nodes for validation

      // firstname
const firstName = document.querySelector('#first');
const prenomDiv = document.querySelector('#div-prenom');
      // lastname
const lastName = document.querySelector('#last');
const nomDiv = document.querySelector('#div-nom');
      //email
const email = document.querySelector('#email');
const emailDiv = document.querySelector('#div-email');
      // birthdate 
const birthDate = document.querySelector('#birthdate');
const birthDateDiv = document.querySelector('#birthdate-div');
      // nbre of tournaments
const tournamentNr = document.querySelector('#quantity');
const tournamentDiv = document.querySelector('#tournament-div');
      // cities
const radios = document.getElementsByName('location');
const checkboxDiv = document.querySelector('#checkbox-div');
      // terms of use
const checkbox1Div = document.querySelector('#checkbox1-div');
const checkbox1 = document.querySelector("#checkbox1");

