"use strict";

/* Die Satzbau-Maschine | Arrays */

/*** 02. Theorie: Array ***/

// let arr;
// arr = [];
// arr = [2,4,7,11];
// arr = [false,true,true];
// arr = ["Ich","bin","Maxine","Mützerich"];


// output(arr);
// output(arr.length);         // Anzahl der Elemente
// output(arr[0]);             // Index (1.Pos im Array)
// output(arr[arr.length -1]); // letzte Position

/** 02a. Theorie: Schleifen (for-Schleife) */

/** For - Schleife als Wiedergolungs-Struktur */

// Inkrement (untere Grenze --> obere Grenze)
// for (let i = 0; i< 20; i++) 
// {
//     output("index i :" +i);    
// }

// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i> 0; i--) 
// {
//     output("index i :" +i);    
// }

//Inkrement (var. Schrittweite)
// for (let i = 0; i <= 100; i+=5) 
// {
//     output("index i :" +i);    
// }





/** 01. Funktionalität mit Einzelparametern  */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4) {

    const gap  = " ";
    const pnct = ".";
    const str  =    word1 + gap + 
                    word2 + gap +
                    word3 + gap +
                    word4 + 
                    pnct;
    return str;
}

/** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1, word2, word3,  ..... wordN   :: Semantische Struktur
// arr[0],arr[1],arr[2], ..... arr[n]  :: Numerische Struktur (0,1,2,3...n)
// --> Transformation semantisches Problem --> mumerisches Problem
//output(getSentence(["Ich","bin","Maxine","Mützerich"]));
function getSentence(arr) {

    const gap  = " ";
    const pnct = ".";
    const str  =    arr[0] + gap + 
                    arr[1] + gap +
                    arr[2] + gap +
                    arr[3] + 
                    pnct;
    return str;
}


// Modul: Ausgabe in Konsole : Test
//output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


