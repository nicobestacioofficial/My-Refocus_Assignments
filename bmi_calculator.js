//Imperial ENglish BMI Formula

function calculateBmi() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / (height * height)* 703);

document.getElementById('heading').innerHTML = "Your BMI is: " + bmi.toFixed(2)


if (bmi <= 16) {
    document.getElementById('message').innerHTML = "Severe Thinness 😔"
}else if (bmi <= 17 ) {
    document.getElementById('message').innerHTML = "Moderate Thinness 😖"
}else if (bmi <= 18.5 ) {
    document.getElementById('message').innerHTML = "Mild Thinness 😟"
}else if (bmi <= 25){
    document.getElementById('message').innerHTML = "Normal 😁"
}else if (bmi <= 30) {
    document.getElementById('message').innerHTML = "Overweight 😲"
}else if (bmi <= 35){
    document.getElementById('message').innerHTML = "Obese Class I 🤯"
}else if (bmi <= 40){
    document.getElementById('message').innerHTML = "Obese Class II 😫"
}else if (bmi > 40) {
    document.getElementById('message').innerHTML = "Obese Class III 💣"
}

}