$(function(){
    $('#mainBox div').addClass(function(){
        return 'myClass'+$(this).index()+' newClass';
    });
})
