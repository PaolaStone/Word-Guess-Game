
var myWord = ["Saab", "Volvo", "BMW"];
        var charNumber = [];
        var userLetter = [];
        
       

      

        //get random word
        var randomWord = myWord[Math.floor(Math.random() * myWord.length)];
        console.log(randomWord);
        
        
        //display _ _ _
        for (var i = 0; i < randomWord.length; i++) {
       
            
            
            charNumber[i] = randomWord.charAt(i);
            console.log(randomWord[i] = ("_ "));

                    
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
           
                
                        
           
           
              for (i = 0; i < 26; i++) {

                
                var li = document.createElement("li");
                li.innerHTML =  (i+10).toString(36) + " ";
                //li.style.listStyle = "click";
                li.style.display = "inline";
                //document.getElementById("button").addEventListener('click', li);
                document.getElementById("letter").appendChild(li).style.border = "thick solid #0000FF";
                                
             }
             
             
             //console.log(letter)
             

       

                
        //console.log(userLetter)

       //document.onkeyup = function(event) {
        //var userLetter = event.key;
        
        
        
        

        