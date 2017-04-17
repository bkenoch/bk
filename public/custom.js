$(document).ready(function (){

    /* 平順捲動的動作 */
    //$('a[href*=#]:not([href=#])').click(function() {
    $("a[href^='#']").click(function() {
    
        //alert('平順捲動的動作');
        
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }

        //收起目錄
        //collapse navbar-collapse
        

    });

});
