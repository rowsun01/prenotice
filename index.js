const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");
const sixth = document.getElementById("sixth");
const footer = document.getElementById("footer");
const button = document.getElementById("myButton");
const audio = document.getElementById("myAudio");
const replay = document.getElementById("replay");
// function one(callback){
//     first.style.visibility="visible";
//     callback()
// }

function main() {
  function one(callback) {
    setTimeout(() => {
      first.style.display = "none";
      second.style.visibility = "visible";
    }, 5000);
  }
  function two(callback) {
    setTimeout(() => {
      second.style.display = "none";
      third.style.visibility = "visible";
    }, 10000);
  }
  function three(callback) {
    setTimeout(() => {
      third.style.display = "none";
      fourth.style.visibility = "visible";
    }, 15000);
  }
  function four(callback) {
    setTimeout(() => {
      fourth.style.display = "none";
      fifth.style.visibility = "visible";
    }, 20000);
  }
  function five(callback) {
    setTimeout(() => {
      fifth.style.display = "none";
      sixth.style.visibility = "visible";
      footer.style.visibility = "visible";
    }, 25000);
  }
  function six(callback) {
    setTimeout(() => {
      sixth.style.display = "block";
    }, 25000);
  }
  one(two(three(four(five(six())))));
}

main();

button.addEventListener("click", (event) => {
  if (button.textContent === "Play Music") {
    audio.play();
    button.textContent = "Stop Music";
  } else {
    audio.pause();
    button.textContent = "Play Music";
  }
});
