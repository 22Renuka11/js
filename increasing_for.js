//array in increasing order
//nested for loop
var a=[10,3,5,19,24];
var i,j;
for(i=0;i<5;i++){
    for(j=i+1;j<5;j++){
        if(a[i]>a[j]){
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
}
for(i=0;i<5;i++){
    console.log(a[i]);
}

