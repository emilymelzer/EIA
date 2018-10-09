var a0;
(function (a0) {
    var i;
    function main() {
        var i = prompt("Wie ist dein Name?");
        var node = document.getElementById("Befehl");
        node.innerHTML += "Hallo, ";
        node.innerHTML += i;
        console.log("Hallo, ", i);
    }
    document.addEventListener("DOMContentLoaded", main);
})(a0 || (a0 = {}));
//# sourceMappingURL=a0.js.map