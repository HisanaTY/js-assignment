let m=Number(prompt("Enter the mark:"));
console.log("Calculation of grade using ternary statements");
let g=(m>=90)?`O`:(m>=80)?`A+`:(m>=70)?`A`:(m>=60)?`B+`:(m>=50)?`B`:(m>=40)?`P`:`F`;
console.log(`Mark is ${m} and grade is ${g}`);