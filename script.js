const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {  //event listener 
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src //new image is set to current imgage
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild) //prevents from append multiple images to flashbox
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return //escapes flightlight when you click outside of current image 
    lightbox.classList.remove('active')
})