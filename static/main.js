
console.log("ll4444sasas--asas")

const form = document.querySelector('form.requires-validation');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const element = document.getElementById("diagnosis-text");

  const symptom1 = document.querySelector('select[name="symptom_1"]').value;
  const symptom2 = document.querySelector('select[name="symptom_2"]').value;
  const symptom3 = document.querySelector('select[name="symptom_3"]').value;
  const symptom4 = document.querySelector('select[name="symptom_4"]').value;
  const symptom5 = document.querySelector('select[name="symptom_5"]').value;

  const symptomsArray = [symptom1, symptom2, symptom3,symptom4,symptom5];

  // Send the POST request
  fetch('/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ symptoms: symptomsArray })
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      console.log(data);
      element.innerHTML = data.message
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
    });

});
