const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists'); 

const searchTerm = searchInput.value.toLowerCase();
const artistName = document.getElementById('artist-name');
const artistImage = document.getElementById('artist-img');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")

    result.forEach(element => {
        artistName.innerText = element.name
        artistImage.src = element.urlImg
    });

    resultArtist.classList.remove('hidden')
}

document.addEventListener('input', function () {    
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden')
        resultArtist.classList.remove('hidden')
        return
    }
    
    requestApi(searchTerm);
})