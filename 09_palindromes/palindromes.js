const palindromes = function (pali) {

function formatStrings(a){

    const formattedString = [];

    for (let i = 0 ; i < a.length; i++){
        if ( a[i].toLowerCase() !=  a[i].toUpperCase()){
             formattedString.push(a[i].toLowerCase());
           
            }

    }

   
    return formattedString;
}

const backwardString = [];
let lengthofString = 0;
pali = formatStrings(pali);

lengthofString = pali.length - 1;

for (let i = 0; i < pali.length;i++){

    
    backwardString.push(pali[lengthofString]);
    lengthofString--;

}
for (let i = 0 ; i < pali.length;i++){
    if (pali[i] != backwardString[i]) return false;
}
return true;
};

// Do not edit below this line
module.exports = palindromes;
