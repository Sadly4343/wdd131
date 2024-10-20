const currentyear = document.querySelector("#currentyear");
const today = new Date()

currentyear.innerHTML = `@ <span
class="highlight">${today.getFullYear()}</span>`;

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;



function calculateWindChill(temperature, wind_speed) {
    if (temperature <= 50)
        if (wind_speed >= 5)
            return (35.74 + 0.6215 * temperature) - 35.75 * (wind_speed ** 0.16) + 0.4275 * (temperature * wind_speed ** 0.16);
        else
            log.console("Incorrect")
}

let value = calculateWindChill(25, 5);


document.getElementById('windchill').innerHTML = value

const daycount = 5; // Example value
const targetEvent = 'New Year'; // Example value
const daysUntil = `There are ${daycount} days until ${targetEvent}!`;
console.log(daysUntil);