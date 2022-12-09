var datas;

function chage_data(id, data) {
    var element = document.getElementById(id);
    element.innerHTML = data;
}

async function chage_data_to_html(id,path){
    await get_html(path);
    chage_data(id,datas);
}
async function get_html(path) {
    const result =await fetch(path, {
        method: "GET"
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        const a = new DOMParser().parseFromString(data, "text/html");
        datas=a.body.innerHTML;
    });}

async function sample2(){
    chage_data("screen", await sample1());
}

// var datas;
// async function sample1(path) {
//     console.log("path:"+path)
//     const result =await fetch(path, {
//         method: "GET"
//     }).then(function (response) {
//         return response.text();
//     }).then(function (data) {
//         const a = new DOMParser().parseFromString(data, "text/html")
//         console.log(a)
//         datas=a.body.innerHTML;

//     console.log(datas)
//         return datas
//     });}

// async function sample2(){
//     await sample1("title.html")
//     console.log(datas)
//     chage_data("screen", datas)
// }
// sample2()
