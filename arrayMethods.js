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

