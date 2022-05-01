console.log("hello")
 
const quoteText = document.querySelector(".quote")
const authorName = document.querySelector(".author .name")
const quoteBtn = document.querySelector("button")
const soundBtn = document.querySelector(".sound")
const copyBtn = document.querySelector(".copy")
const twitterBtn = document.querySelector(".twitter")

//random quote function 
function randomQuote(){
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote..."
    //console.log("clicked")
    let api = `https://api.quotable.io/random`
    fetch(api)
        .then(res => res.json())
        .then(result => {
            //console.log(result)
            quoteText.innerText = result.content
            authorName.innerText = result.author
            quoteBtn.innerText = "New Quote"
            quoteBtn.classList.remove("loading")
        })

}

soundBtn.addEventListener("click", () =>{
    let utterance = new SpeechSynthesisUtterance(`${ quoteText.innerText} by ${authorName.innerText}` ) //SpeechSynthesisUtterance IS A web speech API that represents a speech request
    speechSynthesis.speak(utterance) // speak method of speechSynthesis speak the utterance
})

copyBtn.addEventListener("click", () =>{
    //writeText() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText( quoteText.innerText) 
})

twitterBtn.addEventListener("click", () =>{
    let tweetURL = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetURL, "_blank") //opening a new twitter tab with paasing quote in the url
})


quoteBtn.addEventListener("click", randomQuote)
