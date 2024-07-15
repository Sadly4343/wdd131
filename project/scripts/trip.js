
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
      tripName: "1/2 Day Trip",
      location: "Upper Snake River",
      dedicated: "2005, August, 7",
      imageUrl:
      ""
    },
    {
      tripName: "Day Trip",
      location: "Lower Snake River",
      dedicated: "1888, May, 21",
       imageUrl: "images/fish_medium.webp"
    },
    {
      tripName: "2 Day Trip",
      location: "Lower Snake Resevoir",
      dedicated: "2015, June, 7",
      imageUrl:
      ""
    },
   
    
      ]

createTempleCard(temples);

const homeLink = document.querySelector("#home");

function createTempleCard(Temples){
  document.querySelector(".container").innerHTML = "";
  Temples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3")
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
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

