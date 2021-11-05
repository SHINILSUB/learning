class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }    
}
const sean = new Human("sean", 35, "male")
// definite value
const say = (person: Human): string => {
    return `hello ${person.name}. ${person.age}old. gender is ${person.age}`
}
console.log(say(sean));

export{}