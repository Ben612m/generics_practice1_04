function identity(arg) {
    return arg;
}
var result1 = identity("Hello generics!");
console.log(result1);
var result2 = identity(42);
console.log(result2);
