var vm = new Vue({
    el: '#databinding',
    data: {
        num1: 100,
        num2 : 200,
        total : ''
    },
    methods : {
        displaynumbers : function(event) {
            console.log(event);
            return this.total =  this.num1+ this.num2;
        }
    },
});


var vm2 = new Vue({
    el: '#databinding2',
    data: {
        num1: 100,
        num2 : 200,
        total : '',
        styleobj : {
            width:"100px",
            height:"100px",
            backgroundColor:"red"
        }
    },
    methods : {
        changebgcolor : function() {
            this.styleobj.backgroundColor = "green";
        },
        originalcolor : function() {
            this.styleobj.backgroundColor = "red";
        }
    },
});

var vmOnce = new Vue({
    el: '#eventOnce',
    data: {
        clicknum : 0,
        clicknum1 :0,
        styleobj: {
            backgroundColor: '#2196F3!important',
            cursor: 'pointer',
            padding: '8px 16px',
            verticalAlign: 'middle',
        }
    },
    methods : {
        buttonclickedonce : function() {
            this.clicknum++;
        },
        buttonclicked : function() {
            this.clicknum1++;
        }
    }
});

var vmNonPrevent = new Vue({
    el: '#nonPrevent',
    data: {
        clicknum : 0,
        clicknum1 :0,
        styleobj: {
            color: '#4CAF50',
            marginLeft: '20px',
            fontSize: '30px'
        }
    },
    methods : {
        clickme : function() {
            alert("Anchor tag is clicked");
        }
    }
});

var vmPrevent = new Vue({
    el: '#prevent',
    data: {
        clicknum : 0,
        clicknum1 :0,
        styleobj: {
            color: '#4CAF50',
            marginLeft: '20px',
            fontSize: '30px'
        }
    },
    methods : {
        clickme : function() {
            alert("Anchor tag is clicked");
        }
    }
});

var vmKey = new Vue({
    el: '#key',
    data: {
        name:'',
        styleobj: {
            width: "30%",
            padding: "12px 20px",
            margin: "8px 0",
            boxSizing: "border-box"
        }
    },
    methods : {
        showinputvalue : function(event) {
            this.name=event.target.value;
        }
    }
});


Vue.component('button-counter', {
    template: '<button v-on:click = "displayLanguage(item)"><span style = "font-size:25px;">{{ item }}</span></button>',
    data: function () {
        return {
            counter: 0
        }
    },
    props:['item'],
    methods: {
        displayLanguage: function (lng) {
            console.log(lng);
            this.$emit('showlanguage', lng);
        }
    },
});
var vmCustomEvent = new Vue({
    el: '#customEvent',
    data: {
        languageclicked: "",
        languages : ["Java", "PHP", "C++", "C", "Javascript", "C#", "Python", "HTML"]
    },
    methods: {
        languagedisp: function (a) {
            this.languageclicked = a;
        }
    }
})