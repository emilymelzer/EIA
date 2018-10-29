namespace A2 {

        interface card {
           color: string;
           value: string;
        }   
let colors:string[]=["red","blue","green","yellow"];
let values:string[]=["0","1","2","3","4","5","6","7","8","9","+2","x","<->"]
let deck: card[]=[{ color: "red", value: "0" }, { color: "green", value: "0" }, { color: "blue", value: "0" }, { color: "yellow", value: "0" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }, { color: "black", value: "wish" }];
         
    for(let i:number=0;i<colors.length; i++){
        for( let a:number=0; a<values.length; a++){ //
            for( let z:number=0; z<2; z++){ //Variable z wird dafür erstellt, damit die Karten alle doppelt vorkommen (außer 0 und Special Karten
                let Card:card ={color:colors[i], value:values[a]};
                deck.push(Card);
        }
    }
}
// i = Variable für Länge des "Farb-Arrays"
// a = Variable für Länge des "Wert-Arrays"
// x = Variable für Anzahl der mitzuspielenden Karten
// l = Zufallsvariable        
            let handcards: card[]=[];
            
            let x: number;
            let input: string = prompt("Mit wie vielen Karten möchtest du spielen?");//Nutzer wird gefragt wie viele Karten er möchte
            x = Number(input);
            

            function coincidence(random: number=x ):void{
            for (let l:number = random ; l>0; l--);
            let l = Math.floor(Math.random()* (deck.length-1));
            handcards.push(deck[l])
            deck.splice(l,1)//Array muss um 1 kleiner werden, wenn man 1 Karte rauszieht
          }   
 
          function displayHand(): void {
            for (let y: number =0; y< handcards.length; y++) {
                (handcards[y].value, handcards[y].color);
        let div: HTMLElement = document.createElement("div");
        document.getElementById("Karte").appendChild(div);
        div.innerHTML = handcards[y].value;
        div.classList.add("Karte");
        div.classList.add(handcards[y].color);
    }       
}
                
    console.log(deck);
    
 
   }