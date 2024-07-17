const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


const currentyear = document.querySelector("#currentyear");
const today = new Date()

currentyear.innerHTML = `@ <span
class="highlight">${today.getFullYear()}</span>`;

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;


currentyear.innerHTML = `@<span  class="highlight">${today.getFullYear()}</span>`;

const trips = [
    {
      id: '1/2-day-trip',
      name: "1/2 Day Trip",
    },
    {
      id: 'day-trip',
      name: "1 Day Trip",

    },
    {
      id: '2-day-trip',
      name: "2 Day Trip",
    },
 
  ];

let selectTag = document.getElementById('select-trip');
  
  trips.forEach (trip => {
      let opt = document.createElement("option");
      opt.value = trip.id; // the index
      opt.innerHTML = trip.name;
      selectTag.append(opt);
  });

function save_data() {
const visitShown = document.querySelector("form");

let numVisits = Number(window.localStorage.getItem("visits-1s"));

if (numVisits < 1) {
  visitShown.textContent = numVisits;
}
  else {
    visitShown.textContent = 'First visit';
  
  }
numVisits++;
localStorage.setItem('visits-1s', numVisits)}

