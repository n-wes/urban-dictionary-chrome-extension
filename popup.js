const searchButton = document.getElementById('search-button')
const searchInput = document.getElementById('search-input')
const searchResults = document.getElementById('search-results')

const showResults = data => {
    if (!data || !data.length) {
        console.log('here')
        return '<p>No results found</p>'
    }
    else {
        dataHTML = data.map(res => {
            const date = new Date(res.posted)
            return `
                <div class="def-panel">
                    <div class="def-header">${res.term}</div>
                    <div class="meaning">${res.definition}</div>
                    <div class="example">${res.example}</div>
                    <div class="contributor">by <a href="${res.author_url}" target="_blank">${res.author}</a> on ${date.toDateString()}</div>
                </div>
                `
        })
        return dataHTML.join('')
    }
}

searchInput.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        e.preventDefault()
        searchButton.click()
    }
})

searchButton.addEventListener('click', () => {
    searchResults.innerHTML = 'Searching...'
    axios.get(`http://urbanscraper.herokuapp.com/search/${searchInput.value}`)
        .then(res => {
            searchResults.innerHTML = showResults(res.data)
        }) 
        .catch(err => searchResults.innerHTML = `<p>${err}</p>`)
})