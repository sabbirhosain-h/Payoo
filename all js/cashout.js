    document.getElementById("withdraw-button").addEventListener("click",function(e){
        e.preventDefault();
        const accBalance = parseInt(document.getElementById("accBalance").innerText);
        const agentNumber = parseInt(document.getElementById("agent-number").value);
        const pinNumber = parseInt(document.getElementById("pin-number").value);
        const withdralAmount = parseInt(document.getElementById("withdrawal-amount").value);
        
        const x = 12345678910;
        const y = 1234;

            if(agentNumber === x && pinNumber === y && withdralAmount <= accBalance){
                newAccBalance = accBalance - withdralAmount;
                document.getElementById("accBalance").innerText = newAccBalance;
    
            } else {
                console.log("Withdrawal failed");
            }
        });
