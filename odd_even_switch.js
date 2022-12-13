function odd_even(num){
    var rem;
    rem=num%2;
    switch(rem){
        case 0:
            return "Even";
            break;
        default:
            return "Odd";
    }
}
console.log(odd_even(5));