document.getElementById('transfer-btn')
    .addEventListener('click', function(){
        const transferNumber = getValueFromInput('transfer-number');
        if(transferNumber.length !== 11){
            alert('Invalid Number');
            return;
        }
        const transferAmount = getValueFromInput('transfer-amount');
        const currentBalance = getBalance();
        const newBalance = currentBalance - Number(transferAmount);
        console.log(newBalance);
 
        const Pin = getValueFromInput('transfer-pin');
        if(Pin === '1234'){
            alert(`Transfer Successful at ${new Date()}`);
            setBalance(newBalance);
            const history = document.getElementById('history-container');
            const newHistory = document.createElement('div');
            newHistory.innerHTML = `
            <div class="Transaction-card p-5 bg-base-100">
            Transfer ${transferAmount} TAKA Success to ${transferNumber} at ${new Date()}
            </div>
        `;
        history.append(newHistory);
        }
        else{
        alert('Invalid Pin');
        return;
    }
});


