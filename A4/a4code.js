var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("DOMContentLoaded", init);
    function init() {
        generateTree();
        generateHalterung();
        generateKugeln();
        generateLametta();
        generateKerzen();
        generateKerzenfarbe();
    }
    function generateTree() {
        for (var a = 0; a < Aufgabe4.tree.length; a++) {
            var input = document.createElement("input");
            document.getElementById("Baumtyp").appendChild(input);
            input.type = "radio";
            input.name = "treegroup";
            input.value = Aufgabe4.tree[a].name;
            input.id = Aufgabe4.tree[a].name;
            var label = document.createElement("label");
            document.getElementById("Baumtyp").appendChild(label);
            generateTreeNumber(a);
            label.setAttribute("for", Aufgabe4.tree[a].name);
            label.innerHTML = Aufgabe4.tree[a].name + " " + Aufgabe4.tree[a].price + "€" + " ";
            document.getElementById("Baumtyp").appendChild(document.createElement("br"));
        }
    }
    function generateTreeNumber(_a) {
        var input = document.createElement("input");
        document.getElementById("Baumtyp").appendChild(input);
        input.type = "number";
        input.min = "0";
        input.max = "1";
        input.step = "1";
        input.value = "0";
        input.value = Aufgabe4.tree[_a].name;
        input.id = Aufgabe4.tree[_a].name;
        var label = document.createElement("label");
        document.getElementById("Baumtyp").appendChild(label);
        document.getElementById("Baumtyp").appendChild(document.createElement("br"));
    }
    function generateHalterung() {
        for (var b = 0; b < Aufgabe4.halterung.length; b++) {
            var input = document.createElement("input");
            document.getElementById("Halterung").appendChild(input);
            input.type = "radio";
            input.name = "halterungroup";
            input.value = Aufgabe4.halterung[b].name;
            input.id = Aufgabe4.halterung[b].name;
            var label = document.createElement("label");
            document.getElementById("Halterung").appendChild(label);
            generateHalterungNumber(b);
            label.setAttribute("for", Aufgabe4.halterung[b].name);
            label.innerHTML = Aufgabe4.halterung[b].name + " " + Aufgabe4.halterung[b].price + "€" + " ";
            document.getElementById("Halterung").appendChild(document.createElement("br"));
        }
    }
    function generateHalterungNumber(_b) {
        var input = document.createElement("input");
        document.getElementById("Halterung").appendChild(input);
        input.type = "number";
        input.min = "0";
        input.max = "1";
        input.step = "1";
        input.value = "0";
        input.value = Aufgabe4.tree[_b].name;
        input.id = Aufgabe4.tree[_b].name;
        var label = document.createElement("label");
        document.getElementById("Halterung").appendChild(label);
        document.getElementById("Halterung").appendChild(document.createElement("br"));
    }
    function generateKugeln() {
        for (var c = 0; c < Aufgabe4.kugel.length; c++) {
            var input = document.createElement("input");
            document.getElementById("Kugeln").appendChild(input);
            input.type = "checkbox";
            input.name = "kugelgroup";
            input.value = Aufgabe4.kugel[c].name;
            input.id = Aufgabe4.kugel[c].name;
            var label = document.createElement("label");
            document.getElementById("Kugeln").appendChild(label);
            generateKugelnNumber(c);
            label.setAttribute("for", Aufgabe4.kugel[c].name);
            label.innerHTML = Aufgabe4.kugel[c].name + " " + Aufgabe4.kugel[c].price + "€" + " ";
            document.getElementById("Kugeln").appendChild(document.createElement("br"));
        }
    }
    function generateKugelnNumber(_c) {
        var input = document.createElement("input");
        document.getElementById("Kugeln").appendChild(input);
        input.type = "number";
        input.min = "0";
        input.max = "20";
        input.step = "1";
        input.value = "0";
        input.value = Aufgabe4.kugel[_c].name;
        input.id = Aufgabe4.kugel[_c].name;
        var label = document.createElement("label");
        document.getElementById("Kugeln").appendChild(label);
        document.getElementById("Kugeln").appendChild(document.createElement("br"));
    }
    function generateLametta() {
        for (var d = 0; d < Aufgabe4.lametta.length; d++) {
            var input = document.createElement("input");
            document.getElementById("Lametta").appendChild(input);
            input.type = "checkbox";
            input.name = "lamettagroup";
            input.value = Aufgabe4.lametta[d].name;
            input.id = Aufgabe4.lametta[d].name;
            var label = document.createElement("label");
            document.getElementById("Lametta").appendChild(label);
            generateLamettaNumber(d);
            label.setAttribute("for", Aufgabe4.lametta[d].name);
            label.innerHTML = Aufgabe4.lametta[d].name + " " + Aufgabe4.lametta[d].price + "€" + " ";
            document.getElementById("Lametta").appendChild(document.createElement("br"));
        }
    }
    function generateLamettaNumber(_d) {
        var input = document.createElement("input");
        document.getElementById("Lametta").appendChild(input);
        input.type = "number";
        input.min = "0";
        input.max = "1";
        input.step = "1";
        input.value = "0";
        input.value = Aufgabe4.lametta[_d].name;
        input.id = Aufgabe4.lametta[_d].name;
        var label = document.createElement("label");
        document.getElementById("Lametta").appendChild(label);
        document.getElementById("Lametta").appendChild(document.createElement("br"));
    }
    function generateKerzen() {
        for (var e = 0; e < Aufgabe4.kerzentyp.length; e++) {
            var input = document.createElement("input");
            document.getElementById("Kerzentyp").appendChild(input);
            input.type = "checkbox";
            input.name = "kerzengroup";
            input.value = Aufgabe4.kerzentyp[e].name;
            input.id = Aufgabe4.kerzentyp[e].name;
            var label = document.createElement("label");
            document.getElementById("Kerzentyp").appendChild(label);
            label.setAttribute("for", Aufgabe4.kerzentyp[e].name);
            label.innerHTML = Aufgabe4.kerzentyp[e].name + " " + Aufgabe4.kerzentyp[e].price + "€" + " ";
            document.getElementById("Kerzentyp").appendChild(document.createElement("br"));
        }
    }
    function generateKerzenfarbe() {
        for (var f = 0; f < Aufgabe4.kerzentyp.length; f++) {
            var input = document.createElement("input");
            document.getElementById("Kerzenfarbe").appendChild(input);
            input.type = "checkbox";
            input.name = "kerzencolorgroup";
            input.value = Aufgabe4.kerzenfarbe[f].name;
            input.id = Aufgabe4.kerzenfarbe[f].name;
            var label = document.createElement("label");
            document.getElementById("Kerzenfarbe").appendChild(label);
            generateKerzenfarbeNumber(f);
            label.setAttribute("for", Aufgabe4.kerzenfarbe[f].name);
            label.innerHTML = Aufgabe4.kerzenfarbe[f].name + " ";
            document.getElementById("Kerzenfarbe").appendChild(document.createElement("br"));
        }
    }
    function generateKerzenfarbeNumber(_f) {
        var input = document.createElement("input");
        document.getElementById("Kerzenfarbe").appendChild(input);
        input.type = "number";
        input.min = "0";
        input.max = "1";
        input.step = "1";
        input.value = "0";
        input.value = Aufgabe4.kerzenfarbe[_f].name;
        input.id = Aufgabe4.kerzenfarbe[_f].name;
        var label = document.createElement("label");
        document.getElementById("Kerzenfarbe").appendChild(label);
        document.getElementById("Kerzenfarbe").appendChild(document.createElement("br"));
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=a4code.js.map