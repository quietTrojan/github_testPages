class Animal{
    constructor(kind){
        this.kind=kind;
    }
    singIng(){
        console.log(this.kind+' is singing');
    }
}
class Cat extends Animal{
    constructor(name){
       super('dog');
        this.name=name;
    }
    static distance(){
        console.log('cat is distance');
    }
}

var cat=new Cat();
cat.singIng();
Cat.distance();
