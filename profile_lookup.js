var contacts=[
    {
        "firstname":"jeetendra",
        "lastname":"Bhagat",
        "age":49,
        "number":8275899900,
    },
    {
        "firstname":"vaishali",
        "lastname":"Bhagat",
        "age":44,
        "number":8275899901,
    },
    {
        "firstname":"Renuka",
        "lastname":"Bhagat",
        "age":21,
        "number":8329312878,
    },
    {
        "firstname":"Atharva",
        "lastname":"Bhagat",
        "age":17,
        "number":8329312878,
    }
];
function lookupprofile(name,prop){
    for(var i=0;i<contacts.length;i++){
        if(contacts[i].firstname===name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}
var data=lookupprofile("Renuka","number");
console.log(data);