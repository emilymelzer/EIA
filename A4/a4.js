/* Aufgabe: Aufgabe 3
Name: Emily Melzer
Matrikel: 259114
Datum: 15.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", init);
    var tree = ["Nordmanntanne", "Rotfichte", "Blaufichte"];
    var halterung = ["Metall", "Stahl", "Kunststoff"];
    var kugel = ["hellblau", "rot", "weiss", "silber", "gold", "rosa", "kupfer", "schwarz"];
    var lametta = ["weiss", "silber", "gold", "rosegold"];
    var kerzentyp = ["rund", "schmal", "klein", "gross"];
    var kerzenfarbe = ["weiss", "beige", "grau", "rot"];
    var fieldset;
    var inputs = [];
    var inputHalterung = [];
    var inputkugel = [];
    var inputlametta = [];
    var inputKerzentyp = [];
    var inputKerzenfarbe = [];
    var order;
    function init() {
        fieldset = document.getElementsByTagName("fieldset")[0];
        createInputs();
        createRadios();
        createCheckboxes();
        fieldset.addEventListener("change", change);
        //Für jedes Fieldset wird eine Variable deklariert und damit auf die jeweiligen ID's zugegriffen
        var kindOfTree = document.getElementById("tree");
        var halterung = document.getElementById("Halterung");
        var kugel = document.getElementById("Kugeln");
        var lametta = document.getElementById("Lametta");
        var kerzentyp = document.getElementById("Kerzen");
        //Bei den Fieldsets, welche für den Warenkorb eine Rolle spielen, muss ein Ohr (EventListener) angelegt werden
        kindOfTree.addEventListener("change", change);
        halterung.addEventListener("change", change);
        kugel.addEventListener("change", change);
    }
    function createInputs() {
        for (var i = 0; i < tree.length; i++) {
            console.log(tree[i]);
            createInput(tree[i]);
        }
    }
    //Erzeugung der Stepper für die Eissorten
    function createInput(_tree) {
        var label = document.createElement("label");
        var input = document.createElement("input");
        label.innerText = _tree;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "0";
        input.name = _tree;
        fieldset.appendChild(label);
        inputs.push(input);
        console.log(inputs);
    }
    function createRadios() {
        for (var i = 0; i < halterung.length; i++) {
            console.log(halterung[i]);
            createRadio(halterung[i]);
        }
    }
    //Erzeugung der Radio-Buttons
    function createRadio(_halterung) {
        var containerField = document.getElementById("ConeCup");
        var input = document.createElement("input");
        var label = document.createElement("label");
        //label wird dem Radio Button zugewiesen, damit dieser auch anklickbar ist
        label.htmlFor = _halterung;
        label.textContent = _halterung;
        label.appendChild(input);
        label.id = _halterung;
        input.type = "radio";
        input.value = _halterung;
        input.id = _halterung;
        input.name = "Halterung";
        input.required = true;
        //An das Fieldset werden die zuvor definierten Daten angehängt
        containerField.appendChild(input);
        containerField.appendChild(label);
        inputHalterung.push(input);
        console.log(inputHalterung);
    }
    function createCheckboxes() {
        for (var i = 0; i < kugel.length; i++) {
            console.log(kugel[i]);
            createCheckbox(kugel[i]);
        }
    }
    //Erzeugung der Checkboxes
    function createCheckbox(_kugel) {
        var containerField = document.getElementById("Kugel");
        var input = document.createElement("input");
        var label = document.createElement("label");
        //label wird der Checkbox zugewiesen, damit dieser auch anklickbar ist
        label.htmlFor = _kugel;
        label.textContent = _kugel;
        label.appendChild(input);
        label.id = _kugel;
        input.type = "checkbox";
        input.value = _kugel;
        input.id = _kugel;
        input.name = "Darbietung";
        //An das Fieldset werden die zuvor definierten Daten angehängt
        containerField.appendChild(input);
        containerField.appendChild(label);
        inputHalterung.push(input);
        console.log(inputHalterung);
    }
    function change() {
        var sum = 0;
        //Innerhalb der Array-Länge der Eissorten wird die Summe um eins hochgezählt
        for (var i = 0; i < inputs.length; i++) {
            sum += parseInt(inputs[i].value);
        }
        //Innerhalb der Array-Länge der Toppings wird die Summe um 1,5 hochgezählt
        for (var i = 0; i < inputHalterung.length; i++) {
            if (inputHalterung[i].checked) {
                sum += 1.5;
            }
        }
        //Innerhalb der Array-Länge der inputCone wird die Summe um eins hochgezählt
        for (var i = 0; i < inputkugel.length; i++) {
            if (inputkugel[i].checked) {
                sum += 0;
            }
        }
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=a4.js.map