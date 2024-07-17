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

const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      'avg-rating': 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

let selectTag = document.getElementById('select-trip');
  
  products.forEach (product => {
      let opt = document.createElement("option");
      opt.value = product.id; // the index
      opt.innerHTML = product.name;
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

