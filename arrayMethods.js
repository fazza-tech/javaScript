//array map
const arr = [5,1,3,2,6];

function double(x){
    return x *2;
}
function triple(x){
    return x *3;
}

const output = arr.map(  (x) => x.toString(2)); //binary convertion

console.log(output);

//array filter 

const arr2 = [5,1,3,2,6];

//filter odd values
function isOdd(x){
    return x% 2;
}
//filter even values
function even(x){
    return x%2===0;
}
const output2 = arr2.filter(even)
console.log(output2);

//greater than 4 filter
const abc = [1,2,4,5,6,8];



const greatFour = abc.filter( (x) => x>4);
console.log(greatFour);

//reduce

const redArr = [5,1,3,2,6];

// sum or arrays

function findSum(redArr){
    let sum =0;
    for(let i =0;i<redArr.length;i++){
        sum= sum+redArr[i];
    }
    return sum;
}

console.log(findSum(redArr));

//solving above problem with reduce

const result = redArr.reduce(function(acc,curr){
    acc= acc + curr;
    return acc;
}, 0);
console.log(result); //output will be the same;

// max of arrays

function findMax(redArr){
    let max =0;
    for(let i = 0;i<redArr.length;i++){
        if(redArr[i]>max){
            max = redArr[i];
        }
    }
    return max
}
console.log(findMax(redArr)); //6 is greater

// max of array using reduce
const result1 = redArr.reduce(function(max,b){
    if(b > max){
        max =b;
    }
    return max;
},0);

console.log(result1);