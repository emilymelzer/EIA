namespace rodelhang {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let snowflake: Snow[] = [];
    let childrenUp: ChildPull[] = [];
    let childrenDown: ChildDown[]= [];
    let fps: number = 25;
    let imgData: ImageData;



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        generateTrees();
        drawCloud();
        drawCloud2();
        drawCloud3();
        
        
        imgData = crc2.getImageData(0, 0, 1024, 1100);
        generateSnow();
        generateChildrenUP();
        generateChildrenDOWN();
       
        update();
        

    }

    function update(): void {
        crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1500 / fps);

            for (let i: number = 0; i < snowflake.length; i++) {
            let snowflakes: Snow = snowflake[i];
            snowflakes.move();
            snowflakes.draw();
       }         
            for(let i: number=0; i < childrenUp.length; i++) {
            let childUp: ChildPull = childrenUp[i];
            childUp.move();
            childUp.draw();

}
            for(let i: number=0; i < childrenDown.length; i++) {
            let childdown: ChildDown = childrenDown[i];
            childdown.move();
            childdown.draw();
        }
        }

        function drawSun(): void {
            var gradient = crc2.createRadialGradient(500, 80, 10, 238, 5, 500);
            let centerX: number = 150;
            let centerY: number = 150;
            let radius: number = 100;
            gradient.addColorStop(0, "#fff91d");

            crc2.beginPath();
            crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            crc2.fillStyle = gradient;
            crc2.fill();
        }
        function drawSky(): void {
            crc2.beginPath();
            crc2.lineTo(0, 800);
            crc2.lineTo(1600, 0);
            crc2.lineTo(0, 0);
            crc2.lineTo(0, 550);
            crc2.closePath();

            var grd = crc2.createLinearGradient(0, 0, 900, 1110);
            grd.addColorStop(0, "#b2e2e9");

            crc2.fillStyle = grd;
            crc2.fill();
        }

        function drawCloud(): void {
            crc2.beginPath();
            crc2.arc(70, 210, 45, 0, 2 * Math.PI);
            crc2.arc(140, 210, 60, 0, 2 * Math.PI);
            crc2.arc(200, 210, 45, 0, 2 * Math.PI);
            crc2.arc(240, 210, 30, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();

        }

        function drawCloud2(): void {
            crc2.beginPath();
            crc2.arc(650, 100, 30, 0, 2 * Math.PI);
            crc2.arc(810, 100, 60, 0, 2 * Math.PI);
            crc2.arc(870, 100, 40, 0, 2 * Math.PI);
            crc2.arc(750, 100, 70, 0, 2 * Math.PI);
            crc2.arc(700, 100, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }
        function drawCloud3(): void {
            crc2.beginPath();
            crc2.arc(595, 220, 15, 0, 2 * Math.PI);
            crc2.arc(620, 220, 25, 0, 2 * Math.PI);
            crc2.arc(650, 220, 30, 0, 2 * Math.PI);
            crc2.arc(680, 220, 25, 0, 2 * Math.PI);
            crc2.arc(705, 220, 15, 0, 2 * Math.PI);
            crc2.arc(720, 220, 10, 0, 2 * Math.PI);
            crc2.arc(730, 220, 8, 0, 2 * Math.PI);
            crc2.arc(740, 220, 6, 0, 2 * Math.PI)

            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }

        function drawTree(_x: number, _y: number): void {
            console.log("Trees", _x, _y);
            crc2.fillStyle = "#8A4B08";
            //Baumstamm
            crc2.beginPath();
            crc2.moveTo(_x + 10, _y + 60);
            crc2.lineTo(_x - 10, _y + 60);
            crc2.lineTo(_x - 10, _y - 60);
            crc2.lineTo(_x + 10, _y - 60);
            crc2.closePath();
            crc2.fill();
            crc2.fillStyle = "#0B3B17";
            //Baumkrone Unterer Teil     
            crc2.beginPath();
            crc2.moveTo(_x - 55, _y - 10);
            crc2.lineTo(_x, _y - 150);
            crc2.lineTo(_x + 55, _y - 10);
            crc2.closePath();
            crc2.fill();
            crc2.fillStyle = "#327949";

            //Baumkrone Oberer Teil
            crc2.beginPath();
            crc2.moveTo(_x - 55, _y - 30);
            crc2.lineTo(_x, _y - 160);
            crc2.lineTo(_x + 55, _y - 30);
            crc2.closePath();
            crc2.fill();

        }
        function generateTrees(): void {
            for (let i: number = 0; i < 7; i++) {
                let x: number = Math.random() * crc2.canvas.width;
                let y: number = Math.random() * crc2.canvas.height;
                crc2.beginPath();
                crc2.moveTo(0, 1000);
                crc2.bezierCurveTo(0, 1000, 700, 1160, 300, 650);

                if (crc2.isPointInPath(x, y)) {
                    drawTree(x, y);
                }
                else {
                    i--;
                }
            }
        }
        function generateSnow(): void {
            for (let i: number = 0; i < 100; i++) {
                let snow: Snow = new Snow();
                snow.xPos = Math.random() * 1024;
                snow.yPos = Math.random() * 1100;
                snow.draw();
                snowflake.push(snow);
            }
        }

        function generateChildrenUP(): void {

            for (let i: number = 0; i < 4; i++) {
                let children1: ChildPull = new ChildPull();
                children1.xPos = Math.random() * 200 + 800;
                children1.yPos = Math.random() * 100 + 900;
                children1.color = "#F04238";
                children1.draw();

                childrenUp.push(children1);
            }
        }
        
        function generateChildrenDOWN(): void {

            for (let i: number = 0; i < 6; i++) {
                let children: ChildDown = new ChildDown();
                children.xPos = Math.random() * 200 + 700;
                children.yPos = Math.random() * 100 + 600;
                children.color = "#F0A232";
                children.draw();

                childrenDown.push(children);
            }
        }
}
 