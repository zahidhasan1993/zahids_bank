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
  
     const totalBalance = parseFloat(balanceAmount) + parseFloat(totalDepositAmount);
     balance.innerText = totalBalance;
  

 
   //remove input field
   inputFieldAmount.value = '';
  });  

  //step - 4 : calculate withdraw section
  document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-field');
    const withdrawAmountValue = withdrawAmount.value;

    const withdraw = document.getElementById('withdraw');
    const withdrawValue = withdraw.innerText;
    
   

    //step - 5 : calculate balance to withdraw
    const balance = document.getElementById('balance');
    const balanceAmount = balance.innerText;
    
    
    const totalWithdraw = parseFloat(withdrawAmountValue) + parseFloat(withdrawValue);
    
   
    

    const totalBalance = parseFloat(balanceAmount) - parseFloat(totalWithdraw);
   //remove input field 
   withdrawAmount.value = '';


   if(withdrawAmountValue > balanceAmount){
     alert('not enough amount');
     return;
   }
    balance.innerText = totalBalance;
    withdraw.innerText = totalWithdraw;
    
  })

