const switchButtons = document.querySelectorAll('[data-switch]')
const images = document.querySelectorAll('[data-image]')
const quotes = document.querySelectorAll('[data-quote]')

switchButtons.forEach((button) => {
  button.addEventListener('click', switchTestimonial)
})

function switchTestimonial(e) {
  const selection = e.currentTarget.dataset.switch
  const totalImages = images.length
  const totalQuotes = quotes.length
  let currentImageIndex = getCurrentIndex(images)
  let currentQuoteIndex = getCurrentIndex(quotes)

  if (
    selection !== 'next' &&
    selection !== 'prev' &&
    currentImageIndex !== -1 &&
    currentQuoteIndex !== -1
  )
    return
  if (selection === 'next') {
    const nextImageIndex = currentImageIndex + 1
    const nextQuoteIndex = currentQuoteIndex + 1

    if (nextImageIndex < totalImages) {
      switchImage(currentImageIndex, nextImageIndex)
      switchQuote(currentQuoteIndex, nextQuoteIndex)
      return
    }

    switchImage(currentImageIndex, 0)
    switchQuote(currentQuoteIndex, 0)
  } else {
    const previousImageIndex = currentImageIndex - 1
    const nextQuoteIndex = currentQuoteIndex - 1

    if (previousImageIndex >= 0) {
      switchImage(currentImageIndex, previousImageIndex)
      switchQuote(currentQuoteIndex, nextQuoteIndex)
      return
    }

    switchImage(currentImageIndex, totalImages - 1)
    switchQuote(currentQuoteIndex, totalQuotes - 1)
  }
}

function getCurrentIndex(list = [], keyword = 'hidden') {
  return Array.from(list).findIndex((item) => !item.classList.contains(keyword))
}

function switchImage(currentIndex = 0, nextIndex = 1) {
  images[currentIndex].classList.toggle('hidden')
  images[nextIndex].classList.toggle('hidden')
}

function switchQuote(currentIndex = 0, nextIndex = 1) {
  quotes[currentIndex].classList.toggle('hidden')
  quotes[nextIndex].classList.toggle('hidden')
}
