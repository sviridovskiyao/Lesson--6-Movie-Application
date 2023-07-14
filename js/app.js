const API_KEY = "94f962d9-f913-4574-b443-b505adfded13";
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

getMovies (API_URL_POPULAR);

async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            "X-API-KEY": API_KEY,
            "Content-Type": "application.json",
        },
    });
    const respData = await resp.json();
    console.log(respData)
    showMovies(respData)
}
    
function getClassByRate(vote) {
    if (vote >= 7) {
        return "green"
    } else if (vote > 5) {
        return "orange"
    }  else {
        return "red";
    }
    }


function showMovies(data) {
    const moviesE1 = document.querySelector(".movies");

    data.films.forEach(movie => {
        const movieE1 = document.createElement("div")
        movieE1.classList.add("movie")
        movieE1.innerHTML = `
        <div class="movie_cover-inner">
        <img 
        src="${movie.posterUrlPreview}" 
        class="movie_cover"
        alt="${movie.nameRu}"
        />
        <div class="movie_cover--darkened"></div>
    </div>
    <div class="movie_info">
        <div class="movie_title">${movie.nameRu}</div>
        <div class="movie_category">${movie.genres.map(
            (genre) =>` ${genre.genre}`
            )}</div>
        <div class="movie_average movie_average--${getClassByRate(movie.rating)}">${movie.rating}</div>
    </div>
    `;
    moviesE1.appendChild(movieE1);
    })
}