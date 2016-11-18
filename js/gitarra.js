//
//
//function kkk() {document.getElementById('a').style.color = '#EFEBCF';}

function clearBG() {
    var x = document.getElementsByClassName('sound');
//    var y = document.getElementsByClassName('clear');
    var y = document.getElementById('dzwieki').childNodes;
//    var p = document.getElementById('piano').childNodes;
   
    for (i = 0; i < x.length; i++) {x[i].style.backgroundColor = "aliceblue"; } 
    for (i = 0; i < y.length; i++) {y[i].className = " "}
    
//     document.getElementsByClassName('PRYMA').className = " ass";
}



function k2(z) {
   
var x = document.getElementsByClassName(z);
var i;
    for (i = 0; i < x.length; i++) {x[i].style.backgroundColor = "#EFEBCF"; } }


function Pryma(z) {
   
var x = document.getElementsByClassName(z);
var i;
  
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#3674BF"; 
       };
  
     document.getElementById(z).className =   document.getElementById(z) + "PRYMA";
}


function dzwiekUPG(z,name) {
   
var x = document.getElementsByClassName(z);
var i;
  
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#3674BF"; 
       };
  
     document.getElementById(z).className =   document.getElementById(z) + name;
}




function k2t(z) {
   
var x = document.getElementsByClassName(z);
var i;
    for (i = 0; i < x.length; i++) {x[i].style.backgroundColor = "#418BE5"; } }

function k2k(z) {
   
var x = document.getElementsByClassName(z);
var i;
    for (i = 0; i < x.length; i++) {x[i].style.backgroundColor = "#489BFF"; } }





chordsAll = function() {

    var pryma = document.getElementById('prymaAkordu').value;
    var DM = document.getElementById('DM').value;
//    var DUR = document.getElementById("t-dur").checked;
//    var MOLL = document.getElementById("t-moll").checked;
    var SEP = document.getElementById("t-sept").checked;
    var ZW = document.getElementById("t-zw").checked;
    var ZM = document.getElementById("t-zm").checked;
    var SUS2 = document.getElementById("t-sus2").checked;
    var SUS4 = document.getElementById("t-sus4").checked;
    var NON = document.getElementById("t-nona").checked;
    var UND = document.getElementById("t-undec").checked;

 clearBG();
    
    //funkcja znajduje w zmiennej gama prymę akordu
     for (i = 0; i < 12; i++) {
        if (gama[i] === pryma) {
           
           Pryma(gama[i]);
            
            if (SUS2 === true){dzwiekUPG(gama[(i+2)%12], "SEKUNDA")}
            else if (SUS4 === true){dzwiekUPG(gama[(i+5)%12], "KWARTA")}
            
            else{
                if ( DM === "DURR" ) { dzwiekUPG(gama[(i+4)%12], "TERCJA_W")};
                if ( DM === "MOLL" ){ dzwiekUPG(gama[(i+3)%12], "TERCJA_M")};
                }
        
            if (SEP === true){dzwiekUPG(gama[(i+10)%12], "SEPTYMA")
//                            k2(gama[ i + 10]);   
//                            document.getElementById(gama[ i + 10]).className =   document.getElementById(gama[ i + 10]) + "SEPTYMA";
                        };
            
//            k2k(gama[i + 7]);
           
            
            if (ZW === true){dzwiekUPG(gama[(i+8)%12], "SEKSTA")}
            else if (ZM === true) {dzwiekUPG(gama[(i+6)%12], "TRYTON")}
            else {
            dzwiekUPG(gama[(i+7)%12], "KWINTA")
            }
            
            if (NON === true){dzwiekUPG(gama[(i+10)%12], "SEPTYMA"); dzwiekUPG(gama[(i+14)%12], "NONA");}
            
            if (UND === true){dzwiekUPG(gama[(i+10)%12], "SEPTYMA"); dzwiekUPG(gama[(i+14)%12], "NONA"); dzwiekUPG(gama[(i+17)%12], "UNDECYMA")}
            
            
   }
   }
    

}




function chordsDur(pryma) {
    clearBG();
    var pryma = prompt("Podaj prymę akordu durowego \n użyj małych liter")
//     var pryma = document.getElementById('prymaAkordu').value;
    
   for (i = 0; i < 12; i++) {
        if (gama[i] === pryma) {
            k2(gama[i]);
            k2(gama[(i + 4)%12]);
            k2(gama[(i + 7)%12]);   
   }
   }
}
function chordsMoll(pryma) {
    clearBG();
    var pryma = prompt("Podaj prymę akordu molowego")
    
   for (i = 0; i < 12; i++) {
        if (gama[i] === pryma) {
            k2(gama[i]);
            k2(gama[i + 3]);
            k2(gama[i + 7]);   
   }
   }
}
function prymy() {
        document.writeln("<select id='prymaAkordu'>")
for (i=0; i<12; i++) { document.writeln("  <option value=" + gama[i] + "> " + gama[i] + "</option>") };
    document.writeln("</select>")
}

function test() {
for (i=0; i<12; i++) {
document.write( gama[i%12] )
}
}
