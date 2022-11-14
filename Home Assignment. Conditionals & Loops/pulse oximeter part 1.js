let oxygenLevel = 96; // Oxygen Saturation, (SpO2)%

function oximeter(oxygenLevel) {
    if (oxygenLevel >= 96) {
        console.log('Normal Reading');
    } else if (oxygenLevel >= 95) {
        console.log('Acceptable to continue home monitoring');
    } else if ((oxygenLevel >= 93) && (oxygenLevel <= 94)) {
        console.log('Seek advice from health professionals');
    } else {
        console.log('Seek urgent medical advice');
    }
}
oximeter(oxygenLevel);