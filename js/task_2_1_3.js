/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
var ul_s = document.getElementById('source');
var N = [  "零", "一", "二", "三", "四", "五", "六", "七", "八", "九","十"];
var ul_r = document.getElementById('resort');
var btn = document.getElementById('sort-btn');
// alert(ul_s.children[0].innerHTML.substr(0,2))
function getData() {
    var ul_s = document.getElementById('source');
    var index = ul_s.children.length;
    var data = new Array(index);
    for(i=0;i<index;i++){
      var node =[];
      node[0]=ul_s.children[i].innerHTML.substr(0,2);
      node[1]=ul_s.children[i].children[0].innerHTML;
      data[i] = node;
    }
     return data;
  }
  /**
   * sortAqiData
   * 按空气质量对data进行从小到大的排序
   * 返回一个排序后的数组
   */
  function sortAqiData(data) {
    data.sort(
      function(a,b){
        return a[1]-b[1];
      }
    )
    return data;
  }
  /**
   * render
   * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
   * 格式见ul中的注释的部分
   */
  function render(data) {   
    data.forEach(function(item,index,array){
      var node=document.createElement('li');
      node.innerHTML = "第"+N[index+1]+"名："+item[0]+"空气质量："+item[1];
      ul_r.appendChild(node)
    })
  }
  
  function btnHandle() {
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);
  }
  
  function init() {
    // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
      btn.onclick = function(){
      btnHandle();
  }}
  
  init();