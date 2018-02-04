/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
var ul_s = document.getElementById('source');
alert(substr(ul_s.children[0].innerHTML,0,1))
 
function getData() {
    /*
    coding here
    */
  
    /*
    data = [
      ["北京", 90],
      ["北京", 90]
      ……
    ]
    */
    var date =[];
    var ul_s = document.getElementById('scurce');
    date.foreach(function(item,index,array){
        ul_s.children[index].innerHTML

    });
    return data;
  
  }
  
  /**
   * sortAqiData
   * 按空气质量对data进行从小到大的排序
   * 返回一个排序后的数组
   */
  function sortAqiData(data) {
  
  }
  
  /**
   * render
   * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
   * 格式见ul中的注释的部分
   */
  function render(data) {
  
  }
  
  function btnHandle() {
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);
  }
  
  function init() {
  
    // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
  
  }
  
  init();