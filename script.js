document.getElementById('recommendationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value || 'Anonymous';
    const message = document.getElementById('message').value;

    if (message.trim()) {
        const recommendationContainer = document.createElement('div');
        recommendationContainer.classList.add('recommendation');

        const recommendationText = document.createElement('p');
        recommendationText.innerText = "${message}" - ${name};

        recommendationContainer.appendChild(recommendationText);

        document.querySelector('.recommendations').appendChild(recommendationContainer);

        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    }
});