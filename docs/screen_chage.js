function chage_data(id, data) {
    var element = document.getElementById(id)
    element.innerHTML = data
}

function chage_data_to_html(id,path){
    chage_data(id,get_html(path))
}

function get_html(path) {
    const result = await fetch(path, {
        method: "GET"
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        const a = new DOMParser().parseFromString(data, "text/html")
        console.log(a)
        return a
    });
}
