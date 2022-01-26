const createNewUser = async (data)=>{
  const [firstName, middleName, lastName, newTel, newTitle, newEmail, newPass, photoB64] = data

  const getImg = await fetch ('https://api.flylinkers.com/resources/img/', {
    method : 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      "img": photoB64
    })
  })
  const image = await getImg.json()

  try {
    const response = await fetch('https://api.flylinkers.com/user/create/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "first_name" : firstName,
        "middle_name" : middleName,
        "last_name" : lastName,
        "mobile" : newTel,
        "email" : newEmail,
        "title" : newTitle,
        "password_hash" : newPass,
        "photo" : image.img
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