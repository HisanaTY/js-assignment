let num=prompt(`Enter the limit:`);
console.log(`The list of prime numbers upto ${num} are:`)
for(let i=2;i<=num;i++){
    let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1;
        }
    }
    if(flag==0){
        console.log(`${i}`);
    }
}