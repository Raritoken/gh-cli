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
      window.alert("YOU DARED TO PRESS AGAIN THE BUTTON AGAIN!?\nHERESY! HERESY DARE I SAY!", window);
      window.open("http://twitch.tv/raritoken", window);
    } 
    else {
      x.style.display = "block";
    }
  }