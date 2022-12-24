var datas;

var pages_cash=[]

function create_cash(data_path,data){
pages_cash.push({"path":data_path,"data":data})
}

function output_cash(path){
var result="undefind";
    pages_cash.forEach(function(value){
    if(value.path==path){
        result= value.data;
    }
})
return result;
}

function change_data(id, data) {
    var element = document.getElementById(id);
    element.innerHTML = data;
}



async function change_data_to_html(id,path){
    var cash_data=output_cash(path);
    if(cash_data=="undefind"){
        await get_html(path);
        change_data(id,datas);
        create_cash(path,datas);
        console.log("loaded");
        
    }else{
        change_data(id,cash_data);
        console.log("used cash");
    }

}
async function get_html(path) {
// try{
    const result =await fetch(path, {
        method: "GET"
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        const a = new DOMParser().parseFromString(data, "text/html");
        datas=a.body.innerHTML;
    });
// }catch{
//     change_data("screen",`<div class = "samp1" ></div><div class="fream_title">
//     <span class="title title_border">予期せぬエラーが発生しました。再度お試しください。</span>
// </div>`)
// }
}

async function sample2(){
    change_data("screen", await sample1());
}
