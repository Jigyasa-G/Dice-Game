var randomNumber1=Math.floor( Math.random()*6) + 1;       //1-6
var randomDice1Image = "images/dice"+randomNumber1+".png";

var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomDice1Image);




var randomNumber2=Math.floor( Math.random()*6) + 1; //1-6
var randomDice2Image = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomDice2Image);




if (randomNumber1 > randomNumber2) {
   document.querySelector("h1").innerHTML ="🚩Player 1 wins!";
}
 else if
(randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML ="Player 2 wins!🚩";

  }
  else{
    document.querySelector("h1").innerHTML ="Its a draw !";
}
