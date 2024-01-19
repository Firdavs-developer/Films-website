let elFilmForm = document.querySelector(".film-form");
let elFilmSearch = document.querySelector(".film-search-input");


elFilmForm.addEventListener("input", function(){
    let searchValue = elFilmSearch.value.trim();

    let SEARCH_QUERY = new RegExp( searchValue, "gi");

    let searchFilms = films.filter((film) => {
        return String(film.overview).match(SEARCH_QUERY)

    })

    renderFilms(searchFilms)
})