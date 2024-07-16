
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

function submitMyForm() {
    //location.href="trip.html";
    let frm = document.getElementById("myForm");
    let phone = document.getElementById("myPhone");
    phone.value = "360.302.0313";
    frm.action="trip.html";
    frm.submit();
}

document.getElementById("btn").onclick = function() {
    //location.href = "trip.html";
    submitMyForm();
}
const currentyear = document.querySelector("#currentyear");
const today = new Date()

currentyear.innerHTML = `@ <span
class="highlight">${today.getFullYear()}</span>`;

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;

