$(function(){
    $('#mainBox p').on('click',function(){
        var curText=$(this).text();
        var myFn=()=>{
            return this.tagName;
        }
        console.log(curText,myFn());
    });
})
