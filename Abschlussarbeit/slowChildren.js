var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Rodelhang;
(function (Rodelhang) {
    var slowChildren = (function (_super) {
        __extends(slowChildren, _super);
        function slowChildren() {
            _super.call(this);
            this.typ = "slowChildren";
            this.xP = Math.random() * 250 + 250;
            this.yP = Math.random() * 250 + 360;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 50%, 80%)";
        }
        slowChildren.prototype.move = function () {
            if (this.md == true)
                this.moveDown();
            else {
                this.moveUp();
            }
        };
        slowChildren.prototype.moveDown = function () {
            this.xD = 5;
            this.yD = 1.5;
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.xP > 1400) {
                this.md = false;
            }
        };
        slowChildren.prototype.moveUp = function () {
            this.xD = Math.random() * (-5);
            this.yD = Math.random() * (-1.5);
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.xP < 50) {
                this.md = true;
            }
            this.draw();
        };
        slowChildren.prototype.draw = function () {
            //Kinder
            Rodelhang.crc2.beginPath();
            Rodelhang.crc2.fillStyle = "#FFD8BE";
            Rodelhang.crc2.arc(this.xP - 20, this.yP - 10, 8, 0, 2 * Math.PI);
            Rodelhang.crc2.fill();
            Rodelhang.crc2.beginPath();
            Rodelhang.crc2.fillStyle = this.colorBody;
            Rodelhang.crc2.fillRect(this.xP - 25, this.yP + 2, 15, 30);
            Rodelhang.crc2.stroke();
            Rodelhang.crc2.fill();
            //Schlitten
            Rodelhang.crc2.beginPath();
            Rodelhang.crc2.moveTo(this.xP - 37, this.yP + 25);
            Rodelhang.crc2.lineTo(this.xP - 10, this.yP + 42);
            Rodelhang.crc2.lineTo(this.xP - 6, this.yP + 43);
            Rodelhang.crc2.lineWidth = 3;
            Rodelhang.crc2.lineCap = "round";
            Rodelhang.crc2.strokeStyle = "#000000";
            Rodelhang.crc2.stroke();
            Rodelhang.crc2.fill();
        };
        return slowChildren;
    }(Rodelhang.Children));
    Rodelhang.slowChildren = slowChildren;
})(Rodelhang || (Rodelhang = {}));
//# sourceMappingURL=slowChildren.js.map