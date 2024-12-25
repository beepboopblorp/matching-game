let questiontype

//note: once form/content/function/context is added, might need to change the order of artist, input the defaults, etc. verifying artist existence with boolean
class info {
    constructor(artnum = "", name = "", culture = "", date = "", material = "", artist = "", form = "form", content = "content", art_function = "function", context = "context") {
        this.name = name;
        this.date = date;
        this.culture = culture;
        this.material = material;
        this.artist = artist;
        this.form = form;
        this.content = content;
        this.function = art_function;
        this.context = context;
        this.artnum = artnum;
    }
}

let art = [
    new info(1, "Apollo 11 Stones", "Namibia", "25,500 to 25,300 B.C.E.", "charcoal on stone"),
    new info(2, "Great Hall of the Bulls", "Paleolithic Europe", "15,000 to 13,000 B.C.E.", "pigment on rock"), 
    new info(3, "Camelid Sacrum in the Shape of a Canine", "Tuquixquiac, central Mexico", "14,000 to 7,000 B.C.E.", "bone"), 
    new info(4, "Running Horned Woman", "Tassilli n'Ajjer, Algeria", "6,000 to 4,000 B.C.E.", "pigment on rock"), 
    new info(5, "Beaker with Ibex Motifs", "Susa, Iran", "4,200 to 3,500 B.C.E.", "painted terra cotta"), 
    new info(6, "Anthropomorphic Stele", "Arabian Peninsula", "4,000 to 3,001 B.C.E.", "sandstone"), 
    new info(7, "Jade Cong", "Liangzhu, China", "3,000 to 2,200 B.C.E.", "carved jade"), 
    new info(8, "Stonehenge", "Neolithic Europe", "2,500 to 1,600 B.C.E.", "sandstone"), 
    new info(9, "The Ambum Stone", "Ambum Valley, Enga Province, Papua New Guinea", "1500 B.C.E.", "greywacke"), 
    new info(10, "Tiatilco Female Figurine", "Site of Tiatilco, Central Mexico", "1200 to 900 B.C.E.", "ceramic"), 
    new info(11, "Terra Cotta Fragment", "Lapita, Solomon Islands, Reef Islands", "1000 B.C.E.", "incised terra cotta"),
    new info(12, "White Temple and its Ziggurat", "Sumerian", "3,500 to 3,000 B.C.E.", "mud brick"),
    new info(13, "Palette of King Narmer", "Predynastic Egypt", "3,000 to 2,920 B.C.E.", "greywacke"), 
    new info(14, "Statue of Votive Figures", "Sumerian", "2,700 B.C.E.", "gypsum inlaid with shell and black limestone"), 
    new info(15, "Seated Scribe", "Old Kingdom Egypt", "2,620 to 2,500 B.C.E.", "painted limestone"), 
    new info(16, "Standard of Ur", "Sumerian", "2,600 to 2,400 B.C.E.", "wood inlaid with shell, lapis lazuli, and red limestone"), 
    new info(17, "Great Pyramids and Great Sphinx", "Old Kingdom Egypt", "2,550 to 2,490 B.C.E.", "limestone"), 
    new info(18, "King Menkaure and Queen", "Old Kingdom Egypt", "2,490 to 2,472 B.C.E.", "greywacke"), 
    new info(19, "The Code of Hammurabi", "Babylonian", "1,792 to 1,750 B.C.E.", "basalt"), 
    new info(20, "Temple of Amun-Re and Hypostyle Hall", "New Kingdom Egypt", "1550 and 1250 B.C.E.", "sandstone and mud brick"), 
    new info(21, "Mortuary Temple of Hatshepsut", "New Kingdom Egypt", "1,473 to 1,458 B.C.E.", "sandstone, partially carved into a rock cliff, and red granite"), 
    new info(22, "Akhenaton, Nefertiti, and Three Daughters", "New Kingdom (Amarna) Egypt", "1,353 to 1,335 B.C.E.", "limestone"),
    new info(23, "Tutankhamun's Tomb, Innermost Coffin", "New Kingdom Egypt", "1,323 B.C.E.", "gold with inlay of enamel and semiprecious stone"), 
    new info(24, "Last Judgement of Hu-Nefer", "New Kingdom Egypt", "1,275 B.C.E.", "painted papyrus scroll"), 
    new info(25, "Lamassu from the Citadel of Sargon II", "Neo-Assyrian", "720-705 B.C.E.", "alabaster"), 
    new info(26, "Athenian Agora", "Archaic through Hellenistic Greek", "600 B.C.E. to 150 C.E.", "plan"), 
    new info(27, "Anavysos Kouros", "Archaic Greek", "530 B.C.E.", "painted marble"), 
    new info(28, "Peplos Kore", "Archaic Greek", "530 B.C.E.", "painted marble"), 
    new info(29, "Sarcophagus of the Spouses", "Etruscan", "520 B.C.E.", "terra cotta"),
    new info(30, "Audience Hall (Apadana) of Darius and Xerxes", "Persian", "520 to 465 B.C.E.", "limestone"), 
    new info(31, "Temple of Minerva and Sculpture of Apollo", "Etruscan", "510 to 500 B.C.E.", "wood, mud brick, and tufa with terra cotta sculpture"), 
    new info(32, "Tomb of the Triclinium", "Etruscan", "480 to 470 B.C.E.", "tufa and fresco"),
    new info(33, "Niobides Krater", "Classical Greek", "460 to 450 B.C.E.", "clay with red-figure technique and white highlights", "Niobid Painter"), 
    new info(34, "Doryphoros (Spear Bearer)", "Roman Copy of Greek Original", "450 to 440 B.C.E.", "marble", "Polykleitos"), 
    new info(35, "Acropolis", "Classical Greek", "447 to 410 B.C.E.", "marble", "Iktinos and Kallikrates"), 
    new info(36, "Grave Stele of Hegeso", "Classical Greek", "410 B.C.E.", "marble and paint", "Kallimachos"), 
    new info(37, "Winged Victory of Samothrace", "Hellenistic Greek", "190 B.C.E.", "marble"), 
    new info(38, "Great Altar of Zeus and Athena at Pergamon", "Hellenistic Greek", "175 B.C.E.", "marble"),
    new info(39, "House of the Vettii", "Imperial Rome", "62 to 79 C.E.", "cut stone and fresco"), 
    new info(40, "Alexander Mosaic", "Republican Rome", "100 B.C.E.", "mosaic"), 
    new info(41, "Seated Boxer", "Hellenistic Greek", "100 B.C.E.", "ceramic"), 
    new info(42, "Head of a Roman Patrician", "Republic Roman", "75 to 50 B.C.E.", "marble"),
    new info(43, "Augustus of Prima Porta", "Imperial Roman", "1 to 100 C.E.", "marble"), 
    new info(44, "Colosseum (Flavian Amphitheater)", "Imperial Roman", "70 to 80 B.C.E.", "stone and concrete"), 
    new info(45, "Forum of Trajan", "Imperial Roman", "106 to 113 C.E.", "brick, concrete, and marble", "Apollodorus of Damascus"), 
    new info(46, "Pantheon", "Imperial Roman", "118 to 125 C.E.", "concrete with stone facing"), 
    new info(47, "Ludovisi Battle Sarcophagus", "Late Imperial Roman", "250 C.E.", "marble"),
    new info(48, "Catacomb of Priscilla", "Late Antique Europe", "200 to 400 C.E.", "excavated tufa and fresco"),
    new info(49, "Santa Sabina", "Late Antique Europe", "422 to 432 C.E.", "brick and stone, wooden roof"),
    new info(50, "Vienna Genesis", "Early Byzantine Europe", "Early 6th Century C.E.", "pigment on vellum"), 
    new info(51, "San Vitale", "Early Byzantine Europe", "526 to 547 C.E.", "brick, marble, and stone veneer mosaic"),
    new info(52, "Hagia Sophia", "Byzantine", "532 to 537 C.E.", "brick and ceramic elements with stone and mosaic veneer", "Anthemius of Tralles and Isidorus of Miletus"),
    new info(53, "Merovingian Looped Fibula", "Early Medieval Europe", "Mid 6th Century C.E.", "Silver gilt worked in filigree, with inlays of garnets and other stones"), 
    new info(54, "Virgin and Child between Saints Theodore and George", "Early Byzantine Europe", "500 to 600 C.E.", "encaustic on wood"), 
    new info(55, "Lindisfarne Gospels", "Early Medieval (Hiberno Saxon) Europe", "700 C.E.", "ink, pigments, and gold on vellum"), 
    new info(56, "Great Mosque", "Umayyad", "785 to 786 C.E.", "stone masonry"), 
    new info(57, "Pyxis of al-Mughira", "Umayyad", "968 C.E.", "ivory"), 
    new info(58, "Church of Sainte-Foy", "Romanesque Europe", "800 to 1130 C.E.", "stone, paint, gold, silver, gemstones, and enamel over wood"), 
    new info(59, "Bayeux Tapestry", "Romanesque Europe (English or Norman)", "1066 to 1080 C.E.", "embroidery on linen"),
    new info(60, "Chartres Cathedral", "Gothic Europe", "1550 and 1250 B.C.E.", "sandstone and mud brick"), 
    new info(61, "Bibles Moralisée of King Louis IX (Dedication Page from the Apocalypse)", "Gothic Europe", "1226 to 1234 C.E.", "ink, tempera, and gold leaf on vellum"), 
    new info(62, "Rottgen Pieta", "Late Medieval Europe", "1300 to 1325 C.E.", "painted wood"),
    new info(63, "Arena (Scrovegni) Chapel", "Late Medieval Europe", "1,303 C.E.", "brick", "Giotto di Bondone"), 
    new info(64, "Golden Haggadah", "Late Medieval Spain", "1320 C.E.", "pigment on vellum"), 
    new info(65, "Alhambra Palace", "Nasrid Dynasty", "1354 to 1391 C.E.", "whitewashed adobe stucco, wood, tile, paint, and gilding"), 
    new info(66, "Annunciation Triptych (Merode Altarpiece)", "Renaissance", "1427 to 1432 C.E.", "oil on oak wood", "Robert Campin"), 
    new info(67, "Pazzi Chapel", "Renaissance", "1429 to 1461 C.E.", "masonry", "Filippo Brunelleschi"), 
    new info(68, "The Arnolfini Portrait", "Renaissance", "530 B.C.E.", "painted marble", "Jan van Eyck"),
    new info(69, "David", "Renaissance", "1440 to 1460 C.E.", "bronze", "Donatello"), 
    new info(70, "Palazzo Rucellai", "Renaissance", "1450 C.E.", "stone, masonry", "Leon Battista Alberti"), 
    new info(71, "Madonna and Child with Two Angels", "Renaissance", "1465 C.E.", "tempera on wood", "Fra Filippo"), 
    new info(72, "Birth of Venus", "Renaissance", "1484 to 1486 C.E.", "tempera on canvas", "Sandro Botticelli"),
    new info(73, "Last Supper", "Renaissance", "1489 to 1494 C.E.", "oil tempera", "Leonardo da Vinci"), 
    new info(74, "Adam and Eve", "Renaissance", "1504 C.E.", "engraving", "Albrecht Dürer"), 
    new info(75, "Sistine Chapel", "Rennaisance", "1508 to 1541 C.E.", "fresco", "Michelangelo"), 
    new info(76, "School of Athens", "Renaissance", "1509 to 1511 C.E.", "fresco", "Stanza della Segnatura"), 
    new info(77, "Isenheim Altarpiece", "Renaissance", "1512 to 1516 C.E.", "oil on wood", "Matthias Grunewald"), 
    new info(78, "Entombment of Christ", "Renaissance", "1525 to 1528 C.E.", "oil on wood", "Jacopo da Pontormo"), 
    new info(79, "Allegory of Law and Grace", "Renaissance", "1530 C.E.", "woodcut", "Lucas Cranach the Elder"), 
    new info(80, "Venus of Urbino", "Renaissance", "1538 C.E.", "oil on canvas", "Titian"), 
    new info(81, "Frontispiece of the Codex Mendoza", "Early Colonial", "1541 to 1542 C.E.", "pigment on paper", "Viceroyalty of New Spain"), 
    new info(82, "Il Gesu", "Baroque", "1568 to 1679 C.E.", "brick, marble, fresco, and stucco", "Giacomo da Vignola (plan),  Giacomo della Porta(facade), Giovanni Battista Gaulli (ceiling fresco)"),
    new info(83, "Hunters in the Snow", "Renaissance", "1565 C.E.", "oil on wood", "Pieter Bruegal"),
    new info(84, "Mosque of Selim II", "Classical Ottoman", "1568 to 1575 C.E.", "brick and stone", "Sinan"),
    new info(85, "Calling of Saint Matthew", "Baroque", "1597 to 1601 C.E.", "oil on canvas", "Caravaggio"), 
    new info(86, "Henri IV Receives the Portrait of Marie de' Medici", "Baroque", "1631 to 1625 C.E.", "oil on canvas", "Peter Paul Rubens"),
    new info(87, "Self-Portrait with Saskia", "Baroque", "1636 C.E.", "etching", "Rembrandt van Rijn"),
    new info(88, "San Carlo alle Quattro Fontane", "Baroque", "1638 to 1646 C.E.", "stone and stucco", "Francesco Borromin"), 
    new info(89, "Ecstasy of Saint Teresa", "Baroque", "1647 to 1652 C.E.", "marble, stucco, and gilt bronze", "Gian Lorenzo Bernini"), 
    new info(90, "Angel with Arquebus, Asiel Timore Dei", "Colonial South America", "17th century C.E.", "oil on canvas", "Master of Calamarca"), 
    new info(91, "Las Meninas", "Baroque", "1656 C.E.", "oil on canvas", "Diego Velázquez"), 
    new info(92, "Woman Holding a Balance", "Baroque", "1664 C.E.", "oil on canvas", "Johannes Vermeer"),
    new info(93, "The Palace at Versailles", "Baroque", "1669 C.E.", "masonry, stone, wood, iron, gold leaf, marble, and bronze", "Louis Le Vau and Jules Hardouin-Mansart"), 
    new info(94, "Screen with the Siege of Belgrade", "Early Colonial", "1697 to 1701 C.E.", "tempera and resin on wood, shell inlay", "Circle of the González Family"), 
    new info(95, "The Virgin of Guadalupe", "Early Colonial", "1698 C.E.", "oil on canvas on wood, mother-of-pearl inlay"), 
    new info(96, "Fruit and Insects", "Baroque", "1711 C.E.", "oil on wood", "Rachel Ruysch"),
    new info(97, "Spaniard and Indian Produce a Mestizo", "Early Colonial", "1715 C.E.", "oil on canvas", "Juan Rodríguez Juárez"), 
    new info(98, "The Tete a Tete", "Baroque", "1743 C.E.", "oil on canvas", "William Hogarth")
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
    this.style.backgroundColor = "rebeccapurple";
    this.style.color = "black";
    chosen_unit = this.value;
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
        
        case "3A":
            unitarts = [];
            for (i=47; i < 64; i++) {
                unitarts.push(art[i]);
            }
            break;

        case "3B":
            unitarts = [];
            for (i=64; i < 81; i++) {
                unitarts.push(art[i]);
            }
            break;

        case "3C":
            unitarts = [];
            for (i=81; i < 98; i++) {
                unitarts.push(art[i]);
            }
            break;
    }
    document.getElementById("selecttype").style.display = "inline";
    document.getElementById("submit_type").style.display = "inline";
}

