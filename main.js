// need: Title at top of page - once
// for each----
// picture
// name
// email
// address 3 lines
// phone number
// o- SSN

// customers = array of objects

// target HTML node
// let body = document.getElementsByTagName('body');
// header
let header = document.createElement("header");
// header.textContent = "Internal Company Directory";
let bodyJS = document.getElementById("body");
bodyJS.appendChild("header");
// // make profile nodes
// customers.map((profile) =>{
//   let customerProfile = document.createElement("div")
//   customerProfile.setAttribute('picture', picture.medium)

// })
// strip off != array
let dataArray = customers.results;

// create a piece of HTML ready to drop into a list item
function createProfile(person) {

  let picture = person.picture.large;
  let name = person.name.first + person.name.last;
  let email = person.email;
  let location = person.location.street;
  let city = person.location.city;
  let state = person.location.state;
  let postcode = person.location.postcode;
  let phone = person.phone;
  // let ssn = person.id.value;

  let genHTML = `
  <li class="list-item">
    <img src="${picture}" alt="">
    <h2 class="text" id="name">${name}</h2>
    <hr>
    <p class="text" id="email">${email}</p>
    <p class="text" id="street">${location}</p>
    <p class="text" id="street">${city}, ${state} ${postcode} </p>
    <p class="text" id="phone">${phone}</p>
  </li>
  `;
  return genHTML
}

let list = document.getElementById("profile-list");

// go through the dataArray call createProfile for each
function readArray(array){

  array.forEach( function(dataArray){
    list.innerHTML += createProfile(dataArray);
  });

}

readArray(dataArray);
