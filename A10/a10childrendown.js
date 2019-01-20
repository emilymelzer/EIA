var rodelhang;
(function (rodelhang) {
    var ChildDown = (function () {
        function ChildDown() {
        }
        ChildDown.prototype.draw = function () {
            rodelhang.crc2.beginPath();
            rodelhang.crc2.arc(this.xPos + 25, this.yPos - 50, 10, 0, 2 * Math.PI, false);
            rodelhang.crc2.fillStyle = "#FFD8BE";
            rodelhang.crc2.fill();
            rodelhang.crc2.lineWidth = .2;
            rodelhang.crc2.strokeStyle = "#A57658";
            rodelhang.crc2.stroke();
            rodelhang.crc2.fillStyle = this.color;
            rodelhang.crc2.beginPath();
            rodelhang.crc2.moveTo(this.xPos + 10, this.yPos - 15);
            rodelhang.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            rodelhang.crc2.lineTo(this.xPos + 25, this.yPos - 40);
            rodelhang.crc2.fill();
            rodelhang.crc2.beginPath();
            rodelhang.crc2.moveTo(this.xPos, this.yPos);
            rodelhang.crc2.lineTo(this.xPos + 55, this.yPos);
            rodelhang.crc2.lineWidth = 4;
            rodelhang.crc2.strokeStyle = "#683737";
            rodelhang.crc2.stroke();
            rodelhang.crc2.beginPath();
            rodelhang.crc2.moveTo(this.xPos, this.yPos - 15);
            rodelhang.crc2.lineTo(this.xPos + 55, this.yPos - 15);
            rodelhang.crc2.lineWidth = 4;
            rodelhang.crc2.strokeStyle = "#683737";
            rodelhang.crc2.stroke();
            rodelhang.crc2.beginPath();
            rodelhang.crc2.moveTo(this.xPos + 10, this.yPos);
            rodelhang.crc2.lineTo(this.xPos + 10, this.yPos - 15);
            rodelhang.crc2.lineWidth = 4;
            rodelhang.crc2.strokeStyle = "#683737";
            rodelhang.crc2.stroke();
            rodelhang.crc2.beginPath();
            rodelhang.crc2.moveTo(this.xPos + 45, this.yPos);
            rodelhang.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            rodelhang.crc2.lineWidth = 4;
            rodelhang.crc2.strokeStyle = "#683737";
            rodelhang.crc2.stroke();
        };
        ChildDown.prototype.move = function () {
            this.yDir = 2;
            this.xDir = 5;
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos > 750) {
                this.xPos = -60;
                this.yPos = Math.random() * 250 + 400;
            }
        };
        ChildDown.prototype.getRandomColor = function () {
            var r = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var g = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var b = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            return "#" + r + g + b;
        };
        return ChildDown;
    }());
    rodelhang.ChildDown = ChildDown;
})(rodelhang || (rodelhang = {}));
//# sourceMappingURL=a10childrendown.js.map