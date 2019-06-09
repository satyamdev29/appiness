/* -------------------------------------------------- */
/* Mobile Nav*/
/* -------------------------------------------------- */
$(document).ready(function(){
    $( ".js-nav" ).click(function() { 
        var nav=$('.header--main-menu_list');
        var toggnav=$('.toggle');
        var jsnav=$('.toggle.js-nav');
        alert(nav)
        nav.toggle( "slow" );
       if(jsnav.hasClass('active')){
        toggnav.removeClass('active');
       } else{
        toggnav.addClass('active');
       }
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////