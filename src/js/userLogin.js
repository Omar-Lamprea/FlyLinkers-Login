const userLogIn = async (email, password)=>{
  try {
    const response = await fetch('http://18.118.50.78:8000/user/login/',{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        email: email,
        password_hash: password
      })
    })
    const content = await response.json();
    // console.error(content.Detail);
    if(content.Detail === 'OK'){
      authToken(email)
    }else{
      const showError = document.getElementById('auth-error')
      showError.innerHTML = content.Detail
    }

  } catch (error) {
    console.error(error)
  }
  
}