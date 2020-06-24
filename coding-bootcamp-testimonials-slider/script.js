const switchButtons = document.querySelectorAll('[data-switch]')
const images = [...document.querySelectorAll('[data-image]')]
const quotes = [...document.querySelectorAll('[data-quote]')]
const totalImages = images.length
const totalQuotes = quotes.length
let currentImageIndex = images.findIndex(
  image => !image.classList.contains('hidden')
)
let currentQuoteIndex = quotes.findIndex(
  quote => !quote.classList.contains('hidden')
)

switchButtons.forEach(button =>
  button.addEventListener('click', switchTestimonial)
)

function switchTestimonial(e) {
  const selection = e.currentTarget.dataset.switch // OR this.dataset.switch
  let newImageIndex = 0
  let newQuoteIndex = 0

  if (
    (selection !== 'next' && selection !== 'prev') ||
    currentImageIndex === -1 ||
    currentQuoteIndex === -1
  )
    return

  if (selection === 'next') {
    newImageIndex = getNextIndex(currentImageIndex, totalImages)
    newQuoteIndex = getNextIndex(currentQuoteIndex, totalQuotes)
  } else {
    newImageIndex = getPrevIndex(currentImageIndex, totalImages)
    newQuoteIndex = getPrevIndex(currentQuoteIndex, totalQuotes)
  }

  hideCurrentShowNext(images, currentImageIndex, newImageIndex)
  hideCurrentShowNext(quotes, currentQuoteIndex, newQuoteIndex)
  currentImageIndex = newImageIndex
  currentQuoteIndex = newQuoteIndex
}

function getNextIndex(currentIndex, totalItems) {
  return (currentIndex + 1) % totalItems
}

function getPrevIndex(currentIndex, totalItems) {
  return (currentIndex + totalItems - 1) % totalItems
}

function hideCurrentShowNext(list, currentIndex, nextIndex) {
  list[currentIndex].classList.toggle('hidden')
  list[nextIndex].classList.toggle('hidden')
}
