window.onload=function(){
    setTimeout(getData,500)
  }
  //1 定义存放数据的数组
  var dataList=[];
//2 创建ajax请求的方法,请求完成后,把数据放入dataList
function getData(){
    var ajax_=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP')
    ajax_.open('get','http://127.0.0.1:3000/guid/new')
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
var index=-1
 //   创建类名为box的ul
var ul_=document.getElementsByClassName('box')[0]
console.log(ul_)

function show(){
    for(var item of dataList){
    console.log(item)
    // 创建li
var li_=document.createElement('li')
ul_.appendChild(li_)


var ss1=document.createElement('div')
 ss1.setAttribute('class','ss1')
li_.appendChild(ss1)

var ss2=document.createElement('div')
 ss2.setAttribute('class','ss2')
li_.appendChild(ss2)


var a_=document.createElement('a')
li_.appendChild(a_)
a_.href="./detail.html"

var img_=document.createElement('img')
img_.src=item.img
a_.appendChild(img_)

var p_=document.createElement('p')
 p_.innerHTML=item.text
a_.appendChild(p_)

// 3 和 5
     var div1=document.createElement('div')
     div1.setAttribute('class','right')
     li_.appendChild(div1)


     var span1=document.createElement('span')
     span1.setAttribute('class','xin')
     span1.innerHTML=item.like
     div1.appendChild(span1)


     var span2=document.createElement('span')
     span2.setAttribute('class','look')
     span2.innerHTML=item.words
     div1.appendChild(span2)

     var imG=document.createElement('div')
     imG.setAttribute('id','Img')
     li_.appendChild(imG)
    
  //获取 3
  var xin=span1.firstChild.nodeValue 
  console.log(xin)
   //获取 5
  var look=span2.firstChild.nodeValue
   console.log(look)

   console.log('--------------')

   var span999=document.getElementsByClassName('xin')
   console.log(span999)
   for(var item of span999){
     console.log(item)
     var flg=true
     item.onclick=function(){
        var size=xin
        if (flg) {
         size++
         flg=false
         
        }else{
         size
         flg=true
         
        }

        this.innerHTML=size
     }

   }
}
}

var btn_=document.getElementsByClassName('btn')[0]
console.log(btn_)
btn_.onclick=function(){
    setTimeout(show(), 700)
}

