window.addEventListener("load", ()=>{
    const loginLink =document.querySelector(".login-link")
    const loginModal=document.querySelector(".modal-login")
console.log(loginLink)
loginLink.addEventListener("click", (e)=>{
    console.log("click", e)
    e.preventDefault()
    loginModal.classList.add("modal-show")
})

})