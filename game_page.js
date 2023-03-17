var player1Name=localStorage.getItem("player1Name");
var player2Name=localStorage.getItem("player2Name");
var player1Score=0;
var player2Score=0;
document.getElementById("player1Name").innerHTML= player1Name + ":";
document.getElementById("player2Name").innerHTML= player2Name + ":";
document.getElementById("player1Score").innerHTML=player1Score;
document.getElementById("player2Score").innerHTML=player2Score;
document.getElementById("playerQuestion").innerHTML="Question Turn - " + player1Name;
document.getElementById("playerAnswer").innerHTML="Answer Turn - " +player2Name;
function send(){
    var getWord=document.getElementById("word").value;
    var word=getWord.toLowerCase();
    console.log("word in lowerCase= " + word);
    var charAt1= word.charAt(1);
    
    var lengthDivide2= Math.floor(word.length/2);
    var charAt2= word.charAt(lengthDivide2);
    console.log(charAt1);
console.log(charAt2);
    var lengthMinus1=word.length-1;
    var charAt3=word.charAt(lengthMinus1);
 var removecharAt1=word.replace(charAt1,"_");
 var removecharAt2=removecharAt1.replace(charAt2,"_");
 var removecharAt3=removecharAt2.replace(charAt3,"_");
 "<h4 id= 'wordDisplay'>'Pergunta:'+removeCharAt3+</h4>"
 var question_word=removecharAt3;
 var inputBox="<br> Resposta:<input type= 'text'id= 'inputCheckBox'>";
 var checkButton="<br><br> <button class='btn btn info' onclick='check()'> Checar</button>";
 row= question_word+ inputBox+checkButton;
 document.getElementById("output").innerHTML=row;
 document.getElementById("word").value="";

}

questionTurn = "player1";
answerTurn = "player2";

function check()
{
       getAnswer = document.getElementById("input_check_box").value;
      answer=getAnswer.toLowerCase();
    console.Log ("answer in lower case - " + answer);
      if (answer == word) {
        if (answerTurn=="player1"){
            player1Score= player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
        }
        else{
            player2Score= player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;

        }
        if(questionTurn=="player1"){
            questionTurn="player2"
            document.getElementById("playerQuestion").innerHTML= "Question Turn - " + player2Name;
        }

        else{
            questionTurn="player1"
            document.getElementById("playerQuestion").innerHTML= "Question Turn - " + player1Name;
        }
    }
        if(answerTurn=="player1")
        {
            answerTurn="player2"
            document.getElementById("playerAnswer").innerHTML= "Answer Turn - " + player2Name;
        }
        else
        {
            AnswerTurn="player1"
            document.getElementById("playerAnswer").innerHTML= "Answer Turn - " + player1Name;  
        }
        document.getElementById("output").innerHTML = "";
    }
