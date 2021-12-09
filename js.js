let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let modal = document.querySelector('.modal')
function dataValidation (){
    // alert('click')
  let userNameValue = userNameInput.value;
  let passwordValue = passwordInput.value;
    // console.log(userNameValue , passwordValue)
    if (userNameValue.length < 12 || passwordValue.length < 8) {
        // alert('error')
        modal.innerHTML ="اطلاعات وارد شده درست نمیباشد"
        modal.style.background = "rgb(223, 28, 28)"
        modal.style.display = 'inline'
    } else {
        modal.style.background ="green"
        modal.innerHTML = "با موفقیت وارد شدید"
        modal.style.display = "inline"
    }
    setTimeout(function() {
        modal.style.display ="none"
    }, 3000)
}


    let userNameMessage = document.querySelector('.username-validation')
let passwordMessage = document.querySelector('.password-validation')

// let users = document.querySelector('.username')
// let pass = document.querySelector('.password')

function usernameValidation (){
    // alert('hi')
    if (userNameInput.value.length < 12) {
        userNameMessage.style.color = 'red'
        userNameMessage.innerHTML = 'Must Contain 12 Character (Min)'
        userNameMessage.style.display = 'block'
      
    } else {
        userNameMessage.style.color = 'green'
        userNameMessage.innerHTML = 'Correct Username Value'
        userNameMessage.style.display = 'block'
    }  
}
function passwordValidation () {
    // alert('hi')
    if (passwordInput.value.length < 8){
        passwordMessage.style.color = 'red'
        passwordMessage.innerHTML = 'Must Contain 8 Character (Min)'
        passwordMessage.style.display = 'block'
    } else {
        passwordMessage.style.color = 'green'
        passwordMessage.innerHTML = 'Correct Password value'
        passwordMessage.style.display = 'block'
    }
}


