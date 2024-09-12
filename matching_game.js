let cardtype;

class info {
    constructor(artnum, name, date, material, form, content, art_function, context) {
        this.name = name;
        this.date = date;
        this.material = material;
        this.form = form;
        this.content = content;
        this.function = art_function;
        this.context = context;
        this.artnum = artnum;
    }
    addtocard(type) {
        let randcard = Math.floor(Math.random() * cards.length);
        cards[randcard].innerText = this.name + " " + type;
        cards.splice(randcard,1);
        art.splice(this.artnum,1);
    }
}

class card {
    constructor(cardid, cnum) {
        this.cardid = cardid;
        this.cnum = cnum;
    }
    addart(type) {
        let randart = Math.floor(Math.random() * art.length);
            switch (cardtype) {
                case "date":
                    this.cardid.innerText = art[randart].date;
                    cards.splice(this.cnum,1);
                    break;
                case "material":
                    this.cardid.innerText = art[randart].material;
                    cards.splice(this.cnum,1);
                    break;
                case "form":
                    this.cardid.innerText = art[randart].form;
                    cards.splice(this.cnum,1);
                    break;
                case "content":
                    this.cardid.innerText = art[randart].content;
                    cards.splice(this.cnum,1);
                    break;   
                case "function":
                    this.cardid.innerText = art[randart].function;
                    cards.splice(this.cnum,1);
                    break;
                case "context":
                    this.cardid.innerText = art[randart].context;
                    cards.splice(this.cnum,1);
                    break;
            }
        art[randart].addtocard(cardtype);
    }
}

let cards = [new card(document.getElementById("card1"),0), new card(document.getElementById("card2"),1), new card(document.getElementById("card3"),2), new card(document.getElementById("card4"),3), new card(document.getElementById("card5"),4), new card(document.getElementById("card6"),5), new card(document.getElementById("card7"),6), new card(document.getElementById("card8"),7), new card(document.getElementById("card9"),8), new card(document.getElementById("card10"),9), new card(document.getElementById("card11"),10), new card(document.getElementById("card12"),11), new card(document.getElementById("card13"),12), new card(document.getElementById("card14"),13), new card(document.getElementById("card15"),14), new card(document.getElementById("card16"),15), new card(document.getElementById("card17"),16), new card(document.getElementById("card18"),17)];

let art = [new info(0,"red",1900), new info(1,"orange",1910), new info(2,"yellow",1920), new info(3,"green",1930), new info(4,"blue",1940), new info(5,"indigo",1950), new info(6,"violet",1960), new info(7,"black",1970), new info(8,"brown",1980), new info(9,"white",1990), new info(10,"pink",2000)];

let forms = [art[0].form, art[1].form, art[2].form, art[3].form, art[4].form, art[5].form, art[6].form, art[7].form, art[8].form, art[9].form, art[10].form];

let contents = [art[0].content, art[1].content, art[2].content, art[3].content, art[4].content, art[5].content, art[6].content, art[7].content, art[8].content, art[9].content, art[10].content];

let functions = [art[0].function, art[1].function, art[2].function, art[3].function, art[4].function, art[5].function, art[6].function, art[7].function, art[8].function, art[9].function, art[10].function];

let contexts = [art[0].context, art[1].context, art[2].context, art[3].context, art[4].context, art[5].context, art[6].context, art[7].context, art[8].context, art[9].context, art[10].context];

let dates = [art[0].date, art[1].date, art[2].date, art[3].date, art[4].date, art[5].date, art[6].date, art[7].date, art[8].date, art[9].date, art[10].date];

let materials = [art[0].material, art[1].material, art[2].material, art[3].material, art[4].material, art[5].material, art[6].material, art[7].material, art[8].material, art[9].material, art[10].material];

if (document.getElementById("submit_type")) {
    document.getElementById("submit_type").addEventListener("click", setcardtype);
}

function setcardtype() {
    let properties = document.getElementsByName("select_type");
    for (i=0; i<properties.length; i++) {
        if (properties[i].checked) {
            cardtype = properties[i].value;
        }
    }

    if (cardtype) {
        console.log(cardtype);
        
        document.getElementById("selected_dates").style.display = "none";
        document.getElementById("selected_date").style.display = "none";
        document.getElementById("selected_materials").style.display = "none";
        document.getElementById("selected_material").style.display = "none";
        document.getElementById("selected_forms").style.display = "none";
        document.getElementById("selected_form").style.display = "none";
        document.getElementById("selected_contents").style.display = "none";
        document.getElementById("selected_content").style.display = "none";
        document.getElementById("selected_functions").style.display = "none";
        document.getElementById("selected_function").style.display = "none";
        document.getElementById("selected_contexts").style.display = "none";
        document.getElementById("selected_context").style.display = "none";
        document.getElementById("submit_type").style.display = "none";
    
        document.getElementById("card1").style.display = "inline";
        document.getElementById("card2").style.display = "inline";
        document.getElementById("card3").style.display = "inline";
        document.getElementById("card4").style.display = "inline";
        document.getElementById("card5").style.display = "inline";
        document.getElementById("card6").style.display = "inline";
        document.getElementById("card7").style.display = "inline";
        document.getElementById("card8").style.display = "inline";
        document.getElementById("card9").style.display = "inline";
        document.getElementById("card10").style.display = "inline";
        document.getElementById("card11").style.display = "inline";
        document.getElementById("card12").style.display = "inline";
        document.getElementById("card13").style.display = "inline";
        document.getElementById("card14").style.display = "inline";
        document.getElementById("card15").style.display = "inline";
        document.getElementById("card16").style.display = "inline";
        document.getElementById("card17").style.display = "inline";
        document.getElementById("card18").style.display = "inline";

        while(cards.length > 0) {
            cards[0].addart(cardtype);
        }

        console.log(document.getElementById("card1").innerText);
        console.log(document.getElementById("card2").innerText);
        console.log(document.getElementById("card3").innerText);
        console.log(document.getElementById("card4").innerText);
        console.log(document.getElementById("card5").innerText);
        console.log(document.getElementById("card6").innerText);
        console.log(document.getElementById("card7").innerText);
        console.log(document.getElementById("card8").innerText);
        console.log(document.getElementById("card9").innerText);
        console.log(document.getElementById("card10").innerText);
        console.log(document.getElementById("card11").innerText);
        console.log(document.getElementById("card12").innerText);
        console.log(document.getElementById("card13").innerText);
        console.log(document.getElementById("card14").innerText);
        console.log(document.getElementById("card15").innerText);
        console.log(document.getElementById("card16").innerText);
        console.log(document.getElementById("card17").innerText);
        console.log(document.getElementById("card18").innerText);
    } //add error message later
}