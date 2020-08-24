
const expect = require('chai').expect;
const indexref = require("./index")


function ToString(){

    console.log("PairNo" + " --> " + "(" + "major"+ " , " + "minor" + ")")
    var i;
    for(i=1;i<26;i++)
    {
        const colorpair =  indexref.GetColorFromPairNumber(i);
        console.log(i + " --> " + "(" + colorpair.major + " , " + colorpair.minor + ")")
    }
    
    }


function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = indexref.GetColorFromPairNumber(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}

function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = indexref.GetPairNumberFromColors(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}




console.log("Printing the manual........");
console.log();
ToString();
console.log("Manual Printed........");
console.log();

console.log("color coder");
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);
