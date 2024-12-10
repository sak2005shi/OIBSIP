document.getElementById('convertBtn').addEventListener('click', function() {
    // Get the input temperature value and the selected unit
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unitSelect = document.getElementById('unitSelect').value;
    const resultDisplay = document.getElementById('convertedTemperature');

    // Validate the input
    if (isNaN(tempInput)) {
        resultDisplay.innerText = 'Please enter a valid number!';
        return;
    }

    let celsius, fahrenheit, kelvin;

    // Convert based on the selected input unit
    if (unitSelect === 'celsius') {
        // Convert from Celsius to Fahrenheit and Kelvin
        fahrenheit = (tempInput * 9/5) + 32;
        kelvin = tempInput + 273.15;
    } else if (unitSelect === 'fahrenheit') {
        // Convert from Fahrenheit to Celsius and Kelvin
        celsius = (tempInput - 32) * 5/9;
        kelvin = (tempInput - 32) * 5/9 + 273.15;
        fahrenheit = tempInput; // Keep Fahrenheit as input
    } else if (unitSelect === 'kelvin') {
        // Convert from Kelvin to Celsius and Fahrenheit
        celsius = tempInput - 273.15;
        fahrenheit = (tempInput - 273.15) * 9/5 + 32;
        kelvin = tempInput; // Keep Kelvin as input
    }

    // Display the conversion results
    resultDisplay.innerHTML = `
        <strong>Converted from ${unitSelect.charAt(0).toUpperCase() + unitSelect.slice(1)}:</strong><br>
        Celsius: ${celsius ? celsius.toFixed(2) : (tempInput).toFixed(2)} °C<br>
        Fahrenheit: ${fahrenheit ? fahrenheit.toFixed(2) : (tempInput).toFixed(2)} °F<br>
        Kelvin: ${kelvin ? kelvin.toFixed(2) : (tempInput).toFixed(2)} K
    `;
});
