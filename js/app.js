const API_KEY = "94f962d9-f913-4574-b443-b505adfded13";
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1";

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
}
    