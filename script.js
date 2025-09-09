// Image Carousel
const images = [
  "images/img1.jpeg",
  "images/img2.jpg",
  "images/img3.webp"
];
let index = 0;
const imgEl = document.getElementById("carouselImage");

document.getElementById("prevBtn").onclick = () => {
  index = (index - 1 + images.length) % images.length;
  imgEl.src = images[index];
};

document.getElementById("nextBtn").onclick = () => {
  index = (index + 1) % images.length;
  imgEl.src = images[index];
};

// Joke API Fetch
document.getElementById("jokeBtn").onclick = () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("jokeText").textContent = `${data.setup} — ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("jokeText").textContent = "Oops! Couldn't fetch a joke.";
    });
};