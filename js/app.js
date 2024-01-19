
let elFilmsResults = document.querySelector(".films-result");
let elFilmTemplate =document.querySelector(".film-template").content;
let newFilmFragment = new DocumentFragment();

// Modallarni chaqrib oldim

let elModal = document.querySelector(".modal");
let elModalTitle = document.querySelector(".modal-film-title");
let elModalImg = document.querySelector(".modal-film-img");
let elModalDesc = document.querySelector(".modal-film-desc");


// Filmlarni render qilmamiz
function renderFilms(films){
    elFilmsResults.innerHTML = null;
    for(let i = 0; i < films.length; i++){
        //Film Templete clone qilib oldim
        let cloneTempleteFilm = elFilmTemplate.cloneNode(true);

        // clone templeteni endi HTMLni o'zgartiramiz
        cloneTempleteFilm.querySelector(".film-img").src = films[i].poster;
        cloneTempleteFilm.querySelector(".film-title").textContent = films[i].title;
        cloneTempleteFilm.querySelector(".film-about").textContent = films[i].overview;
        cloneTempleteFilm.querySelector(".film-btn").dataset.id = films[i].id;
        newFilmFragment.appendChild(cloneTempleteFilm)
    }
    elFilmsResults.appendChild(newFilmFragment)
}

elFilmsResults.addEventListener("click", (evt)=> {

    let filmId = evt.target.dataset.id;

    if(evt.target.matches(".film-btn")){
        let findFilm = films.find((film) => {
            return filmId === film.id
        })

        elModalTitle.textContent = findFilm.title;
        elModalImg.src = findFilm.poster;
        elModalDesc.textContent = findFilm.overview


    }
})
renderFilms(films)