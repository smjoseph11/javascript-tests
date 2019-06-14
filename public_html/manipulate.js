//Exercise 2
console.log("Exercise 2 results")
for(let i=1;i<101;i++){
  if(i%3==0 && i%5==0)
    console.log('FizzBuzz');
  else if(i%3==0)
    console.log('Fizz');
  else if(i%5==0)
    console.log('Buzz');
  else
    console.log(i);
}
console.log('\n');
//Exercise 3
console.log("Exercise 3 results")
const size=21
var str='';
for(let i=0;i<size;i++){
  for(let j=0;j<size;j++){
    if((j+i)%2==0){
      str+=' ';
    } 
    else{
      str+='#'; 
    }
  }
  str+='\n';
}
console.log(str);
