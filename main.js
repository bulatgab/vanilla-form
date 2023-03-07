let state = {
  nameInput: '',
  surnameInput: '',
  password: '',
  repeatPassword: '',

  validationErrors: [],
}

const nameInput = document.querySelector('#name-input')
nameInput.addEventListener('input', e => {
  state.nameInput = e.target.value
  validate()
})

const surnameInput = document.querySelector('#surname-input')
surnameInput.addEventListener('input', e => {
  state.surnameInput = e.target.value
  validate()
})

const passwordInput = document.querySelector('#password-input')
passwordInput.addEventListener('input', e => {
  state.password = e.target.value
  validate()
})

const repeatPasswordInput = document.querySelector('#repeat-password-input')
repeatPasswordInput.addEventListener('input', e => {
  state.repeatPassword = e.target.value
  validate()
})

const submitButton = document.querySelector('input[type="submit"]')



function addError(errorKey) {
  state.validationErrors.push(errorKey)
}

function removeError(errorKey) {
  state.validationErrors = state.validationErrors.filter(key => key !== errorKey)
}


function validate() {
  if (state.password !== state.repeatPassword) {
    addError('password')
    passwordInput.style.outline = "2px solid red"
  } else {
    removeError('password')
    delete passwordInput.style.outline
  }
  // other validations here

  submitButton.disabled = state.validationErrors.length > 0;
}
