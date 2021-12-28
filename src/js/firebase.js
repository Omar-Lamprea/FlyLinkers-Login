const firebaseConfig = {
  apiKey: "AIzaSyB8KpNHJILsB2erTcBgMuhTHWGJd_rSttk",
  authDomain: "flylinkers-login.firebaseapp.com",
  projectId: "flylinkers-login",
  storageBucket: "flylinkers-login.appspot.com",
  messagingSenderId: "628867348595",
  appId: "1:628867348595:web:95815a4959b5b5d0fe5206"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Auth with Googe
const googleAuth = ()=>{
  const provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    const credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = credential.accessToken;
    // The signed-in user info.
    // console.log(token);
    const user = result.user;
    const userToken = user._delegate.accessToken
    authToken(userToken)

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;

    const showError = document.getElementById('auth-error')
    showError.innerHTML = errorMessage
  });
}

//Auth with email and pass
const emailAuth = (email, password) =>{
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    const userToken = user._delegate.accessToken
    authToken(userToken)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    const showError = document.getElementById('auth-error')
    showError.innerHTML = errorMessage
  });
}

//Create User
const createUser = (email, password)=>{
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(userCredential);
    console.log('usuario creado')
    setTimeout(() => {
      $('#createUser').modal('hide');
    }, 1000);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
  });
}

//logOuth
const logOut = ()=>{
  firebase.auth().signOut()
  .then(() => {
    localStorage.removeItem('user')
    console.log('session ended');
  }).catch((error) => {
    console.log(error);
  });
}