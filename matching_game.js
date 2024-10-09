let cardtype, randnum, cardid;
let randnums = [], cardnums = [], artnames = [], emptycards = [];
let ccc = 0; //ccc = clicked card counter
let artcompared, cardcompared;

class info {
    constructor(artnum = "", name = "", date = "", location = "", material = "", form = "form", content = "content", art_function = "function", context = "context") {
        this.name = name;
        this.date = date;
        this.location = location;
        this.material = material;
        this.form = form;
        this.content = content;
        this.function = art_function;
        this.context = context;
        this.artnum = artnum;
    }
}



let art = [
    new info(1,
        "Apollo 11 Stones",
        "Namibia",
        "25,500 to 25,300 B.C.E.", 
        "charcoal on stone"),

    new info(2,
        "Great Hall of the Bulls",
        "Lascaux, France",
        "15,000 to 13,000 B.C.E.",
        "rock painting"), 

    new info(3,
        "Camelid Sacrum in the Shape of a Canine",
        "Tuquixquiac, central Mexico",
        "14,000 to 7,000 B.C.E.",
        "bone"), 

    new info(4,
        "Running Horned Woman",
        "Tassilli n'Ajjer, Algeria",
        "6,000 to 4,000 B.C.E.",
        "pigment on rock"), 

    new info(5,
        "Beaker with Ibex Motifs",
        "Susa, Iran",
        "4,200 to 3,500 B.C.E.",
        "painted terra cotta"), 

    new info(6,
        "Anthropomorphic Stele",
        "Arabian Peninsula",
        "4,000 to 3,001 B.C.E.",
        "sandstone"), 

    new info(7,
        "Jade Cong",
        "Liangzhu, China",
        "3,000 to 2,200 B.C.E.",
        "carved jade"), 

    new info(8,
        "Stonehenge",
        "Wiltshire, UK",
        "2,500 to 1,600 B.C.E.",
        "sandstone"), 

    new info(9,
        "The Ambum Stone",
        "Ambum Valley, Enga Province, Papua New Guinea",
        "1500 B.C.E.",
        "greywacke"), 

    new info(10,
        "Tiatilco Female Figurine",
        "Site of Tiatilco, Central Mexico",
        "1200 to 900 B.C.E.",
        "ceramic"), 

    new info(11,
        "Terra Cotta Fragment",
        "Lapita, Solomon Islands, Reef Islands",
        "1000 B.C.E.",
        "incised terra cotta"),

    new info(12,
        "White Temple and its Ziggurat",
        "Uruk (modern Warka, Iraq)",
        "3,500 to 3,000 B.C.E.", 
        "mud brick"),

    new info(13,
        "Palette of King Narmer",
        "Predynastic Egypt",
        "3,000 to 2,920 B.C.E.",
        "greywacke"), 

    new info(14,
        "Statue of Votive Figures",
        "Square Temple at Eshnunna",
        "2,700 B.C.E.",
        "gypsum inlaid with shell and black limestone"), 

    new info(15,
        "Seated Scribe",
        "Old Kingdom, 4th Dynasty",
        "2,620 to 2,500 B.C.E.",
        "painted limestone"), 

    new info(16,
        "Standard of Ur",
        "Toyal Tombs at Ur",
        "2,600 to 2,400 B.C.E.",
        "wood inlaid with shell, lapis lazuli, and red limestone"), 

    new info(17,
        "Great Pyramids and Great Sphinx",
        "Giza, Egypt",
        "2,550 to 2,490 B.C.E.",
        "cut limestone"), 

    new info(18,
        "King Menkaure and Queen",
        "Old Kingdom, Fourth Dynasty",
        "2,490 to 2,472 B.C.E.",
        "greywacke"), 

    new info(19,
        "The Code of Hammurabi",
        "Babylon (modern Iran)",
        "1,792 to 1,750 B.C.E.",
        "basalt"), 

    new info(20,
        "Temple of Amun-Re and Hypostyle Hall",
        "Karnak near Luxor, Egypt",
        "1550 and 1250 B.C.E.",
        "cut sandstone and mud brick"), 

    new info(21,
        "Mortuary Temple of Hatshepsut",
        "near Luxor, Egypt",
        "1,473 to 1,458 B.C.E.",
        "sandstone, partially carved into a rock cliff, and red granite"), 

    new info(22,
        "Akhenaton, Nefertiti, and Three Daughters",
        "New Kingdom (Amarna)",
        "1,353 to 1,335 B.C.E.",
        "limestone"),

    new info(23,
        "Tutankhamun's Tomb, Innermost Coffin",
        "Egypt",
        "1,323 B.C.E.",
        "gold with inlay of enamel and semiprecious stone"), 

    new info(24,
        "Last Judgement of Hu-Nefer",
        "Tomb, page from Book of the Dead",
        "1,275 B.C.E.",
        "painted papyrus scroll"), 

    new info(25,
        "Lamassu from the Citadel of Sargon II",
        "Dur Sharrukin (modern Khorsabad, Iraq)",
        "720-705 B.C.E.",
        "alabaster"), 

    new info(26,
        "Athenian Agora",
        "Athens, Greece",
        "600 B.C.E. to 150 C.E.",
        "plan"), 

    new info(27,
        "Anavysos Kouros",
        "Archaic Greek",
        "530 B.C.E.",
        "painted marble"), 

    new info(28,
        "Peplos Kore",
        "Archaic Greece",
        "530 B.C.E.",
        "painted marble"), 

    new info(29,
        "Sarcophagus of the Spouses",
        "Etruscan",
        "520 B.C.E.",
        "terra cotta"), 

    new info(30,
        "Audience Hall (Apadana) of Darius and Xerxes",
        "Persepolis, Iran (Persia)",
        "520 to 465 B.C.E.",
        "limestone"), 

    new info(31,
        "Temple of Minerva and Sculpture of Apollo",
        "Veii near Rome, Italy",
        "510 to 500 B.C.E.",
        "wood, mud brick, and tufa with terra cotta sculpture"), 

    new info(32,
        "Tomb of the Triclinium",
        "Tarquinia, Italy",
        "480 to 470 B.C.E.",
        "tufa and fresco"),
    
    new info(33,
        "Niobides Krater",
        "Greece",
        "460 to 450 B.C.E.",
        "clay with red-figure technique and white highlights"), 

    new info(34,
        "Doryphoros (Spear Bearer)",
        "Polykleitos",
        "450 to 440 B.C.E.",
        "marble"), 

    new info(35,
        "Acropolis",
        "Athens, Greece",
        "447 to 410 B.C.E.",
        "marble"), 

    new info(36,
        "Grave Stele of Hegeso",
        "Greece",
        "410 B.C.E.",
        "marble and paint"), 

    new info(37,
        "Winged Victory of Samothrace",
        "Greece",
        "190 B.C.E.",
        "marble"), 

    new info(38,
        "Great Altar of Zeus and Athena at Pergamon",
        "present-day Turkey",
        "175 B.C.E.",
        "marble"), 

    new info(39,
        "House of the Vettii",
        "Pompeii, Italy",
        "62 to 79 C.E.",
        "cut stone and fresco"), 

    new info(40,
        "Alexander Mosaic",
        "Pompeii",
        "100 B.C.E.",
        "moasic"), 

    new info(41,
        "Seated Boxer",
        "Greece",
        "100 B.C.E.",
        "ceramic"), 

    new info(42,
        "Head of a Roman Patrician",
        "Republic Roman",
        "75 to 50 B.C.E.",
        "marble"),
    
    new info(43,
        "Augustus of Prima Porta",
        "Imperial Roman",
        "1 to 100 C.E.",
        "marble"), 

    new info(44,
        "Colosseum (Flavian Amphitheater)",
        "Rome, Italy",
        "70 to 80 B.C.E.",
        "stone and concrete"), 

    new info(45,
        "Forum of Trajan",
        "Rome, Italy",
        "106 to 113 C.E.",
        "brick, concrete, and marble"), 

    new info(46,
        "Pantheon",
        "Imperial Roman",
        "118 to 125 C.E.",
        "concrete with stone facing"), 

    new info(47,
        "Ludovisi Battle Sarcophagus",
        "Late Imperial Roman",
        "250 C.E.",
        "marble")
];



