var rodelhang;
(function (rodelhang) {
    var ChildDrive = (function () {
        function ChildDrive() {
        }
        ChildDrive.prototype.draw = function () {
            rodelhang.crc2.beginPath();
            rodelhang.crc2.arc(this.xPos - 45, this.yPos - 45, 10, 0, 2 * Math.PI, false);
            rodelhang.crc2.fillStyle = "#FFD8BE";
            rodelhang.crc2.fill();
            rodelhang.crc2.lineWidth = .2;
            rodelhang.crc2.strokeStyle = "#A57658";
            rodelhang.crc2.stroke();
            rodelhang.crc2.beginPath();
            rodelhang.crc2.moveTo(this.xPos - 35, this.yPos);
            rodelhang.crc2.lineTo(this.xPos - 55, this.yPos);
            rodelhang.crc2.lineTo(this.xPos - 55, this.yPos - 35);
            rodelhang.crc2.lineTo(this.xPos - 35, this.yPos - 35);
            rodelhang.crc2.fillStyle = this.color;
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
            rodelhang.crc2.beginPath();
            rodelhang.crc2.moveTo(this.xPos, this.yPos - 15);
            rodelhang.crc2.lineTo(this.xPos - 35, this.yPos - 30);
            rodelhang.crc2.lineWidth = 2;
            rodelhang.crc2.strokeStyle = "#000000";
            rodelhang.crc2.stroke();
        };
        ChildDrive.prototype.move = function () {
            this.yDir = Math.random() * (-2);
            this.xDir = Math.random() * (-5);
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos < -450) {
                this.xPos = Math.random() * 10 + 550; //random * streubreite + startposition
                this.yPos = 1150;
            }
        };
        return ChildDrive;
    }());
    rodelhang.ChildDrive = ChildDrive;
})(rodelhang || (rodelhang = {}));
//# sourceMappingURL=a10childrendown.js.map