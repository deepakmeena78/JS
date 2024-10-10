const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result1 = document.querySelector('#result');

    if (isNaN(height) || height <= 0) {
        result1.innerHTML = 'Please enter a valid height.';
        return; 
    }
    if (isNaN(weight) || weight <= 0) {
        result1.innerHTML = 'Please enter a valid weight.';
        return; 
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result1.innerHTML = `<span>Underweight: ${bmi}</span>`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result1.innerHTML = `<span>Normal weight: ${bmi}</span>`;
    } else {
        result1.innerHTML = `<span>Overweight: ${bmi}</span>`;
    }
});
