const form = document.querySelector('#form')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const email = document.querySelector('#email')
const number = document.querySelector('#number')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    ValidateInput();
})
function ValidateInput(){
    const usernameVal = username.Value.trim()
    const passwordVal = password.Value.trim()   
    const emailVal = email.Value.trim()
    const numberVal = number.Value.trim()
if(usernameVal===""){
    setError(username,'usernmar is required')
}
else{
    setSuccess(username)
}
if(emailVal===''){
    setError(email,'Email is required')
}
elseif(!ValidateEmail(emailVal));{
    setError(email,'Please enter a valid email')
}
else{
    setSuccess(email)
}
if(passwordVal===""){
    setError(password,'Password is required')
}
    elseif(passwordVal.length<8);{
        setError(password,'Password must be atleast 8 character long')
    }
    else{
        setSuccess(password)
    }
    if(numberVal===''){
        setError(number,'Provide phone number')
    }
    elseif(numberVal.length>10);{
        setError(number,'Please enter 10 numbers')
    }
    else{
        setSuccess(number)
    }
}
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('Success')
}

function setSuccess(element,){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const ValidateEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    );
};