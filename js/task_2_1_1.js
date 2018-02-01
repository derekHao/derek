var myHeading = document.querySelector("p");//网页第一个p元素
myHeading.innerHTML = 'hello world';
var btn = document.getElementById('button');
ipt = document.getElementById("aqi-input");
var name = prompt('输入姓名');
alert(name)

btn.onclick = function(){
    document.querySelector('span').innerHTML = document.getElementById("aqi-input").value;
}