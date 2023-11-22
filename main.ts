function identity<T>(arg: T): T { 
    return arg;
}
let result1 = identity<string>("Hello generics!"); 
console.log(result1); 

let result2 = identity(42); 
console.log(result2);
