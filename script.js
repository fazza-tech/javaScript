

// find the area of the circle

const radius = [3,1,2,4];

//logic(equation) for area
const area = function (radius){
    return Math.PI * radius * radius;
}

//logic for circumference 
const circumference = function (radius){
    return 2 * Math.PI * radius;
}

//logic for diameter 
const diameter = function (radius){
    return 2 * radius;
}


const calculate = function(radius, logic){
    const output = [];
    for(let i =0;i <radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));









// const calculateArea = function(radius){
//     const output = [];
//     for (let i = 0; i<radius.length;i++){
//         output.push(Math.PI* radius[i]*radius[i]);
//     }
//     return output;
// }


// console.log(calculateArea(radius));













//circumference of that circle

// const calculateCircumference = function(radius){
//     const output = [];
//     for(let i = 0;i<radius.length;i++){
//         output.push(2*radius[i])
//     }
//     return output;
// }

// console.log(calculateCircumference(radius));

