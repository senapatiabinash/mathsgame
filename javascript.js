var playing = false;

var score;

var action;

var timer;

var correctanswer;

//if we click on start/reset button
document.getElementById("startreset").onclick=

      function(){
        //if we are playing

        if(playing==true){

           location.reload();//reload page


        }
        else{//if we are not playing

          score=0;//set the score to 0

          playing=true;

          document.getElementById("scorevalue").innerHTML= score;

          document.getElementById("timer").style.display= "block";//show countdown box

          timer = 60;

          document.getElementById("timeremainingvalue").innerHTML = timer;

          hide("gameover");

          document.getElementById("startreset").innerHTML="Reset game";

          //start countdown
          startcountdown();

          generateq();
        }
      }
      for(i=1; i<5; i++){
        document.getElementById("box"+i).onclick = function(){
        //check if we are playing     
        if(playing == true){//yes
            if(this.innerHTML == correctanswer){
            //correct answer
                
                //increase score by 1
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                //hide wrong box and show correct box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");   
                }, 1000);
                
                //Generate new Q&A
                
                generateq();
            }else{
            //wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");   
                }, 1000);
            }
        }
    }   
    }

      
      function startcountdown(){
          
        action = setInterval(function(){

            timer -=1;

            document.getElementById("timeremainingvalue").innerHTML = timer;

            if(timer==0){

               // clearInterval(action);

                stopcountdown();

                show("gameover");

                document.getElementById("gameover").innerHTML = "<p>game over!</p><p>your score is "+ score +".<p>";

                hide("timer");

                hide("correct");

                hide("wrong");

                playing = false;

                document.getElementById("startreset").innerHTML = "Start Game";
            }

        },1000)
      }
      function stopcountdown(){

        clearInterval(action);

      }

        function hide(Id){
            document.getElementById(Id).style.display= "none";
        }
        function show(Id){
            document.getElementById(Id).style.display= "block";
        }
      function generateq(){

        var x = 1+Math.round(9*Math.random());

        var y = 1+Math.round(9*Math.random());

         correctanswer = x*y;

         document.getElementById("question").innerHTML =  x + "x" + y;

         var correctpos = 1+Math.round(3*Math.random());

         document.getElementById("box"+correctpos).innerHTML = correctanswer;//fill one box with correct answer

         var answers = [correctanswer];

         //fill other boxes with wrong ans
         for(i=1; i<5; i++){

          if(i != correctpos) {

              var wronganswer;

              do{

                  wronganswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer

              }while(answers.indexOf(wronganswer)>-1)

              document.getElementById("box"+i).innerHTML = wronganswer;
              
              answers.push(wronganswer);
          }
      }
  }