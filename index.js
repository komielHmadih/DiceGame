
function refreshImg(){
  var array1 = ["images/dice1.png" ,"images/dice2.png" ,"images/dice3.png" ,"images/dice4.png" ,"images/dice5.png" ,"images/dice6.png" ];
  var n =Math.floor(Math.random()*6) ;
  document.querySelectorAll("img")[0].setAttribute("src", array1[n]);
  var m =Math.floor(Math.random()*6) ;
  document.querySelectorAll("img")[1].setAttribute("src", array1[m]);
  if(n > m){
    document.querySelector("h1").innerHTML=("player 1 wins!");
  }
  if(n < m){
      document.querySelector("h1").innerHTML=("player 2 wins!");
  }
  if(n == m){
      document.querySelector("h1").innerHTML=("Draw ... repeat !");
  }
}
