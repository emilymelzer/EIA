 namespace  a0 {
    var i : string;
    function main() {
        var i = prompt("Wie ist dein Name?");
        var node: any = document.getElementById("Befehl");
        node.innerHTML += "Hallo, ";
        node.innerHTML += i;
        console.log("Hallo, " , i);
        }
    document.addEventListener("DOMContentLoaded", main);
    }