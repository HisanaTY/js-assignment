//to start the timer so as to find the time taken for code execution
console.time();
//display the date and time 
console.log(Date());
var a={name:"Alen",age:25,city:"Ernakulam"};
var b={name:"Arun",age:26,city:"Ernakulam"};
var c={name:"Arnav",age:28,city:"Ernakulam"};
//display the whole details of the objects a,b,c
console.log({a,b,c});
//display the details of these objects in table
console.table({a,b,c});
//display the customized data
console.log('%c demo for customized message','color:yellow');
//display a warning
console.warn("Its a warning demo");
//display an error
console.error("Its a error demo");
//display output information message
console.info("this is a demo information");
//to print stack trace
function first() {
    function second() {
      console.trace();
    }
    second();
    }
  first();
  //create new inline group
  console.group('1st group');
  console.log('First message');  
  console.group('A group inside the 1st group');  
  console.log('A message inside the group inside the 1st group');   
  console.log('Another message inside the group inside the 1st group');  
  //end current inline group
  console.groupEnd();  
  console.log('2nd message'); 
  console.groupEnd();