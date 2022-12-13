var array=["Renuka",21];
var array1=[["Atharva",17],["Renuka",21]];
var n=array[0];
var m=array1[0][1];
console.log(n);
console.log(m);
array[0]="vaishali";
console.log(array);
array.push("Renuka");
console.log(array);
array1.pop();//remove last element
console.log(array1);
array.shift();//remove first element
console.log(array);
array.unshift("Vaishali");//add at begining
console.log(array);