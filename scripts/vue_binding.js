
var vm = new Vue({
    el: '#databinding',
    data: {
        title : "DATA BINDING",
        hreflink : "http://www.google.com"
    }
});

var vmClass = new Vue({
    el: '#classbinding',
    data: {
        title : "CLASS BINDING",
        isactive : true
    }
});


var vmInline = new Vue({
    el: '#inlineStyle',
    data: {
        title : "Inline style Binding",
        activeColor: 'red',
        fontSize :'30'
    }
});

var vmInline2 = new Vue({
    el: '#inlineStyle2',
    data: {
        title : "Inline style Binding",
        styleobj : {
            color: 'red',
            fontSize :'40px'
        }
    }
});