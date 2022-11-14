function convertToKelvin1(tempCelsius) {
    // Formula to convert from celcius to Kelvin.
    let tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
}

function convertToKelvin2(tempFahrenheit) {
    // Formula to convert from Fahrenheit to Kelvin
    let tempKelvin = ((tempFahrenheit - 32) * 5/9) + 273.15; 
    return tempKelvin;
}

// I used convertToKelvin1 and convertToKelvin2 because it gives me a wrong answer when I use the same name. :)
// I used \xB0K to insert Kelvin symbol. You can change it into \xB0C for celsius and \xB0F for Fahrenheit.

console.log(convertToKelvin1(20) + "\xB0K"); // Celsius to Kelvin
console.log(convertToKelvin2(20) + "\xB0K"); // Fahrenheit to Kelvin