
var word = ["NEYTIRI",  "AKWEY", "EYTUKAN", "MOAT", "GRACE", "TSUTEY","ANEMONOID","DINICTHOID",	"ARACHNOID",	"DIREHORSE",	"LIZARD",	"HEXAPEDE",	"PROLEMURIS",	"SLINGER",	"STINGBAT",	"TEYLU",	"THANATOR",	"VIPERWOLF",	"STURMBEEST",	"TETRAPTERON"];

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNumber = [];
var underscoreGuess = [];
var userRightGuess = [];


//This is to get random word from the word array
  var randomWord = word[Math.floor(Math.random() * word.length)];
  console.log(randomWord);
  

  //document.onkeyup = function(event) {


// This is to display the underscores
for ( i = 0; i < randomWord.length; i++) {
  console.log(underscoreGuess[i]= "_ ");
  document.getElementById("underscore").innerHTML += underscoreGuess[i];

} 


// This is to create the alphabet buttons
function buttons (){
  for (var j = 0; j < alphabet.length; j++){
    document.getElementById("btn").innerHTML += "<button>" + alphabet[j] +"</button>";
    
  }
}

buttons()


// This is to get the letter and disables it
var clicked = document.getElementsByTagName("button");

function addtoev (){
  for (k=0; k < clicked.length; k++){
    clicked[k].addEventListener("click", function(){
      this.disabled = true;
      letter = this.textContent
       

//This is to check all the letters in the randomword
      var pos = 0;
      var num = -1;
      var l = -1;
      
      
      while (pos != -1) {
        console.log(pos = randomWord.indexOf(letter, l + 1));
        num += 1;
        l = pos;
        // console.log(userRightGuess[pos] = letter);
        
        underscoreGuess[pos] = letter;
        document.getElementById("underscore").innerHTML = underscoreGuess.join("",underscoreGuess);
        userRightGuess[pos] = letter;
        
      }
      
      if (comparing = underscoreGuess.includes("_ ")){
        } else {
          alert("end of game")
        };
            
          
    
    })

  }
}      


window.addEventListener("load",function() {
  addtoev();
});

//}

