namespace Rodelhang {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;

    let objects: DrawObject[] = [];
    let imagedata: ImageData;
    let fps: number = 25;
    let i: number = 0;


    function init(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        drawSky();
        drawHill();
        drawSun();
        
        drawCloud();
        drawCloud2();
        drawCloud3();
        
        generateTrees();
        generateSnow();
        generateChild();

        imagedata = crc2.getImageData(0, 0, canvas.width, canvas.height);

        update();

        function update(): void {
            crc2.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1000 / fps);


            for (let i: number = 0; i < objects.length; i++) {
                let object: DrawObject = objects[i];
                object.draw();
                object.move();
            }
        }

        
        function generateTrees(): void {
            for (let i: number = 0; i < 6; i++) {
                let tree: Tree = new Tree();
                objects.push(tree);
            }
        }

        function generateSnow(): void {
            for (let i: number = 0; i < 70; i++) {

                let snowflake: Snow = new Snow();
                objects.push(snowflake);
            }
        }

        function generateChild(): void {
            for (let i: number = 0; i < 5; i++) {

                let child: Children = new Children();
                objects.push(child);
            }
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
       

        function drawSky(): void {
            crc2.moveTo(0, 100);
            crc2.beginPath();

            crc2.lineTo(1200, 800);
            crc2.lineTo(1030, 0);
            crc2.lineTo(0, 0);
            crc2.lineTo(0, 370);
            crc2.closePath();

            var grd = crc2.createLinearGradient(0, 0, 700, 1110);
            grd.addColorStop(0, "#b2e2e9");

            crc2.fillStyle = grd;
            crc2.fill();
        }

        function drawHill(): void {
            crc2.beginPath();
            crc2.moveTo(0, 300);
            crc2.lineTo(700, 700);
            crc2.lineTo(700, 700);
            crc2.lineTo(0, 700);
            crc2.lineTo(0, 700);
            crc2.closePath();
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }

        function drawSun(): void {
            crc2.beginPath();
            crc2.arc(150, 150, 100, 0, 2 * Math.PI);
            crc2.fillStyle = "#fff91d";
            crc2.fill();
        }

    }
}