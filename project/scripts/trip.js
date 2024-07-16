
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

const trips = [
    {
      tripName: "1/2 Day Trip",
      location: "Upper Snake River",
      availabilty: "September-December",
      cost: "$ 150",
      imageUrl:
      "images/river.webp"
    },
    {
      tripName: "Day Trip",
      location: "Lower Snake River",
      availabilty: "September-December",
      cost: "$ 275",
        imageUrl: "images/river_day2.webp"
    },
    {
      tripName: "2 Day Trip",
      location: "Lower Snake Resevoir",
      availabilty: "September-December",
      cost: "$ 400",
      imageUrl:
      "images/river_day_5.webp"
    },
   
    
      ]

createTripsCard(trips);

const homeLink = document.querySelector("#home");

function createTripsCard(trips){
  document.querySelector(".container").innerHTML = "";
  trips.forEach(trip => {
    let card = document.createElement("section");
    let name = document.createElement("h3")
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let cost = document.createElement("button");
    let img = document.createElement("img");

    name.textContent = trip.tripName;
    location.innerHTML = `<span class="label">Location:</span> ${trip.location+'?tripcost='+trip.cost}`;
    dedicated.innerHTML = `<span class="label">Availability:</span> ${trip.availabilty}`;
    cost.innerHTML = `<span class="label">Cost:</span> ${trip.cost}`;
    cost.setAttribute("id", "btn");
    cost.setAttribute("onclick", "sendMe()");
    img.setAttribute("src", trip.imageUrl);
    img.setAttribute("alt", `${trips.tripName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(cost);
    card.appendChild(img);
          
    document.querySelector(".container").appendChild(card);   
    })
}; 

function sendMe(){
  alert('send');
  this.location.href="contact.html";
  document.getElementById("btn").onclick = function() {
        location.href = "contact.html";
    };
}

//document.getElementById("btn").onclick = function() {
//        location.href = "contact.html";
//    };

//alert(FormData());

