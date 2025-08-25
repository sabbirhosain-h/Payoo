    document.getElementById('bonus`-button').addEventListener('click', function(e) {
        e.preventDefault();


        const bonusAmount = parseInt(document.getElementById('Bonus-amount').value);
        const currentBalance = parseInt(document.getElementById('accBalance').innerText);

        if (bonusAmount > 0) {
            const newBalance = currentBalance + bonusAmount;
            document.getElementById('accBalance').innerText = newBalance;
        } else {
            console.log('Invalid bonus amount');
        }


    });