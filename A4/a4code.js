var Wbk;
(function (Wbk) {
    window.addEventListener("DOMContentLoaded", init);
    var address = "https://aufgabe6beispiel.herokuapp.com";
    var url;
    function init() {
        createInput();
        var bestellButton = document.getElementById("Bestellbutton");
        bestellButton.addEventListener("click", handleClickOnAsync);
    }
    function handleClickOnAsync(_event) {
        document.getElementById("order").innerHTML = " ";
        url = " ";
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            if (input.type == "number") {
                if (parseInt(input.value) > 0) {
                    url += input.name + "=" + parseInt(input.value) + "&";
                }
            }
            if (input.checked == true) {
                url += input.value + "=" + 1 + "&";
            }
        }
        sendRequestWithCustomData();
        var product = document.querySelector(":checked").value;
        console.log(product);
    }
    function sendRequestWithCustomData() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", address + "?" + url, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            document.getElementById("order").innerHTML += xhr.response;
        }
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
        //   let articles: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
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
})(Wbk || (Wbk = {}));
//# sourceMappingURL=a4code.js.map