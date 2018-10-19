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
            name: "reverse",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let cexpose: card = {
            name: "expose",
            green: 2,
            red: 2,
            blue: 2,
            yellow: 2
        }

        let cplus2: card = {
            name: "plus2",
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
        interface cardblack {
            name: string;
            count: number;
        }

        let cb4: cardblack = {
            name: "plus4",
            count: 4
        }
        let cbwish: cardblack = {
            name: "wish",
            count: 4
        }

        let array: card[] = [c1, c2, c3, c4, c5, c6, c7, c8, c9, cr, cexpose, cplus2, c0];


        function getRandom(n: number) {
            return Math.floor(Math.random() * Math.floor(n));

            function placeDiv(_color: string, _n: string, _x: number): void {

                //console.log(_color, _n, _x)


                let div: HTMLDivElement = document.createElement("div");
                document.body.appendChild(div);
                div.setAttribute("id", "a" + _x)
                document.getElementById("a" + _x).innerHTML += _n;

                let s: CSSStyleDeclaration = div.style;
                s.border = "thin solid black";
                s.textAlign = "center";
                s.position = "absolute";
                s.backgroundColor = _color;
                s.width = 130 + "px";
                s.height = 200 + "px";
                s.left = (_x + 0.5) * 140 + "px";
                s.bottom = 40 + "px";
                s.borderRadius = 10 + "px";


                if (c == "#000000") {
                    s.color = "white";
                }
                if (c == "#0000ff") {
                    s.color = "white";
                }
            }
        }
        }





