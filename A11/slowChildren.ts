namespace Rodelhang {

    export class slowChildren extends Children {
        xD: number;
        yD: number;
        colorBody: string;
        md: boolean;

        constructor() {
            super();
            this.xP = Math.random() * 250 + 250;
            this.yP = Math.random() * 250 + 360;
            this.colorBody = "hsl(" + Math.random() * 360 + ", 50%, 80%)";
        }

        move(): void {
            if (this.md == true)
                this.moveDown();

            else {
                this.moveUp();
            }
        }

        moveDown(): void {
            this.xD = 5;
            this.yD = 1.5;

            this.xP += this.xD;
            this.yP += this.yD;

            if (this.xP > 1400) {
                this.md = false;
            }
        }

        moveUp(): void {

            this.xD = Math.random() * (-5);
            this.yD = Math.random() * (-1.5);

            this.xP += this.xD;
            this.yP += this.yD;

            if (this.xP < 50) {
                this.md = true;
            }
            this.draw();
        }

        draw(): void {
            //Kinder
            crc2.beginPath();
            crc2.fillStyle = "#FFD8BE";
            crc2.arc(this.xP - 20, this.yP - 10, 8, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = this.colorBody;
            crc2.fillRect(this.xP - 25, this.yP + 2, 15, 30);
            crc2.stroke();
            crc2.fill();

            //Schlitten
            crc2.beginPath();
            crc2.moveTo(this.xP - 37, this.yP + 25);
            crc2.lineTo(this.xP - 10, this.yP + 42);
            crc2.lineTo(this.xP - 6, this.yP + 43);
            crc2.lineWidth = 3;
            crc2.lineCap = "round";
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fill();
        }
    }

}