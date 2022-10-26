function check_cookie(){
    var cookies=document.cookie
    return cookies
}
function start(){
    var screen=document.getElementById("screen");
    screen.innerHTML='<div class="samp1"></div><div class="fream_title"><span class="title wf-roundedmplus1c">CSV ファイルをインポートするか<br>スプレッドシートのurlを入力してください</span></div><div class="samp1"></div><label><input type="file" name="file">ファイルを選択</label><p>選択されていません</p>'
}
var cookies=check_cookie()

