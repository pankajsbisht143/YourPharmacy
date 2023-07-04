
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
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
    appId: "1:1094224469393:web:ad7568e77bb8a88286ce30"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  document.querySelector("#btn").addEventListener("click", () => {
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#mailid").value;
    let phoneno = document.querySelector("#phoneno").value;
    let password = document.querySelector("#password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        console.log(user)
        alert("Register successfully");
        location.href="signin.html";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  });
