var y = Math.floor(Math.random() * 10 + 1);
playername = localStorage.getItem(player_name);
var guess = 1;
function submit()
{
var x = document.getElementById("guessField").value;
if(x == y)
  {
    alert("Congratulations!!" + playername+"  You Guessed It Right In " + guess + "guess ");
         guess=1;
  }

  else if(x > y)
  {
    guess++;
    alert("Oops Sorry!! Try A Smaller Number");
  }
  else
{
    guess++;
    alert("Oops Sorry!! Try A Greater Number");
}
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}
  
