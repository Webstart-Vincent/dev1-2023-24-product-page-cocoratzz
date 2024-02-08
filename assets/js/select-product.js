/** @type {NodelListOf<HTMImageElement} */
const productThumbs = document.querySelector('[class^="product__thumb-"]')

const productDiv = document.querySelector('.product')

// la boucle
productThumbs.foreach((productThumb, index) => {
  // Ajouter un event handler (handler = traiter) sur le click du productThumb
  productThumb.addEventListener('click', () => {
    // Recuperer le src du productThumb
    const src = productThumb.src
    // Donner au src de la productDiv
    productDiv.src = `product active-${index + 1}`
  })
})
