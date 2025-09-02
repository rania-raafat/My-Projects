const name=document.querySelector('.user-name');
const phone=document.querySelector('.phone');
const email=document.querySelector('.email');
const message=document.querySelector('.message');
const department=document.querySelector('.department');
const btn=document.getElementById('btn');
const err1=document.querySelector('.err1');
const err2=document.querySelector('.err2');
const err3=document.querySelector('.err3');
const err4=document.querySelector('.err4');
const err5=document.querySelector('.err5');
const err41=document.querySelector('.err41');
const err21=document.querySelector('.err21');
const err22=document.querySelector('.err22');
btn.addEventListener('click',function(){
     if(name.value ===''){
       err1.textContent="Full name is required";
     }
     else{
        err1.innerHTML=`&nbsp`;
     }
     if(phone.value===''){
        err2.textContent="Phone Number is required";
     }
     else if(isNaN(phone.value) && phone.value!==''){
        err2.textContent="Phone is must be a number";
     }
     else if((phone.value.length>11 || phone.value.length<11) && phone.value!==''){
          err2.textContent="phone must be 11 digits";
     }
     else{
        err2.innerHTML=`&nbsp`;
     }
     if(email.value===''){
        err4.textContent="Email Address is required";
     }
     else if(email.value.includes('@')===false && email!==''){
        err41.textContent=" Email must have @";
     }
     else{
        err4.innerHTML=`&nbsp`;
     }
     if(department.value===''){
        err3.textContent='department is required';
     }
     else{
        err3.innerHTML=`&nbsp`;
     }
     if (message.value.length<50 || message.value.length>1024){
        err5.textContent='message must be min chars 50 & max characters 1024';
     }
     else{
        err5.innerHTML=`&nbsp`;
     }
});
