function convertToCelsius() {
    const inputFahrenheit = document.getElementById('inputFahrenheit').value;
    if (!inputFahrenheit) return;

    const celsius = (inputFahrenheit - 32) * 5/9;
    document.getElementById('inputCelsius').value = celsius.toFixed(2);
    updateLiquid(celsius);
}

function convertToFahrenheit() {
    const inputCelsius = document.getElementById('inputCelsius').value;
    if (!inputCelsius) return;

    const fahrenheit = (inputCelsius * 9/5) + 32;
    document.getElementById('inputFahrenheit').value = fahrenheit.toFixed(2);
    updateLiquid(inputCelsius);
}

function updateLiquid(temperature) {
    const liquid = document.getElementById('liquid');
    const maxHeight = 250; // Adjust this based on your thermometer image
    const height = Math.min(maxHeight, Math.max(0, temperature * 10));
    liquid.style.height = `${height}px`;
}
