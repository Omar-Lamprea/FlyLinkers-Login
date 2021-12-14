console.log(app);

const btnGoogle = document.getElementById('btn-google')
const btnLogin = document.getElementById('btn-login')
const btnlogOut = document.getElementById('btn-logout')
const email = document.getElementById('input-email')
const pass = document.getElementById('input-pass')

const newEmail = document.getElementById('new-user').newEmail
const newPass = document.getElementById('new-user').newPassword
const newUser = document.getElementById('create-user')

newUser.addEventListener('click', ()=>{
  createUser(newEmail.value, newPass.value)
})

btnGoogle.addEventListener('click', e =>{
  e.preventDefault()
  googeAuth()
})

btnLogin.addEventListener('click', e =>{
  if(email.value && pass.value !== ''){
    e.preventDefault()
    emailAuth(email.value, pass.value)
  }
})

btnlogOut.addEventListener('click', e =>{
  e.preventDefault()
  logOut()
})