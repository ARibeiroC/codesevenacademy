import { validateInputTelephone } from "./validateInputs.js"


function telephoneMask (number){
    const maskNumber = validateInputTelephone(number)
    const ddd = maskNumber.slice(0,2)
    const firstPartNumber = maskNumber.slice (2,7)
    const secondPartNumber = maskNumber.slice(7, 11)
    const telephoneMask = `(${ddd}) ${firstPartNumber}-${secondPartNumber}`
    return telephoneMask
}

export { telephoneMask }