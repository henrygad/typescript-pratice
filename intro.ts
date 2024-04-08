/* const test =({myname, myprice}):{name: string, price: number} =>{

  return{name: myname, price: myprice}

}

let user = {myname: 'henry', myprice: 8, email: 'henrygad@gmail.com'}
test(user) */



//type aliassese


/* type user ={
    name:  string,
    age: number,
    isActive: boolean
    bio: object
}

function loginuser(info: user): user{

    return{name:info.name, age:info.age, isActive: info.isActive,  bio: info.bio}

}


loginuser({name: 'hernry', age: 8, isActive: true, bio: ['hey there henry love playing vidoe game', 'football']}) */


/* type user = {
    readonly _id: string,
    name: string,
    age: number,
    email: string,
    credit?: boolean  
}

type friend ={
    timeline: true
}

type usertimeline = user & friend & {  
    usertimeline: boolean
}

const testtimeline: usertimeline  = {
      _id: 'henry619',
    name: 'henry',
    age: 7,
    email: 'henry@gamil.come',
    timeline:true,
    usertimeline: false

}

const creatnewuser: user = {
    _id: 'henry619',
    name: 'henry',
    age: 7,
    email: 'henry@gamil.come',
}

//creatnewuser._id = 'myhenhfhhfjfjfjfh'
creatnewuser.name = 'mrmrm'
creatnewuser.credit = false */

/* 
type myarrobeject = {
    name: string,
    age: number
    readonly me: number[]
}


const arr: myarrobeject[] = [
    {name: 'henry', age: 8, me: [6, 8]},
    {name: 'henry', age: 8, me: [6, 8]},
    {name: 'henry', age: 8, me: [6, 8]}
] */

//arr[0].me = [9,9]

/* type myarr =  number | string

function test(me: myarr){
    if(typeof me === 'string'){
       return me.toLowerCase()
    } else return me + 3
   
}

test('me')


type appuser = {
    name: string,
    id: number
}

type appamin ={
    username: string,
    id: number
}

const auser: appuser | appamin = {
    name: 'henry',
    id: 89764,
    username: 'henry'
} */


//tuple
let id;
let name;
let age;

//type me = [id, name, age] 


type user ={
   readonly userid: number
    name: string
    email: string
    credit?: boolean
    getcoupon(couponname: string, couponvalue: number, couponid: number): string
    notusedcoupon?(): number
}


const newUser:mycurrentuser = {
    userid: 909,
    name: 'henry gad',
    email: 'h@gmail.com',
    credit: true,
    getcoupon(name: 'gab123', value: 24, id: 448) {
        return 'me'
    },
    getmynextid: 9760,
}


interface mycurrentuser {
    readonly userid: number
    name: string
    email: string
    credit?: boolean
    getcoupon(couponname: string, couponvalue: number, couponid: number): string
    notusedcoupon?(): number
}
interface mycurrentuser {
    getmynextid : number
}





export {}