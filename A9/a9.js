var rodelhang;
(function (rodelhang) {
    window.addEventListener("load", init);
    var crc2;
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        generateSnow();
        drawGirl();
        drawGirl2();
        generateTrees();
        drawCloud();
        drawCloud2();
        drawCloud3();
        drawSleigh();
        drawRope();
        console.log("Canvas started");
    }
    function drawSun() {
        var gradient = crc2.createRadialGradient(500, 80, 10, 238, 5, 500);
        var centerX = 150;
        var centerY = 150;
        var radius = 100;
        gradient.addColorStop(0, "#fff91d");
        crc2.beginPath();
        crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    function drawSky() {
        crc2.beginPath();
        crc2.lineTo(0, 800);
        crc2.lineTo(1600, 0);
        crc2.lineTo(0, 0);
        crc2.lineTo(0, 550);
        crc2.closePath();
        var grd = crc2.createLinearGradient(0, 0, 900, 1110);
        grd.addColorStop(0, "#b2e2e9");
        crc2.fillStyle = grd;
        crc2.fill();
    }
    function drawCloud() {
        crc2.beginPath();
        crc2.arc(70, 210, 45, 0, 2 * Math.PI);
        crc2.arc(140, 210, 60, 0, 2 * Math.PI);
        crc2.arc(200, 210, 45, 0, 2 * Math.PI);
        crc2.arc(240, 210, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function drawCloud2() {
        crc2.beginPath();
        crc2.arc(650, 100, 30, 0, 2 * Math.PI);
        crc2.arc(810, 100, 60, 0, 2 * Math.PI);
        crc2.arc(870, 100, 40, 0, 2 * Math.PI);
        crc2.arc(750, 100, 70, 0, 2 * Math.PI);
        crc2.arc(700, 100, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function drawCloud3() {
        crc2.beginPath();
        crc2.arc(595, 220, 15, 0, 2 * Math.PI);
        crc2.arc(620, 220, 25, 0, 2 * Math.PI);
        crc2.arc(650, 220, 30, 0, 2 * Math.PI);
        crc2.arc(680, 220, 25, 0, 2 * Math.PI);
        crc2.arc(705, 220, 15, 0, 2 * Math.PI);
        crc2.arc(720, 220, 10, 0, 2 * Math.PI);
        crc2.arc(730, 220, 8, 0, 2 * Math.PI);
        crc2.arc(740, 220, 6, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function drawTree(_x, _y) {
        console.log("Trees", _x, _y);
        crc2.fillStyle = "#8A4B08";
        //Baumstamm
        crc2.beginPath();
        crc2.moveTo(_x + 10, _y + 60);
        crc2.lineTo(_x - 10, _y + 60);
        crc2.lineTo(_x - 10, _y - 60);
        crc2.lineTo(_x + 10, _y - 60);
        crc2.closePath();
        crc2.fill();
        crc2.fillStyle = "#0B3B17";
        //Baumkrone Unterer Teil     
        crc2.beginPath();
        crc2.moveTo(_x - 55, _y - 10);
        crc2.lineTo(_x, _y - 150);
        crc2.lineTo(_x + 55, _y - 10);
        crc2.closePath();
        crc2.fill();
        crc2.fillStyle = "#327949";
        //Baumkrone Oberer Teil
        crc2.beginPath();
        crc2.moveTo(_x - 55, _y - 30);
        crc2.lineTo(_x, _y - 160);
        crc2.lineTo(_x + 55, _y - 30);
        crc2.closePath();
        crc2.fill();
    }
    function generateTrees() {
        for (var i = 0; i < 4; i++) {
            var x = Math.random() * crc2.canvas.width;
            var y = Math.random() * crc2.canvas.height;
            crc2.beginPath();
            crc2.moveTo(0, 1000);
            crc2.bezierCurveTo(0, 1000, 700, 1160, 300, 650);
            if (crc2.isPointInPath(x, y)) {
                drawTree(x, y);
            }
            else {
                i--;
            }
        }
    }
    function generateSnow() {
        for (var i = 0; i < 30; i++) {
            var x = Math.random() * 1024;
            var y = Math.random() * 1100;
            drawSnow(x, y);
        }
    }
    function drawSnow(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 10, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function drawGirl() {
        //Kopf
        crc2.beginPath();
        crc2.arc(650, 350, 25, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#cba57e";
        crc2.fill();
        crc2.lineWidth = 1.2;
        crc2.strokeStyle = "#A57658";
        crc2.stroke();
        //Kleid
        crc2.beginPath();
        crc2.moveTo(650, 380);
        crc2.lineTo(610, 510);
        crc2.lineTo(680, 510);
        crc2.lineWidth = 1.2;
        crc2.strokeStyle = "#894463";
        crc2.stroke();
        crc2.fillStyle = "#d0578b";
        crc2.fill();
    }
    function drawGirl2() {
        //Kopf
        crc2.beginPath();
        crc2.arc(550, 400, 25, 0, 2 * Math.PI, false);
        crc2.fillStyle = "#cba57e";
        crc2.fill();
        crc2.strokeStyle = "#A57658";
        crc2.stroke();
        //Kleid
        crc2.beginPath();
        crc2.moveTo(550, 430);
        crc2.lineTo(510, 540);
        crc2.lineTo(580, 540);
        crc2.lineWidth = 1.2;
        crc2.strokeStyle = "#b66029";
        crc2.stroke();
        crc2.fillStyle = "#ef6e10";
        crc2.fill();
    }
    function drawSleigh() {
        //Schlittenkufen
        crc2.beginPath();
        crc2.moveTo(400, 570);
        crc2.lineTo(300, 620);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
        //Schlittenkufen
        crc2.beginPath();
        crc2.moveTo(400, 600);
        crc2.lineTo(300, 650);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
        //Verbindungsteile
        crc2.beginPath();
        crc2.moveTo(330, 605);
        crc2.lineTo(325, 635);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
        //Verbindungsteile
        crc2.beginPath();
        crc2.moveTo(380, 580);
        crc2.lineTo(385, 605);
        crc2.lineWidth = 4;
        crc2.strokeStyle = "#683737";
        crc2.stroke();
    }
    function drawRope() {
        crc2.beginPath();
        crc2.moveTo(530, 450);
        crc2.lineTo(410, 570);
        crc2.lineWidth = 2;
        crc2.strokeStyle = "#000000";
        crc2.stroke();
    }
})(rodelhang || (rodelhang = {}));
//# sourceMappingURL=a9.js.map