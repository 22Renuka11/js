function month(num){
    switch(num){
        case 3:
        case 4:
        case 5:
        case 6:
            return "Summer";
            break;
        case 7:
        case 8:
        case 9:
        case 10:
            return "Rainy";
            break;
        case 11:
        case 12:
        case 1:
        case 2:
            return "Winter";
            break;
    }
}
console.log(month(3));