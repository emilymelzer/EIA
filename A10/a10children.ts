namespace rodelhang {

    export class ChildPull {
        xPos: number;
        yPos: number;
        xDir: number;
        yDir: number;
        color: string;


        draw(): void {

            crc2.beginPath();
            crc2.arc(this.xPos - 50, this.yPos - 50, 10, 0, 2 * Math.PI, false);
            crc2.fillStyle = "#FFD8BE";
            crc2.fill();
            crc2.lineWidth = .2;
            crc2.strokeStyle = "#A57658";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xPos - 35, this.yPos);
            crc2.lineTo(this.xPos - 55, this.yPos);
            crc2.lineTo(this.xPos - 55, this.yPos - 35);
            crc2.lineTo(this.xPos - 35, this.yPos - 35);

            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.xPos, this.yPos);
            crc2.lineTo(this.xPos + 55, this.yPos);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xPos, this.yPos - 15);
            crc2.lineTo(this.xPos + 55, this.yPos - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();
            //Schlitten
            crc2.beginPath();
            crc2.moveTo(this.xPos + 10, this.yPos);
            crc2.lineTo(this.xPos + 10, this.yPos - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xPos + 45, this.yPos);
            crc2.lineTo(this.xPos + 45, this.yPos - 15);

            crc2.lineWidth = 4;
            crc2.strokeStyle = "#683737";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.xPos, this.yPos - 15);
            crc2.lineTo(this.xPos - 35, this.yPos - 30);

            crc2.lineWidth = 2;
            crc2.strokeStyle = "#000000";
            crc2.stroke();
        }


        move(): void {

            this.yDir = Math.random() * (-2);
            this.xDir = Math.random() * (-5);

            this.xPos += this.xDir;
            this.yPos += this.yDir;

            if (this.xPos < -450) {
                this.xPos = Math.random() * 10 + 550; //random * streubreite + startposition
                this.yPos = 1150;
            }

        }
    }

}