if (document.getElementById("submit_type")) {document.getElementById("submit_type").addEventListener("click", setq);}

function artisterror() {
    document.getElementById("selectunit").style.display = "none";
    let choosetype = document.getElementsByName("select_type");
    for (let i=0; i<choosetype.length; i++) {
        choosetype[i].style.display = "none";
    }
    document.getElementById("endbox").style.display = "inline";
    document.getElementById("endboxp").innerText = "An error occured. There are no artists in this selection. Click return to play again."
}

function setq() {
    let properties = document.getElementsByName("select_type");
    for (let i=0; i<properties.length; i++) {
        if (properties[i].checked) {
            questiontype = properties[i].value;
        } else {
            document.getElementById("errormsg").innerText = "No property was selected. Try again.";
        }
    }
    if (questiontype) {
        document.getElementById("selectunit").style.display = "none";

        let choosetype = document.getElementsByName("select_type");
        for (let i=0; i<choosetype.length; i++) {choosetype[i].style.display = "none";}

        if (questiontype == "artist") {
            for (i=0; i < unitarts.length; i++) {
                if (!unitarts[i].artist) {
                    unitarts.splice(i, 1);
                }
            }
            if (!unitarts.length) {
                artisterror();
            } else {
                assignq();
            }
        } else {
            assignq();
        }
    } 
}

