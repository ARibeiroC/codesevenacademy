function validateInputTelephone (text) {
    const validateInput = text.replace(/[^0-9]/g, '');
    return validateInput
}

function validateSignUpInputFieldsCandidate(fields) {
    const candidate = []
    fields.forEach(field => {
        let lowerCase = field.value
        candidate.push(lowerCase.toLowerCase())
        if (field.value === ''){
            field.style.boxShadow = 'none'
            field.style.border = '1px solid red'
        } else {
            field.style.boxShadow = '2px 2px 2px #222 inset'
            field.style.border = 'none'
        }
    })

    return candidate
}

export { validateInputTelephone, validateSignUpInputFieldsCandidate }
