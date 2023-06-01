

//entery variables




//input variables



var processbtn = document.querySelector('.btnprocess');
processbtn.addEventListener('click', function(){
    //location.href = 'receipt.html';
    var fees = document.getElementById("fee").value;
    var amount = document.getElementById('amount').value;
    var slippagefee = document.getElementById('slippagefee').value;
    var usdreceived = document.getElementById('usdreceived').value;

    var details ={fee:fees, amount:amount, slippage:slippagefee, usd:usdreceived};
    localStorage.setItem('coin', JSON.stringify(details));
    location.href = 'receipt.html';
    //alert(jsons);

    //details.forEach(e => document.getElementById('fees').innerText = e.f);
    // document.getElementById('fees').value = fees;
    // document.getElementById('amounts').innerText = amount;
    // document.getElementById('slippages').innerText = slippagefee;
    // document.getElementById('usdreceiveds').innerText = usdreceived;
    // document.getElementById('dates') = Date.now;
    ///receipt.html
});

