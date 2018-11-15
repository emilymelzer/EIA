/* Aufgabe: Aufgabe 3
Name: Emily Melzer
Matrikel: 2592114
Datum: 08.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace A3 {

    interface card {
        color: string;
        value: string;
    }
    let colors: string[] = ["red", "blue", "green", "yellow"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"]
    let deck: card[] = [{ color: "red", value: "0" }, { color: "green", value: "0" }, { color: "blue", value: "0" }, { color: "yellow", value: "0" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }];

     let storage: card[] = [];
    
    for (let i: number = 0; i < colors.length; i++) {
        for (let a: number = 0; a < values.length; a++) { //
            for (let z: number = 0; z < 2; z++) { //Variable z wird dafür erstellt, damit die Karten alle doppelt vorkommen (außer 0 und Special Karten
                let Card: card = { color: colors[i], value: values[a] };
                deck.push(Card);
            }
        }
    }

    // i = Variable für Länge des "Farb-Arrays"
    // a = Variable für Länge des "Wert-Arrays"
    // x = Variable für Anzahl der mitzuspielenden Karten
    // l = Zufallsvariable        
    let handcards: card[] = [];
  

    function listeners(): void {
        console.log("listener");
        document.getElementById("aufnehmen").addEventListener("click", drawCard);
        document.addEventListener("keydown", drawCard);
        document.getElementById("sort").addEventListener("click", sort);
        document.getElementById("Karte").addEventListener("click", playCard);
}
    function drawCard(): void {
        createHand(1);
    }
    function drawCardSpace(_event: KeyboardEvent): void {
        if (_event.key == " ") {
            createHand(1);
        }
    }
    function sort(): void {
        console.log(handcards);
        document.getElementById("sort").innerHTML="";
        handcards.sort(function( c1:card, c2:card): number {
        if (c1.color > c2.color) {
            return 1;
        }
        if (c1.color < c2.color) {
            return -1;
        }

        return 0;  
    });
        console.log(handcards);
        displayHand();
        }
   




    function howManyCards(): void {
        let x: number;
        let input: string = prompt("Mit wie vielen Karten möchtest du spielen?");//Nutzer wird gefragt wie viele Karten er möchte
        x = Number(input);

        listeners();
        createHand(x);

    }

    function createHand(_x: number): void {

        for (let k: number = _x; k > 0; k--) {
            let l = Math.floor(Math.random() * (deck.length - 1));

            handcards.push(deck[l]);
            deck.splice(l, 1);//Array muss um 1 kleiner werden, wenn man 1 Karte rauszieht
        }
        displayHand();
    }

    function displayHand(): void {
        document.getElementById("Karte").innerHTML = "";
        for (let y: number = 0; y < handcards.length; y++) {
            //  (handcards[y].value, handcards[y].color);
            let card: HTMLElement = document.createElement("card");
            document.getElementById("Karte").appendChild(card);
            card.innerText = handcards[y].value;
            card.classList.add("Karte");
            card.classList.add(handcards[y].color);
        }
       
    }
       function playCard(_event: Event): void {
        let selectedCard: string = (_event.target as Element).id;
        console.log(selectedCard);
        document.getElementById("ablage").innerHTML = "";
           
        let cardToPlay: HTMLElement = document.createElement("div");
        cardToPlay.innerText = handcards[Number(selectedCard)].value;
        cardToPlay.classList.add("card");
        cardToPlay.classList.add(handcards[Number(selectedCard)].color);
        document.getElementById("ablage").appendChild(cardToPlay);
        handcards.splice(Number(selectedCard), 1);
        displayHand();
    }

    console.log(deck);
    console.log(handcards);
    document.addEventListener("DOMContentLoaded", howManyCards);

}