function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = (pin + '').length
    if (pinString == 4) {
        return pin;
    }
    else {
        // console.log('is not 4 digit pin')
        return getPin();
    }
}
function genaratePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const verify = document.getElementById('typed-numbers').value;
    const pin = document.getElementById('display-pin').value;
    const successNotification = document.getElementById('success-message');
    const errorNotification = document.getElementById('error-message');
    if (verify == pin) {
        errorNotification.style.display = 'none';
        successNotification.style.display = 'block';
    }
    else {
        successNotification.style.display = 'none';
        errorNotification.style.display = 'block';
    }
}