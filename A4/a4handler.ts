/* Aufgabe: Aufgabe 3
Name: Emily Melzer
Matrikel: 259114
Datum: 15.11.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Wbk {


    export interface Product {
        name: string;
        price: number;
    }


    export interface ProductGroups {
        [key: string]: Product[];
    }

    export let offers: ProductGroups = {
        "Baumtyp": [
            { name: " Nordmanntanne", price: 34.95 },
            { name: " Blaufichte", price: 19.95 },
            { name: " Douglasie Tanne", price: 49.95 }
        ],

        "Halterung": [
            { name: "Edelstahl", price: 24.95 },
            { name: "Metall", price: 19.95 },
            { name: "Kunststoff", price: 12.95 }
        ],

        "Kugeln": [
            { name: "Rote Kugeln", price: 1.95 },
            { name: "Blaue Kugeln", price: 1.95 },
            { name: "Weiße Kugeln", price: 1.95 },
            { name: "Goldene Kugeln", price: 2.50 },
            { name: "Rosegoldene Kugeln", price: 2.50 },
            { name: "Silberne Kugeln", price: 2.50 }



        ],

        "Lametta": [
            { name: "Weißes Lametta", price: 4.95 },
            { name: "Goldenes Lametta", price: 4.95 },
            { name: "Silbernes Lametta", price: 4.95 },
            { name: "Rosegoldenes Lametta", price: 4.95 },

        ],

        "Kerzentyp": [
            { name: "Große, weiße Kerzen", price: 3.95},
            { name: "Dünne Kerzen", price: 2.50 },
            { name: "Silberarbene Kerzen", price: 4.95 },
            { name: "Goldfarbene Kerzen", price: 4.95},

        ]

    };

}