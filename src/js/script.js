import { askChecks, dataCandidate, menuToggleHtml, termsAndRules, goToTop } from './elementsHtml.js'
import { lazyBackground } from './lazyLoadScrollPage.js'
import { menuToggle, closeMenuToggle } from './menuHamb.js'


// EVENTS

document.addEventListener('scroll', (element)=>{
    lazyBackground('about-internship', 'application-form')
    if (document.documentElement.scrollTop > 200) {
        goToTop.style.opacity = 1
        goToTop.style.top = '90vh'
        goToTop.style.left = '80vw'
    } else {
        goToTop.style.opacity = 0
        goToTop.style.top = '100vh'
    }
})

document.addEventListener('click', (e)=>{
    menuToggle(e)
    // if (e.target.localName === 'li' && window.screen.width > 768){
    //     menuToggleHtml.checked = false
    //     closeMenuToggle()
    // }
})

document.addEventListener('submit', (e)=>{
    e.preventDefault()
    let candidate = []

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