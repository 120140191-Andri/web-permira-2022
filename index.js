$(function () { 

    $(".nav-klik").click(function () { 
        $('.aktif').removeClass("aktif");
        $('.aktif').addClass("non-aktif");
        $(this).addClass("aktif"); 
        $(this).removeClass("non-aktif");
    });

});