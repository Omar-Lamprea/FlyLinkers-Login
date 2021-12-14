const btnGoogle = document.getElementById('btn-google')
const btnLogin = document.getElementById('btn-login')
const btnlogOut = document.getElementById('btn-logout')
const email = document.getElementById('input-email')
const pass = document.getElementById('input-pass')

const formUser = document.getElementById('new-user')
const newEmail = document.getElementById('new-user').newEmail
const newPass = document.getElementById('new-user').newPassword
const confirmPass = document.getElementById('new-user').confirmPassword
const newUser = document.getElementById('create-user')

newUser.addEventListener('click', (e)=>{
  if(newEmail.value && newPass.value !== ''){
    e.preventDefault()
    if (newPass.value === confirmPass.value){
      createUser(newEmail.value, newPass.value)
      newEmail.value = ''
      newPass.value = ''
    }else{
      alert('la contraseña no es igual')
    }
  }
})

btnGoogle.addEventListener('click', e =>{
  e.preventDefault()
  googleAuth()
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