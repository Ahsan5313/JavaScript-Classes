class Person {

    constructor(name, year){

        this.name = name,
        this.year = year
    }
    student(stutas){

        console.log(`${this.name} is good at ${stutas}`)
    }
}

const firstPerson = new Person("Ahsan", 2000)
const firstPerson1 = new Person("Sufian", 2003)

firstPerson.student("cricket")
firstPerson1.student("football")


