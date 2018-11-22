namespace Aufgabe4 {
    window.addEventListener("DOMContentLoaded", init)

    function init(): void {
        generateTree();
        generateHalterung();
        generateKugeln();
        generateLametta();
        generateKerzen();
        generateKerzenfarbe();
       

    }
 
function generateTree(): void {
    for (let  a:number=0; a< tree.length; a++){
        let input: HTMLInputElement= document.createElement("input");
        document.getElementById("Baumtyp").appendChild(input);
        input.type ="radio";
        input.name ="treegroup";
        input.value= tree[a].name;
        input.id= tree[a].name;
        let label: HTMLLabelElement = document.createElement("label");
        document.getElementById("Baumtyp").appendChild(label);
        generateTreeNumber(a);
        label.setAttribute("for",tree[a].name);
        label.innerHTML = tree[a].name +" "+ tree[a].price + "€"+ " ";
        document.getElementById("Baumtyp").appendChild(document.createElement("br"));

}
 
 }
    function generateTreeNumber(_a:number): void {
        let input: HTMLInputElement= document.createElement("input");
        document.getElementById("Baumtyp").appendChild(input);
        input.type ="number";
        input.min= "0";
        input.max="1";
        input.step= "1";
        input.value= "0";
        input.value=tree[_a].name;
        input.id= tree[_a].name;
        let label: HTMLLabelElement = document.createElement("label");
        document.getElementById("Baumtyp").appendChild(label);
        document.getElementById("Baumtyp").appendChild(document.createElement("br"));
            }
function generateHalterung(): void {
    for (let  b:number=0; b< halterung.length; b++){
        let input: HTMLInputElement= document.createElement("input");
        document.getElementById("Halterung").appendChild(input);
        input.type ="radio";
        input.name ="halterungroup";
        input.value= halterung[b].name;
        input.id= halterung[b].name;
        let label: HTMLLabelElement = document.createElement("label");
        document.getElementById("Halterung").appendChild(label);
        generateHalterungNumber(b);
        label.setAttribute("for",halterung[b].name);
        label.innerHTML = halterung[b].name +" "+ halterung[b].price + "€"+ " ";
        document.getElementById("Halterung").appendChild(document.createElement("br"));

}}
     function generateHalterungNumber(_b:number): void {
        let input: HTMLInputElement= document.createElement("input");
        document.getElementById("Halterung").appendChild(input);
        input.type ="number";
        input.min= "0";
        input.max="1";
        input.step= "1";
        input.value= "0";
        input.value=tree[_b].name;
        input.id= tree[_b].name;
        let label: HTMLLabelElement = document.createElement("label");
        document.getElementById("Halterung").appendChild(label);
        document.getElementById("Halterung").appendChild(document.createElement("br"));
            }

function generateKugeln(): void {
    for (let  c:number=0; c< kugel.length; c++){
        let input: HTMLInputElement= document.createElement("input");
        document.getElementById("Kugeln").appendChild(input);
        input.type ="checkbox";
        input.name ="kugelgroup";
        input.value= kugel[c].name;
        input.id= kugel[c].name;
        let label: HTMLLabelElement = document.createElement("label");
        document.getElementById("Kugeln").appendChild(label);
        generateKugelnNumber(c);
        label.setAttribute("for",kugel[c].name);
        label.innerHTML = kugel[c].name + " " + kugel[c].price + "€" + " ";
        document.getElementById("Kugeln").appendChild(document.createElement("br"));

}}
         function generateKugelnNumber(_c:number): void {
        let input: HTMLInputElement= document.createElement("input");
        document.getElementById("Kugeln").appendChild(input);
        input.type ="number";
        input.min= "0";
        input.max="20";
        input.step= "1";
        input.value= "0";
        input.value=kugel[_c].name;
        input.id= kugel[_c].name;
        let label: HTMLLabelElement = document.createElement("label");
        document.getElementById("Kugeln").appendChild(label);
        document.getElementById("Kugeln").appendChild(document.createElement("br"));
            }
            
function generateLametta(): void {
    for (let  d:number=0; d< lametta.length; d++){
        let input: HTMLInputElement= document.createElement("input");
        document.getElementById("Lametta").appendChild(input);
        input.type ="checkbox";
        input.name ="lamettagroup";
        input.value= lametta[d].name;
        input.id= lametta[d].name;
        let label: HTMLLabelElement = document.createElement("label");
        document.getElementById("Lametta").appendChild(label);
        generateLamettaNumber(d);
        label.setAttribute("for",lametta[d].name);
        label.innerHTML = lametta[d].name + " "+lametta[d].price+ "€"+ " ";
        document.getElementById("Lametta").appendChild(document.createElement("br"));

}}
         function generateLamettaNumber(_d:number): void {
        let input: HTMLInputElement= document.createElement("input");
        document.getElementById("Lametta").appendChild(input);
        input.type ="number";
        input.min= "0";
        input.max="1";
        input.step= "1";
        input.value= "0";
        input.value=lametta[_d].name;
        input.id= lametta[_d].name;
        let label: HTMLLabelElement = document.createElement("label");
        document.getElementById("Lametta").appendChild(label);
        document.getElementById("Lametta").appendChild(document.createElement("br"));
            }
function generateKerzen(): void {
    for (let  e:number=0; e< kerzentyp.length; e++){
        let input: HTMLInputElement= document.createElement("input");
        document.getElementById("Kerzentyp").appendChild(input);
        input.type ="checkbox";
        input.name ="kerzengroup";
        input.value= kerzentyp[e].name;
        input.id= kerzentyp[e].name;
        let label: HTMLLabelElement = document.createElement("label");
        document.getElementById("Kerzentyp").appendChild(label);
        label.setAttribute("for",kerzentyp[e].name);
        label.innerHTML = kerzentyp[e].name + " "+ kerzentyp[e].price+ "€" +" ";
        document.getElementById("Kerzentyp").appendChild(document.createElement("br"));

}}
function generateKerzenfarbe(): void {
    for (let  f:number=0; f< kerzentyp.length; f++){
        let input: HTMLInputElement= document.createElement("input");
        document.getElementById("Kerzenfarbe").appendChild(input);
        input.type ="checkbox";
        input.name ="kerzencolorgroup";
        input.value= kerzenfarbe[f].name;
        input.id= kerzenfarbe[f].name;
        let label: HTMLLabelElement = document.createElement("label");
        document.getElementById("Kerzenfarbe").appendChild(label);
        generateKerzenfarbeNumber(f);
        label.setAttribute("for",kerzenfarbe[f].name);
        label.innerHTML = kerzenfarbe[f].name+ " ";
        document.getElementById("Kerzenfarbe").appendChild(document.createElement("br"));

}}
        function generateKerzenfarbeNumber(_f:number): void {
        let input: HTMLInputElement= document.createElement("input");
        document.getElementById("Kerzenfarbe").appendChild(input);
        input.type ="number";
        input.min= "0";
        input.max="1";
        input.step= "1";
        input.value= "0";
        input.value=kerzenfarbe[_f].name;
        input.id= kerzenfarbe[_f].name;
        let label: HTMLLabelElement = document.createElement("label");
        document.getElementById("Kerzenfarbe").appendChild(label);
        document.getElementById("Kerzenfarbe").appendChild(document.createElement("br"));
            }
    
}
  