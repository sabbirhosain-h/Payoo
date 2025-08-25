    document.getElementById('login-button').addEventListener('click',function(){
            const mobileNumber = document.getElementById('mobile-number').value;
    const pin = document.getElementById('pin').value;

    const convMobileNNumber = parseInt(mobileNumber);
    const convPin = parseInt(pin);

    const x = 12345678910
    const y = 1234

    if (convMobileNNumber === x && convPin === y) {
        window.location.href = 'main.html';
    } else {
        alert('Wrong mobile number or pin');
    }
    })
