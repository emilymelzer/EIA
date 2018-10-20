namespace A2 {
    function UNO() {

        interface card {
            name: string;
            green: number;
            red: number;
            blue: number;
            yellow: number;
        }

        let c1: card = {
            name: "1",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let c2: card = {
            name: "2",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2

        }

        let c3: card = {
            name: "3",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let c4: card = {
            name: "4",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let c5: card = {
            name: "5",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let c6: card = {
            name: "6",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let c7: card = {
            name: "7",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let c8: card = {
            name: "8",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let c9: card = {
            name: "9",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let cr: card = {
            name: "Richtungswechsel",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let cexpose: card = {
            name: "Aussetzen",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let cplus2: card = {
            name: "+2",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let c0: card = {
            name: "0",
            green: 1,
            red: 1,
            blue: 1,
            yellow: 1

        }
      
        let cb4: number= 4;
        let cbwish: number=4;
       
        let allcards: card[] = [c1, c2, c3, c4, c5, c6, c7, c8, c9, cr, cexpose, cplus2, c0];
        let color: string = "";
   

        function getRandom(n: number) {
            return Math.floor(Math.random() * Math.floor(n));
            };

            function placeDiv(_color: string, _n: string, _x: number): void {


                let div: HTMLDivElement = document.createElement("div");
                document.body.appendChild(div);
                div.setAttribute("id", "a" + _x)
                document.getElementById("a" + _x).innerHTML += _n;

                let s: CSSStyleDeclaration = div.style;//Karten werden hier gestaltet
                s.fontSize = 25 + "px";
                s.border = "thin solid white";
                s.paddingTop = 110 + "px";
                s.textAlign = "center";
                s.position = "absolute";
                s.backgroundColor = _color;
                s.width = 150 + "px";
                s.height = 150 + "px";
                s.bottom = 35+ "px";
                s.left = (_x + 0.2) * 120 + "px";
                s.borderRadius = 10 + "px";

                if (color == "#000000") { //falls eine schwarze Karte aus dem Zufallsgenerator gezogen wird, wird die Schriftfarbe Weiß
                    s.color = "white";
                }
            }


            let x: number;
            let input: string = prompt("Mit wie vielen Karten möchtest du spielen?");//Nutzer wird gefragt wie viele Karten er möchte
            x = Number(input);


            for (let i: number = 0; i < x; i++) { // i = variable, x ist abhängig davon, mit wie viel Karten der Spieler spielen möchte. i wird nie größer als x
                let l = getRandom(15); //Zufallsgenerator, 13 farbige Karten und 2 schwarze Karten
                if (l == 13 && cb4 > 0) { //Schwarze Spezial-Karte 
                    color = "#000000";
                    cb4--; //"gezogene" Karte wird aus dem Kartenpool abgezogen, damit die gleiche Karte nicht noch einmal gezogen wird
                    placeDiv(color, "+4", i);
                    continue; //springt wieder zum Anfang der for-schleife
                }
                 else if (l == 13 && cb4<= 0) { //"Normale" farbige Karten
                    i--;
                    continue;
                }
                else {
                    if (l == 14 && cbwish > 0) { //Weitere schwarze Spezialkarte
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
                        let y: number = getRandom(4); //Zufallsgenerator für Ermittlung der Farben
                        switch (y) {
                            case 0:// Die Farben werden in 4 verschiedene cases unterteilt
                                color = "#fb6564";
                                if (allcards[l].red > 0) {
                                    placeDiv(color, allcards[l].name, i);
                                    allcards[l].red--;
                                    continue;//Bei jedem "continue" wird wieder von Anfang der Schleife begonnen
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
                                    placeDiv(color,allcards[l].name, i);
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
                                    continue
                                }

                        }

                    }

                }
            }
            function deck() { // Karte- Aufnehmen- Feld wird erstellt durch div
                let div = document.createElement("div");
                document.body.appendChild(div);
                div.setAttribute("id", "Neue Karte");
                document.getElementById("Neue Karte").innerHTML += "Neue Karte";
                let s = div.style;
                s.fontSize = 20 +"px";
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

            function AblageStapel() {// Anspielender Kartenstapel wird erstellt durch div
                let div = document.createElement("div");
                document.body.appendChild(div);
                div.setAttribute("id", "Anzuspielende Karte");
                document.getElementById("Anzuspielende Karte").innerHTML += "Anzuspielende Karte";
                let s = div.style;
                s.fontSize= 20 + "px";
                s.border = "solid white";
                s.paddingTop = 10 + "px";
                s.color = "white"
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
}






   
