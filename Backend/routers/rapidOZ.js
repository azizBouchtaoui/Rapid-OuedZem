 
const Mate   = new Date
Mate.setMonth(Mate.getMonth() + 1) 
 const datee =new Date().toLocaleString().slice(0,10);
 const M = parseInt(datee.slice(3,5))
 const D= parseInt(datee.slice(0,2)) 
 
 const Y = parseInt(datee.slice(6,10))
console.log("M = "+ M + " D "+D+" Y "+Y );
 