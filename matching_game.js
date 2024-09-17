let cardtype, randnum, cardid;
let randnums = [], cardnums = [], artnames = [], emptycards = [];
let ccc = 0; //ccc = clicked card counter
let artcompared, cardcompared;

class info {
    constructor(artnum = "", name = "", date = "", material = "stone", form = "pretty", content = "cat", art_function = "death", context = "trade") {
        this.name = name;
        this.date = date;
        this.material = material;
        this.form = form;
        this.content = content;
        this.function = art_function;
        this.context = context;
        this.artnum = artnum;
    }
}

let art = [new info(0,"red",1900), new info(1,"orange",1910), new info(2,"yellow",1920), new info(3,"green",1930), new info(4,"blue",1940), new info(5,"indigo",1950), new info(6,"violet",1960), new info(7,"black",1970), new info(8,"brown",1980), new info(9,"white",1990), new info(10,"pink",2000)];

if (document.getElementById("submit_type")) {document.getElementById("submit_type").addEventListener("click", setcardtype);}

for (let i=0; i < 18; i++) {
    let matchcardid = "card" + (i + 1);
    document.getElementById(matchcardid).addEventListener("click", clickyfuntime);
}

function setcardtype() {
    let properties = document.getElementsByName("select_type");
    for (let i=0; i<properties.length; i++) {
        if (properties[i].checked) {
            cardtype = properties[i].value;
        } // add an html red error  message
    }

    if (cardtype) {
        console.log(cardtype);
        
        let choosetype = document.getElementsByName("select_type");
        for (let i=0; i<choosetype.length; i++) {choosetype[i].style.display = "none";}

        let cardslist = document.getElementsByClassName("matchcard");
        for (let i=0; i<cardslist.length; i++) {cardslist[i].style.display = "inline";}

        randassign();
        randcardassign();
        assigntocard();
    }
}

function randassign() {
    while (randnums.length < 10) {
        randnum = Math.floor(Math.random() * art.length);
        if (!randnums.includes(randnum)) {
            randnums.push(randnum);
        }
    }

    randnums.splice((randnums.length - 1),1);
}

function randcardassign() {
    while (cardnums.length < 10) {
        randnum = Math.floor(Math.random() * 18);
        if (!cardnums.includes(randnum)) {
            cardnums.push(randnum);
        }
    }

    cardnums.splice((cardnums.length - 1),1);
}

function assigntocard() {
    for (let i=0; i < 9; i++) {
        if (cardnums[i]) {
            cardid = "card" + (cardnums[i] + 1);
        } else if (cardnums[i] === 0) {
            cardid = "card1"
        }

        if (cardid) {
            switch (cardtype) {
                case "dates":
                    document.getElementById(cardid).innerText = art[randnums[i]].date;
                    break;

                case "materials":
                    document.getElementById(cardid).innerText = art[randnums[i]].material;
                    break;   

                case "forms":
                    document.getElementById(cardid).innerText = art[randnums[i]].form;
                    break;

                case "contents":
                    document.getElementById(cardid).innerText = art[randnums[i]].content;
                    break;

                case "functions":
                    document.getElementById(cardid).innerText = art[randnums[i]].function;
                    break;
                
                case "contexts":
                    document.getElementById(cardid).innerText = art[randnums[i]].context;
                    break;
            }

            artnames.push(art[randnums[i]].name);
        }
    }

    for (let i=0; i<18; i++) {
        cardid = "card" + (i + 1);
        if (!document.getElementById(cardid).innerText) {
            emptycards.push(cardid);
        }
    }

    for (let i=0; i < 9; i++) {
        switch (cardtype) {
            case "dates":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " date";
                break;

            case "materials":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " materials";
                break;   

            case "forms":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " forms";
                break;

            case "contents":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " contents";
                break;

            case "functions":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " functions";
                break;
            
            case "contexts":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " contexts";
                break;
        }
    }
}

function clickyfuntime() {
    let cardslist = document.getElementsByClassName("matchcard");
    ccc = 0;
    for (let i=0; i < 18; i++) {
        if ((cardslist[i].style.color == "white") && (cardslist[i].style.borderColor != "green")) {
            ccc += 1;
        }
    }

    if (ccc == 0) {
        this.style.color = "white";
        this.style.backgroundColor = "#333";
        this.style.borderWidth = "5px";
    } else if (ccc == 1) {
        this.style.color = "white";
        this.style.backgroundColor = "#333";
        this.style.borderWidth = "5px";
        correctcheck(this); 
    }
}

function correctcheck(thisclicked) {
    let cardslist = document.getElementsByClassName("matchcard");
    for (let i=0; i < art.length; i++) {
        switch (cardtype) {
            case "dates":
                for (let y=0; y < 18; y++) {
                    if ((cardslist[y].style.color == "white") && (cardslist[y].style.borderColor != "green") && (cardslist[y] != thisclicked)) {
                        cardcompared = cardslist[y];
                        for (let x=0; x < art.length; x++) {
                            if (thisclicked.innerText.includes(art[x].date) || thisclicked.innerText.includes(art[x].name)) {
                                artcompared = art[x];
                            }
                        }
                    }
                }
                if ((thisclicked.innerText.includes(artcompared.date) && cardcompared.innerText.includes(artcompared.name)) || 
                    (thisclicked.innerText.includes(artcompared.name) && cardcompared.innerText.includes(artcompared.date))) {
                    istrue(thisclicked, cardcompared);
                } else {
                    isfalse(thisclicked, cardcompared);
                }
                break;
            case "materials":
                break;
            case "forms":
                break;
            case "contents":
                break;
            case "functions":
                break;
            case "contexts":
                break;
        }
    }
}

function istrue(thisclicked, otherclicked) {
    thisclicked.style.borderColor = "green";
    thisclicked.style.backgroundColor = "white";
    thisclicked.style.color = "black";

    otherclicked.style.borderColor = "green";
    otherclicked.style.backgroundColor = "white";
    otherclicked.style.color = "black";
}

function isfalse(thisclicked, otherclicked) {
    setTimeout(() => {
        thisclicked.style.backgroundColor = "red";
        otherclicked.style.backgroundColor = "red";
        setTimeout(() => {
            thisclicked.style.borderWidth = "2px";
            thisclicked.style.borderColor = "rebeccapurple";
            thisclicked.style.backgroundColor = "lightgrey";
            thisclicked.style.color = "lightgrey";

            otherclicked.style.borderWidth = "2px";
            otherclicked.style.borderColor = "rebeccapurple";
            otherclicked.style.backgroundColor = "lightgrey";
            otherclicked.style.color = "lightgrey";
        }, 750);
    }, 250);
}