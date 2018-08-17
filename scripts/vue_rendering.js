var vm = new Vue({
    el: '#databinding',
    data: {
        show: true,
        styleobj: {
            backgroundColor: '#2196F3!important',
            cursor: 'pointer',
            padding: '8px 16px',
            verticalAlign: 'middle',
        },
        items:[],
        styleobj2: {
            width: "30%",
            padding: "12px 20px",
            margin: "8px 0",
            boxSizing: "border-box"
        }
    },
    methods : {
        showdata : function() {
            this.show = !this.show;
        },
        showinputvalue : function(event) {
            this.items.push(event.target.value);
            event.target.value = '';
        }
    },
});
