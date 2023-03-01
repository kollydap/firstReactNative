const  DUMMY_USERS = [
    {id:1,name:"kolawole",age:23,IsActive:false,},
    {id:2,name:"Shola",age:25,IsActive:true,},
    {id:3,name:"Bolu",age:12,IsActive:true,},

 ]
 export function getActiveUsers(){
    return DUMMY_USERS.filter((event)=>event.IsActive);
 }