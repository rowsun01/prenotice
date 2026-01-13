const text = document.getElementById("text");
const ttext = document.getElementById("ttext")
const ttext1 = document.getElementById("ttext1");
const audio = document.getElementById("myAudio");
const button = document.getElementById("button");
const button1 = document.getElementById("button1");
// text.textContent="Apple"
ttext.textContent="Hello Everybody👋"

function one(callback) {
  setTimeout(() => {
    ttext.textContent="Mark your calendars!"
   
    callback()
  }, 5000);
 
}
function two(callback) {
  setTimeout(() => {
    ttext.textContent="A special day is hitting the calendar on March 24."
    
    callback()
  }, 5000);
 
}
function three(callback) {
  setTimeout(() => {
    ttext.textContent="Make sure to take the day off or clear your schedule."
    
    callback()
  }, 5000);
 
}
function four(callback) {
  setTimeout(() => {
    ttext.textContent="You'll definitely want to be free for this special celebration."
    ttext.style.fontSize="2.5rem";
    callback()  
  }, 5000);
 
};
function five(callback) {
  setTimeout(() => {
    ttext.textContent="You won't want to miss this.";
    ttext.style.fontSize="3rem";
    callback()
  }, 5000);
 
};
function six(callback) {
  setTimeout(() => {
    ttext.textContent="THANK YOU ";
    ttext.style.fontSize="3rem";
    ttext1.textContent="Rosap's Family";
    callback()
  }, 5000);
 
}
one(()=>{
    two(()=>{
        three(()=>{
            four(()=>{
                five(()=>{
                    six(()=>{})
                })
            })
        })
    })
})
button.addEventListener("click", (event) => {
  if (button.textContent === "Play Music") {
    audio.play();
    button.textContent = "Stop Music";
  } else {
    audio.pause();
    button.textContent = "Play Music";
  }
});
setTimeout(() => {
  audio.pause();
  audio.currentTime = 0;
  button.textContent = "Play Music";
}, 35000);

