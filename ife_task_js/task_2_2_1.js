var l_add = document.getElementById("left_add");
var r_add = document.getElementById("right_add");
var l_remove = document.getElementById("left_remove");
var r_remove = document.getElementById("right_remove");
var ipt = document.getElementById("ipt");
var par = document.getElementById("parent");
l_add.onclick=function(){
    var val = ipt.value;
    var reg = /^[0-9]+.?[0-9]*/;
    //正则有误：12哈哈哈哈哈哈也判断为数字
    if(!reg.test(val)){
        alert("请输入数字");    
    }
    else if(par.children.length == 60)
    {
        alert("超过60个");
    }
    else
    {  
        var odiv = document.createElement('div');
        odiv.className = "num";
        odiv.innerHTML = val;
        odiv.style.height = val*10+"px"; 
        if(par.children.length == 0){
            var first = par.firstElementChild;
            par.insertBefore(odiv,first);
        }
        else{
            var first = par.firstElementChild;
            par.insertBefore(odiv,first);
        }  
    };
    ipt.value="";
    ipt.focus();
 
    
};
r_add.onclick=function(){
    var val = ipt.value;
    var reg = /^[0-9]+.?[0-9]*/
    if(!reg.test(val)){
        alert("请输入数字");
    }
    else if(par.children.length == 60)
    {
        alert("超过60个");
    }
    else{
        var odiv = document.createElement('div');
        odiv.setAttribute("class","num");
        odiv.innerHTML = val; 
        odiv.style.height = val*10+"px"; 
        par.appendChild(odiv);
    }
    ipt.value="";
    ipt.focus();
};
l_remove.onclick=function(){
    if(par.children.length ==0 ){
        alert("没有可移除元素");
    }
    else{
        alert(par.children[0].innerHTML);
        par.removeChild(par.children[0]);
    }
    ipt.focus();
};
r_remove.onclick=function(){
    if(par.children.length ==0 ){
        alert("没有可移除元素");
    }
    else{
        alert(par.lastChild.innerHTML);
        par.removeChild(par.lastChild);
    }
    ipt.focus();
};
par.addEventListener("click", function(e) {
    // alert(event.target.nodeName);
    if (event.target.nodeName.toLowerCase() == "div") {
        par.removeChild(event.target)
    }
})
var oSort = document.getElementById("sort");
oSort.onclick = function(){
    if(par.children.length){
        for(i=0;i<=par.children.length;i++){
            for(i=0;i<par.children.length;i++){
                if(par.children[i].innerHTML>par.children[i+1].innerHTML)
                {
                    
                }
            } 
        }
        // par.removeChild(par.lastChild);
    }
}
