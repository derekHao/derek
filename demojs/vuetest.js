var app = new Vue({
    el:'#app',
    data:{
        message:new Date().toLocaleString()
    }
})
var app2 = new Vue({
    el:'#app-2',
    data:{
        message:'页面加载于'+  Date().toLocaleString()
    }
})
var app3 = new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
})
var app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
        ]
    }
})
var app5 = new Vue({
    el:'#app-5',
    data:{
        message:'hello Vue !'
    },
    methods: {
        reversMessage:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }

})
var app6 = new Vue({
    el:'#app-6',
    data:{
        message:'Hello'
    }
})