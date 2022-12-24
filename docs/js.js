// import * as Vue from "https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js";
var loading;
window.onload = async function () {
    await get_html("loading.html");
    console.log(datas);
    loading = datas;
    change_data_to_html("screen", "title.html");
}

async function addlistener() {
    const input_file = document.getElementById("import_file");
    console.log(input_file)
    input_file.addEventListener("input", update_file)
}

function check_cookie() {
    var cookies = document.cookie
    return cookies
}
async function start() {
    await change_data("screen", loading);
    await change_data_to_html("screen", "import.html");
    await addlistener();
}

async function settings() {
    await change_data("screen", loading);
    await change_data_to_html("screen", "settings.html");
}

async function home() {
    await change_data("screen", loading);
    await change_data_to_html("screen", "title.html");
}
function option(import_data) {
    console.log(import_data)
    if (import_file) {
        
        //ファイルでimport
    } else {
        if (import_id) {
            import_id.match('/^https:/')
            //id,url でimport
        } else {

            //error
        }
    }
    change_data_to_html("screen", "start_option.html")
}

function next() {
    check_id()
    console.log(`file:${import_file}\nid:${import_id}`)
    if (import_file) {
        if (import_id) {
            change_data("error", "入力はどちらかにしてください。")
            //true が重複
        } else {
            var file=document.getElementById("import_file").value;
            option(file)
            //ok import fileでimport
        }
    } else {
        if (import_id) {
            var id= document.getElementById("sheets").value;
            option(id)
            //ok import id でimport
        } else {
            change_data("error", "なにも入力されていません")
            //どちらもfales
        }
    }
    // change_data_to_html("screen", "start_option.html");

}

var import_file = false;
var import_id = false;
async function check_id() {
    var id_box = document.getElementById("sheets");
    if (id_box.value != "") {
        import_id = true;
    } else {
        import_id = false;
    }
}

function update_file() {
    var file = document.getElementById("import_file").value;
    var file_value = document.getElementById("file_value");
    console.log(file);
    if (file != "") {
        var regex = /\\|\\/;
        var array = file.split(regex);
        file_value.innerHTML = array[array.length - 1];
        import_file = true;
    } else {
        file_value.innerHTML = "未選択";
        import_file = false;
    }
}

function arrange_url(){

}

async function get_quiz(id){
    const path="https://script.google.com/macros/s/AKfycbw5n62U2I0PiFyViFqz-gv9T4sBfv71mCMRkGNdm2i7sqVfvfq-Id2Wpk7V6pF3MEih/exec";
    const result=await fetch(path,{
        method:"cors",
        headers:{
            "Access-Control-Allow-Origin":"https://script.google.com",
            "Content-Type":"application/json; charset=utf-8"
        },
        body:JSON.stringify({
            id:id
        })
    })
}

var cookies = check_cookie();

