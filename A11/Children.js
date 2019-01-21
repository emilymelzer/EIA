var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Rodelhang;
(function (Rodelhang) {
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children() {
            _super.call(this);
            this.xP = Math.random() * 75 + 100;
            this.yP = Math.random() * 75 + 400;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 70%, 80%)";
        }
        Children.prototype.move = function () {
            if (this.md == true)
                this.moveDown();
            else {
                this.moveUp();
            }
        };
        Children.prototype.moveDown = function () {
            this.xD = 6;
            this.yD = 3;
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.xP > 900) {
                this.md = false;
            }
        };
        Children.prototype.moveUp = function () {
            this.xD = Math.random() * (-6);
            this.yD = Math.random() * (-3);
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.xP < 50) {
                this.md = true;
            }
            this.draw();
        };
        Children.prototype.draw = function () {
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
        return Children;
    }(Rodelhang.DrawObject));
    Rodelhang.Children = Children;
})(Rodelhang || (Rodelhang = {}));
//# sourceMappingURL=Children.js.map