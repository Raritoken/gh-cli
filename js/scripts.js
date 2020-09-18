$('.toggle').on('click', function(){

    if($('.toggle').hasClass('active')){
        $('.leerdoel').removeClass('active');
    }

    else{
        $('.toggle').addClass('active');
        $(this).addClass('active');
    }
})