const removeFromArray = function removefromarray(arr, ...arg) {
	const result =[];
    for (let i of arg){
        arr = arr.filter((val)=>val !== i);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
