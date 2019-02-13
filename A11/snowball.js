var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Rodelhang;
(function (Rodelhang) {
    var Snowball = (function (_super) {
        __extends(Snowball, _super);
        function Snowball(_x, _y) {
            _super.call(this);
            this.typ = "snowball";
            this.target = [_x, _y];
            this.xP = 700;
            this.yP = 800;
            this.scale = 70;
            this.xD = this.target[0] - this.xP;
            this.yD = this.target[1] - this.yP;
        }
        Snowball.prototype.draw = function () {
            if (this.scale <= 10) {
                this.scale = 10;
            }
            Rodelhang.crc2.beginPath();
            Rodelhang.crc2.arc(this.xP, this.yP, this.scale, 0, 3 * Math.PI);
            Rodelhang.crc2.fillStyle = "#FFFFFF";
            Rodelhang.crc2.fill();
            Rodelhang.crc2.lineWidth = 3.0;
            Rodelhang.crc2.strokeStyle = "#9d9c9d";
            Rodelhang.crc2.stroke();
        };
        Snowball.prototype.move = function () {
            this.scale -= 1;
            this.xP += this.xD / 30;
            this.yP += this.yD / 30;
        };
        return Snowball;
    }(Rodelhang.DrawObject));
    Rodelhang.Snowball = Snowball;
})(Rodelhang || (Rodelhang = {}));
//# sourceMappingURL=snowball.js.map