let sales=prompt(`Enter the sales made by the the employee:`);
var commission;
if(sales>20000){
    commission=(5000*0.02)+(5000*0.05)+(10000*0.07)+((sales-20000)*0.1);
}
else if((sales>=10000)&&(sales<=20000)){
    commission=(5000*0.02)+(5000*0.05)+((sales-10000)*0.07);
}
else if((sales>=5000)&&(sales<=10000)){
    commission=(5000*0.02)+((sales-5000)*0.05);
}
else{
    commission=(sales*0.02);
}
console.log(`The total commission of the employee is ${commission}`);