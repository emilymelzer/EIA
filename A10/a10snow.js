var rodelhang;
(function (rodelhang) {
    var Snow = (function () {
        function Snow() {
        }
        Snow.prototype.draw = function () {
            rodelhang.crc2.beginPath();
            rodelhang.crc2.arc(this.xPos, this.yPos, 7, 0, 3 * Math.PI, false);
            rodelhang.crc2.fillStyle = "#F5FEFF";
            rodelhang.crc2.fill();
            rodelhang.crc2.lineWidth = 1.2;
            rodelhang.crc2.strokeStyle = "#D2EEF2";
            rodelhang.crc2.stroke();
        };
        Snow.prototype.move = function () {
            this.yDir = 4;
            this.xDir = Math.random() * 2 - 2;
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.yPos > 1100) {
                this.yPos = 0;
            }
            this.draw();
        };
        return Snow;
    }());
    rodelhang.Snow = Snow;
})(rodelhang || (rodelhang = {}));
//# sourceMappingURL=a10snow.js.map