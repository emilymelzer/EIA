"use strict";
var Http = require("http"); //Es wird "Http" von "http" etwas importiert
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server");
    var port = process.env.PORT; // "port" ist vom Datentyp number
    if (port == undefined)
        port = 8100; // bekommt "port" den Wert 8100
    var server = Http.createServer(); //Variable "server"= Datentyp Http.Server 
    server.addListener("request", handleRequest); //Listener wird geaddet. Bei "request" wird die Funktion ausgeführt
    server.addListener("listening", handleListen); //Ein weiterer Listener kommt dazu. Bei "listening" wird die Funktion ausgeführt
    server.listen(port);
    function handleListen() {
        console.log("Listening"); //Auf der Konsole wird "Listening" ausgegeben
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Auf der Konsole wird "I hear voices" ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Mit "_response.setHeader" wird die Variable "_response" in den Header der HTML-Datei "content-type","text/html; charset=utf-8" eingesetzt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //"Access-Control-Allow-Origin" wird auch in den Header gegeben. 
        _response.write(_request.url); //mit "_response.write" wird auf die "_request.url" zugegriffen
        console.log(_request.url);
        _response.end(); //"response" wird beendet
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=server.js.map