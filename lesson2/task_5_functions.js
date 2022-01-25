// Функции для арефметических операций:

function addition(a, b) {
    let result = a + b;
    return result
}

function subtraction(a, b) {
    let result = a - b;
    return result
}

function multiplication(a, b) {
    let result = a * b;
    return result
}

function division(a, b) {
    let result
    if (b == 0) {
        result = "Деление на ноль не возможно!";
    }
    else {
        result = a / b;
    }
    return result
}