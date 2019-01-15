var rodelhang;
(function (rodelhang) {
    window.addEventListener("load", init);
    var snowflake = [];
    var childrenUp = [];
    var childrenDown = [];
    var fps = 25;
    var imgData;
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        rodelhang.crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        generateTrees();
        drawCloud();
        drawCloud2();
        drawCloud3();
        imgData = rodelhang.crc2.getImageData(0, 0, 1024, 1100);
        generateSnow();
        generateChildrenUP();
        generateChildrenDOWN();
        // generateSnow();
        update();
    }
    function update() {
        rodelhang.crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1500 / fps);
        for (var i = 0; i < snowflake.length; i++) {
            var snowflakes = snowflake[i];
            snowflakes.move();
            snowflakes.draw();
        }
    }
    function drawSun() {
        var gradient = rodelhang.crc2.createRadialGradient(500, 80, 10, 238, 5, 500);
        var centerX = 150;
        var centerY = 150;
        var radius = 100;
        gradient.addColorStop(0, "#fff91d");
        rodelhang.crc2.beginPath();
        rodelhang.crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        rodelhang.crc2.fillStyle = gradient;
        rodelhang.crc2.fill();
    }
    function drawSky() {
        rodelhang.crc2.beginPath();
        rodelhang.crc2.lineTo(0, 800);
        rodelhang.crc2.lineTo(1600, 0);
        rodelhang.crc2.lineTo(0, 0);
        rodelhang.crc2.lineTo(0, 550);
        rodelhang.crc2.closePath();
        var grd = rodelhang.crc2.createLinearGradient(0, 0, 900, 1110);
        grd.addColorStop(0, "#b2e2e9");
        rodelhang.crc2.fillStyle = grd;
        rodelhang.crc2.fill();
    }
    function drawCloud() {
        rodelhang.crc2.beginPath();
        rodelhang.crc2.arc(70, 210, 45, 0, 2 * Math.PI);
        rodelhang.crc2.arc(140, 210, 60, 0, 2 * Math.PI);
        rodelhang.crc2.arc(200, 210, 45, 0, 2 * Math.PI);
        rodelhang.crc2.arc(240, 210, 30, 0, 2 * Math.PI);
        rodelhang.crc2.fillStyle = "#FFFFFF";
        rodelhang.crc2.fill();
    }
    function drawCloud2() {
        rodelhang.crc2.beginPath();
        rodelhang.crc2.arc(650, 100, 30, 0, 2 * Math.PI);
        rodelhang.crc2.arc(810, 100, 60, 0, 2 * Math.PI);
        rodelhang.crc2.arc(870, 100, 40, 0, 2 * Math.PI);
        rodelhang.crc2.arc(750, 100, 70, 0, 2 * Math.PI);
        rodelhang.crc2.arc(700, 100, 50, 0, 2 * Math.PI);
        rodelhang.crc2.fillStyle = "#FFFFFF";
        rodelhang.crc2.fill();
    }
    function drawCloud3() {
        rodelhang.crc2.beginPath();
        rodelhang.crc2.arc(595, 220, 15, 0, 2 * Math.PI);
        rodelhang.crc2.arc(620, 220, 25, 0, 2 * Math.PI);
        rodelhang.crc2.arc(650, 220, 30, 0, 2 * Math.PI);
        rodelhang.crc2.arc(680, 220, 25, 0, 2 * Math.PI);
        rodelhang.crc2.arc(705, 220, 15, 0, 2 * Math.PI);
        rodelhang.crc2.arc(720, 220, 10, 0, 2 * Math.PI);
        rodelhang.crc2.arc(730, 220, 8, 0, 2 * Math.PI);
        rodelhang.crc2.arc(740, 220, 6, 0, 2 * Math.PI);
        rodelhang.crc2.fillStyle = "#FFFFFF";
        rodelhang.crc2.fill();
    }
    function drawTree(_x, _y) {
        console.log("Trees", _x, _y);
        rodelhang.crc2.fillStyle = "#8A4B08";
        //Baumstamm
        rodelhang.crc2.beginPath();
        rodelhang.crc2.moveTo(_x + 10, _y + 60);
        rodelhang.crc2.lineTo(_x - 10, _y + 60);
        rodelhang.crc2.lineTo(_x - 10, _y - 60);
        rodelhang.crc2.lineTo(_x + 10, _y - 60);
        rodelhang.crc2.closePath();
        rodelhang.crc2.fill();
        rodelhang.crc2.fillStyle = "#0B3B17";
        //Baumkrone Unterer Teil     
        rodelhang.crc2.beginPath();
        rodelhang.crc2.moveTo(_x - 55, _y - 10);
        rodelhang.crc2.lineTo(_x, _y - 150);
        rodelhang.crc2.lineTo(_x + 55, _y - 10);
        rodelhang.crc2.closePath();
        rodelhang.crc2.fill();
        rodelhang.crc2.fillStyle = "#327949";
        //Baumkrone Oberer Teil
        rodelhang.crc2.beginPath();
        rodelhang.crc2.moveTo(_x - 55, _y - 30);
        rodelhang.crc2.lineTo(_x, _y - 160);
        rodelhang.crc2.lineTo(_x + 55, _y - 30);
        rodelhang.crc2.closePath();
        rodelhang.crc2.fill();
    }
    function generateTrees() {
        for (var i = 0; i < 7; i++) {
            var x = Math.random() * rodelhang.crc2.canvas.width;
            var y = Math.random() * rodelhang.crc2.canvas.height;
            rodelhang.crc2.beginPath();
            rodelhang.crc2.moveTo(0, 1000);
            rodelhang.crc2.bezierCurveTo(0, 1000, 700, 1160, 300, 650);
            if (rodelhang.crc2.isPointInPath(x, y)) {
                drawTree(x, y);
            }
            else {
                i--;
            }
        }
    }
    function generateSnow() {
        for (var i = 0; i < 100; i++) {
            var snow = new rodelhang.Snow();
            snow.xPos = Math.random() * 1024;
            snow.yPos = Math.random() * 1100;
            snow.draw();
            snowflake.push(snow);
        }
    }
    function generateChildrenUP() {
        for (var i = 0; i < 4; i++) {
            var children1 = new rodelhang.ChildPull();
            children1.xPos = Math.random() * 200 + 800;
            children1.yPos = Math.random() * 100 + 900;
            children1.color = "#F04238";
            children1.draw();
            childrenUp.push(children1);
        }
    }
    function generateChildrenDOWN() {
        for (var i = 0; i < 6; i++) {
            var children = new rodelhang.ChildDrive();
            children.xPos = Math.random() * 200 + 700;
            children.yPos = Math.random() * 100 + 600;
            children.color = "#F04238";
            children.draw();
            childrenUp.push(children);
        }
    }
})(rodelhang || (rodelhang = {}));
//# sourceMappingURL=a10.js.map