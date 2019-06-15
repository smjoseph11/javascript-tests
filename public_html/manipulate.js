//Chapter 2 Program Variables
//Exercise 1
for(let i='#';i.length<8;i+='#')
  console.log(i);
console.log('\n');
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
//Chapter 3 Functions
//Minimum
function min(n,m){
  if(m>n)
    return n;
  else
    return m;
}
//Recursion
function isEven(n){
  if (n==0)
    return true;
  if (n==1)
    return false;
  else if(n<0)
    return isEven(-n);
  else return isEven(n-2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-60));
//Bean Counting
function countBs(str){
  return countChar(str, 'B');
}
console.log(countBs("BBC"));
function countChar(str, char){
  var count=0;
  for(i=0;i<str.length;i++){
    if(str[i]==char)
      count++;
  }
  return count;
}
console.log(countChar('kakkerlak', 'k'));
//Chapter 4 Data Structures
//Exercises
//The Sum of a Range
function range(start, end, step=1){
  var arr=[];
  for(i=start;step>0?i<=end:i>=end;i+=step){
    arr.push(i);
  }
  return arr;
}
console.log(range(5,2,-1));
function sum(arr){
  var total=0;
  for(i=0;i<arr.length;i++){
    total+=arr[i];
  }
  return total;
}
console.log(sum(range(1,10)));
function reverseArray(arr){
  var revarr =[];
  for(i=arr.length-1;i>=0;i--){
    revarr.push(arr[i]);
  }
  return revarr;
}
function reverseArrayInPlace(arr){
  for(i=0;i<arr.length/2;i++){
    var first=arr[i];
    var last=arr[(arr.length-1)-i];
    arr[i]=last;
    arr[(arr.length-1)-i]=first;
  }
  return arr;
}
//can this be done recursively???
console.log(reverseArray(['A','B','C']));
let arr=[1,2,3,4,5,6];
reverseArrayInPlace(arr);
console.log(arr);
