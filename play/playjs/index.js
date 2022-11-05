
window.onload=function(){
    setTimeout(getData,500)
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
              
                dataList=JSON.parse(ajax_.response)
                console.log(dataList)
                //调用展示数据的方法
                show()
            }else{
                console.log('加载失败')
            }
        }
    }
}

// 渲染数据
//ajax获取的数据有4个数组 index表示初始下标
var index=0 
 //   创建类名为box的ul
var ul_=document.getElementsByClassName('box')[0]
console.log(ul_)

function show(){
    for(var item of dataList[index]){
    console.log(item)
    // 创建li
var li_=document.createElement('li')
// 创建li下面的a标签 并插入到li里面
ul_.appendChild(li_)
var a_=document.createElement('a')
li_.appendChild(a_)
a_.href="./index_2.html"

var img_=document.createElement('img')
img_.src=item.img
a_.appendChild(img_)

var p_=document.createElement('p')
 p_.innerHTML=item.text
a_.appendChild(p_)

var span_=document.createElement('span')
span_.innerHTML=item.description
a_.appendChild(span_)

  var div_=document.createElement('div')
  div_.setAttribute('class','tip')
  a_.appendChild(div_)
     var  span=document.createElement('span')
     span.setAttribute('class','left')
     span.innerHTML=item.price
     div_.appendChild(span)

     var div1=document.createElement('div')
     div1.setAttribute('class','right')
     div_.appendChild(div1)

     var span1=document.createElement('span')
     span1.setAttribute('id','xin')
     span1.innerHTML=item.like
     div1.appendChild(span1)


     var span2=document.createElement('span')
     span2.setAttribute('id','look')
     span2.innerHTML=item.words
     div1.appendChild(span2)
}
}

var sss=document.getElementById('xin')
console.log(sss)



var btn_=document.getElementsByClassName('btn')[0]
console.log(btn_)
btn_.onclick=function(){
    setTimeout(show(), 700)
}


//  var newest=document.getElementsByClassName('newest')[0].children
//  console.log(newest)
//  for(var i=0;i<newest.length;i++){
//     newest[i].setAttribute('index',i)

//     newest[i].onclick=function(){
//         var index=this.getAttribute('index')
//         for(var j=0;j<newest.length;j++){
//             newest[j].className=''
//             newest[index].className='newEst'
//         }
//     }
//  }



