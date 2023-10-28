// Show Hide Password
let unhide = document.querySelector("#unhide");
let password = document.querySelector("#password");

unhide.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        unhide.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Sembunyikan';
    } else {
        password.type = "password";
        unhide.innerHTML = '<i class="fa-solid fa-eye"></i> Tampilkan';
    }
}


// Password Validation
let minLength = document.getElementById("length");
let upperCase = document.getElementById("upper");
let lowerCase = document.getElementById("lower");
let digit = document.getElementById("numb");

const checkPassword = (data) => {
    const length = new RegExp("(?=.{8,})");
    const upper = new RegExp("(?=.*[A-Z])");
    const lower = new RegExp("(?=.*[a-z])");
    const numb = new RegExp("(?=.*[0-9])");
    
    // length validation
    if(length.test(data)) {
        minLength.classList.add("valid");
        minLength.innerHTML = '<i class="fa-solid fa-check"></i> 8 karakter';
    } else {
        minLength.classList.remove("valid");
        minLength.innerHTML = '<i class="fa-solid fa-minus"></i> 8 karakter';
    }
    // uppercase validation
    if(upper.test(data)) {
        upperCase.classList.add("valid");
        upperCase.innerHTML = '<i class="fa-solid fa-check"></i> 1 huruf besar';
    } else {
        upperCase.classList.remove("valid");
        upperCase.innerHTML = '<i class="fa-solid fa-minus"></i> 1 huruf besar';
    }
    // lowercase validation
    if(lower.test(data)) {
        lowerCase.classList.add("valid");
        lowerCase.innerHTML = '<i class="fa-solid fa-check"></i> 1 huruf kecil';
    } else {
        lowerCase.classList.remove("valid");
        lowerCase.innerHTML = '<i class="fa-solid fa-minus"></i> 1 huruf kecil';
    }
    // number validation
    if(numb.test(data)) {
        digit.classList.add("valid");
        digit.innerHTML = '<i class="fa-solid fa-check"></i> 1 angka';
    } else {
        digit.classList.remove("valid");
        digit.innerHTML = '<i class="fa-solid fa-minus"></i> 1 angka';
    }
}

// Bubble Chat
const bubble = document.querySelector("#bubble");
const bubbleChat = document.querySelector("#bubbleChat");

bubble.addEventListener('click', function() {
    bubble.innerHTML = '<i class="fa-solid fa-xmark text-white text-4xl mx-3 my-1"></i>';
    bubbleChat.classList.toggle('hidden');
    bubble.addEventListener("click", () => {
        bubble.innerHTML = '<img src="/assets/images/chat.png" alt="Live Chat" width="45px">';
  });
});
