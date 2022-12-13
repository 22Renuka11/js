var ourDog={
    "name":"Camper",
    "legs":4,
    "tails":1,
};
ourDog.name="Happy Camper";
delete ourDog.tails;
var myDog={
    "name":"Quincy",
    "legs":4,
    "tails":1,
}
myDog.friend="Camper";
//var hatValue=ourDog.name;
console.log(ourDog);
//var nameValue=myDog["name"];
console.log(myDog);
var myMusic={
    "artist":{
    "name":"Billy joel",
    "title":"Piano Man",
    "release_year":1973,
    "formats":[
        "CD",
        "8T",
        "LP"
    ]}
}
var art=myMusic.artist.title;
console.log(art);
