// var para salvar as url favoritas
// parse para transf em jason e primeiro verifica se já algum salvo no storage, caso contrário se inicia vazio
let favorites = JSON.parse(localStorage.getItem('favorites')) || []

// Pegar img externa
async function getExternalImg(){
    const response = await fetch('https://source.unsplash.com/random')

    //                                             interpolação
    document.querySelector('.image')
    .innerHTML = `<img src="${response.url}">`

}
getExternalImg()

// clicalr no btn pega img externa
document.querySelector('button').onclick = function(){
    getExternalImg()
}

// clicar na img
document.querySelector('.image').onclick = function(){
    // salvar no local storage ou remover
    const imgSource = document.querySelector('.image img').src

    // remover se estiver no localstorage
    const index = favorites.indexOf(imgSource)
    const existsInLocalStorage = index != -1
    if(existsInLocalStorage) {
        favorites.splice(index, 1)
    } else { // salva no local storage
        favorites.push(imgSource)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}
