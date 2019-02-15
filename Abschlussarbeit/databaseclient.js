var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    var serverAddress = "https://aufgabe6beispiel.herokuapp.com";
    function init(_event) {
    }
    function insert() {
        var url = "command=insert" + "&" + "score" + "=" + Rodelhang.score + "&" + "name" + "=" + Rodelhang.name;
        sendRequest(url, handleInsertResponse);
    }
    DatabaseClient.insert = insert;
    function getHighscore() {
        var query = "command=getHighscore";
        sendRequest(query, handleHighscoreResponse);
    }
    DatabaseClient.getHighscore = getHighscore;
    function sendRequest(_query, _callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var hs = JSON.parse(xhr.response);
            function sortScore(_h1, _h2) {
                if (_h1.score > _h2.score) {
                    return 1;
                }
                if (_h1.score < _h2.score) {
                    return -1;
                }
                return 0;
            }
            hs.sort(sortScore);
        }
        alert(xhr.response);
    }
    function handleHighscoreResponse(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=databaseclient.js.map