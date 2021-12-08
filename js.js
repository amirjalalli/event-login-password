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