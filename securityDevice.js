//input generation
inputNum1 = Math.floor(Math.random() * 100000000000000000);
inputNum2 = "01137";
inputNum3 = Math.floor(Math.random()*5)+1;
inputString = inputNum1.toString() + inputNum2 + inputNum3.toString();
//alert("inputNum = " + inputNum + " and inputString = " + inputString)
//least five significant digits of school id
schoolId = "01137";
unlockCode = "1";
lockCode = "4";
//persistent digit to check in any string of numbers
digit = 0;

alert(inputString);

for (i = 0; i < inputString.length; i++) {
    if (inputString.charAt(i) == schoolId.charAt(digit)) {
        //alert("inputString position " + digit + " is " + inputString.charAt(digit) + " and schoolID at position " + digit + " is " + schoolID.charAt(digit));
        //alert("We found the first digit matches");
        digit++;
        if(inputString.charAt(i+1) == schoolId.charAt(digit)){
            //character 2
            //alert("We found the second digit matches");
            digit++;
            if(inputString.charAt(i+2) == schoolId.charAt(digit)){
                //character 3
                //alert("We found the third digit matches");
                digit++;
                if(inputString.charAt(i+3) == schoolId.charAt(digit)){
                    //character 4
                    //alert("We found the fourth digit matches");
                    digit++;
                    if(inputString.charAt(i+4) == schoolId.charAt(digit)){
                        //character 5
                        if(inputString.charAt(i+5) == unlockCode){
                            alert("Unlocked!");
                        } else if(inputString.charAt(i+5) == lockCode){
                            alert("Locked!");
                        } else {
                            resetDigit();
                        }
                    }else {
                        resetDigit();
                    }
                }else {
                    resetDigit();
                }
            }else {
                resetDigit();
            }
        }else {
            resetDigit();
        }
    }else {
        resetDigit();
    }
}

function resetDigit(){
    //console.log("i counter is: " + i);
    digit = 0;
    alert("no code found");
}