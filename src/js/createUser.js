const createNewUser = async (data)=>{
  const [firstName, lastName, newTel, newTitle, newEmail, newPass, confirmPass] = data

  try {
    const response = await fetch('http://18.118.50.78:8000/user/create/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "first_name" : firstName,
        "middle_name" : "David",
        "last_name" : lastName,
        "mobile" : newTel,
        "email" : newEmail,
        "title" : newTitle,
        "password_hash" : newPass
      })
    })
    const content = await response.json();
    // console.log(content);
    formUser.reset()
    setTimeout(() => {
      $('#createUser').modal('hide');
    }, 1000);

  } catch (error) {
    console.error(error);
  }
}