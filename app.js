'use strict'
{
    1
    2
    function isCorrectNested(str) {
        if (typeof str !== 'string') {
            return;
        }
    
        if (!str) {
            return true;
        }
       
        const map = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        let brackets = [];
    
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
                brackets.push(str[i]);
            } else if (str[i] === ')' || str[i] === '}' || str[i] === ']'){
                if (!brackets.length || map[str[i]] !== brackets.pop()) {
                    return false;
                }          
            }
        }
    
        return !brackets.length;    
    }

    let str = '([1231    123 ()   23123])';
    let str1 = '{[() ()]}';
    let str2 = '([) ()]';
    let str3 = '';
    let str4 = [];
    let str5 = '{}{}}}';
    let str6 = '}}}{{{';

    console.log(isCorrectNested(str));  //true
    console.log(isCorrectNested(str1)); //true
    console.log(isCorrectNested(str2)); //false
    console.log(isCorrectNested(str3)); //true
    console.log(isCorrectNested(str4)); //undefined
    console.log(isCorrectNested(str5)); //false
    console.log(isCorrectNested(str6)); //false
}
console.log('/* --------------------------------------------------------- */')
{
    function isNotValidNumber(number) {
        return Number.isNaN(+number) || Array.isArray(number) || !number || number < 0 || number > 200000;
    }

    function isInteger(number) {
        if (isNotValidNumber(number)) {
            return;
        }

        return +number === parseInt(number);
    };

    const isInteger1 = (number) => isNotValidNumber(number) ? undefined : ~~+number === +number

    function isInteger2(number) {
        if (isNotValidNumber(number)) {
            return;
        }

        return (+number ^ 0) === +number;
    };



    console.log(isInteger(200001));     //undefined
    console.log(isInteger(5.5));        // false
    console.log(isInteger('asadsa'));   //undefined
    console.log(isInteger(5));          //true

    console.log(isInteger1([]));        //undefined
    console.log(isInteger1(5.5));       //false
    console.log(isInteger1('3'));       //true

    console.log(isInteger2(5));         //true
    console.log(isInteger2(5.5));       //false
    console.log(isInteger2('3'));       //true
}
console.log('/* --------------------------------------------------------- */')
{
    function isOnlyBrackets(str) {
        if (typeof str !== 'string') {
            return;
        }

        return new RegExp(/^[\(\{\[\]\}\)\/]*$/).test(str);
    }

    function isOnlyBracketsLoop(str) {
        if (typeof str !== 'string') {
            return;
        }

        for (let i = 0; i < str.length; i++) {
            if (!(str[i] === '(' || str[i] === '{' || str[i] === '[' ||
                str[i] === ')' || str[i] === '}' || str[i] === ']' || str[i] === '/')
            ) {
                return false;
            }
        }

        return true;
    }

    // const isOnlyBrackets = str => ( new RegExp(/^[\(\{\[\]\}\)\/]*$/).test(str) );

    let str = '(((((({/)))]]]][[[[{{{}]{}{}{]///';
    let str1 = '((({{}}()23//)';
    let arr = [];

    console.log(isOnlyBrackets(str));   //true
    console.log(isOnlyBrackets(str1));  //false
    console.log(isOnlyBrackets(arr));   //undefined
    
    console.log(isOnlyBracketsLoop(str));   //true
    console.log(isOnlyBracketsLoop(str1));  //false
    console.log(isOnlyBracketsLoop(arr));   //undefined
}