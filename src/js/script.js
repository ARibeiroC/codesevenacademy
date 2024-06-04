import { askChecks, dataCandidate, menuToggleHtml, termsAndRules } from './elementsHtml.js'
import { lazy, lazyBackground } from './lazyLoadScrollPage.js'
import { menuToggle, closeMenuToggle } from './menuHamb.js'


// EVENTS
// window.onload = (element) => {
//     if (element.isInstersecting)
//     const background = document.querySelector('.lazyLoad')

// }


document.addEventListener('scroll', ()=>{
    lazyBackground('about-internship', 'application-form')
})

document.addEventListener('click', (e)=>{
    menuToggle(e)
    if (e.target.localName === 'li'){
        menuToggleHtml.checked = false
        closeMenuToggle()
    }
})

document.addEventListener('submit', (e)=>{
    e.preventDefault()
    let candidate = []
    let element = e.target

    dataCandidate.forEach(dtCandidate => {
        let lowerCase = dtCandidate.value
        candidate.push(lowerCase.toLowerCase())
    })

    askChecks.forEach(validData=>{
        let lowerCase = validData.value
        candidate.push(lowerCase.toLowerCase())
    })

    termsAndRules.forEach(checks =>{
        let lowerCase= checks.value
        candidate.push(lowerCase.toLowerCase())
    })
    console.log(candidate)
})