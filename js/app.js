
let elFilmsResults = document.querySelector(".films-result");
let elFilmTemplate =document.querySelector(".film-template").content;
let newFilmFragment = new DocumentFragment();


// Filmlarni render qilmamiz
function renderFilms(films){
    elFilmsResults.innerHTML = null;
    for(let i = 0; i < films.length; i++){
        //Film Templete clone qilib oldim
        let cloneTempleteFilm = elFilmTemplate.cloneNode(true);
        console.log(cloneTempleteFilm);

        // clone templeteni endi HTMLni o'zgartiramiz
        cloneTempleteFilm.querySelector(".film-img").src = films[i].poster;
        console.log(films[i]);
        cloneTempleteFilm.querySelector(".film-title").textContent = films[i].title;
        cloneTempleteFilm.querySelector(".film-about").textContent = films[i].overview;

        newFilmFragment.appendChild(cloneTempleteFilm)
    }
    elFilmsResults.appendChild(newFilmFragment)
}
renderFilms(films)
console.log(films);