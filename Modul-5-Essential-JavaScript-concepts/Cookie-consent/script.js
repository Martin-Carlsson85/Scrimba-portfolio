const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const form = document.querySelector("#consent-form");
const modalText = document.querySelector("#modal-text");
const declineBtn = document.querySelector('#decline-btn')
const modalChoiceBtn = document.querySelector('.modal-choice-btns')
console.log(modalChoiceBtn);

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

declineBtn.addEventListener('mouseenter', function(){
    modalChoiceBtn.classList.toggle('reverse')
})

form.addEventListener("submit", function (e) {
  e.preventDefault();

const loginFormData = new FormData(form)
console.log(loginFormData);

const fullName = loginFormData.get('fullName')

  modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>
    `
    setTimeout(function () {
    document.getElementById("uploadText").innerText= "Making the sale...";
  }, 1500);

    setTimeout(function () {
    document.getElementById("modal-inner").innerHTML=  `
    <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `

    modalCloseBtn.disabled = false
    }, 3000);
});