let units = document.getElementsByClassName("select_unit");
let chosen_unit;

let unitarts = [];

for (i=0; i < units.length; i++) {
    if (units[i]) {
        units[i].addEventListener("click", unitselect);
    }
}

function unitselect() {
    chosen_unit = this.value;
    console.log(chosen_unit);
    switch (chosen_unit) {
        case "1B":
            unitarts = [];
            for (i=0; i < 11; i++) {
                unitarts.push(art[i]);
            }
            break;
            
        case "2B":
            unitarts = [];
            for (i=11; i < 25; i++) {
                unitarts.push(art[i]);
            }
            break;
            
        case "2C":
            unitarts = [];
            for (i=25; i < 47; i++) {
                unitarts.push(art[i]);
            }
            break;
    }
    document.getElementById("selecttype").style.display = "inline";
}

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

        document.getElementById("selectunit").style.display = "none";

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
        randnum = Math.floor(Math.random() * unitarts.length);
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
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].date;
                    break;

                case "materials":
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].material;
                    break;
                    
                case "location":
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].location;
                    break;

                case "forms":
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].form;
                    break;

                case "contents":
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].content;
                    break;

                case "functions":
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].function;
                    break;
                
                case "contexts":
                    document.getElementById(cardid).innerText = unitarts[randnums[i]].context;
                    break;
            }

            artnames.push(unitarts[randnums[i]].name);
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
                document.getElementById(emptycards[i]).innerText = artnames[i] + " material";
                break;   

            case "location":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " location";
                break;

            case "forms":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " form";
                break;

            case "contents":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " content";
                break;

            case "functions":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " function";
                break;
            
            case "contexts":
                document.getElementById(emptycards[i]).innerText = artnames[i] + " context";
                break;
        }
    }
}

