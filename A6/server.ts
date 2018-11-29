import * as Http from "http"; //Es wird "Http" von "http" etwas importiert

namespace L06_SendData {
    console.log("Starting server");
    let port: number = process.env.PORT; // "port" ist vom Datentyp number
    if (port == undefined) // Wenn "port" nicht definiert ist, dann
        port = 8100;   // bekommt "port" den Wert 8100

    let server: Http.Server = Http.createServer(); //Variable "server"= Datentyp Http.Server 
    server.addListener("request", handleRequest); //Listener wird geaddet. Bei "request" wird die Funktion ausgeführt
    server.addListener("listening", handleListen); //Ein weiterer Listener kommt dazu. Bei "listening" wird die Funktion ausgeführt
    server.listen(port);

    function handleListen(): void {
        console.log("Listening"); //Auf der Konsole wird "Listening" ausgegeben
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Die Funktion erhält die Parameter  "_request:Http.IncomingMessage",  "_response: Http.ServerResponse", "request" wird aus der vorherigen Funktion übergeben
        console.log("I hear voices!"); //Auf der Konsole wird "I hear voices" ausgegeben

        _response.setHeader("content-type", "text/html; charset=utf-8"); //Mit "_response.setHeader" wird die Variable "_response" in den Header der HTML-Datei "content-type","text/html; charset=utf-8" eingesetzt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //"Access-Control-Allow-Origin" wird auch in den Header gegeben. 

        _response.write(_request.url); //mit "_response.write" wird auf die "_request.url" zugegriffen
        
        _response.end(); //"response" wird beendet
    }
}