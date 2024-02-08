/** @type {NodelListOf<HTMImageElement} */
// mettre le querySelectorAll
const productThumbs = document.querySelectorAll('[class^="product__thumb-"]')

const productDiv = document.querySelector('.product')

// Raccourci jsdoctype
/** @type {HTMLImageElement} */
const productMainImg = document.querySelector('.product__main')

// la boucle
productThumbs.forEach((productThumb, index) => {
  // Ajouter un event handler (handler = traiter) sur le click du productThumb
  productThumb.addEventListener('click', () => {
    // Recuperer le src du productThumb
    const src = productThumb.src

    // Donner au src de la productDiv
    //productDiv.src = `product active-${index + 1}`

    // Donner src en valeur en src de productMainImg
    productMainImg.src = src

    // Donner au classname de la productDiv
    productDiv.className = `product active-${index + 1}`
  })
})
