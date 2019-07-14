
var word = ["NEYTIRI", "COLONEL_MILES_QUARITCH", "AKWEY", "EYTUKAN", "MOAT", "NORM_SPELLMAN", "GRACE", "TSUTEY","JAKE_SULLY", "TRUDY_CHACON", "PARKER_SELFRIDGE", "MAX_PATEL"];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var charNumber = [];



//This is to get random word from the word array
  var randomWord = word[Math.floor(Math.random() * word.length)];
  console.log(randomWord);
  
  

// This is to display the underscores
for (var i = 0; i <= randomWord.length; i++) {
  charNumber[i] = randomWord.charAt(i);
  document.getElementById("underscore").innerHTML += (changeToUnderscore = charNumber[i].replace(randomWord[i], "_ "));
  //console.log(charNumber[i]);

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
      console.log(letter = this.textContent);
       
      var pos = 0;
      var num = -1;
      var l = -1;
      while (pos != -1) {
        console.log(pos = randomWord.indexOf(letter, l + 1));
        num += 1;
        l = pos;
                   

      }
           
      
    console.log(changeToUnderscore = randomWord)  
    console.log(randomWord)
    console.log("There were " + num + " matches in that word.");
    
      
    })

  }
}      


window.addEventListener("load",function() {
  addtoev();
});







        
    


  










  



  

 

 


 


     
    

  



        
        
        
        
        

        