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
console.log("ARRAYTOLIST EXERCISE");
function arrayToList(arr){
  newarr= arr.slice(1,arr.length);
  if(arr.length==0)
    return null;
  let list = {
    value: arr[0],
    rest:
      arrayToList(newarr)
    };
  return list;
}
console.log(arrayToList([1,2,3]));
console.log(arrayToList([10,20, 30]));
var list = arrayToList([10,20,30]);
console.log("LISTTOARRAY EXERCISE");
function listToArray(list){
  var arr=[];
  while(list.rest!=null){
    arr.push(list.value);
    list=list.rest;
  }
  arr.push(list.value);
  return arr;
}
console.log(listToArray(list));
console.log("PREPEND HELPER CLASS");
function prepend(elem, list){
  return {value: elem, rest:list};
}
console.log(prepend(10, prepend(20,null)));
console.log("NTH HELPER CLASS");
function nth(list, pos){
  if(pos==0)
    return list.value;
  else if(list.rest==null)
    return undefined;
  return nth(list.rest, pos-1);

}
console.log(nth(arrayToList([10,20,30]),0));

console.log("DEEP COMPARISON EXERCISE");
const deepEqual = (value1, value2)=>{
  if((typeof value1 == "object" && value1!=null) 
    && (typeof value2 == "object" && value2!=null)){
    var v1keys = Object.keys(value1);
    var v2keys = Object.keys(value2);
    console.log(v1keys);
    //Check if keys are same length
    if(v1keys.length!==v2keys.length){
    console.log("first false " + "v1: " +value1 + " v2:" + value2);
      return false;
    }
    else{
      for(var i=0;i<v1keys.length; i++){
        //Check if keys are the same value
        console.log(v1keys[i]);
        if(deepEqual(v1keys[i], v2keys[i]))
          return deepEqual(value1[v1keys[i]], value2[v2keys[i]]);
        else{ 
          return false;
        }
      }
    }
  }
  else{
    return value1===value2;
  }
}
let obj = {here: {is: "an"}, object: 3};
let obj2 = {here: {i: "another"}, object:2};
let obj3 = {here: {isnt: "another"}, objec:5};
console.log(deepEqual(obj, {here: {is: "an"}, object: 3}));

console.log("HIGHER-ORDER-FUNCTIONS EXERCISE");
console.log("FLATTENING");
let arrays = [[1,2,3],[4,5],[6]];
console.log(arrays.reduce((a,b)=>a.concat(b)));
console.log("YOUR OWN LOOP");
function loop(value, test, update, body){
  while(test(value)){
    body(value);
    value=update(value);
  }
}
loop(6, n=>n>0, n=>n-1, console.log);
console.log("EVERYTHING");
function every(array, test){
  for(i=0;i<array.length;i++){
    if(!test(array[i]))
      return false;
  }
  return true;
}
console.log(every([1,3,5], n=>n<10));
console.log(every([2,4,16], n=>n<10));
console.log(every([],n=>n<10));
console.log("EVERYTHING V2")
function every(array, test){
  return !array.some(elem=>!test(elem));
}
console.log(every([1,3,5], n=>n<10));
console.log(every([2,4,16], n=>n<10));
console.log(every([],n=>n<10));
console.log("THE SECRET LIFE OF OBJECTS EXERCISE");
console.log("A VECTOR TYPE");
class Vec{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  plus(anotherVec){
    return new Vec(this.x+anotherVec.x, this.y+anotherVec.y);
  }
  minus(anotherVec){
    return new Vec(this.x-anotherVec.x, this.y-anotherVec.y);
  }
  get length(){
    return Math.sqrt(this.x*this.x+this.y*this.y);
  }
}
console.log(new Vec(1,2).plus(new Vec(2,3)));
console.log(new Vec(3,4).length);
