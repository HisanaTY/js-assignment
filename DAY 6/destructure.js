let student={
        name:`Helsinki`,
        age:24,
        projects:{
            diceGame:`Two player dice game using Javascript`
        }
    }
    let {name,age,projects:{diceGame}}=student;
    console.log(`name:${name}`);
    console.log(`age:${age}`);
    console.log(`project:diceGame:${diceGame}`);