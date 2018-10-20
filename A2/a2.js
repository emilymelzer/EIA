var A2;
(function (A2) {
    function UNO() {
        var c1 = {
            name: "1",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        var c2 = {
            name: "2",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        var c3 = {
            name: "3",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        var c4 = {
            name: "4",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        var c5 = {
            name: "5",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        var c6 = {
            name: "6",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        var c7 = {
            name: "7",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        var c8 = {
            name: "8",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        var c9 = {
            name: "9",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        var cr = {
            name: "Richtungswechsel",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        var cexpose = {
            name: "Aussetzen",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        var cplus2 = {
            name: "+2",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        };
        var c0 = {
            name: "0",
            green: 1,
            red: 1,
            blue: 1,
            yellow: 1
        };
        var cb4 = 4;
        var cbwish = 4;
        var allcards = [c1, c2, c3, c4, c5, c6, c7, c8, c9, cr, cexpose, cplus2, c0];
        var color = "";
        function getRandom(n) {
            return Math.floor(Math.random() * Math.floor(n));
        }
        ;
        function placeDiv(_color, _n, _x) {
            var div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + _x);
            document.getElementById("a" + _x).innerHTML += _n;
            var s = div.style; //Karten werden hier gestaltet
            s.fontSize = 25 + "px";
            s.border = "thin solid white";
            s.paddingTop = 110 + "px";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = _color;
            s.width = 150 + "px";
            s.height = 150 + "px";
            s.bottom = 35 + "px";
            s.left = (_x + 0.2) * 120 + "px";
            s.borderRadius = 10 + "px";
            if (color == "#000000") {
                s.color = "white";
            }
        }
        var x;
        var input = prompt("Mit wie vielen Karten möchtest du spielen?"); //Nutzer wird gefragt wie viele Karten er möchte
        x = Number(input);
        for (var i = 0; i < x; i++) {
            var l = getRandom(15); //Zufallsgenerator, 13 farbige Karten und 2 schwarze Karten
            if (l == 13 && cb4 > 0) {
                color = "#000000";
                cb4--; //"gezogene" Karte wird aus dem Kartenpool abgezogen, damit die gleiche Karte nicht noch einmal gezogen wird
                placeDiv(color, "+4", i);
                continue; //springt wieder zum Anfang der for-schleife
            }
            else if (l == 13 && cb4 <= 0) {
                i--;
                continue;
            }
            else {
                if (l == 14 && cbwish > 0) {
                    color = "#000000";
                    cbwish--;
                    placeDiv(color, "Wunschfarbe", i);
                    continue;
                }
                else if (l == 14 && cbwish <= 0) {
                    i--;
                    continue;
                }
                else {
                    var y = getRandom(4); //Zufallsgenerator für Ermittlung der Farben
                    switch (y) {
                        case 0:
                            color = "#fb6564";
                            if (allcards[l].red > 0) {
                                placeDiv(color, allcards[l].name, i);
                                allcards[l].red--;
                                continue; //Bei jedem "continue" wird wieder von Anfang der Schleife begonnen
                            }
                        case 1:
                            color = "#c5ecaa";
                            if (allcards[l].green > 0) {
                                placeDiv(color, allcards[l].name, i);
                                allcards[l].green--;
                                continue;
                            }
                        case 2:
                            color = "#4b8ad1";
                            if (allcards[l].blue > 0) {
                                placeDiv(color, allcards[l].name, i);
                                allcards[l].blue--;
                                continue;
                            }
                        case 3:
                            color = "#f0f16a";
                            if (allcards[l].yellow > 0) {
                                placeDiv(color, allcards[l].name, i);
                                allcards[l].yellow--;
                                continue;
                            }
                            else {
                                i--;
                                continue;
                            }
                    }
                }
            }
        }
        function deck() {
            var div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Neue Karte");
            document.getElementById("Neue Karte").innerHTML += "Neue Karte";
            var s = div.style;
            s.fontSize = 20 + "px";
            s.border = "solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#0000000";
            s.width = 150 + "px";
            s.height = 20 + "px";
            s.left = 20 + "px";
            s.top = 25 + "px";
            s.borderRadius = 10 + "px";
        }
        function AblageStapel() {
            var div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Anzuspielende Karte");
            document.getElementById("Anzuspielende Karte").innerHTML += "Anzuspielende Karte";
            var s = div.style;
            s.fontSize = 20 + "px";
            s.border = "solid white";
            s.paddingTop = 10 + "px";
            s.color = "white";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#031720";
            s.width = 210 + "px";
            s.height = 130 + "px";
            s.right = 600 + "px";
            s.top = 20 + "px";
            s.borderRadius = 10 + "px";
        }
        AblageStapel();
        deck();
    }
    document.addEventListener("DOMContentLoaded", (UNO));
})(A2 || (A2 = {}));
//# sourceMappingURL=a2.js.map