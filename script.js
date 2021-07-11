let screen = document.getElementById("screen")
let buttons = document.querySelectorAll("button")
let screenValue = ""

for (i of buttons) {
    i.addEventListener("click", (e) => {
        let buttonText = e.target.innerText
        if (buttonText == "X") {
            buttonText = "*"
            screenValue += buttonText
            screen.value = screenValue
        }
        else if (buttonText == "Clear") {
            screenValue = ""
            screen.value = screenValue
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue)
        }
        else {
            screenValue += buttonText
            screen.value = screenValue
        }
    })
}