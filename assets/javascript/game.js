
        var word = ["NEYTIRI",  "AKWEY", "EYTUKAN", "MOAT", "GRACE", "TSUTEY","ANEMONOID","DINICTHOID",	"ARACHNOID",	"DIREHORSE",	"LIZARD",	"HEXAPEDE",	"PROLEMURIS",	"SLINGER",	"STINGBAT",	"TEYLU",	"THANATOR",	"VIPERWOLF",	"STURMBEEST",	"TETRAPTERON"];
        var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var charNumber = [];
        var underscoreGuess = [];
        var lifes = 0;
        var wins = 0;
        var losses = 0;
        
        

        document.getElementById("win").innerHTML = wins
        document.getElementById("loss").innerHTML = losses
        wantTocontinue = "";

            
      if (confirm("Do you want to continue?")){
   
      function restart() {
        document.getElementById("btn").innerHTML = " ";
        document.getElementById("underscore").innerHTML = " ";
        underscoreGuess = [];
      }
         
      if (lifes < 10 ){
            
        // This is to display the underscores
       
        function generateWord () {
        
        randomWord = word[Math.floor(Math.random() * word.length)];
        for ( i = 0; i < randomWord.length; i++) {
          underscoreGuess[i]= "_ ";
          document.getElementById("underscore").innerHTML += underscoreGuess[i];
          console.log(randomWord)
          }
        }     
        generateWord();
        
        // This is to create the alphabet buttons
        function buttons (){
          for (var j = 0; j < alphabet.length; j++){
          document.getElementById("btn").innerHTML += "<button>" + alphabet[j] +"</button>";
            
          }
        }

        buttons();

                 
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
                pos = randomWord.indexOf(letter, l + 1);
                num += 1;
                l = pos;
                
                //This is to change "_" to letter
                underscoreGuess[pos] = letter;
                document.getElementById("underscore").innerHTML = underscoreGuess.join("",underscoreGuess);
                        
              }
              
              if (comparing = underscoreGuess.includes("_ ")){
                lifes++;

                console.log("this are the lifes   " + lifes)
                

                if (lifes === 9){
                  losses++
                  document.getElementById("loss").innerHTML = losses;
                  confirm("Do you want to continue?");
                    restart();
                    buttons();
                    generateWord();
                    addtoev();
                    
                    lifes = 0;
                  
                }

                } else {                  
                  wins++;
                  document.getElementById("win").innerHTML = wins
                  confirm("Do you want to continue");
                    restart();
                    buttons();
                    generateWord();
                    addtoev();
                    
                    lifes = 0;
                  

                  
                };
              
            })
            
          }
        }      


        window.addEventListener("load",function() {
          addtoev();
        });

      } 
    
    }
   else {

  }
    
      
