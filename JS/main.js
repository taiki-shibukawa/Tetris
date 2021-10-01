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
        error: true
    }
});

var app3 = new Vue({
    el: "#app3",
    data: {
        error_class: "error",
        img_src: "img01.png"
    }
});

var app4 = new Vue({
    el: "#app4",
    data: {
        now: "00:00:00"
    },
    methods: {
        time: function(e) {
            var date = new Date();
            this.now = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        }
    }
});

var app5 = new Vue({
    el: "#app5",
    data: {
        prefs: [
            {name: '北海道'},
            {name: '青森県'},
            {name: '岩手県'},
            {name: '宮城県'},
            {name: '秋田県'},
            {name: '山形県'},
            {name: '福島県'}
        ]
    },
    methods: {
        shuffle: function() {
            this.prefs = _.shuffle(this.prefs);
        }
    }
});