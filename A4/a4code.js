var Wbk;
(function (Wbk) {
    window.addEventListener("DOMContentLoaded", init);
    var adress = "http://localhost:8100";
    var urlToSend = "";
    function init() {
        createInput();
        setupAsyncForm();
    }
    function createInput() {
        for (var key in Wbk.offers) {
            var product = Wbk.offers[key];
            var fieldset = document.getElementById(key);
            fieldset.addEventListener("change", createCart);
            for (var a = 0; a < product.length; a++) {
                var input = document.createElement("input");
                document.getElementById(key).appendChild(input);
                input.name = key;
                input.value = Wbk.offers[key][a].name;
                input.id = Wbk.offers[key][a].name;
                input.setAttribute("group", key);
                input.setAttribute("index", "" + a);
                input.setAttribute("price", "" + Wbk.offers[key][a].price);
                var label = document.createElement("label");
                document.getElementById(key).appendChild(label);
                label.setAttribute("for", Wbk.offers[key][a].name);
                label.innerHTML = Wbk.offers[key][a].name + " " + Wbk.offers[key][a].price + "Euro";
                if (key == "Baumtyp" || key == "Halterung") {
                    input.type = "radio";
                }
                else {
                    input.type = "number";
                    input.name = Wbk.offers[key][a].name;
                    input.step = "1.0";
                    input.min = "0";
                    input.max = "100";
                    input.value = "0";
                }
                document.getElementById(key).appendChild(document.createElement("br"));
            }
        }
    }
    function createCart() {
        var p = document.getElementById("cart");
        var total = 0;
        var inputs = document.getElementsByTagName("input");
        p.innerHTML = " ";
        p.innerHTML = "<h2>Warenkorb</h2>";
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            if (input.type == "number") {
                if (parseInt(input.value) > 0) {
                    var value = parseFloat(input.value);
                    var name_1 = input.getAttribute("name");
                    var price = parseFloat(input.getAttribute("price"));
                    p.innerHTML += "<p>" + value + "x " + name_1 + " " + " " + (price * value).toFixed(2) + "Euro" + " " + "</p>";
                    total += parseFloat((price * value).toFixed(2));
                }
            }
            if (input.checked == true) {
                var value = input.getAttribute("value");
                var price = parseFloat(input.getAttribute("price"));
                total += parseFloat((price).toFixed(2));
                p.innerHTML += "<p>" + value + " " + " " + price + "Euro" + "</p>";
            }
        }
        p.innerHTML += "Gesamtpreis " + total.toFixed(2) + "Euro";
    }
    function setupAsyncForm() {
        var button = document.getElementById("check");
        button.addEventListener("click", RequestDatas);
    }
    function RequestDatas(_e) {
        var xml = new XMLHttpRequest();
        xml.open("GET", "https://aufgabe6beispiel.herokuapp.com" + "/?" + urlToSend, true);
        xml.addEventListener("readystatechange", handleStateChange);
        xml.send();
    }
    function handleStateChange(_event) {
        var xml = _event.target;
        if (xml.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xml.readyState, " | type: " + xml.responseType, " | status:" + xml.status, " | text:" + xml.statusText);
            console.log("response: " + xml.response);
            alert("response: " + xml.response);
        }
    }
})(Wbk || (Wbk = {}));
//# sourceMappingURL=a4code.js.map