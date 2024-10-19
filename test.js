let display = document.getElementById("display");


function addToDisplay (input) {
    if(display.value != "Error"){
        display.value += input
        display.style.color = "black"
    }

}
function clearData () {
    display.value=""
    display.style.color = "black"
}
function calculate () {
    try{
        display.value = eval(display.value)
        display.style.color = "lightgreen"
    }
    catch(err) {
        display.value = "Error"
        display.style.color = "red"
    }
}
function Delete () {
    if(display.value !== "Error"){
        display.value = display.value.toString().slice(0,-1);
        display.style.color = "black"
    }
}