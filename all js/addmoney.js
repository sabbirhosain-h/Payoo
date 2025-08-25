    document.getElementById('add-money-button').addEventListener('click', function(e) {
        e.preventDefault();
        const bankAccountNumber = parseInt(document.getElementById('bank-account-number').value);
        const amountToAdd = parseInt(document.getElementById('amount-to-add').value);
        const pinNumber = parseInt(document.getElementById('pin-number').value);
        const currentBalance = parseInt(document.getElementById('accBalance').innerText);

        const x = 12345678910;
        const y = 1234;

        if (bankAccountNumber === x && pinNumber === y) {
            const newBalance = currentBalance + amountToAdd;
            document.getElementById('accBalance').innerText = newBalance;
        }
        else {
            console.log('Invalid account number or pin');
        }


    });
