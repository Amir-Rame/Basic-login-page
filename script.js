let inputs = document.getElementsByTagName('input');
let errors = document.getElementById('error-log');
let submission = document.getElementById('submission');

for(let i=0; i<inputs.length; i++){
    inputs[i].addEventListener('input',()=>{
        errors.innerText=''
        errors.style.display='none';
        if(inputs[i].value==''){
            err_box(i);
            if(errors.innerText!=''){errors.innerText+=`\n`}
            errors.innerText+=`Please fill in the blank fields.`;
        }else{
            if(inputs[i].classList.contains('error'))inputs[i].classList.remove('error');
        }
        if (i==0) {
            if(!/^[a-zA-Z]+$/.test(inputs[0].value)){
                if(errors.innerText!=''){errors.innerText+=`\n`}
                errors.innerText+=`First name can only contain letters.`;
                err_box(0);
            }
        }else if(i==1){
            if(!/^[a-zA-Z]+$/.test(inputs[1].value)){
                if(errors.innerText!=''){errors.innerText+=`\n`}
                errors.innerText+=`Last name can only contain letters.`;
                err_box(1);
            }
        }else if(i==2){
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs[2].value)){
                if(errors.innerText!=''){errors.innerText+=`\n`}
                errors.innerText+=`Email Invalid.`;
                err_box(2);
            }
        }else if(i==3){
            if(!/^\d+$/.test(inputs[3].value)){
                if(errors.innerText!=''){errors.innerText+=`\n`}
                errors.innerText+=`Phone number can only contain digits.`;
                err_box(3);
            }
        }else if(i==4){
            if(inputs[4].value.length<8){
                if(errors.innerText!=''){errors.innerText+=`\n`}
                errors.innerText+=`Password has to be 8 characters long at least`;
                err_box(4);
            }
        }else if(i==5){
            if(inputs[5].value!=inputs[4].value){
                if(errors.innerText!=''){errors.innerText+=`\n`}
                errors.innerText+=`Passwords dont match`;
                err_box(5);
            } 
        }
    });
}

submission.addEventListener('click',()=>{
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
})

function err_box(i){
    inputs[i].classList.add('error');
    errors.style.display='block';
}













