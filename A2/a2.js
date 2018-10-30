var A2;
(function (A2) {
    var colors = ["red", "blue", "green", "yellow"];
    var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"];
    var deck = [{ color: "red", value: "0" }, { color: "green", value: "0" }, { color: "blue", value: "0" }, { color: "yellow", value: "0" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }];
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
    function anzahl() {
        var x;
        var input = prompt("Mit wie vielen Karten möchtest du spielen?"); //Nutzer wird gefragt wie viele Karten er möchte
        x = Number(input);
        coincidence(x);
    }
    function coincidence(_x) {
        for (var k = _x; k > 0; k--) {
            var l = Math.floor(Math.random() * (deck.length - 1));
            handcards.push(deck[l]);
            deck.splice(l, 1); //Array muss um 1 kleiner werden, wenn man 1 Karte rauszieht
        }
        displayHand();
    }
    function displayHand() {
        for (var y = 0; y < handcards.length; y++) {
            //  (handcards[y].value, handcards[y].color);
            var card = document.createElement("div");
            card.innerText = handcards[y].value;
            card.classList.add("Karte");
            card.classList.add(handcards[y].color);
            document.getElementById("Karte").appendChild(card);
        }
        console.log(handcards);
    }
    console.log(deck);
    document.addEventListener("DOMContentLoaded", anzahl);
})(A2 || (A2 = {}));
//# sourceMappingURL=a2.js.map