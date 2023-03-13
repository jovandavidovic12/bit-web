
let url = 'https://api.chucknorris.io/jokes/random';
const fetchButton = document.getElementById('generate-button');

fetchButton.addEventListener('click', () => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let joke = data.value;
      console.log(joke)
      let text = document.createElement('p');
      text.textContent = joke;
      document.body.appendChild(text)
      
    })
    .catch(error => {
     console.log(error)
    });
});