
var word = ["NEYTIRI", "COLONEL_MILES_QUARITCH", "AKWEY", "EYTUKAN", "MOAT", "NORM_SPELLMAN", "GRACE", "TSUTEY","JAKE_SULLY", "TRUDY_CHACON", "PARKER_SELFRIDGE", "MAX_PATEL"];
  var charNumber = [];
  var userLetter = [];
  var underscore = " ";
  
  //get random word
  var randomWord = word[Math.floor(Math.random() * word.length)];
  
  console.log(randomWord);

  for (var i = 0; i <= randomWord.length; i++) {
    charNumber[i] = randomWord.charAt(i);
    console.log(charNumber[i]);
    document.getElementById("underscore").innerHTML = ("_ ".repeat (i))
               
  } 

  console.log(charNumber) 
  console.log(userLetter)

    //enter letter and compare to randomWord

        for (var j=0; j < 3; j++)  {
           userLetter[j] = prompt("Enter a letter ")
           //just compares till first found letter
           if (randomWord.indexOf(userLetter[j]) !== -1) {
              console.log(randomWord.indexOf(userLetter[j]));
               alert("letter found")
               k = randomWord.indexOf(userLetter[j])
               document.write(randomWord.charAt(k))
           } 
                         
              
           }
                   

           var whenClick = function(){
            alert('clicked!');
            document.getElementsByTagName("button").disabled = "true";
            }


        
        
        
        
        

        