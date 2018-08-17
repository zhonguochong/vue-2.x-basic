Vue.component('testcomponent',{
    template : '<div><h1>This is coming from component</h1></div>'
});
var vm = new Vue({
    el: '#component_test'
});
var vm1 = new Vue({
    el: '#component_test1'
});

var vm2 = new Vue({
   el: '#local_component',
    components: {
       'local_comp': {
           template: '<div><h1>This is a local component</h1></div>'
       }
    }
});


Vue.component('name_comp',{
    template : '<div v-on:mouseover = "changename()" v-on:mouseout = "originalname();"><h1>Custom Component created by <span id = "name">{{name}}</span></h1></div>',
    data: function() {
        return {
            name : "Ria"
        }
    },
    methods:{
        changename : function() {
            this.name = "Ben";
        },
        originalname: function() {
            this.name = "Ria";
        }
    }
});

var vm3 = new Vue({
    el: '#vm3'
});


var vm4 = new Vue({
    el: '#databinding',
    data: {
        view: 'dyn_comp'
    },
    components: {
        'dyn_comp': {
            template: '<div><span style = "font-size:25;color:red;">Dynamic Component</span></div>'
        }
    }
});