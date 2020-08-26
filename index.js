const MajorColors = [
    "white",
    "red",
    "black",
    "yellow",
    "violet"
];
const MinorColors = [
    "blue",
    "orange",
    "green",
    "brown",
    "slate"
];
function GetColorFromPairNumber(pairNumber) {
    let colorPair = {};
    const zeroBasedPairNumber = pairNumber - 1;
    const majorColorIndex =
        Math.floor(zeroBasedPairNumber / MinorColors.length);
    colorPair.major = MajorColors[majorColorIndex];
    colorPair.minor = MinorColors[zeroBasedPairNumber % MinorColors.length];
    return colorPair
}
function GetPairNumberFromColors(majorColor, minorColor) {
    let majorIndex = 0;
    let minorIndex = 0;
    for(majorIndex = 0; majorIndex < MajorColors.length; majorIndex++) {
        if(MajorColors[majorIndex] == majorColor) {
            break;
        }
    }
    for(minorIndex = 0; minorIndex < MinorColors.length; minorIndex++) {
        if(MinorColors[minorIndex] == minorColor) {
            break;
        }
    }
    return majorIndex * MinorColors.length + minorIndex + 1;
}

function ToString(){ 
    let manual_entries = (MajorColors.length) * (MinorColors.length); //computes the length dynamically
    let manual_string = ""; //here the complete manual gets concatinated
    for(let pair_num=1 ; pair_num<= manual_entries; pair_num++){
        const colorpair =  GetColorFromPairNumber(pair_num);
        manual_string = manual_string + pair_num + " - " + colorpair.major + " , " + colorpair.minor + " \n" ;
    }
    console.log(manual_string); //printing the concatinated manual
}
module.exports = {GetColorFromPairNumber,GetPairNumberFromColors,ToString}
