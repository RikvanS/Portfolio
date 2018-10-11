var Kelvin, Fahrenheit, Celsius;
function init() {
    Kelvin=document.getElementById("Kelvin");
    Fahrenheit=document.getElementById("Fahrenheit");
    Celsius=document.getElementById("Celsius");
}

function KelvinFunc() {
    Fahrenheit.value = parseFloat(Kelvin.value) * (9/5) - 459;
    Celsius.value = parseFloat(Kelvin.value) - 273;
}

function FahrenFunc() {
    Celsius.value = parseFloat(Fahrenheit.value) - 32 * (5/9);
    Kelvin.value = parseFloat(Fahrenheit.value) + 459 * (5/9);
}

function CelsiusFunc() {
    Kelvin.value = parseFloat(Celsius.value) + 273;
    Fahrenheit.value = parseFloat(Celsius.value) * (9/5) + 32;
}

init();