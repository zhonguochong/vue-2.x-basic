var vm = new Vue({
    el: '#computed_props',
    data: {
        firstname :"",
        lastname :"",
        birthyear : ""
    },
    computed :{
        getfullname : function(){
            return this.firstname +" "+ this.lastname;
        }
    }
});

var vm1 = new Vue({
    el: '#computed_props_methods',
    data: {
        name : "helloworld"
    },
    methods: {
        getrandomno1 : function() {
            return Math.random();
        }
    },
    computed :{
        getrandomno : function(){
            return Math.random();
        }
    }
});