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
      window.open("https://setuplog.io/setup/MGNArBX2/raritokens-desktop-build", window);
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
function YouTube() {
  var x = document.getElementById("YTRari");
    if (x.onclick) {
      window.open("http://youtube.com/raritoken", window);
    }
  }
function Twitch() {
  var x = document.getElementById("twitch");
  if (x.onclick) {
    window.open("https://twitch.tv/raritoken/about", window);
  }
}
function Twitter() {
  var x = document.getElementById("twitter");
  if (x.onclick) {
    window.open("https://twitter.com/raritoken/", window);
  }
}
function Instagram() {
  var x = document.getElementById("instagram");
  if (x.onclick) {
    window.open("https://instagram.com/raritoken/", window);
  }
}
function scrl() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("ScrlTop").style.display = "block";
  }
  else {
    document.getElementById("ScrlTop").style.display = "none";
  }
}
window.onscroll = function() {scrl()};
function Top() {
  var x = document.getElementById("ScrlTop");
  if (x.onclick) {
    window.scrollTo(1,1);
  }
}
var BNS = ["https://www.bladeandsoul.com/en/download/", "https://www.bladeandsoul.com/en/download/", "https://www.bladeandsoul.com/en/download/", "https://www.bladeandsoul.com/en/download/", "https://www.bladeandsoul.com/en/download/", "https://www.bladeandsoul.com/en/download/", "https://www.youtube.com/watch?v=aU7E0aKYZFo"];
function BnS() {
  var x = document.getElementById("bns");
    if (x.onclick) {
    var rng = Math.floor(Math.random() * BNS.length);
    window.open(BNS[rng]);
  }
}