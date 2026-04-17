const sumAll = function(a,b) {
    let result = 0;
   if (!(Number.isInteger(a))||(!Number.isInteger(b))|| a < 0 || b < 0){
        return "ERROR";
    } else if (a < b){
        for (let i = a ; i < b+1 ; i++ ){
            result+=i;
        }
    } else {
        for (let i = b ; i<=a ; i++ ){
            result+=i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
