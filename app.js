'use strict'
{
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

        const strArr = str.replace(/\s/g, '').split('');
        let brackets = [];

        for(let i = 0; i < strArr.length; i++) {
            if (Object.values(map).includes(strArr[i])) {
                brackets.push(strArr[i]);
            } else if (Object.keys(map).includes(strArr[i])) {
                if (brackets.length && map[strArr[i]] !== brackets[brackets.length - 1]){
                    return false;
                }

                brackets.pop();
            }
        }

        return !brackets.length;
    }

    let str = '([1231    123 ()   23123])';
    let str1 = '{[() ()]}';
    let str2 = '([) ()]';
    let str3 = '';
    let str4 = [];

    console.log(isCorrectNested(str));  //true
    console.log(isCorrectNested(str1)); //true
    console.log(isCorrectNested(str2)); //false
    console.log(isCorrectNested(str3)); //true
    console.log(isCorrectNested(str4)); //undefined
}
/* --------------------------------------------------------- */
{
    function isNotValidNumber(number) {
        return Number.isNaN(+number) || Array.isArray(number) || !number || number < 0 || number > 200000;
    }

    function isInteger(number) {
        if (isNotValidNumber(number)) {
            return new Error('Not valid number');
        }

        return +number === parseInt(number);
    };

    const isInteger1 = (number) => isNotValidNumber(number) ? new Error('Not valid number') : ~~+number === +number

    function isInteger2(number) {
        if (isNotValidNumber(number)) {
            return new Error('Not valid number');
        }

        return (+number ^ 0) === +number;
    };



    console.log(isInteger(200001));     //Error: Not valid number
    console.log(isInteger(5.5));        // false
    console.log(isInteger('asadsa'));   //Error: Not valid number
    console.log(isInteger(5));          //true

    console.log(isInteger1([]));        //Error: Not valid number
    console.log(isInteger1(5.5));       //false
    console.log(isInteger1('3'));       //true

    console.log(isInteger2(5));         //true
    console.log(isInteger2(5.5));       //false
    console.log(isInteger2('3'));       //true
}
/* --------------------------------------------------------- */
{
    function isOnlyBrackets(str) {
        if (typeof str !== 'string') {
            return;
        }

        return new RegExp(/^[\(\{\[\]\}\)\/]*$/).test(str);
    }

    // const isOnlyBrackets = str => ( new RegExp(/^[\(\{\[\]\}\)\/]*$/).test(str) );

    let str = '(((((({[}}}}{{{{{}}{{{{}{{///////}}}}}}}}]}/)';
    let str1 = '((({{}}()23//)';
    let arr = [];

    console.log(isOnlyBrackets(str));   //true
    console.log(isOnlyBrackets(str1));  //false
    console.log(isOnlyBrackets(arr));   //undefined
}