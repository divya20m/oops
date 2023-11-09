class person{
    constructor(name,doy,age,place){
        this.name=name,
        this.doy=doy,
        this.age= 2023 - this.doy
        this.place=place
    }
    getname(){
        return this.name
    }
    getage(){
        return this.age
    }
    getdoy(){
        return this.doy
    }
    getplace(){
        return this.place
    }
}
const person1=new person("satish",2000,"tamilnadu")
console.log(person1)
console.log(person1.age)