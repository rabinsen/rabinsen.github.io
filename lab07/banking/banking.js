'use strict';
window.onload = function () {
    var clickEvent = document.getElementById("create");
    clickEvent.onclick = createNewAccount;
    var account = (function () {
        let privateName;
        let privateDeposit;
        return {
            createAccount: function (name, deposit) {
                privateName = name;
                privateDeposit = deposit;
                return {
                    name: privateName,
                    balance: privateDeposit
                };
            }
        };
    }());
    const accountInfoList = [];
    function createNewAccount() {
        const newAccount = account.createAccount(document.getElementById("name").value, document.getElementById("deposit").value);
        accountInfoList.push(newAccount);
        document.getElementById("showDetails").value = '';

        for (const account of accountInfoList) {
            document.getElementById("showDetails").value += `Account Name: ${account.name}, Balance: ${account.balance}` + "\n";
        }
    }


}