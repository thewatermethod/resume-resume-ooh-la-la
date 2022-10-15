// import 'focus-visible'

// document.documentElement.classList.remove('no-js')

// // Scroll State
// const onScroll = () => {
//     const scrollClassName = 'js-scrolled'
//     const scrollTreshold = 200
//     const isOverTreshold = window.scrollY > scrollTreshold

//     handleImageSwap(isOverTreshold)

//     if (isOverTreshold) {
//         document.documentElement.classList.add(scrollClassName)
//     } else {
//         document.documentElement.classList.remove(scrollClassName)
//     }
// }
// window.addEventListener('scroll', onScroll, { passive: true })

// // Print Button
// const printButton = document.querySelector('.js-print')
// printButton.addEventListener('click', () => {
//     window.print()
// })

// // handle image swap
// const handleImageSwap = (isOverTreshold) => {
//     // get image el
//     const img = document.querySelector('.vcard__avatar.u-photo')
//     const src = img.getAttribute('src')

//     if (isOverTreshold) {
//         //smile
//         const smile = '/assets/images/smile.JPG'
//         if (src != smile) {
//             img.setAttribute('src', smile)
//         }

//         return
//     }

//     //frown
//     const frown = '/assets/images/frown.jpeg'
//     if (src != frown) {
//         img.setAttribute('src', frown)
//     }
// }
