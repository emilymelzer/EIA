namespace A2 {
//function card() 
        interface card {
           color: string;
           value: string;
        }
        
let colors:string[]=["red","blue","green","yellow"];
let values:string[]=["0","1","2","3","4","5","6","7","8","9","+2","x","<->"]
let deck: card[]=[{color ="black",value ="+4"},{color ="black",value ="wish"},{color ="black",value ="+4"},{color="black",value="wish"}]
        
for(let i:number=0;i<colors.length; i++){
    for( let a:number=0; a<values.length; a++){ //
        for( let z:number=0; z<2; z++){ //Variable z wird dafür erstellt, damit die Karten alle doppelt vorkommen (außer 0 und Special Karten
       let Card:card ={color=colors[i], value=values[a]};
            deck.push(card);
            }
        }
    }
// i = Variable für Länge des "Farb-Arrays"
// a = Variable für Länge des "Wert-Arrays"
// x = Variable für Anzahl der mitzuspielenden Karten
// l = Zufallsvariable        
        
        
            let x: number;
            let input: string = prompt("Mit wie vielen Karten möchtest du spielen?");//Nutzer wird gefragt wie viele Karten er möchte
            x = Number(input);

            function coincidence():void {
            var random=math.floor(math.random()*107);
            for (var l=0; l<deck.length;l++)
            if (card[l].position==random)
            var drawncard=deck.splice(l,1)[0]//Array muss um 1 kleiner werden, wenn man 1 Karte rauszieht
    }
        
      
}

