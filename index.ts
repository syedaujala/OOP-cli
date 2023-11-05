#! /usr/bin/env node


import inquirer from "inquirer";

class student{
    name:string
    constructor(n:string){
        this.name=n
    }
}


class Person {
    students:student[]=[]

    addstudent(obj:any){
        this.students.push(obj)
    }
}
const Persons = new Person()
const programmstart = async (persons:Person )=>{
    console.log("Welcome Guest")

    const ans = await inquirer.prompt({
        type:"list",
        name:"select",
        choices:["khud se : Self","student"],
        message:"Ap kis se bat krna pasnd karyn ga"
        })

        if(ans.select == "khud se : Self"){
            console.log("Hello ma khud se bat kr raha hun")
            console.log("meri tabiyat achi ha !")
        }
        if(ans.select == "Student"){
            const ans = await inquirer.prompt({
                type:"input",
                message:"ap ko kis sutdent se bat krni ha,",
                name : "student"
            })
            const student = persons.students.find(val => val.name == ans . student)
            if (student){
                const name = ans.student
                persons . addstudent(name)

                console.log(`Hello I am ${name}, or me thek hum`)
                console.log(persons.students)
                if (student){
                console.log(`Hello I am ${name}, or me thek hum`)
                console.log(persons.students)
                }
            }
        }
} 

programmstart(Persons)