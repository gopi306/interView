/*let value = NaN;

console.log( NaN == NaN);// false
console.log( NaN ==value );// false
console.log( null== NaN);// false
console.log(undefined == NaN);// false
console.log(undefined == null); // true
*/

let strArr='';
let longRangeStringConToArray= (str)=>{
    if(str.trim().length===0){
        return false;

    }
    strArr= str.split(" ");
    console.log(strArr);
    
 
}

console.log(longRangeStringConToArray("Gopi nath usgh rani reddy my baby and myfather"));



