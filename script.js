function removeBlanks(str) {
    var splitArr = str.split(" ");
    var joinArr = splitArr.join("");
    console.log(joinArr);
    return joinArr;
}
// removeBlanks("move sir out of the way");

function getDigits(str) {
    var newArr = []
    var otherArr = str.split("");
    for (var i = 0; i < otherArr.length; i++) {
        console.log('type', typeof(otherArr[i]));
        if ((otherArr[i] % 1) == 0) {
            newArr.push(otherArr[i]);
        }
    }
    console.log(newArr);
    return newArr;
}
// getDigits("2hn4lj45nl23");

function acronyms(str) {
    // this splits the words at the spaces
    var newArr = str.split(" ");
    // this creates a holder string
    var otherArr = "";
    // this loops through the newly split string and loops through to get the first
    // index of each split string, then concatonates it to the otherArr
    for (var i = 0; i < newArr.length; i++) {
        if (newArr[i] == false) {
            continue;
        } else {
            otherArr += newArr[i][0].toUpperCase();
        }
    }
    console.log(otherArr);
    return otherArr;
}
// acronyms("laugh out loud");

function countNS(str) {
    // this splits the string at each character
    var newArr = str.split("");
    // this creates a counter starting at 0
    var counter = 0;
    // this will loop thru the newly split array checking if the value is not a string 
    for (var i = 0; i < newArr.length; i++) {
        console.log(newArr[i])
        if (newArr[i] == false) {
            continue;
        } else {
            counter++;
        }
    }
    console.log(counter);
    return counter;
}
// countNS("where are you now");

function removeShort(str, val) {
    // this splits the string at each space to make an array of strings
    var newStr = str.split(" ");
    // this will loop through the new array backwards
    for (var i = newStr.length - 1; i >= 0; i--) {
        // if the length of the string at the ith index is smaller than the value
        if (newStr[i].length < val) {
            // this looop will switch spots with it to then pop it off
            for (var x = i; x < newStr.length - 1; x++) {
                var holder = newStr[x];
                newStr[x] = newStr[x + 1];
                newStr[x + 1] = holder;
            }
            newStr.pop();
        }
    }
    console.log(newStr);
    return newStr;
}

removeShort("i do not know", 3);