windSpeed=50
temperature=50

const computeWindChill = function(windSpeed, temperature) {
    // Fahrenheit Only
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
  };
let windChill = computeWindChill(windSpeed, temperature) 
windSpeed=50
temperature=50
let courseName = "yes"
let lastName = "no"
let total = `Welcome to the  ${courseName} ${lastName}!`
document.getElementById("dose").innerHTML = total;

