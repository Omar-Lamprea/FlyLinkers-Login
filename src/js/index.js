const btnGoogle = document.getElementById('btn-google')
const btnLogin = document.getElementById('btn-login')
const btnlogOut = document.getElementById('btn-logout')
const email = document.getElementById('input-email')
const pass = document.getElementById('input-pass')

const formUser = document.getElementById('new-user')
const firstName = document.getElementById('new-user').newfirstName
const middleName = document.getElementById('new-user').newmiddleName
const lastName = document.getElementById('new-user').newlastName
const newEmail = document.getElementById('new-user').newEmail
const newTel = document.getElementById('new-user').newTel
const newTitle = document.getElementById('new-user').newTitle
const newPass = document.getElementById('new-user').newPassword
const confirmPass = document.getElementById('new-user').confirmPassword
const photo = document.getElementById('new-user').newPhoto
const newUser = document.getElementById('create-user')
const showImage = document.getElementById('profile-image')

let photoB64;

const showImg = ()=> {
  const render = new FileReader();
  render.readAsDataURL(photo.files[0])
  render.onloadend = ()=>{
    // console.log(render.result)
    showImage.style.display = 'flex'
    showImage.src = render.result
    photoB64 = render.result
    return photoB64
  }
  return photoB64
}

//create user
newUser.addEventListener('click', (e)=>{

  
  if(newEmail.value !== '' && newPass.value !== ''){
    e.preventDefault()
    if (!photoB64) {
      alert('upload your photo');
    }else{
      if (newPass.value === confirmPass.value){
        const data = [
          firstName.value,
          middleName.value,
          lastName.value,
          newTel.value,
          newTitle.value,
          newEmail.value,
          newPass.value,
          photoB64
        ]
        
        //with Db:
        createNewUser(data)
        // with firebase:
        // createUser(newEmail.value, newPass.value)
      }else{
        alert('verify your password')
      }
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

// btnlogOut.addEventListener('click', e => {
//   e.preventDefault()
//   logOut()
// })


//save token
const authToken = (userToken) => {
  const storageUser = localStorage.setItem('user', userToken)
  // console.log(localStorage.getItem('user'));

  const redirect  = `http://localhost:5000/?user=${localStorage.getItem('user')}`
  
  if (localStorage.getItem('user')){
    window.location.href = redirect
    localStorage.removeItem('user')
  }
}