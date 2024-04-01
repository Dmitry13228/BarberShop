window.addEventListener("load", () => {
    const loginLink = document.querySelector(".login-link")
    const loginModal = document.querySelector(".modal-login")
    const loginClose = document.querySelector(".modal-close-login")
    const form = loginModal.querySelector("form")
    const login = loginModal.querySelector("[name=login]")
    const password = loginModal.querySelector("[name=password]")
    console.log(loginLink)
    loginLink.addEventListener("click", (e) => {
        console.log("click", e)
        e.preventDefault()
        loginModal.classList.add("modal-show")
    })
    loginClose.addEventListener("click", (e) => {
        e.preventDefault()
        loginModal.classList.remove("modal-show")
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log(login.value,password.value)
        if (login.value &&password.value) {
            console.log("пароль и логин у нас есть");
        } else {
            loginModal.classList.add("modal-error")
            setTimeout(()=>{
                loginModal.classList.remove("modal-error")
            },600)
        }
    })
})