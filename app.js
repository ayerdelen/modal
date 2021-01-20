const formDiv = document.querySelector(".form");
const submitBtn = document.querySelector("#submit");
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const modal = document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn")
const information = document.querySelector(".information")

submitBtn.addEventListener("click", () => {
    let nameValue = nameInput.value;
    let emailValue = emailInput.value
    const inform = `
    <h4>Do you Confirm your informations?</h4>
            <p>Name: ${nameValue}</p>
            <p>Email: ${emailValue}</p>
            <button class="btn yes">Yes</button> <button class="btn no">No</button>
    `
    information.innerHTML = inform
    modal.classList.toggle("open-modal")
    modalButtons()
})
closeBtn.addEventListener("click",() => {
    modal.classList.remove("open-modal")
})

function modalButtons() {
    const btns = document.querySelectorAll(".btn")
    
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const styles = e.currentTarget.classList;
          if (styles.contains("yes")){
            alert("Information has sent.")
            modal.classList.remove("open-modal")
        }
        if (styles.contains("no")){
            modal.classList.remove("open-modal")
        }
        })
    })
}