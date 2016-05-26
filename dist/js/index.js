function fn(func){
    var text=function(){
        return func;
    }();
    console.log(text);l
}
fn('nihao');
