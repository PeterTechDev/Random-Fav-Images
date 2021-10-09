
let favorites = JSON.parse(localStorage.getItem('favorites')) || []
const imgContainer = document.querySelector('.image')
const btn = document.querySelector('button')

// events
btn.onclick=()=> updateImg()
imgContainer.onclick=()=> updateAll()

// Methods
function getState(){
    const imgSource = document.querySelector('.image img').src
    
    const index = favorites.indexOf(imgSource)
    const existsInLocalStorage = index != -1

    return { imgSource, index, existsInLocalStorage}
}

function updateAll(){
    updateFavorites()
    updateClasses()
}

function updateFavorites(){
    const { existsInLocalStorage, index, imgSource} = getState()

        existsInLocalStorage
        ? favorites.splice(index, 1)
        : favorites.push(imgSource)
    
        localStorage.setItem('favorites', JSON.stringify(favorites))
}

function updateClasses(){
    const { existsInLocalStorage } = getState()

    imgContainer.classList.remove('fav')

    if(existsInLocalStorage){
        imgContainer.classList.add('fav')
    }
}

async function updateImg(){
    await getExternalImg()
    updateClasses()
}

async function getExternalImg(){
    const response = await fetch('https://source.unsplash.com/random')

    imgContainer
    .innerHTML = `<img src="${response.url}">`
}

getExternalImg()
