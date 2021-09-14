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


   // Manage form submission

   document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
  
      // Validation conditions
  
        // input values does not accept blanks
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
  
      //define email format
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
      //define tournamentNr format
    const tournamentNrFormat = /\d+/g;

  
      // check firstname
  
      if(firstNameValue.length <2){
        // Error message
        prenomDiv.setAttribute('data-error', 'merci de mettre 2 caractères minimum');
        prenomDiv.setAttribute('data-error-visible', 'true');
      } else {
        prenomDiv.setAttribute('data-error-visible', 'false');
      }
  
         // check lastname
  
      if(lastNameValue.length <2){
        nomDiv.setAttribute('data-error', 'merci de mettre 2 caractères minimum');
        nomDiv.setAttribute('data-error-visible', 'true');
      } else {
        nomDiv.setAttribute('data-error-visible', 'false');
      }
        // check email
  
      if (mailFormat.test(email.value)){
        emailDiv.setAttribute('data-error-visible', 'false');
      } else {
        emailDiv.setAttribute('data-error', 'merci de donner une adresse mail valide');
        emailDiv.setAttribute('data-error-visible', 'true');
      }
  
        // check date
  
        console.log(birthDate.value);
        if (birthDate.value ===""){
          birthDateDiv.setAttribute('data-error', 'merci de donner une date valide');
          birthDateDiv.setAttribute('data-error-visible', 'true');
        } else {
          birthDateDiv.setAttribute('data-error-visible', 'false');
        }
  
        // check number of tournaments
  
        if (tournamentNrFormat.test(tournamentNr.value)){
          tournamentDiv.setAttribute('data-error-visible', 'false');
        } else {
          tournamentDiv.setAttribute('data-error', 'merci de donner un nombre entre 0 et 99');
          tournamentDiv.setAttribute('data-error-visible', 'true');
        }
  
        // check city 
  
        let radioValid = false;
  
        for (let i = 0; i<radios.length; i++) {
          
          if(radios[i].checked) {
            radioValid = true;
            checkboxDiv.setAttribute('data-error-visible', 'false');
            break;
          } 
        } if(!radioValid) {
          checkboxDiv.setAttribute('data-error', 'merci de choisir une ville');
          checkboxDiv.setAttribute('data-error-visible', 'true');
        }
  
        // check usage conditions 
  
        if(!checkbox1.checked) {
          checkbox1Div.setAttribute('data-error', 'merci de lire et d\'accepter les conditions d\'usage');
          checkbox1Div.setAttribute('data-error-visible', 'true');
        } else {
          checkbox1Div.setAttribute('data-error-visible', 'false');
        }
       
  })

