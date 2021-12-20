//render uchun
const movieRender = (arr) => {
    searchResults.textContent = arr.length
    cardWrapper.innerHTML = ''

    arr.forEach(function (item) {

        var CARD = document.createElement('div')
        CARD.setAttribute('class', 'card')
        CARD.dataset.movieId = item.imdbId
        // CARD.setAttribute("id", "cardItem")

        
        var CARD_HEADING = document.createElement('h3')
        CARD_HEADING.textContent = item.title
        CARD_HEADING.classList.add('card__title')
        
    
        var CARD_IMG = document.createElement('img')
        CARD_IMG.classList.add('card__img')
        CARD_IMG.src = item.smallThumbnail
        
        CARD_IMG.setAttribute("title", item.title)
        CARD_IMG.setAttribute("alt", "Image of " + item.title)


        var CARD_YEAR = document.createElement('p')
        CARD_YEAR.classList.add('card__year')
        CARD_YEAR.textContent = item.year
        
        var CARD_RATE = document.createElement('p')
        CARD_RATE.classList.add('card__rate')
        CARD_RATE.textContent = item.imdbRating
        
        
        
        var CARD__BTN = document.createElement('div')
        CARD__BTN.classList.add('card__btn')
        
        var CARD_BUTTON_WATCH = document.createElement('button')
        CARD_BUTTON_WATCH.classList.add('card__button')
        CARD_BUTTON_WATCH.textContent = 'Watch trailer'
        
        var CARD_BUTTON_INFO = document.createElement('button')
        CARD_BUTTON_INFO.classList.add('card__button')
        CARD_BUTTON_INFO.textContent = 'More info'
        
        var CARD_BUTTON_BOOKMARK = document.createElement('button')
        CARD_BUTTON_BOOKMARK.classList.add('card__button')
        CARD_BUTTON_BOOKMARK.textContent = 'Bookmark'
        // CARD_BUTTON_BOOKMARK.setAttribute('id', 'favourited')


        var CAT = document.createElement ("div")
        CAT.textContent = item.categories.join(', ')
    
        
        CARD.appendChild(CARD_IMG)
        CARD.appendChild(CARD_HEADING)
        CARD.appendChild(CARD_YEAR)
        CARD.appendChild(CARD_RATE)
        CARD.appendChild(CARD__BTN)
        CARD__BTN.appendChild(CARD_BUTTON_WATCH)
        CARD__BTN.appendChild(CARD_BUTTON_INFO)
        CARD__BTN.appendChild(CARD_BUTTON_BOOKMARK)
        CARD.appendChild(CAT)      
        
        cardWrapper.appendChild(CARD)
    }); 
}

console.log(CARD);

CARD.addEventListener('click', (e) =>{
     console.log(e);
})