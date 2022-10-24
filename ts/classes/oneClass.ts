export class oneClass{
    private name:string;
    private age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    format(){
        return "my name is "+ this.name + "my age is " + this.age;
    }
}