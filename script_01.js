"use strict";

/* Die Satzbau-Maschine | Arrays */

/*** 02. Theorie: Array ***/

let arr;
arr = [];
arr = [2,4,7,11];
arr = [false,true,true];
arr = ["Ich","bin","Maxine","Mützerich"];


output(arr);
output(arr.length);         // Anzahl der Elemente
output(arr[0]);             // Index (1.Pos im Array)
output(arr[arr.length -1]); // letzte Position






/** 01. Funktionalität mit Einzelparametern  */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5) {

    const gap  = " ";
    const pnct = ".";
    const str  =    word1 + gap + 
                    word2 + gap +
                    word3 + gap +
                    word4 + gap +
                    word5 +
                    pnct;
    return str;
}



// Modul: Ausgabe in Konsole : Test
//output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


