// var para salvar as url favoritas
// parse para transf em jason e primeiro verifica se já algum salvo no storage, caso contrário se inicia vazio
let favorites = JSON.parse(localStorage.getItem('favorites')) || []
const imgContainer = document.querySelector('.image')
const btn = document.que

document.querySelector('button').onclick = ()=> updateClasses()

// clicar na img
imgContainer.onclick = function(){
    // salvar no local storage ou remover
    const imgSource = document.querySelector('.image img').src


    // remover se estiver no localstorage
    const index = favorites.indexOf(imgSource)
    const existsInLocalStorage = index != -1
    if(existsInLocalStorage) {
        favorites.splice(index, 1)
        imgContainer.classList.remove('fav')
    } else { // salva no local storage
        favorites.push(imgSource)
        imgContainer.classList.add('fav')
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

// MÉTODOS
async function getExternalImg(){
    const response = await fetch('https://source.unsplash.com/random')

    //                       interpolação
    imgContainer
    .innerHTML = `<img src="${response.url}">`

}
getExternalImg()

function upadteImg(){
    getExternalImg()
    updateClasses()
}

function updateClasses(){

}

// clicalr no btn pega img externa
