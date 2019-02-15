namespace DatabaseClient {
    window.addEventListener("load", init);
    let serverAddress: string = "https://aufgabe6beispiel.herokuapp.com";

    function init(_event: Event): void {


    }
    export function insert(): void {
        let url: string = "command=insert" + "&" + "score" + "=" + Rodelhang.score + "&" + "name" + "=" + Rodelhang.name;
        sendRequest(url, handleInsertResponse);
    }

    export function getHighscore() {
        let query: string = "command=getHighscore";
        sendRequest(query, handleHighscoreResponse);

    }
    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    
    
    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {

}
        }
            function handleHighscoreResponse(_event: ProgressEvent): void {
                let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    console.log(xhr.response);


                    let hs: Highscore[] = JSON.parse(xhr.response);

                    function sortScore(_h1: Highscore, _h2: Highscore): number {
                        if (_h1.score > _h2.score) {
                            return 1;
                        }
                        if (_h1.score < _h2.score) {
                            return -1;
                        }
                        return 0;
                    }
                    hs.sort(sortScore);

                    for (let b: number = 0; b < Highscore.length; b++) {
                        document.getElementById("High").appendChild(div);
                        div.innerHTML = hs[b].name;
                        div.innerHTML = hs[b].score;
                        let id: string = b.toString();
                        div.setAttribute("id", id);
                        div.classList.add

                    }
                    alert(xhr.response);
                }
            }
        
    



