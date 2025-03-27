function checkPopsnap() {
    const numberInput = document.getElementById("numberInput");
    const resultDisplay = document.getElementById("resultDisplay");
    const number = parseInt(numberInput.value);

    if (isNaN(number)) {
        resultDisplay.textContent = "Please enter a valid whole number.";
        return;
    }

    if (number % 4 === 0 && number % 6 === 0) {
        resultDisplay.textContent = "Popsnap";
    } else if (number % 4 === 0) {
        resultDisplay.textContent = "Pop";
    } else if (number % 6 === 0) {
        resultDisplay.textContent = "Snap";
    } else {
        resultDisplay.textContent = number;
    }
}