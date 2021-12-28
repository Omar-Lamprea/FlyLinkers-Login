const btnGoogle = document.getElementById('btn-google')
const btnLogin = document.getElementById('btn-login')
const btnlogOut = document.getElementById('btn-logout')
const email = document.getElementById('input-email')
const pass = document.getElementById('input-pass')

const formUser = document.getElementById('new-user')
const firstName = document.getElementById('new-user').newfirstName
const lastName = document.getElementById('new-user').newlastName
const newEmail = document.getElementById('new-user').newEmail
const newTel = document.getElementById('new-user').newTel
const newTitle = document.getElementById('new-user').newTitle
const newPass = document.getElementById('new-user').newPassword
const confirmPass = document.getElementById('new-user').confirmPassword
const newUser = document.getElementById('create-user')

newUser.addEventListener('click', (e)=>{
  if(newEmail.value !== '' && newPass.value !== ''){
    e.preventDefault()
    if (newPass.value === confirmPass.value){
      const data = [
        firstName.value,
        lastName.value,
        newTel.value,
        newTitle.value,
        newEmail.value,
        newPass.value,
        confirmPass.value
      ]
      //with Db:
      createNewUser(data)
      // with firebase:
      // createUser(newEmail.value, newPass.value)
    }else{
      alert('verify your password')
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

    //with Db:
    userLogIn(email.value, pass.value)

    //with Firebase:
    // emailAuth(email.value, pass.value)
  }
})

btnlogOut.addEventListener('click', e => {
  e.preventDefault()
  logOut()
})


//save token
const authToken = (userToken) => {
  const storageUser = localStorage.setItem('user', userToken)
  console.log(localStorage.getItem('user'));
  const redirect  = 'http://localhost:5000'
  
  // if (localStorage.getItem('user')){
    // window.location.href = redirect
  // }
}