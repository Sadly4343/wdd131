
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


const currentyear = document.querySelector("#currentyear");
const today = new Date();

currentyear.innerHTML = `@ <span class="highlight">${today.getFullYear()}</span>`;

const lastModifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModifiedDate.toLocaleDateString("en-US");

const trips = [
    {
      tripName: "1/2 Day Trip",
      location: "Upper Snake River",
      availability: "September-December",
      cost: "$150",
      imageUrl:
      "images/river.webp"
    },
    {
      tripName: "Day Trip",
      location: "Lower Snake River",
      availability: "September-December",
      cost: "$275",
        imageUrl: "images/river-day2.webp"
    },
    {
      tripName: "2 Day Trip",
      location: "Lower Snake Resevoir",
      availability: "September-December",
      cost: "$400",
      imageUrl:
      "images/river-day-5.webp"
    },
   
    
      ];

createTripsCard(trips);
const homeLink = document.querySelector("#home");

function createTripsCard(trips){
  document.querySelector(".container").innerHTML = "";
  trips.forEach(trip => {
    let card = document.createElement("section");
    let name = document.createElement("h3")
    let location = document.createElement("p");
    let availability = document.createElement("p");
    let cost = document.createElement("button");
    let img = document.createElement("img");

    name.textContent = trip.tripName;
    location.innerHTML = `<span class="label">Location:</span> ${trip.location}`;
    availability.innerHTML = `<span class="label">Availability:</span> ${trip.availability}`;
    cost.innerHTML = `<span class="label">Cost:</span> ${trip.cost}`;
    cost.setAttribute("class", "btn");
    cost.setAttribute("onclick", "sendMe()");
    img.setAttribute("src", trip.imageUrl);
    img.setAttribute("alt", `${trips.tripName} Trips`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(availability);
    card.appendChild(cost);
    card.appendChild(img);
          
    document.querySelector(".container").appendChild(card);   
    })
}; 

function sendMe(){
  window.location.href = "contact.html";
    };



