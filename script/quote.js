const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const changeQuote = document.querySelector('.change-quote')

const renderQuotes = (quot) => {
    const authorName = quot.author;
    quote.textContent = quot.text
    author.textContent = (authorName.split(','))[0]
}

const getQuote = async () => {
    try {
        const url = 'https://type.fit/api/quotes';
        const res = await fetch(url);
        const data = await res.json();
        renderQuotes(data[getRandomIntInclusive(0, 14)])
    } catch (error) {
        quote.textContent = 'Error'
        author.textContent = ''
    }
}

getQuote()

changeQuote.addEventListener('click', () => {
    getQuote()
})
