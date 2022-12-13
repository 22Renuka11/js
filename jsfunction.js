//function without arguments
function student(){
    console.log("Hello student's");
}
//function with arguments
student();
function add(a,b){
    console.log(a+b);
}
add(10,5);
//global variable function
var a=10;
function match(){
    if(a==10){
        console.log("matched");
    }
    else{
        console.log("not matched");
    }
}
match();
//local variable function
function scope(){
    var n=10;
    console.log(n);
}
scope();
//console.log(n);
function process(num){
    return (num+3)/5;
}
console.log(process(7));
//assignment operator
function testEqual(val){
    if(val==12){
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));
//Strict equal operator
function strict(num){
    if(num===7){
        return "Equal";
    }
    return "Not Equal";
}
console.log(strict('7'));
//equality operator
console.log(testEqual(10));
//Equality operator
function compareEquality(a,b){
    if(a==b){
        return "Equal";
    }
    return "Not equal";
}
console.log(compareEquality(10,'10'));
//comparision operator
function comparision(num){
    if(num<100 && num>=90){
        return "A+";
    }
    else if(num<89 && num>80){
        return "A";
    }
    else{
        return "B";
    }
}
console.log(comparision(98));
//challenge
function challenge(num){
    if(num<5){
        return "Tiny";
    }
    else if(num>=5 && num<10){
        return "small";
    }
    else if(num>=10 && num<15){
        return "small";
    }
    else if(num>=15 && num<20){
        return "small";
    }
    else if(num>=20){
        return "Huge";
    }
}
console.log(challenge(10));
//boolean function
function isLess(a,b){
    return a<b;
}
console.log(isLess(10,15));
//math function
function power(a,b){
    if(a<0 || b<0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
}
console.log(power(2,2));