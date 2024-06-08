function sayHello(){
    console.log("Hello there");
}
function sayGoodbye(){
    console.log("Bye Bye");
}
function init(){
    console.log("Hello world");
    sayHello();
    sayGoodbye();
}
window.onload=init;