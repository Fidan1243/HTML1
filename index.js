const urlLink = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0bcadb3ae123698dfae30b52a5622ba3";
const search = "https://api.themoviedb.org/3/search/movie?api_key=0bcadb3ae123698dfae30b52a5622ba3"
function GetFilms(url) {
    return fetch(url)
    .then(response => {
        return response.json();
    });
}
GetFilms(urlLink)
    .then(data => { Screen(data); console.log(data.results) })
    .catch(err => console.log(err));

    

function Screen(data) {
    var element = document.getElementById("movies");
    element.innerHTML = "";
    for (let i = 0; i < data.results.length; i++) {
        element.innerHTML += `<div class="movie">
        <div>
        <img class="myimg" alt="photo" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"></img>
        </div>
        <div class="filmm">
        <h1>${data.results[i].original_title}</h1>
        <div class="details">
        <p>${data.results[i].vote_average}</p>
        <p>${data.results[i].release_date.split('-')[0]}</p>
        </div>
        </div>
        
        </div>`;
    }
    
}

document.getElementsByTagName("form")[0].addEventListener('submit',function(e) {
    e.preventDefault();
    let searched = document.getElementById("search").value;
    console.log(searched);
    var ll = search+"&query="+searched;
    
    GetFilms(ll)
    .then(data => { Screen(data); console.log(data.results) })
    .catch(err => console.log(err));
})
document.getElementsByClassName("logo")[0].addEventListener('click',function() {
    GetFilms(urlLink)
    .then(data => { Screen(data); console.log(data.results) })
    .catch(err => console.log(err));
})




function FilterHorror() {
    var link = "https://api.themoviedb.org/3/discover/movie?api_key=0bcadb3ae123698dfae30b52a5622ba3&with_genres=27";
    GetFilms(link)
    .then(data => { Screen(data); console.log(data.results) })
    .catch(err => console.log(err));
}
function FilterAction() {
    var link = "https://api.themoviedb.org/3/discover/movie?api_key=0bcadb3ae123698dfae30b52a5622ba3&with_genres=28";
    GetFilms(link)
    .then(data => { Screen(data); console.log(data.results) })
    .catch(err => console.log(err));
}
function FilterComedy() {
    var link = "https://api.themoviedb.org/3/discover/movie?api_key=0bcadb3ae123698dfae30b52a5622ba3&with_genres=35";
    GetFilms(link)
    .then(data => { Screen(data); console.log(data.results) })
    .catch(err => console.log(err));
}
function FilterAnimation() {
    var link = "https://api.themoviedb.org/3/discover/movie?api_key=0bcadb3ae123698dfae30b52a5622ba3&with_genres=16";
    GetFilms(link)
    .then(data => { Screen(data); console.log(data.results) })
    .catch(err => console.log(err));
}
function FilterDrama() {
    var link = "https://api.themoviedb.org/3/discover/movie?api_key=0bcadb3ae123698dfae30b52a5622ba3&with_genres=18";
    GetFilms(link)
    .then(data => { Screen(data); console.log(data.results) })
    .catch(err => console.log(err));
}