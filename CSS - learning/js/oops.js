// let animal  = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };
// rabbit._proto_=animal;


class Animal {
    constructor(name) {
        this.name = name
        console.log("object is created...")
    }
    eats() {
        console.log("eats")
    }
    jumps() {
        console.log("jumps")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("objecct is created and its Lion...")
    }
    eats() {
        console.log("eats Lion")
    }
    roar(){
        console.log("roars")
    }
}

let a = new Animal("Bunny")
console.log(a)

let l = new Lion("Sheera")
console.log(l)