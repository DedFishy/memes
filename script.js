var memes = [
  "1.png",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.png",
  "9.jpg",
  "10.png",
  "11.jpg",
  "12.jpg",
  "13.jpg"
  ]

function loadmemes(element) {
  for (meme in memes) {
    element.innerHTML = `<div class="card">
        <img class="meme" src="/memes/` + memes[meme] + `">
      </div>` + element.innerHTML;
  }
}
