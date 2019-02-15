var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    var serverAddress = "https://aufgabe6beispiel.herokuapp.com";
    function init(_event) {
    }
    function insert(_event) {
        var url = "command=insert" + "&" + "score" + "=" + Rodelhang.score + "&" + "name" + "=" + Rodelhang.name;
        sendRequest(url, handleInsertResponse);
    }
    function getHighscore(_event) {
        var query = "command=getHighscore";
        sendRequest(query, handleHighscoreResponse);
    }
    function sendRequest(_query, _callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleHighscoreResponse(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=databaseclient.js.map