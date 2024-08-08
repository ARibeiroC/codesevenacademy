export function button(colorText, colorButton, text, id, height = '40px', width = 'auto'){
    const btn = document.querySelector(`#${id}`)
    btn.innerHTML = text
    btn.style.height = `${height}`
    btn.style.width = `${width}`
    btn.style.border = "none"
    btn.style.backgroundColor = `${colorButton}`
    btn.style.color = `${colorText}`
    btn.style.fontWeight = 'bold'
    btn.style.fontSize = '1rem'
    btn.style.borderRadius = '6px'
    btn.style.transition = '.1s'
    btn.style.boxShadow = '2px 2px 6px #222'

    btn.addEventListener('mousedown', ()=>{
        btn.style.boxShadow = '2px 2px 4px #222 inset'
        btn.style.transform = 'translateY(1px)'
        setTimeout(()=>{
            btn.style.boxShadow = 'none'
            btn.style.transform = 'translateY(0px)'
            btn.style.boxShadow = '2px 2px 4px #222'
        },100)
    })


}

// export function buttonActive(id){
//     $('.class').css( "backgroundColor" );
// }