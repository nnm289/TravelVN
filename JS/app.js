const init = () => {
    console.log("Window loaded");
    // Import the functions you need from the SDKs you need

    // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    let firebaseConfig = {
        apiKey: "AIzaSyD3F2sQ_fcrCvbrYNLNQKEeTNYN9FSLJSs",
        authDomain: "travel-vietnam-4d10f.firebaseapp.com",
        projectId: "travel-vietnam-4d10f",
        storageBucket: "travel-vietnam-4d10f.appspot.com",
        messagingSenderId: "981904217482",
        appId: "1:981904217482:web:17e5cf7444125735706473"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    // const app = initializeApp(firebaseConfig);
    console.log(firebase.app().name); //DEFAULT
    // console.log(firebase.app().name);

}



window.onload = init;