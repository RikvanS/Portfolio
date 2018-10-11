var feet, inches, yards, miles, kilometer, meter, centimeter;
function init() {
    feet  = document.getElementById("Feet");
    inches  = document.getElementById("Inches");
    yards  = document.getElementById("Yards");
    miles  = document.getElementById("Miles");
    kilometer  = document.getElementById("Kilometer");
    meter  = document.getElementById("Meter");
    centimeter  = document.getElementById("Centimeter");
    
}

function feetfunc() {
    inches.value = parseFloat(feet.value) * 12;
    yards.value = parseFloat(feet.value) * 0.33333;
    miles.value = parseFloat(feet.value) * 0.00018939
    kilometer.value = parseFloat(feet.value) /3280.8
    meter.value = parseFloat(feet.value) /3.2808
    centimeter.value = parseFloat(feet.value) /0.032808
}

    function inchesfunc() {
    feet.value = parseFloat(inches.value) * 0.083333; 
    yards.value = parseFloat(inches.value) * 0.027778;
    miles.value = parseFloat(inches.value) * 0.000015783;
    kilometer.value = parseFloat(inches.value) / 39370;
    meter.value = parseFloat(inches.value) / 39.370;
    centimeter.value = parseFloat(inches.value) / 0.39370;
}

    function yardsfunc() {
    inches.value = parseFloat(yards.value) * 36;
    feet.value = parseFloat(yards.value) * 3;
    miles.value = parseFloat(yards.value) * 0.00056818;
    kilometer.value = parseFloat(yards.value) / 1093.6;
    meter.value = parseFloat(yards.value) / 1.0936;
    centimeter.value = parseFloat(yards.value) / 0.010936;
}

    function milesfunc() {
    inches.value = parseFloat(miles.value) * 63360;
    yards.value = parseFloat(miles.value) * 1760;
    feet.value = parseFloat(miles.value) * 5280;
    kilometer.value = parseFloat(miles.value) / 0.62137;
    meter.value = parseFloat(miles.value) / 0.00062137;
    centimeter.value = parseFloat(miles.value) / 0.0000062137;
}

    function kilometerfunc() {
    inches.value = parseFloat(kilometer.value) * 39370;
    yards.value = parseFloat(kilometer.value) * 1093.6;
    miles.value = parseFloat(kilometer.value) * 0.62137;
    feet.value = parseFloat(kilometer.value) * 3280.8;
    meter.value = parseFloat(kilometer.value) * 1000;
    centimeter.value = parseFloat(kilometer.value) * 100000;
}

    function meterfunc() {
    inches.value = parseFloat(meter.value) * 39.370;
    yards.value = parseFloat(meter.value) * 1.0936;
    miles.value = parseFloat(meter.value) * 0.00062137;
    kilometer.value = parseFloat(meter.value) / 1000;
    feet.value = parseFloat(meter.value) * 3.2808;
    centimeter.value = parseFloat(meter.value) / 0.01;
}
        function centimeterfunc() {
    inches.value = parseFloat(centimeter.value) *0.39370;
    yards.value = parseFloat(centimeter.value) * 0.010936;
    miles.value = parseFloat(centimeter.value) * 0.0000062137;
    kilometer.value = parseFloat(centimeter.value) / 100000;
    meter.value = parseFloat(centimeter.value) / 100;
    feet.value = parseFloat(centimeter.value) * 0.032808;
} 
    
init();
