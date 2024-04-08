class User {
    name: string
    email: string
    password: number

    constructor(name: string, email: string, password: number){
        this.name = name
        this.email = email
        this.password = password
    }
}


function thierlover  (value: any): any{
    return value
}

thierlover('me')

 interface myloverone {
    name: string,
    age: number
 }

// generic
function mylover <myloverone> (value: myloverone): myloverone{
    return value
}

mylover('me')



//looping in (keyword)
interface user{
    name:string,
    numpeople: number
}
interface me{
    name:string,
    numpeople: number
}


function checkout (ex_name: user | me){
    if('name' in ex_name){
        
    }
}

const newuser = new User('henry', 'he@gmailcom', 897)
///end




//looping instanceof (keyword)
class myuser{
    constructor( public name: string, public age: number){
        this.name
        this.age
    }
}

const myname = new myuser('henry', 87)


function checkoutinstanceof (ex_name: myuser | user){
    if('name' in ex_name){
        
    }
}

//end


// more example on the typescript 
let num = 25
let name:string
let age: number
let isStudent: boolean
let arrStudent: string[]
let arrStudentAgeName: [string, number, boolean?]

age = num
isStudent = true
arrStudent= ['henry', 'timothy', 'jude', 'daniel']
arrStudentAgeName = ['henry', 25, false]

type Data = {
    surname: string,
    studentNumber: number,
    goingToSchool: boolean,
}


let studentDate: Data ={
    surname: 'orji',
    studentNumber: 67,
    goingToSchool: true
}


type x = {
    a: string,
    b: Number
}

type y = x & {
    c: string,
    d: boolean,
}

interface p  {
    a: string,
    b: Number
}

interface z extends y {
    c: string,
    d: boolean,

}

let truetalk: string | boolean

truetalk =  'hi there'
truetalk = true
