 var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];
//垃圾测试写的
// var oul = document.getElementById('aqi-list');
// (function ad(){
//     var newAqiData =[];
//     for(i=0;i<aqiData.length;i++){
//         if (aqiData[i][1] > 60)
//         newAqiData.push(aqiData[i]);
//     }
//     var a = newAqiData.length;
//     for(j=1;j<newAqiData.length;j++){
//         for(k=0;k<newAqiData.length-1;k++){
//             if(newAqiData[k][1]<newAqiData[k+1][1]){
//                 newAqiData[a]=newAqiData[k];
//                 newAqiData[k]=newAqiData[k+1];
//                 newAqiData[k+1]=newAqiData[a];
//             }
//         }
//     }
//      newAqiData.pop();
//      for(i=0;i<newAqiData.length;i++){
//          var oli = document.createElement("li");
//          oli.innerHTML = "第"+(i+1)+"名:"+newAqiData[i]
//          oul.appendChild(oli);
//      }
// })();
//普通开发写的
    (function () {
        var cont=document.querySelector("#aqi-list");
	  	var list=aqiData.filter(function(item,index,array){
	  		return(item[1]>=60);
	  	});
	  	 list.sort(function(a,b){
	  	 	return b[1]-a[1];
           });
		 list.forEach(
		 	function(item,index,array){			 
				var newnode=document.createElement("li");
                newnode.innerHTML="第"+(index+1)+"名"+array[index][0]+":"+array[index][1];
				cont.appendChild(newnode);			  
			}
		);
	})();




