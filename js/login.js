// login section %%%%%%%%%%%%%%%%%%%%%%%%%%
document.getElementById('login').addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if(email === 'khannnaim@gmail.com' && password === 'iamok'){
        window.location.href = 'dashboard.html';
    }else{
        alert('wrong password or email !!!!!!');
    }
    
})



