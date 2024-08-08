const backgroundVisible = document.querySelectorAll('section')
let backImage

function showBackgroundElement(backgroundId){
    if (backgroundId.getBoundingClientRect().top < window.innerHeight){
        backImage = `url(${backgroundId.dataset.src})`
        backgroundId.style.setProperty('--backgroundSrc', backImage)
        backgroundId.classList.add('lazyBackground')
    }
}


export function lazyBackground(about, form){    
    backgroundVisible.forEach(backgroundItem => {
        switch (backgroundItem.id) {
            case `${about}`:
                showBackgroundElement(backgroundItem)
                break

            case `${form}`:
                showBackgroundElement(backgroundItem)
                break
        }
    })
}


