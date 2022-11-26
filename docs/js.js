// import * as Vue from "https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js";

Vue.component("sample", {
    template: `<p>hello</p>`
});

function check_cookie() {
    var cookies = document.cookie
    return cookies
}
function start() {
    var screen = document.getElementById("screen");
    screen.innerHTML = '<iframe src="index2.html"></iframe>'
}

async function get_html() {
    const result = await fetch('index2.html', {
        method: "GET"
      }).then(function(response) {
        return response.text();
      }).then(function(data) {
          const a=new DOMParser().parseFromString(data, "text/html")
      console.log(a)
      });
}

var cookies = check_cookie()

