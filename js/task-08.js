const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email, password } = form.elements;
    if (!email.value || !password.value) {
        alert("All fields are required!");
        return;
    }

    const formData = {
        email: email.value,
        password: password.value,
    };
    console.log(formData);
    form.reset();
})

