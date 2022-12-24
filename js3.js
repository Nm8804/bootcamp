
// even Numbers
// for(let i=2; i<7000 ;i=i+2){
//        console.log(i);
//     };



// odd numbers
  //   for(let j=1; j<10000 ;j=j+2){
  //     console.log(j);
  //  };



//  sum of array index  
// var a=[1,13,22,123,49];
//    var sum=0;
//    for (let index = 0; index < a.length; index++) {
//        let b=a[index];
//        sum=sum+b ;   
//    };
//    console.log(sum);

// delete array
//    var a=[1,13,22,123,49];
// for (let i = 0; i < a.length; i++) {
//     delete a[i];    
// };
// console.log(a);


// finding max of array

// let a=[1,13,22,123,49];
// let max=Math.max(...a);
// console.log(max);


// finding min of array
// let a=[1,13,22,123,49];
// let min=Math.min(...a);
// console.log(min);

// finding second min of array
// let a=[1,13,22,123,49];
// let min=Math.min(...a);
// let i=a.indexOf(min);
//  a.splice(i,1);
// let secondMin=Math.min(...a);
// console.log(secondMin);


// revers an String
var text= "RAHKAR";
var array=text.substring();
var startIndex=0;
var endIndex= text.length;

while ( startIndex < endIndex) {
var x= array[ startIndex];
  array[ startIndex]=array[ endIndex];
  array[ endIndex]=x;
  startIndex++
  endIndex--
}
console.log(array);


