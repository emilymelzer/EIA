/* Aufgabe: Aufgabe 3
Name: Emily Melzer
Matrikel: 2592114
Datum: 08.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace A3 {

     document.addEventListener("DOMContentLoaded", howManyCards);
 
    
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
        document.addEventListener("click", playCards);
        document.getElementById("ablage").addEventListener("click", playCards);
        


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
            handcards.sort();
            displayHand();
        }
        

        function compareCards(card1: card, card2: card): number {

            if (card1.color > card2.color) {
                return 1;
            }
            if (card1.color < card2.color) {
                return -1;
            }

            return 0;
        }




        function howManyCards(): void {
            let x: number;
            let input: string = prompt("Mit wie vielen Karten möchtest du spielen?");//Nutzer wird gefragt wie viele Karten er möchte
            x = Number(input);

          
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
                let card: HTMLDivElement = document.createElement("div");
                card.innerText = handcards[y].value;
                card.classList.add("Karte");
                card.classList.add(handcards[y].color);
                document.getElementById("Karte").appendChild(card);
                card.addEventListener("click", playCards);
            }
            console.log(handcards);
        }


        function playCards(_event: MouseEvent): void {
            document.getElementById("ablage").innerHTML = "";
            let selectedCard: HTMLElement = <HTMLElement>_event.target;
            let c: number = parseInt(selectedCard.id);
            let card: HTMLElement = document.createElement("div");
            card.innerText = handcards[c].value;
            card.classList.add(handcards[c].color);
            storage.push(handcards[c]);
            handcards.splice(c, 1);
            displayHand();
           
        }

        console.log(deck);
    document.addEventListener("DOMContentLoaded", playCards);
    
    }   