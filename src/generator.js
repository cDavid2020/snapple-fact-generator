const jokeContainer = document.getElementById("joke");
const brn = document.getElementsById("btn");
const url = "https://v2.jokeapi.dev/joke/Programming";

let getJoke = () => {
fetch(url)
.then(data => data.json()))
.then(item => {
  jokeContainer.textContent = `${item.joke}`;
});
  
  
  
  (item.joke));
}
getJoke();
