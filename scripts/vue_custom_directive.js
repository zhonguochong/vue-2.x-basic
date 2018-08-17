
Vue.directive("changestyle",{
    bind(e1,binding, vnode) {
        console.log(e1);
        e1.style.color = "red";
        e1.style.fontSize = "30px";
    }
});

var vm = new Vue({
    el: '#databinding'
});


var vmFilter = new Vue({
    el: '#filter',
    data: {
        name : ""
    },
    filters : {
        countletters : function(value) {
            return value.length;
        }
    }
});


