const quotetext = document.querySelector(".quote");
const quotebutt = document.querySelector("button");
const soundbutt = document.querySelector(".sound");
const copybutt = document.querySelector(".copy");
const popup = document.querySelector(".copy-popup");

const authorname = document.querySelector(".name");
const xbutt = document.querySelector(".tweet");

function randomquote() {
  quotebutt.classList.add("loading");
  quotebutt.textContent = "Loading...";
  fetch("https://dummyjson.com/quotes/random")
    .then((res) => res.json())
    .then((result) => {
      quotetext.textContent = result.quote;
      document.querySelector(".name").textContent = result.author;

      quotebutt.classList.remove("loading");
      quotebutt.textContent = "New quote";
    })
    .catch(() => {
      quotetext.textContent = "Failed to load quote.";
      quotebutt.classList.remove("loading");
      quotebutt.textContent = "New quote";
    });
}

quotebutt.addEventListener("click", randomquote);
soundbutt.addEventListener("click", () => {
  let speaker = new SpeechSynthesisUtterance(
    `${quotetext.textContent} by ${authorname.textContent}`,
  );
  speechSynthesis.speak(speaker);
});

copybutt.addEventListener("click", () => {
  navigator.clipboard.writeText(quotetext.textContent);
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 2000);
});

xbutt.addEventListener("click",()=>{
    let tweetUrl=`https://twitter.com/intent/tweet?url=${quotetext.textContent}`;
    window.open(tweetUrl,"_blank");
});
