
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

const temples = [
    {
      templeName: "1/2 Day Trip",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/800x500/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Day Trip",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
       imageUrl: "images/fish_medium.webp"
    },
    {
      templeName: "2 Day Trip",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
   
    
      ]

createTempleCard(temples);

function checkOld(value) {
  let num = Number(value);
  alert(value);
  return num >= 2000;
}
function checkNew(value){
  alert(value);
  return value = "2000";
}
const homeLink = document.querySelector("#home");

function createTempleCard(filteredTemples){
  document.querySelector(".container").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3")
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${ temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Area:</span>  ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);
          
    document.querySelector(".container").appendChild(card);   
    });
      }

