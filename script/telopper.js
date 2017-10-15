// テロップを移動させる処理
var telo = document.getElementById("myTelop");
var L = 100;

// ページが読み込まれたら関数起動
window.addEventListener("load", function() {
    // document.getElementById("myTelop").position = "absolute";
    // document.getElementById("myTelop").style.left = "400px";
    // document.getElementById("myTelop").style.top = "100px";
    setInterval("moveTelop()", 1);
}, true);

// テロップを移動させる処理
function moveTelop() {
    L += 1;
    telo.style.position = 'absolute';
    telo.style.left = L + 'px';
    console.log("読み込んでるよ!");
}

// ボタンを押すと処理を実行
document.getElementById('comBtn').onclick = function() {
    moveTelop();
}