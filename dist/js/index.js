$(function(){
    var headerScroll=new IScroll('#iscroll_header',{
        scrollX:true,
        scrollY:false,
        bounce:false,
        tap:true
    });
    $('#iscrollUl').on('tap','li',function(){
        alert($(this).text());
    });
});
