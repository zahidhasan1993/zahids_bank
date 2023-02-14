//step - 4 : calculate withdraw section
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-field');
    const withdrawAmountValue = parseFloat(withdrawAmount.value);

    const withdraw = document.getElementById('withdraw');
    const withdrawValue = parseFloat(withdraw.innerText);
    
   

    //step - 5 : calculate balance to withdraw
    const balance = document.getElementById('balance');
    const balanceAmount = balance.innerText;
    
    if(withdrawAmountValue > balanceAmount){
      alert('not enough amount');
      return;
    }
    
    const totalWithdraw = withdrawAmountValue + withdrawValue;
    
   
    

    const totalBalance = parseFloat(balanceAmount) - withdrawAmountValue;
   //remove input field 
   withdrawAmount.value = '';


   
    balance.innerText = totalBalance;
    withdraw.innerText = totalWithdraw;
    
  })