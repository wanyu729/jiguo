
window.onload=function(){
    setTimeout(getData,1000)
  }
  //1 定义存放数据的数组
  var dataList=[];
//2 创建ajax请求的方法,请求完成后,把数据放入dataList
function getData(){
    var ajax_=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP')
    ajax_.open('get','http://127.0.0.1:3000/play/new')
    ajax_.send()
    ajax_.onreadystatechange = function (){
        if (ajax_.readyState==4) {
            if (ajax_.status==200) {
                data=ajax_.responseText
                //  console.log(data)
                dataList=JSON.parse(data).data
                console.log(dataList)
                //调用展示数据的方法
                show()
            }else{
                console.log('加载失败')
            }
        }
    }
}