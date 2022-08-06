const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const dataLogin = {
        email: loginForm.email.value,
        password: loginForm.password.value,

    }

    console.log(dataLogin);

    const login = async (dataLogin) => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password);
            alert("Log in successfully")
            location.href = "../HTML/homePage.html"
        }
        catch (err) {
            console.log(err);
            alert(err.message);
        }
    }

    login(dataLogin)
})