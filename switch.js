function caseSwitch(val){
    switch(val){
        case 1:
            return "alpha";
            break;
        case 2:
            return"beta";
            break;
        case 3:
            return "gamma";
            break;
        case 4:
            return "delta";
            break;
        default:
            return "not found"
    }
}
console.log(caseSwitch(5));