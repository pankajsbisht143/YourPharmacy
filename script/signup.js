
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfTvxwRCZTEIlAvLRa2_WxFcQvn1NPXHQ",
  authDomain: "auth-5f551.firebaseapp.com",
  databaseURL: "https://auth-5f551-default-rtdb.firebaseio.com",
  projectId: "auth-5f551",
  storageBucket: "auth-5f551.appspot.com",
  messagingSenderId: "1094224469393",
  appId: "1:1094224469393:web:ad7568e77bb8a88286ce30",
  measurementId: "G-4F26HGML1Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const auth = getAuth(app);

document.querySelector("#signup").addEventListener("click", () => {
  let username = document.querySelector("#username").value;
  let email = document.querySelector("#mailid").value;
  let password1 = document.querySelector("#password1").value;
  let password = document.querySelector("#password").value;

  createUserWithEmailAndPassword(auth, email, password && username && password1 )
  .then((userCredential) => {
      event.preventDefault()
      // Signed in
        const user = userCredential.user;
        console.log(user);
        document.querySelector("#error").style.display="none";
        document.querySelector("#success").style.display="block";
        localStorage.setItem("username",JSON.stringify(username));
        alert("Congratulations!, Register Successfully");
        location.href = "signin.html";
        // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.querySelector("#success").style.display="none";
      document.querySelector("#error").style.display="block";
      // ..
    });
});

//google authentication
const provider = new GoogleAuthProvider();
document.querySelector("#google").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      localStorage.setItem("username",user.displayName);
      alert("Congratulations!, Register Successfully");
      location.href = "./index.html";
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
