document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('kni2019').value;
    const password = document.getElementById('10040782').value;
    
    if (email === 'example@example.com' && password === 'password') {
        alert('Successful login! Welcome, hacker!');
    } else {
        alert('Invalid email or password. Try again!');
    }
});  
