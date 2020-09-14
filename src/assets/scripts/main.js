import 'focus-visible'

document.documentElement.classList.remove('no-js')

// Scroll State
const onScroll = () => {
    const scrollClassName = 'js-scrolled'
    const scrollTreshold = 200
    const isOverTreshold = window.scrollY > scrollTreshold

    handleImageSwap(isOverTreshold)

    if (isOverTreshold) {
        document.documentElement.classList.add(scrollClassName)
    } else {
        document.documentElement.classList.remove(scrollClassName)
    }
}
window.addEventListener('scroll', onScroll, { passive: true })

// Print Button
const printButton = document.querySelector('.js-print')
printButton.addEventListener('click', () => {
    window.print()
})

// handle image swap
const handleImageSwap = (isOverTreshold) => {
    // get image el
    const img = document.querySelector('.vcard__avatar.u-photo')

    if (isOverTreshold) {
        //smile
        img.setAttribute('src', '/assets/images/smile.JPG')
        return
    }

    //frown
    img.setAttribute('src', '/assets/images/frown.jpeg')
}
