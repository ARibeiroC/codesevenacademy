function validateInputTelephone (text) {
    const validateInput = text.replace(/[^0-9]/g, '');
    return validateInput
}

function validateSignUpInputFieldsCandidate(data) {
    console.log(data)
}

export { validateInputTelephone, validateSignUpInputFieldsCandidate }
