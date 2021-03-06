const data = {
  title: "Witaj w Programie",
  description: "Zaloguj się, aby sprawdzić swoje cele i wynagrodzenia"
}

const panel = document.querySelector('.login-panel-inputs')

let _inputData = {
  _login: '',
  _password: ''
}

let accountsData = [
  {login:'admin', password:'admin'}
]

let numbers = []

for(let i=0; i < 10; i++) {
  numbers.push(i.toString())
}

/////////////// Funkcje

const handleLoginInputChange = (event) => {
  loginInput.className = 'login-panel-input'
  _inputData._login = event.target.value
}

const handlePasswordInputChange = (event) => {
  passwordInput.className = 'login-panel-input'
  _inputData._password = event.target.value
}

const handleLogInButtonMove = (isMoved) => {
  if(isMoved === true) {
    logInButton.className = "login-panel-button-alt"
  }
  else if (isMoved === false) {
    logInButton.className = "login-panel-button-main"
  }
}

const loginFail = (login, password) => {
  if(!login) loginInput.className = 'login-panel-input-error'
  if(!password) passwordInput.className = 'login-panel-input-error'
}

const handleSignIn = () => {

  const {_password} = _inputData
  let passwordModify = _password

  let isBigLetter = false

  let isNumber = false

  let isGoodLength = false

  for(let i = 0; i < passwordModify.length; i++) {
    
    numbers.forEach(number => {
      if(number.toString() === passwordModify[i]) {

        isNumber = true
      }
      else null
    })
  }

  for(let i = 0; i < passwordModify.length; i++) {

    if('9' < passwordModify[i] && 'Z' >= passwordModify[i] && 'A' <= passwordModify[i]) {isBigLetter = true}
    
  }
  
  if(_password.length > 8) {
    isGoodLength = true
  }

  function checkResult() {
    if(isBigLetter && isGoodLength && isNumber && _inputData._login.length > 0) {
      accountsData.push({
        login: _inputData._login,
        password: _inputData._password
      })
      alert('Gratulacje zostałeś zarejestrowany!')
    } else {
      loginFail(_inputData._login.length >= 5, (isBigLetter || isNumber || isGoodLength))
      alert('Hasło zawierać musi: \n- minimum 8 znaków, \n- jedną wielką literę \n- jedną liczbę')
    }
  }
  // Brak walidacji dla istniejących już kont - nie powinno można być założyć konta dwa razy dla tego samego loginu
checkResult()

}

const handleLogIn = () => {

  let index = accountsData.findIndex(account => account.login === _inputData._login)

  if(index === -1) {
    loginFail(false, false)
    alert('Dane logowania niepoprawne!')
  }
  else if(accountsData[index].login === _inputData._login && accountsData[index].password === _inputData._password){
    return alert('Gratulację zostałeś zalogowany')
  }
}


const handleSignInButtonMove = (isMoved) => {
  if(isMoved === false) {
    signInButton.className = "login-panel-button-alt"
  }
  else if (isMoved === true) {
    signInButton.className = "login-panel-button-main"
  }
}
//////////////// Tytuł i opis

const title = document.createElement('span')
title.textContent = data.title
title.className = 'login-panel-title'
panel.appendChild(title)

const description = document.createElement('span')
description.textContent = data.description
description.className = 'login-panel-description'
panel.appendChild(description)

///////////////////// Inputs

const loginInput = document.createElement('input')
loginInput.addEventListener('input', handleLoginInputChange)
loginInput.className = 'login-panel-input'
loginInput.setAttribute('placeholder', 'Login')
panel.appendChild(loginInput)

const passwordInput = document.createElement('input')
passwordInput.addEventListener('input', handlePasswordInputChange)
passwordInput.className = 'login-panel-input'
passwordInput.setAttribute('type', 'password')
passwordInput.setAttribute('placeholder', 'Hasło')
panel.appendChild(passwordInput)

///////////////////// Buttons

const buttonSection = document.createElement('section')
buttonSection.className = 'button-section'

const logInButton = document.createElement('button')
logInButton.textContent = 'Zaloguj'
logInButton.className = 'login-panel-button-main'
logInButton.addEventListener('click', handleLogIn)
logInButton.addEventListener('mouseenter', () => handleLogInButtonMove(true))
logInButton.addEventListener('mouseleave', () => handleLogInButtonMove(false))

const signInButton = document.createElement('button')
signInButton.textContent = 'Zarejestruj'
signInButton.className = 'login-panel-button-alt'
signInButton.addEventListener('click', handleSignIn)
signInButton.addEventListener('mouseenter', () => handleSignInButtonMove(true))
signInButton.addEventListener('mouseleave', () => handleSignInButtonMove(false))

buttonSection.appendChild(logInButton)
buttonSection.appendChild(signInButton)

panel.appendChild(buttonSection)

///////////////////////////////////