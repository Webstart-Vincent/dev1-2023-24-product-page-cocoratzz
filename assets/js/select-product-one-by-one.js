// Acceder aux elements HTML nécessaire

// Acceder au produitMain
/** @type {HTMLImageElement} */
const productMain = document.querySelector('.product__main')

// Acceder au produitThumb2
/** @type {HTMLImageElement} */
const productThumb1 = document.querySelector('.product__thumb-1')
const productThumb2 = document.querySelector('.product__thumb-2')
const productThumb3 = document.querySelector('.product__thumb-3')
const productThumb4 = document.querySelector('.product__thumb-4')
const productDiv = document.querySelector('.product')

const productThumb2Src = productThumb2.src

// Traiter le clic sur l'image no 2
productThumb1.addEventListener('click', () => {
  // Quand je clique sur l'image no 2, l'image principale prend le src de l'image no 2
  productMain.src = productThumb2Src
  productDiv.className = 'product active-1'
})
productThumb2.addEventListener('click', () => {
  // Quand je clique sur l'image no 2, l'image principale prend le src de l'image no 2
  productMain.src = productThumb2Src
  productDiv.className = 'product active-2'
})
productThumb3.addEventListener('click', () => {
  // Quand je clique sur l'image no 2, l'image principale prend le src de l'image no 2
  productMain.src = productThumb2Src
  productDiv.className = 'product active-3'
})
productThumb4.addEventListener('click', () => {
  // Quand je clique sur l'image no 2, l'image principale prend le src de l'image no 2
  productMain.src = productThumb2Src
  productDiv.className = 'product active-4'
})
