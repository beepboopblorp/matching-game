const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");

if (card1 && card2) {
    card1.addEventListener("click", matchfirst);
}

function matchfirst() {
    card1.innerText = "red";
    card2.addEventListener("click", matchsecond);
}

function matchsecond() {
    card2.innerText = "blue";
    if (card2.innerText == "green") {
        card1.style.borderColor = "green";
        card2.style.borderColor = "green";
        card1.style.borderWidth = "10px";
        card2.style.borderWidth = "10px";
    } else {
        card1.style.backgroundColor = "red";
        card2.style.backgroundColor = "red";
        setTimeout(() => {
            card1.style.backgroundColor = "";
            card2.style.backgroundColor = "";
            card1.innerText = "";
            card2.innerText = "";
        }, 2000);
    }
}