import { menuButtonTop, menuButtonMiddle, menuButtonBottom, headerMenu } from './elementsHtml.js'

export const openMenuToggle = ()=>{
    menuButtonTop.style.marginTop = '0px'
    menuButtonTop.style.transform = 'rotate(405deg)'
    menuButtonTop.style.backgroundColor = '#D70AC1'
    
    menuButtonMiddle.style.opacity = '0'
    menuButtonMiddle.style.backgroundColor = '#D70AC1'

    menuButtonBottom.style.marginTop = '0px'
    menuButtonBottom.style.transform = 'rotate(-405deg)'
    menuButtonBottom.style.backgroundColor = '#D70AC1'

    headerMenu.style.right = '0px'
    headerMenu.style.opacity = '1'
}

export const closeMenuToggle = ()=>{
    menuButtonTop.style.marginTop = '-15px'
    menuButtonTop.style.transform = 'rotate(0)'
    menuButtonTop.style.backgroundColor = '#f0f0f0'
    
    menuButtonMiddle.style.opacity = '1'
    menuButtonMiddle.style.backgroundColor = '#f0f0f0'

    menuButtonBottom.style.marginTop = '16px'
    menuButtonBottom.style.transform = 'rotate(0)'
    menuButtonBottom.style.backgroundColor = '#f0f0f0'

    headerMenu.style.right = '-100%'
    headerMenu.style.opacity = '0'
}

export const menuToggle = (e)=>{
    if (e.target.id === 'menu-toggle'){
        if (e.target.checked){
            openMenuToggle()
        } else {
            closeMenuToggle()
        }
    }

}