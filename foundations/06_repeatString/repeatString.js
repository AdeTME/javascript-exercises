const repeatString = function (str,num){
        let addstr="";
        for (let i = 0;i<num;i++){
            addstr+=str;
        }
        if (num<0){
		return "ERROR";
        } else{
            return addstr;
        }
}

// Do not edit below this line
module.exports = repeatString;
