var Rodelhang;
(function (Rodelhang) {
    window.addEventListener("load", init);
    var objects = [];
    var imagedata;
    var fps = 25;
    var i = 0;
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        Rodelhang.crc2 = canvas.getContext("2d");
        drawSky();
        drawHill();
        drawSun();
        drawCloud();
        drawCloud2();
        drawCloud3();
        generateTrees();
        generateSnow();
        generateChild();
        imagedata = Rodelhang.crc2.getImageData(0, 0, canvas.width, canvas.height);
        update();
        function update() {
            Rodelhang.crc2.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1000 / fps);
            for (var i_1 = 0; i_1 < objects.length; i_1++) {
                var object = objects[i_1];
                object.draw();
                object.move();
            }
        }
        function generateTrees() {
            for (var i_2 = 0; i_2 < 6; i_2++) {
                var tree = new Rodelhang.Tree();
                objects.push(tree);
            }
        }
        function generateSnow() {
            for (var i_3 = 0; i_3 < 70; i_3++) {
                var snowflake = new Rodelhang.Snow();
                objects.push(snowflake);
            }
        }
        function generateChild() {
            for (var i_4 = 0; i_4 < 5; i_4++) {
                var child = new Rodelhang.Children();
                objects.push(child);
            }
        }
        function drawCloud() {
            Rodelhang.crc2.beginPath();
            Rodelhang.crc2.arc(70, 210, 45, 0, 2 * Math.PI);
            Rodelhang.crc2.arc(140, 210, 60, 0, 2 * Math.PI);
            Rodelhang.crc2.arc(200, 210, 45, 0, 2 * Math.PI);
            Rodelhang.crc2.arc(240, 210, 30, 0, 2 * Math.PI);
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
            Rodelhang.crc2.lineTo(1200, 800);
            Rodelhang.crc2.lineTo(1030, 0);
            Rodelhang.crc2.lineTo(0, 0);
            Rodelhang.crc2.lineTo(0, 370);
            Rodelhang.crc2.closePath();
            var grd = Rodelhang.crc2.createLinearGradient(0, 0, 700, 1110);
            grd.addColorStop(0, "#b2e2e9");
            Rodelhang.crc2.fillStyle = grd;
            Rodelhang.crc2.fill();
        }
        function drawHill() {
            Rodelhang.crc2.beginPath();
            Rodelhang.crc2.moveTo(0, 300);
            Rodelhang.crc2.lineTo(700, 700);
            Rodelhang.crc2.lineTo(700, 700);
            Rodelhang.crc2.lineTo(0, 700);
            Rodelhang.crc2.lineTo(0, 700);
            Rodelhang.crc2.closePath();
            Rodelhang.crc2.fillStyle = "#FFFFFF";
            Rodelhang.crc2.fill();
        }
        function drawSun() {
            Rodelhang.crc2.beginPath();
            Rodelhang.crc2.arc(150, 150, 100, 0, 2 * Math.PI);
            Rodelhang.crc2.fillStyle = "#fff91d";
            Rodelhang.crc2.fill();
        }
    }
})(Rodelhang || (Rodelhang = {}));
//# sourceMappingURL=Main.js.map