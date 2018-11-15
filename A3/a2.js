/* Aufgabe: Aufgabe 3
Name: Emily Melzer
Matrikel: 259114
Datum: 14.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var A3;
(function (A3) {
    var colors = ["red", "blue", "green", "yellow"];
    var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"];
    var deck = [{ color: "red", value: "0" }, { color: "green", value: "0" }, { color: "blue", value: "0" }, { color: "yellow", value: "0" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }];
    var storage = [];
    for (var i = 0; i < colors.length; i++) {
        for (var a = 0; a < values.length; a++) {
            for (var z = 0; z < 2; z++) {
                var Card = { color: colors[i], value: values[a] };
                deck.push(Card);
            }
        }
    }
    // i = Variable für Länge des "Farb-Arrays"
    // a = Variable für Länge des "Wert-Arrays"
    // x = Variable für Anzahl der mitzuspielenden Karten
    // l = Zufallsvariable        
    var handcards = [];
    function listeners() {
        console.log("listener");
        document.getElementById("aufnehmen").addEventListener("click", drawCard);
        document.addEventListener("keydown", drawCard);
        document.getElementById("sort").addEventListener("click", sort);
        document.getElementById("Karte").addEventListener("click", playCard);
    }
    function drawCard() {
        createHand(1);
    }
    function drawCardSpace(_event) {
        if (_event.key == " ") {
            createHand(1);
        }
    }
    function sort() {
        console.log(handcards);
        document.getElementById("sort").innerHTML = "";
        handcards.sort(function (c1, c2) {
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
    function howManyCards() {
        var x;
        var input = prompt("Mit wie vielen Karten möchtest du spielen?"); //Nutzer wird gefragt wie viele Karten er möchte
        x = Number(input);
        listeners();
        createHand(x);
    }
    function createHand(_x) {
        for (var k = _x; k > 0; k--) {
            var l = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[l]);
            deck.splice(l, 1); //Array muss um 1 kleiner werden, wenn man 1 Karte rauszieht
        }
        displayHand();
    }
    function displayHand() {
        document.getElementById("Karte").innerHTML = "";
        for (var y = 0; y < handcards.length; y++) {
            //  (handcards[y].value, handcards[y].color);
            var card = document.createElement("card");
            document.getElementById("Karte").appendChild(card);
            card.innerText = handcards[y].value;
            card.classList.add("Karte");
            card.classList.add(handcards[y].color);
        }
    }
    function playCard(_event) {
        var selectedCard = _event.target.id;
        console.log(selectedCard);
        document.getElementById("ablage").innerHTML = "";
        var cardToPlay = document.createElement("div");
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
})(A3 || (A3 = {}));
//# sourceMappingURL=a2.js.map