//bank system part calculation
// deposit section
document.getElementById('deposit-btn').addEventListener('click', function(){
   //step- 1 : get input field amount
   const inputFieldAmount = document.getElementById('deposit-text');
   const inputAmount = inputFieldAmount.value;
   //step - 2 : calculate privious value to current value
   const depositAreaAmount = document.getElementById('deposit');
   const depositAmount = depositAreaAmount.innerText;
   const totalDepositAmount = parseFloat(inputAmount) + parseFloat(depositAmount);
   depositAreaAmount.innerText = totalDepositAmount;
     //step - 3 :calculate deposite total to balance
     const balance = document.getElementById('balance');
     const balanceAmount = balance.innerText;
  
     const totalBalance = parseFloat(inputAmount) + parseFloat(balanceAmount);
     balance.innerText = totalBalance;
  

 
   //remove input field
   inputFieldAmount.value = '';
  });  

  

