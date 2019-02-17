var Rodelhang;
(function (Rodelhang) {
    window.addEventListener("load", init);
    var objects = [];
    var children = [];
    var imagedata;
    var fps = 25;
    var i = 0;
    var xMouse;
    var yMouse;
    var snowball;
    Rodelhang.score = 0;
    var gameEndbool = false;
    function listeners() {
        console.log("listeners");
        document.getElementsByTagName("canvas")[0].addEventListener("click", mouseEvent);
    }
    function init() {
        document.getElementById("Anleitung").addEventListener("click", startGame);
        document.getElementById("ende").classList.add("invisible");
    }
    function startGame() {
        var nameinput = document.getElementById("nameinput");
        Rodelhang.name = nameinput.value;
        anzeigeCanvas();
        listeners();
        console.log("maininit");
        var canvas = document.getElementsByTagName("canvas")[0];
        Rodelhang.crc2 = canvas.getContext("2d");
        drawSky();
        drawHill();
        drawSun();
        drawCloud();
        drawCloud2();
        drawCloud3();
        generateChild();
        generateSlowChildren();
        generateSnow();
        imagedata = Rodelhang.crc2.getImageData(0, 0, canvas.width, canvas.height);
        setTimeout(gameEnds, 180000);
        update();
    }
    function anzeigeCanvas() {
        document.getElementsByTagName("canvas")[0].classList.remove("invisible");
        document.getElementsByTagName("div")[0].classList.add("invisible");
    }
    function update() {
        Rodelhang.crc2.clearRect(0, 0, 1400, 900);
        Rodelhang.crc2.putImageData(imagedata, 0, 0);
        window.setTimeout(update, 1000 / fps);
        for (var i_1 = 0; i_1 < objects.length; i_1++) {
            var object = objects[i_1];
            object.draw();
            object.move();
        }
        if (snowball) {
            if (snowball.xP >= xMouse - 20 && snowball.xP <= xMouse + 20) {
                if (snowball.yP >= yMouse - 20 && snowball.yP <= yMouse + 20) {
                    console.log("ball angekommen");
                    checkIfHit();
                }
            }
        }
        drawScore();
    }
    //Schneeball
    function generateSnowball(_xMouse, _yMouse) {
        console.log(snowball);
        snowball = new Rodelhang.Snowball(_xMouse, _yMouse);
        //            console.log(snowball);
        console.log("neuer schneeball");
        objects.push(snowball);
    }
    function mouseEvent(_event) {
        if (!snowball) {
            xMouse = _event.clientX;
            yMouse = _event.clientY;
            generateSnowball(xMouse, yMouse);
        }
    }
    function checkIfHit() {
        for (var i_2 = 0; i_2 < children.length; i_2++) {
            if (xMouse >= children[i_2].xP - 60 && xMouse <= children[i_2].xP + 20) {
                if (yMouse >= children[i_2].yP - 25 && yMouse <= children[i_2].yP + 60) {
                    console.log("kind getroffen", children[i_2]);
                    children.splice(i_2, 1);
                    for (var a = 0; a < objects.length; a++) {
                        if (objects[a].typ == "children" || objects[a].typ == "slowChildren") {
                            if (xMouse >= objects[a].xP - 60 && xMouse <= objects[a].xP + 20) {
                                if (yMouse >= objects[a].yP - 25 && yMouse <= objects[a].yP + 60) {
                                    console.log("object getroffen");
                                    objects.splice(a, 1);
                                    var child = new Rodelhang.Children();
                                    objects.push(child);
                                    children.push(child);
                                    if (objects[a].md == false) {
                                        Rodelhang.score += 5;
                                    }
                                    else if (objects[a].typ == "slowChildren") {
                                        Rodelhang.score += 10;
                                    }
                                    else if (objects[a].typ == "children") {
                                        Rodelhang.score += 20;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        for (var i_3 = 0; i_3 < objects.length; i_3++) {
            if (objects[i_3].typ == "snowball") {
                objects.splice(i_3, 1);
                console.log("ball löschen");
                console.log(objects[i_3]);
            }
        }
        snowball = null;
    }
    //Schnee
    function generateSnow() {
        for (var i_4 = 0; i_4 < 70; i_4++) {
            var snowflake = new Rodelhang.Snow();
            objects.push(snowflake);
        }
    }
    function generateChild() {
        for (var i_5 = 0; i_5 < 5; i_5++) {
            var child = new Rodelhang.Children();
            objects.push(child);
            children.push(child);
        }
    }
    function generateSlowChildren() {
        for (var i_6 = 0; i_6 < 5; i_6++) {
            var child = new Rodelhang.slowChildren();
            objects.push(child);
            children.push(child);
        }
    }
    function gameEnds() {
        document.getElementsByTagName("canvas")[0].classList.add("invisible");
        document.getElementById("ende").classList.remove("invisible");
        document.getElementById("reload").classList.remove("invisible");
        document.getElementById("yourScore").innerText = "Deine Punktzahl:" + " " + Rodelhang.score.toString();
        document.getElementById("reload").addEventListener("click", reload);
        DatabaseClient.insert();
        DatabaseClient.getHighscore();
    }
    function reload() {
        window.location.reload();
    }
    function drawCloud() {
        Rodelhang.crc2.beginPath();
        Rodelhang.crc2.arc(70, 170, 45, 0, 2 * Math.PI);
        Rodelhang.crc2.arc(140, 170, 60, 0, 2 * Math.PI);
        Rodelhang.crc2.arc(200, 170, 45, 0, 2 * Math.PI);
        Rodelhang.crc2.arc(240, 170, 30, 0, 2 * Math.PI);
        Rodelhang.crc2.fillStyle = "#FFFFFF";
        Rodelhang.crc2.fill();
    }
    function drawCloud2() {
        Rodelhang.crc2.beginPath();
        Rodelhang.crc2.arc(650, 100, 30, 0, 2 * Math.PI);
        Rodelhang.crc2.arc(810, 100, 60, 0, 2 * Math.PI);
        Rodelhang.crc2.arc(870, 100, 40, 0, 2 * Math.PI);
        Rodelhang.crc2.arc(750, 100, 70, 0, 2 * Math.PI);
        Rodelhang.crc2.arc(700, 100, 50, 0, 2 * Math.PI);
        Rodelhang.crc2.fillStyle = "#FFFFFF";
        Rodelhang.crc2.fill();
    }
    function drawCloud3() {
        Rodelhang.crc2.beginPath();
        Rodelhang.crc2.arc(595, 220, 15, 0, 2 * Math.PI);
        Rodelhang.crc2.arc(620, 220, 25, 0, 2 * Math.PI);
        Rodelhang.crc2.arc(650, 220, 30, 0, 2 * Math.PI);
        Rodelhang.crc2.arc(680, 220, 25, 0, 2 * Math.PI);
        Rodelhang.crc2.arc(705, 220, 15, 0, 2 * Math.PI);
        Rodelhang.crc2.arc(720, 220, 10, 0, 2 * Math.PI);
        Rodelhang.crc2.arc(730, 220, 8, 0, 2 * Math.PI);
        Rodelhang.crc2.arc(740, 220, 6, 0, 2 * Math.PI);
        Rodelhang.crc2.fillStyle = "#FFFFFF";
        Rodelhang.crc2.fill();
    }
    function drawSky() {
        Rodelhang.crc2.moveTo(0, 100);
        Rodelhang.crc2.beginPath();
        Rodelhang.crc2.lineTo(1400, 800);
        Rodelhang.crc2.lineTo(1400, 0);
        Rodelhang.crc2.lineTo(0, 0);
        Rodelhang.crc2.lineTo(0, 370);
        Rodelhang.crc2.closePath();
        var grd = Rodelhang.crc2.createLinearGradient(0, 0, 700, 1110);
        grd.addColorStop(0, "#7eb6e9");
        Rodelhang.crc2.fillStyle = grd;
        Rodelhang.crc2.fill();
    }
    function drawHill() {
        Rodelhang.crc2.beginPath();
        Rodelhang.crc2.moveTo(0, 300);
        Rodelhang.crc2.lineTo(1400, 700);
        Rodelhang.crc2.lineTo(1400, 800);
        Rodelhang.crc2.lineTo(0, 800);
        Rodelhang.crc2.lineTo(0, 700);
        Rodelhang.crc2.closePath();
        Rodelhang.crc2.fillStyle = "#FFFFFF";
        Rodelhang.crc2.fill();
    }
    function drawSun() {
        Rodelhang.crc2.beginPath();
        Rodelhang.crc2.arc(150, 100, 70, 0, 2 * Math.PI);
        Rodelhang.crc2.fillStyle = "#fff91d";
        Rodelhang.crc2.fill();
    }
    function drawScore() {
        Rodelhang.crc2.beginPath();
        Rodelhang.crc2.moveTo(50, 670);
        Rodelhang.crc2.lineTo(300, 670);
        Rodelhang.crc2.lineTo(300, 770);
        Rodelhang.crc2.lineTo(50, 770);
        Rodelhang.crc2.closePath();
        Rodelhang.crc2.fillStyle = "#ffffff";
        Rodelhang.crc2.fill();
        Rodelhang.crc2.lineWidth = 3.5;
        Rodelhang.crc2.strokeStyle = "#7eb6e9";
        Rodelhang.crc2.stroke();
        Rodelhang.crc2.font = "30px Quicksand";
        Rodelhang.crc2.fillStyle = "#000000";
        Rodelhang.crc2.fillText("Score", 135, 700);
        Rodelhang.crc2.font = "30px Quicksand";
        Rodelhang.crc2.fillStyle = "#000000";
        Rodelhang.crc2.fillText(Rodelhang.score.toString(), 135, 730);
    }
})(Rodelhang || (Rodelhang = {}));
//# sourceMappingURL=Main.js.map