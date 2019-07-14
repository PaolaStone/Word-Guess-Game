
var word = ["NEYTIRI", "COLONEL_MILES_QUARITCH", "AKWEY", "EYTUKAN", "MOAT", "NORM_SPELLMAN", "GRACE", "TSUTEY","JAKE_SULLY", "TRUDY_CHACON", "PARKER_SELFRIDGE", "MAX_PATEL"];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var charNumber = [];
var underscore = " ";





//This is to get random word from the word array
  var randomWord = word[Math.floor(Math.random() * word.length)];
  console.log(randomWord);
  

// This is to display the underscores
for (var i = 0; i <= randomWord.length; i++) {
  charNumber[i] = randomWord.charAt(i);
  //console.log(charNumber[i]);
  document.getElementById("underscore").innerHTML = ("_ ".repeat (i))
} 

// This is to create the alphabet buttons

function buttons (){
  for (var i = 0; i < alphabet.length; i++){
    document.getElementById("btn").innerHTML += "<button>" + alphabet[i] +"</button>";
    
  }
}
buttons()

// This is to get the letter and disable it

var clicked = document.getElementsByTagName("button");

function addtoev (){
  for (i=0; i < clicked.length; i++){
    clicked[i].addEventListener("click", function(){
      alert("clicked");
      console.log(this.disabled = true);
      console.log(this.textContent) 
    });
    
  }
}
window.addEventListener("load",function() {
  addtoev();
});




        
    


  










  



  

 

 


 


     
    

  



        
        
        
        
        

        