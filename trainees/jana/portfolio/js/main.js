$('.mobile-menu-trigger a').click(function(event){
    event.preventDefault();
    $('.nav-wrapper').toggle();
});
 $(document).mouseup(function(e){
     var container = $('.nav-wrapper');
     if(container.is(e.target) && container.has(e.target).length === 0)
     {
         container.hide();
     }
 });