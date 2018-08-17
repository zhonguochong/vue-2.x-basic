var vm = new Vue({
   el: '#Person',
    data: {
       first_name: 'Tom',
        last_name: 'H',
        address: 'Colintt 1209'
    },
    methods: {
       mydetails: function() {
           return "I am " + this.first_name + " " + this.last_name;
       }
    }

});