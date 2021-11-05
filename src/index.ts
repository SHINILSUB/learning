interface Human {
    name: string;
    age: number;
    gender: string;
}
const person = {
    name: "sean",
    age: 22,
    gender: "male"
};
// definite value
const say = (person: Human): string => {
    return `hello ${person.name}. ${person.age}old. gender is ${person.age}`
}
console.log(say(person));

export{}