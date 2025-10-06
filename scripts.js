let log = document.getElementById('log');
let accountBalance = 0;
let cashBalance = 0;

function money_set() {
    let acc = parseFloat(document.getElementById('abalance').value) || 0;
    let cash = parseFloat(document.getElementById('cbalance').value) || 0;

    accountBalance = acc;
    cashBalance = cash;

    addLog(`🔄 Updated balances → Account: ${accountBalance}, Cash: ${cashBalance}`);
}

function do_action() {
    let action = document.getElementById('action').value;
    let amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        addLog(`⚠️ Invalid amount entered.`);
        return;
    }

    if (action === "Deposit") {
        if (cashBalance < amount) {
            addLog(`❌ Withdraw failed — insufficient funds.`);
            return;
        }
        cashBalance -= amount;
        accountBalance += amount;
        addLog(`💰 Deposited ${amount} | Account: ${accountBalance}, Cash: ${cashBalance}`);
    } 
    else if (action === "Withdraw") {
        if (accountBalance < amount) {
            addLog(`❌ Withdraw failed — insufficient funds.`);
            return;
        }
        accountBalance -= amount;
        cashBalance += amount;
        addLog(`🏧 Withdrawn ${amount} | Account: ${accountBalance}, Cash: ${cashBalance}`);
    }
}

function addLog(message) {
    log.value += `${message}\n`;
    log.scrollTop = log.scrollHeight;
}
