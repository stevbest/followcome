
function getdata(){
    var coins = JSON.parse(localStorage.getItem('coin'));

    document.getElementById('fees').innerText = coins.fee + ' BTC';
    document.getElementById('coinamount').innerText = coins.amount;
    document.getElementById('amounts').innerText = coins.amount + ' BTC';
    document.getElementById('slippages').innerText = coins.slippage + '%';
    document.getElementById('usdreceiveds').innerText = '$'+coins.usd;

    var datenow = new Date();
    document.getElementById('dates').innerText = 'Today, ' +datenow.toLocaleTimeString();
    //console.log(JSON.parse(coins));
}
setTimeout(getdata, 500);
// localStorage.clear('coin');
// localStorage.removeItem('coin ');