let randq, randnum, ca;
let lastnums = ["", "", "", "", ""];
let acceptableq = true;
let mcqc = [1,2,3,4];

if (document.getElementById("showoptions")) {
    document.getElementById("showoptions").addEventListener("click", () => {
        if (document.getElementById("showoptions").style.color == "white") {
            document.getElementById("showoptions").style.color = "rebeccapurple";
            document.getElementById("showoptions").style.backgroundColor = "white";
            document.getElementById("MC").style.display = "inline";
        } else {
            document.getElementById("showoptions").style.color = "white";
            document.getElementById("showoptions").style.backgroundColor = "rebeccapurple";
            document.getElementById("MC").style.display = "none";
        }
    })
}

function assignq() {
    document.getElementById("questionthings").style.display = "inline";
    document.getElementById("showoptions").style.color = "white";
    document.getElementById("showoptions").style.backgroundColor = "rebeccapurple";

    do {
        randq = Math.floor(Math.random() * unitarts.length);
        if(!lastnums.includes(randq)) {
            acceptableq = true;
        } else {
            acceptableq = false;
        }
    } while (!acceptableq)

    if (acceptableq) {
        lastnums.push(randq);
        lastnums.splice(0, 1);
        switch (questiontype) {
            case "dates":
                document.getElementById("qask").innerText = unitarts[randq].name + " date";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].date;
                mcqc.splice(ca, 1);
                let i = 0;
                while (i < 3) {
                    randnum = Math.floor(Math.random() * unitarts.length);
                    if ((unitarts[randnum].date != document.getElementById("answer1").innerText) && (unitarts[randnum].date != document.getElementById("answer2").innerText) && (unitarts[randnum].date != document.getElementById("answer3").innerText) && (unitarts[randnum].date != document.getElementById("answer4").innerText)) {
                        document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].date;
                        i++
                    }
                }
                break;
            
            case "materials":
                document.getElementById("qask").innerText = unitarts[randq].name + " material";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].material;
                mcqc.splice(ca, 1);
                i = 0;
                while (i < 3) {
                    randnum = Math.floor(Math.random() * unitarts.length);
                    if ((unitarts[randnum].material != document.getElementById("answer1").innerText) && (unitarts[randnum].material != document.getElementById("answer2").innerText) && (unitarts[randnum].material != document.getElementById("answer3").innerText) && (unitarts[randnum].material != document.getElementById("answer4").innerText)) {
                        document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].material;
                        i++
                    }
                }
                break;

            case "artist":
                document.getElementById("qask").innerText = unitarts[randq].name + " artist";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].artist;
                mcqc.splice(ca, 1);
                i = 0;
                while (i < 3) {
                    randnum = Math.floor(Math.random() * unitarts.length);
                    if ((unitarts[randnum].artist != document.getElementById("answer1").innerText) && (unitarts[randnum].artist != document.getElementById("answer2").innerText) && (unitarts[randnum].artist != document.getElementById("answer3").innerText) && (unitarts[randnum].artist != document.getElementById("answer4").innerText)) {
                        document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].artist;
                        i++
                    }
                }
                break;
                
            case "culture":
                document.getElementById("qask").innerText = unitarts[randq].name + " culture";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].culture;
                mcqc.splice(ca, 1);
                i = 0;
                while (i < 3) {
                    randnum = Math.floor(Math.random() * unitarts.length);
                    if ((unitarts[randnum].culture != document.getElementById("answer1").innerText) && (unitarts[randnum].culture != document.getElementById("answer2").innerText) && (unitarts[randnum].culture != document.getElementById("answer3").innerText) && (unitarts[randnum].culture != document.getElementById("answer4").innerText)) {
                        document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].culture;
                        i++
                    }
                }
                break;
                
            case "forms":
                document.getElementById("qask").innerText = unitarts[randq].name + " form";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].form;
                mcqc.splice(ca, 1);
                i = 0;
                while (i < 3) {
                    randnum = Math.floor(Math.random() * unitarts.length);
                    if ((unitarts[randnum].form != document.getElementById("answer1").innerText) && (unitarts[randnum].form != document.getElementById("answer2").innerText) && (unitarts[randnum].form != document.getElementById("answer3").innerText) && (unitarts[randnum].form != document.getElementById("answer4").innerText)) {
                        document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].form;
                        i++
                    }
                }
                break;
                
            case "contents":
                document.getElementById("qask").innerText = unitarts[randq].name + " content";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].content;
                mcqc.splice(ca, 1);
                i = 0;
                while (i < 3) {
                    randnum = Math.floor(Math.random() * unitarts.length);
                    if ((unitarts[randnum].content != document.getElementById("answer1").innerText) && (unitarts[randnum].content != document.getElementById("answer2").innerText) && (unitarts[randnum].content != document.getElementById("answer3").innerText) && (unitarts[randnum].content != document.getElementById("answer4").innerText)) {
                        document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].content;
                        i++
                    }
                }
                break;
                
            case "functions":
                document.getElementById("qask").innerText = unitarts[randq].name + " function";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].function;
                mcqc.splice(ca, 1);
                i = 0;
                while (i < 3) {
                    randnum = Math.floor(Math.random() * unitarts.length);
                    if ((unitarts[randnum].function != document.getElementById("answer1").innerText) && (unitarts[randnum].function != document.getElementById("answer2").innerText) && (unitarts[randnum].function != document.getElementById("answer3").innerText) && (unitarts[randnum].function != document.getElementById("answer4").innerText)) {
                        document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].function;
                        i++
                    }
                }
                break;
                
            case "contexts":
                document.getElementById("qask").innerText = unitarts[randq].name + " context";
                ca = Math.floor(Math.random() * 4);
                document.getElementById("answer" + (ca + 1)).innerText = unitarts[randq].context;
                mcqc.splice(ca, 1);
                i = 0;
                while (i < 3) {
                    randnum = Math.floor(Math.random() * unitarts.length);
                    if ((unitarts[randnum].context != document.getElementById("answer1").innerText) && (unitarts[randnum].context != document.getElementById("answer2").innerText) && (unitarts[randnum].context != document.getElementById("answer3").innerText) && (unitarts[randnum].context != document.getElementById("answer4").innerText)) {
                        document.getElementById("answer" + mcqc[i]).innerText = unitarts[randnum].context;
                        i++
                    }
                }
                break;   
        }
    }
}

