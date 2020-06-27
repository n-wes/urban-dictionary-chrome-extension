const searchButton = document.getElementById('search-button')
const searchInput = document.getElementById('search-input')
const searchResults = document.getElementById('search-results')

const showResults = data => {
    if (data === []) {
        return '<p>No results found<p/>'
    }

    // let results = data.map(res)
}

searchButton.addEventListener('click', () => {
    axios.get(`http://urbanscraper.herokuapp.com/search/${searchInput.value}`)
        .then(res => {
            console.log(res.data)
        }) 
        .catch(err => {console.log(err)})
})

