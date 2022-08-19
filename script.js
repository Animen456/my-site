const inputPass = document.getElementById('form_pass');
const iconPass = document.getElementById('pass_icon');

iconPass.addEventListener('click', ()=> {
    if (inputPass.getAttribute('type') === "password"){
        inputPass.setAttribute('type', 'text');
    }else{
        inputPass.setAttribute('type', 'password')
    }
});

const inputPassReg = document.getElementById('form_pass_reg');
const iconPassReg = document.getElementById('pass_icon_reg');

iconPassReg.addEventListener('click', ()=> {
    if (inputPassReg.getAttribute('type') === "password"){
        inputPassReg.setAttribute('type', 'text');
    }else{
        inputPassReg.setAttribute('type', 'password')
    }
});

const inputPassRec = document.getElementById('form_pass_rec');
const iconPassRec = document.getElementById('pass_icon_rec');

iconPassRec.addEventListener('click', ()=> {
    if (inputPassRec.getAttribute('type') === "password"){
        inputPassRec.setAttribute('type', 'text');
    }else{
        inputPassRec.setAttribute('type', 'password')
    }
});

// const inputPass = document.getElementById('form_pass');
// const iconPass = document.querySelectorAll('.pass_icon');

// if (iconPass.length > 0){
//     for (let index = 0; index < iconPass.length; index++){
//         const iconPass1 = iconPass[index];
//         iconPass1.addEventListener('click', ()=> {
//             if (inputPass.getAttribute('type') === "password"){
//                 inputPass.setAttribute('type', 'text');
//             }else{
//                 inputPass.setAttribute('type', 'password')
//             }
//         })
//     }
// }