function clickyfuntime() {
    if (this.style.borderColor === "green") {
        return;  // Exit the function if the card is already marked as correct
    }

    let cardslist = document.getElementsByClassName("matchcard");
    ccc = 0;
    for (let i=0; i < 18; i++) {
        if ((cardslist[i].style.color == "white")) {
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
    for (let i=0; i < unitarts.length; i++) {
        switch (cardtype) {
            case "dates":
                for (let y=0; y < 18; y++) {
                    if ((cardslist[y].style.color == "white") && (cardslist[y].style.borderColor != "green") && (cardslist[y] != thisclicked)) {
                        cardcompared = cardslist[y];
                        for (let x=0; x < unitarts.length; x++) {
                            if (thisclicked.innerText.includes(unitarts[x].date) || thisclicked.innerText.includes(unitarts[x].name)) {
                                artcompared = unitarts[x];
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
                for (let y=0; y < 18; y++) {
                    if ((cardslist[y].style.color == "white") && (cardslist[y].style.borderColor != "green") && (cardslist[y] != thisclicked)) {
                        cardcompared = cardslist[y];
                        for (let x=0; x < unitarts.length; x++) {
                            if (thisclicked.innerText.includes(unitarts[x].material) || thisclicked.innerText.includes(art[x].name)) {
                                artcompared = unitarts[x];
                            }
                        }
                    }
                }
                if ((thisclicked.innerText.includes(artcompared.material) && cardcompared.innerText.includes(artcompared.name)) || 
                    (thisclicked.innerText.includes(artcompared.name) && cardcompared.innerText.includes(artcompared.material))) {
                    istrue(thisclicked, cardcompared);
                } else {
                    isfalse(thisclicked, cardcompared);
                }
                break;

            case "location":
                    for (let y=0; y < 18; y++) {
                        if ((cardslist[y].style.color == "white") && (cardslist[y].style.borderColor != "green") && (cardslist[y] != thisclicked)) {
                            cardcompared = cardslist[y];
                            for (let x=0; x < unitarts.length; x++) {
                                if (thisclicked.innerText.includes(unitarts[x].location) || thisclicked.innerText.includes(art[x].name)) {
                                    artcompared = unitarts[x];
                                }
                            }
                        }
                    }
                    if ((thisclicked.innerText.includes(artcompared.location) && cardcompared.innerText.includes(artcompared.name)) || 
                        (thisclicked.innerText.includes(artcompared.name) && cardcompared.innerText.includes(artcompared.location))) {
                        istrue(thisclicked, cardcompared);
                    } else {
                        isfalse(thisclicked, cardcompared);
                    }
                    break;

            case "forms":
                for (let y=0; y < 18; y++) {
                    if ((cardslist[y].style.color == "white") && (cardslist[y].style.borderColor != "green") && (cardslist[y] != thisclicked)) {
                        cardcompared = cardslist[y];
                        for (let x=0; x < unitarts.length; x++) {
                            if (thisclicked.innerText.includes(unitarts[x].form) || thisclicked.innerText.includes(unitarts[x].name)) {
                                artcompared = unitarts[x];
                            }
                        }
                    }
                }
                if ((thisclicked.innerText.includes(artcompared.form) && cardcompared.innerText.includes(artcompared.name)) || 
                    (thisclicked.innerText.includes(artcompared.name) && cardcompared.innerText.includes(artcompared.form))) {
                    istrue(thisclicked, cardcompared);
                } else {
                    isfalse(thisclicked, cardcompared);
                }
                break;
            case "contents":
                for (let y=0; y < 18; y++) {
                    if ((cardslist[y].style.color == "white") && (cardslist[y].style.borderColor != "green") && (cardslist[y] != thisclicked)) {
                        cardcompared = cardslist[y];
                        for (let x=0; x < unitarts.length; x++) {
                            if (thisclicked.innerText.includes(unitarts[x].content) || thisclicked.innerText.includes(unitarts[x].name)) {
                                artcompared = unitarts[x];
                            }
                        }
                    }
                }
                if ((thisclicked.innerText.includes(artcompared.content) && cardcompared.innerText.includes(artcompared.name)) || 
                    (thisclicked.innerText.includes(artcompared.name) && cardcompared.innerText.includes(artcompared.content))) {
                    istrue(thisclicked, cardcompared);
                } else {
                    isfalse(thisclicked, cardcompared);
                }
                break;
            case "functions":
                for (let y=0; y < 18; y++) {
                    if ((cardslist[y].style.color == "white") && (cardslist[y].style.borderColor != "green") && (cardslist[y] != thisclicked)) {
                        cardcompared = cardslist[y];
                        for (let x=0; x < unitarts.length; x++) {
                            if (thisclicked.innerText.includes(unitarts[x].function) || thisclicked.innerText.includes(unitarts[x].name)) {
                                artcompared = unitarts[x];
                            }
                        }
                    }
                }
                if ((thisclicked.innerText.includes(artcompared.function) && cardcompared.innerText.includes(artcompared.name)) || 
                    (thisclicked.innerText.includes(artcompared.name) && cardcompared.innerText.includes(artcompared.function))) {
                    istrue(thisclicked, cardcompared);
                } else {
                    isfalse(thisclicked, cardcompared);
                }
                break;
            case "contexts":
                for (let y=0; y < 18; y++) {
                    if ((cardslist[y].style.color == "white") && (cardslist[y].style.borderColor != "green") && (cardslist[y] != thisclicked)) {
                        cardcompared = cardslist[y];
                        for (let x=0; x < unitarts.length; x++) {
                            if (thisclicked.innerText.includes(unitarts[x].context) || thisclicked.innerText.includes(unitarts[x].name)) {
                                artcompared = unitarts[x];
                            }
                        }
                    }
                }
                if ((thisclicked.innerText.includes(artcompared.context) && cardcompared.innerText.includes(artcompared.name)) || 
                    (thisclicked.innerText.includes(artcompared.name) && cardcompared.innerText.includes(artcompared.context))) {
                    istrue(thisclicked, cardcompared);
                } else {
                    isfalse(thisclicked, cardcompared);
                }
                break;
        }
    }
}

let ecc = 0; //end correct counter
function istrue(thisclicked, otherclicked) {
    thisclicked.style.borderColor = "green";
    thisclicked.style.backgroundColor = "white";
    thisclicked.style.color = "black";

    otherclicked.style.borderColor = "green";
    otherclicked.style.backgroundColor = "white";
    otherclicked.style.color = "black";

    let allMatched = true;
    for (let i = 0; i < 18; i++) {
        let matchcardid = "card" + (i + 1);
        if (document.getElementById(matchcardid).style.borderColor !== "green") {
            allMatched = false;
            break;
        }
    }

    if (allMatched) {
        setTimeout(() => {
            document.getElementById("endbox").style.display = "inline";
            for (let i=0; i < 18; i++) {
                let matchcardid = "card" + (i + 1);
                document.getElementById(matchcardid).style.display = "none";
            }
        }, 500);
    }
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