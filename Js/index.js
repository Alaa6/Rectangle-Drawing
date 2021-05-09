var width = 0, height = 0;
var widthValid = document.getElementById("widthValid");
var widthLabel = document.getElementById("widthLabel");
var widthInput = document.getElementById("widthInput");

var heightValid = document.getElementById("heightValid");
var heightLabel = document.getElementById("heightLabel");
var heightInput = document.getElementById("heightInput");







function draw(value, valueType) {
    var canvas = document.getElementById("rectangle");
    var context = canvas.getContext("2d");
    //---------------------------
    context.clearRect(0, 0, width, height)
    widthValid.style.display = "none"
    widthLabel.style.color = "#000"
    widthInput.style.borderColor = "#000"
    heightValid.style.display = "none"
    heightLabel.style.color = "#000"
    heightInput.style.borderColor = "#000"
    //---------------------------

    if (valueType == "width") {
        width = value
    } else {
        height = value

    }

    if (width > 700 || height > 400) {

        if (valueType == "width") {
            widthValid.style.display = "block"
            widthLabel.style.color = "#eb345e"
            widthInput.style.borderColor = "#eb345e"
        }


        else {
            heightValid.style.display = "block"
            heightLabel.style.color = "#eb345e"
            heightInput.style.borderColor = "#eb345e"

        }
    } else {
        context.font = "Arial 25px";
        context.fillStyle = "#ccc";
        context.fillRect(0, 0, width, height);
        context.stroke();
    }

    //---------------------------












}



