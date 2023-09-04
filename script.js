function convertTemperature() {
    // Get user input
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;

    // Convert temperature
    let convertedTemperature;
    if (unit === "celsius") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
    } else {
        convertedTemperature = (temperatureInput - 32) * 5/9;
    }

    // Display result
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Converted temperature: ${convertedTemperature.toFixed(2)} ${unit === "celsius" ? "°F" : "°C"}`;
}
