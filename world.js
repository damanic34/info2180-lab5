document.addEventListener('DOMContentLoaded', function () {
    const lookupButton = document.getElementById('lookup');
    const citiesButton = document.getElementById('lookupCities');
    const countryInput = document.getElementById('country');
    const resultDiv = document.getElementById('result');

    lookupButton.addEventListener('click', function () {
        const country = countryInput.value;

        fetch('world.php?country=' + encodeURIComponent(country))
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    });

    citiesButton.addEventListener('click', function () {
        const country = countryInput.value;

        fetch('world.php?country=' + encodeURIComponent(country) + '&lookup=cities')
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    });
});
