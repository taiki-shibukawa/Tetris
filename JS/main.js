document.getElementById("hello_text").textContent = "はじめてのJavaScript"

var app =  new Vue({
    el: "#app",
    data: {
        message: "たいき"
    }
});

var app2 = new Vue({
    el: "#app2",
    data: {
        error: false
    }
})