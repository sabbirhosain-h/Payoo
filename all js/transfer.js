    document.getElementById("transfer-button").addEventListener("click",function(e){
        e.preventDefault();
        const accBalance = parseInt(document.getElementById("accBalance").innerText);
        const transferNumber = parseInt(document.getElementById("transfer-number").value);
        const pinNumber = parseInt(document.getElementById("pin-number").value);
        const transferAmount = parseInt(document.getElementById("transfer-amount").value);

        const x = 12345678910;
        const y = 1234;

            if(transferNumber === x && pinNumber === y && transferAmount <= accBalance){
                newBalance = accBalance - transferAmount;
                document.getElementById("accBalance").innerText = newBalance;

            } else {
                console.log("Transfer failed");
            }
        });
