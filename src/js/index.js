console.log(app);

const btnGoogle = document.getElementById('btn-google')
// const btnlogOut = document.getElementById('btn-logout')

btnGoogle.addEventListener('click', e =>{
  e.preventDefault()
  googeAuth()
})

// btnlogOut.addEventListener('click', e =>{
//   e.preventDefault()
//   logOut()
// })