
var cardWrapper = document.getElementById("cardWrapper")

let storage = window.localStorage
let bookmarkedMovies = JSON.parse(storage.getItem('bookmarked')) ?? []


movieRender(movies.slice(0, 20))

categories.forEach(item => {
    let OPTION = document.createElement('option')
    OPTION.setAttribute('class', 'option')
    OPTION.setAttribute('value', item)
    OPTION.textContent = item
    
    catSort.appendChild(OPTION)
})


form.addEventListener ('submit', e=> {
    e.preventDefault()

    let regex = new RegExp(searchInput.value, 'gi')

    let filteredMovies = movies
    
    //search by title
    if (searchInput.value.length > 3) {
        filteredMovies = movies.filter(item => String(item.title).match(regex))
    }
    
    
    //search by rating
    if (movieRating.value) {
        filteredMovies = filteredMovies.filter(movie => movie.imdbRating >= Number(movieRating.value))
        
    }

    //search by categories
    if (catSort.value) {
        if(catSort.value !=="All")
        filteredMovies = filteredMovies.filter(movie => movie.categories.includes(catSort.value))
    }


    //ascending and descanding sort
    if (ratingSort.value == 'high-low') {
        filteredMovies = filteredMovies.sort((a, b) => b.imdbRating - a.imdbRating)
    } else  {
        filteredMovies = filteredMovies.sort((a, b) => a.imdbRating - b.imdbRating)
    }
    movieRender(filteredMovies);
    
    console.log(ratingSort);
    
})


//event delegation 
// CARD.addEventListener ('click', e => {
//     console.log(e);
//     // let movieId = e.target.parentElement.dataset.movieId 
   
    
//     let foundMovie = movies.find(movie => movie.imdbId == e.target.parentElement.dataset.movieId)

//     console.log(movieId);

//     if (bookmarkedMovies.findIndex( e=> e.movieId == movieId) < 0 ) {
//         bookmarkedMovies.push({
//             movieId: foundMovie.imdbId,
//             title: foundMovie.title,
//             date: Date.now()
//         })  
      
//     } else {
//         alert('You have added this film!')
//     }

//     storage.setItem('bookmarked', JSON.stringify(bookmarkedMovies))  
    
// })

