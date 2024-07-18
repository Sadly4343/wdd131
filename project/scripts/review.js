let numVisits = Number(window.localStorage.getItem("visits-1s"));


let visitTag = document.getElementById('visits');
visitTag.innerHTML = numVisits;
if (numVisits == 1)
    visitTag.innerHTML = 'first visit'
else
    visitTag.innerHTML = numVisits;