//check mcq answers

function mcqreset() {
    mcqc = [1, 2, 3, 4];
    for (let i = 0; i < 4; i++) {
        document.getElementById("answer" + (i + 1)).style.backgroundColor = "rebeccapurple";
    }
    assignq()
}

for (let i = 0; i < 4; i++) {
    if (document.getElementById("answer" + (i + 1))) {
        document.getElementById("answer" + (i + 1)).addEventListener("click", checkmcq);
    }
}

let qredo;
function checkmcq() {
    switch (questiontype) {
        case "dates":
            if (this.innerText == unitarts[randq].date) {
                this.style.backgroundColor = "green";
                setTimeout(mcqreset, 1000);
            } else {
                this.style.backgroundColor = "red";
                for (i=0;i<unitarts.length;i++) {
                    if(unitarts[i].date == document.getElementById("qask").innerText) {qredo = i;}
                }
            }
            break;
            
        case "materials":
            if (this.innerText == unitarts[randq].material) {
                this.style.backgroundColor = "green";
                setTimeout(mcqreset, 1000);
            } else {
                this.style.backgroundColor = "red";
                for (i=0;i<unitarts.length;i++) {
                    if(unitarts[i].material == document.getElementById("qask").innerText) {qredo = i;}
                }
            }
            break;
            
        case "culture":
            if (this.innerText == unitarts[randq].culture) {
                this.style.backgroundColor = "green";
                setTimeout(mcqreset, 1000);
            } else {
                this.style.backgroundColor = "red";
                for (i=0;i<unitarts.length;i++) {
                    if(unitarts[i].culture == document.getElementById("qask").innerText) {qredo = i;}
                }
            }
            break;
            
        case "artist":
            if (this.innerText == unitarts[randq].artist) {
                this.style.backgroundColor = "green";
                setTimeout(mcqreset, 1000);
            } else {
                this.style.backgroundColor = "red";
                for (i=0;i<unitarts.length;i++) {
                    if(unitarts[i].artist == document.getElementById("qask").innerText) {qredo = i;}
                }
            }
            break;
            
        case "forms":
            if (this.innerText == unitarts[randq].form) {
                this.style.backgroundColor = "green";
                setTimeout(mcqreset, 1000);
            } else {
                this.style.backgroundColor = "red";
                for (i=0;i<unitarts.length;i++) {
                    if(unitarts[i].form == document.getElementById("qask").innerText) {qredo = i;}
                }
            }
            break;
            
        case "contents":
            if (this.innerText == unitarts[randq].content) {
                this.style.backgroundColor = "green";
                setTimeout(mcqreset, 1000);
            } else {
                this.style.backgroundColor = "red";
                for (i=0;i<unitarts.length;i++) {
                    if(unitarts[i].content == document.getElementById("qask").innerText) {qredo = i;}
                }
            }
            break;
            
        case "functions":
            if (this.innerText == unitarts[randq].function) {
                this.style.backgroundColor = "green";
                setTimeout(mcqreset, 1000);
            } else {
                this.style.backgroundColor = "red";
                for (i=0;i<unitarts.length;i++) {
                    if(unitarts[i].function == document.getElementById("qask").innerText) {qredo = i;}
                }
            }
            break;
            
        case "contexts":
            if (this.innerText == unitarts[randq].context) {
                this.style.backgroundColor = "green";
                setTimeout(mcqreset, 1000);
            } else {
                this.style.backgroundColor = "red";
                for (i=0;i<unitarts.length;i++) {
                    if(unitarts[i].context == document.getElementById("qask").innerText) {qredo = i;}
                }
            }
            break;
            
    }
}