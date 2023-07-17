
function getdata(){
    var coins = JSON.parse(localStorage.getItem('coin'));

    document.getElementById('fees').innerText = coins.fee + ' BTC';
    document.getElementById('coinamount').innerText = coins.amount;
    document.getElementById('amounts').innerText = coins.amount + ' BTC';
    document.getElementById('slippages').innerText = coins.slippage + '%';
    document.getElementById('usdreceiveds').innerHTML = '$'+coins.usd;
    var sts = coins.stat;
    var statuss = document.getElementById('status');//.innerText = '$'+coins.stat;

    if(sts == 'completed'){
        statuss.style.color = '#0db69a';
    }
    else if(sts == 'pending'){
        statuss.style.color = '#ffa600';
    }
    else if(sts == 'failed'){
        statuss.style.color = '#f52525';
    }

    statuss.innerHTML = sts;
    statuss.style.textTransform = 'uppercase';

    var datenow = new Date();
    var datfmt = datenow.toLocaleString('ng-NG',{
        year:'numeric',
        month:'long',
        day:'2-digit'
    });
    document.getElementById('dates').innerText = '📅 '+ datfmt + '⌚' +datenow.toLocaleTimeString();
    
}
setTimeout(getdata, 100);
