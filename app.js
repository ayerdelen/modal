const formDiv = document.querySelector(".form");
const submitBtn = document.querySelector("#submit");
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const modal = document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn")

submitBtn.addEventListener("click", () => {
    let nameValue = nameInput.value;
    let emailValue = emailInput.value

    modal.classList.toggle("open-modal")
    
})
closeBtn.addEventListener("click",() => {
    modal.classList.remove("open-modal")
})
