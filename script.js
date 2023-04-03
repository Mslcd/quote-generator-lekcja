const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

newQuoteBtn.addEventListener("click", newQuote);

async function getQuotes(){
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
    }
    catch{
        alert("Coś nie siadło")
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function newQuote(){
    let i = getRandomInt(apiQuotes.length);
    if(apiQuotes[i]["text"].length>120){
        quoteText.style = "long-quote";
    }
    else{
        quoteText.style = "quote-text";
    }
    quoteText.innerText = apiQuotes[i]["text"];
    if(!apiQuotes[i]["author"]){
        authorText.innerText = "Unknown";
    }
    else{
        authorText.innerText = apiQuotes[i]["author"];
    }
    
}

getQuotes();