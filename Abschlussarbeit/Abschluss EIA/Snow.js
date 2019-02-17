var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Rodelhang;
(function (Rodelhang) {
    var Snow = (function (_super) {
        __extends(Snow, _super);
        function Snow() {
            _super.call(this);
            this.xP = Math.random() * 1400;
            this.yP = Math.random() * 700;
        }
        Snow.prototype.move = function () {
            this.yD = 4;
            this.xD = Math.random() * 2 - 1;
            this.xP += this.xD;
            this.yP += this.yD;
            if (this.yP > 800) {
                this.yP = 1;
            }
            this.draw();
        };
        Snow.prototype.draw = function () {
            Rodelhang.crc2.beginPath();
            Rodelhang.crc2.arc(this.xP, this.yP, 7, 0, 3 * Math.PI);
            Rodelhang.crc2.fillStyle = "#F5FEFF";
            Rodelhang.crc2.fill();
            Rodelhang.crc2.lineWidth = 1.2;
            Rodelhang.crc2.strokeStyle = "#D2EEF2";
            Rodelhang.crc2.stroke();
        };
        return Snow;
    }(Rodelhang.DrawObject));
    Rodelhang.Snow = Snow;
})(Rodelhang || (Rodelhang = {}));
//# sourceMappingURL=Snow.js.map