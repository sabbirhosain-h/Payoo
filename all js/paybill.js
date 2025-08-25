    document.getElementById('Paybill-button').addEventListener('click', function() {
        
        const billerAccountNumber = parseInt(document.getElementById('biller-account-number').value);
        const amountToPay = parseInt(document.getElementById('amount-to-pay').value);
        const pinNumber = parseInt(document.getElementById('pin-number2').value);
        const currentBalance = parseInt(document.getElementById('accBalance').innerText);

        const x = 12345678910;
        const y = 1234;

        if (billerAccountNumber === x && pinNumber === y) {
            const newBalance = currentBalance - amountToPay;
            document.getElementById('accBalance').innerText = newBalance;
        }
        else {
            console.log('Invalid account number or pin');
        }


    });
