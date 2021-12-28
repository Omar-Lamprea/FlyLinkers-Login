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
    console.log(content.Detail);
    authToken(email)

  } catch (error) {
    console.error(error)
  }
  
}