var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Rodelhang;
(function (Rodelhang) {
    var Tree = (function (_super) {
        __extends(Tree, _super);
        function Tree() {
            _super.call(this);
            this.xP = 40 + Math.random() * 600;
            this.yP = 600 + Math.random() * 250;
            this.color = "#0B3B17";
        }
        Tree.prototype.draw = function () {
            Rodelhang.crc2.fillStyle = "#8A4B08";
            Rodelhang.crc2.fillRect(this.xP - 8, this.yP + 100, 12, 40);
            Rodelhang.crc2.beginPath();
            Rodelhang.crc2.moveTo(this.xP, this.yP);
            Rodelhang.crc2.lineTo(this.xP + 40, this.yP + 110);
            Rodelhang.crc2.lineTo(this.xP - 40, this.yP + 110);
            Rodelhang.crc2.closePath();
            Rodelhang.crc2.fillStyle = this.color;
            Rodelhang.crc2.fill();
        };
        return Tree;
    }(Rodelhang.DrawObject));
    Rodelhang.Tree = Tree;
})(Rodelhang || (Rodelhang = {}));
//# sourceMappingURL=Tree.js.map