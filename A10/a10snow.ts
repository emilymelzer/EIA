namespace rodelhang {

    export class Snow {
        xPos: number;
        yPos: number;
        xDir: number;
        yDir: number;

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.xPos, this.yPos, 7, 0, 3 * Math.PI, false);

            crc2.fillStyle = "#F5FEFF";
            crc2.fill();
            crc2.lineWidth = 1.2;
            crc2.strokeStyle = "#D2EEF2";
            crc2.stroke();
        }
            move(): void {

            this.yDir = 4;
            this.xDir = Math.random() * 2 - 2;

            this.xPos += this.xDir;
            this.yPos += this.yDir;

            if (this.yPos > 1100) {
                this.yPos = 0;
            }
            this.draw();
        }
    }
}