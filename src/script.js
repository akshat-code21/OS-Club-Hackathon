console.log("This is script.js");
let category = "inspirational";
fetchQuotes();
setupGetQuote();
const buttons = document.querySelectorAll(".nav-btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // fetchQuotes(e.textContent.toLowerCase());
    buttons.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    category = e.target.textContent.toLowerCase();
    fetchQuotes();
  });
});
async function getQuote() {
  let response = await fetch("https://api.api-ninjas.com/v1/quotes", {
    headers: { "X-Api-Key": "UQhRGwtlB72XtU4aGT28Bg==lamTdusF0AzkV4Xi" },
  });
  let d = await response.json();
  console.log(d[0]);
  displayQuote(d[0].quote, d[0].author);
}
function setupGetQuote() {
  let btn = document.getElementById("get-quote-btn");
  btn.addEventListener("click", getQuote);
}
async function fetchQuotes() {
  let res = await fetch(
    "https://api.api-ninjas.com/v1/quotes?category=" + category,
    {
      headers: { "X-Api-Key": "UQhRGwtlB72XtU4aGT28Bg==lamTdusF0AzkV4Xi" },
    }
  );
  let data = await res.json();
  console.log(data[0]);
  displayQuote(data[0].quote, data[0].author);
}
// fetchQuotes();

function displayQuote(quote, author) {
  let quoteTextContainer = document.getElementById("quote");
  quoteTextContainer.innerHTML = '<h2> "' + quote + '"</h2>';
  // quoteText.innerText = quote;
  let quoteAuthorContainer = document.getElementById("author");
  quoteAuthorContainer.innerHTML = "<h6>" + "- " + author + "</h6>";
  // quoteAuthor.innerText = "- " + author;
}

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
});
document.querySelectorAll(".nav-btn").forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
