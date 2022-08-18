const inputPass = document.getElementById('form_pass');
const iconPass = document.getElementById('pass_icon');

iconPass.addEventListener('click', ()=> {
    if (inputPass.getAttribute('type') === "password"){
        inputPass.setAttribute('type', 'text');
    }else{
        inputPass.setAttribute('type', 'password')
    }
});