// Function to calculate BMI
function calculateBMI(height, weight) {
    // Convert height from cm to m
    const heightInMeters = height / 100;
    
    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);
    
    return bmi;
}

// Function to determine gender based on BMI
function determineGender(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Function to display result
function displayResult(bmi, gender) {
    const resultContainer = document.getElementById('result-container');
    
    // Clear any existing result
    resultContainer.innerHTML = '';
    
    // Create and append result elements
    const p1 = document.createElement('p');
    p1.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    
    const p2 = document.createElement('p');
    p2.textContent = `You are ${gender}`;
    
    resultContainer.appendChild(p1);
    resultContainer.appendChild(p2);
}

// Event listener for form submission
document.getElementById('bmi-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get input values
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    // Validate input values
    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid numbers for height and weight.');
        return;
    }
    
    // Calculate BMI
    const bmi = calculateBMI(height, weight);
    
    // Determine gender
    const gender = determineGender(bmi);
    
    // Display result
    displayResult(bmi, gender);
});
