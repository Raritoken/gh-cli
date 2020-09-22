/*$('.toggle').on('click', function(){

    if($('.toggle').hasClass('active')){
        $('.leerdoel').removeClass('active');
    }

    else{
        $('.toggle').addClass('active');
        $(this).addClass('active');
    }
})*/
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
      window.alert("YOU DARED TO PRESS THE BUTTON AGAIN!?\nHERESY!\nHERESY DARE I SAY!😡🤬", window);
      window.open("http://twitch.tv/raritoken", window);
    } 
    else {
      x.style.display = "block";
    }
  }
function RickRoll() {
    var x = document.getElementById("rick");
    if (x.onclick) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", window);
    }
  }
function Discord() {
  var x = document.getElementById("discord");
  if (x.onclick) {
    window.open("https://discord.gg/t7MpXYD", window);
  }
}
