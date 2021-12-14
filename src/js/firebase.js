const firebaseConfig = {
  apiKey: "AIzaSyB5emrIPT4wWP4-7N5Et_w8jjWrnAEXwoA",
  authDomain: "flylinkerslogin.firebaseapp.com",
  projectId: "flylinkerslogin",
  storageBucket: "flylinkerslogin.appspot.com",
  messagingSenderId: "744248576600",
  appId: "1:744248576600:web:da6489a79bfac82da7d82d",
  measurementId: "G-J38E59TYNW"
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
    const user = result.user;
    // ...
    console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
}

//Auth with email and pass
const emailAuth = (email, password) =>{
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user.email);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
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
    console.log('session ended');
  }).catch((error) => {
    console.log(error);
  });
}