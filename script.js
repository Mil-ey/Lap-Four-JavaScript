
function greeting (name = 'default') {
    return 'Hello, ' + name + '!';
    }
    console.log(greeting());



function addNumbers (num1, num2)
 {
    return num1 + num2;
    }
    console.log(addNumbers(7, 5));

let x = 10;
function changeNumber (x) {
    x = 5;
    console.log(x);

    return x;
}
changeNumber(x);
console.log(x);


 function outerFunction () 
 {
 let count = 0;
    function plusOne ()
        {
            return count++;
    }
    return plusOne;
    

}
const plusOne = outerFunction();
console.log(plusOne());
console.log(plusOne());