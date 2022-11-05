
// 倒计时
var time_=document.getElementsByClassName('p2')[0]
         function fn(){
             var time=new Date()
             var newTime=new Date(2022,12,1,0,0,0)
             var vep=newTime-time;
             var day=parseInt(vep/1000/60/60/24) ;
             day=day>=10?day:'0'+day;
             var h=parseInt(vep/1000/60/60%24) ;
            h=h>=10?h:'0'+h;
             var min=parseInt(vep/1000/60%60) ;
             min=min>=10?min:'0'+min;
             var s=parseInt(vep/1000%60) ;
             s=s>=10?s:'0'+s;
             var num=('距12月1号还有'+day+'天'+h+'小时'+min+'分'+s+'秒')
             time_.innerHTML=num;
             if (day & h & min & s ==0) {
              clearInterval(set)
             }
         }
      var set= setInterval(fn,1000)

//  获取按钮
      var btn_=document.getElementsByClassName('btn')[0]
      console.log(btn_)

    // 获取申请人 126
      var ren=document.getElementById('a').firstChild.nodeValue
      console.log(ren)
//    获取台数  20
      var tai=document.getElementById('b').firstChild.nodeValue
      console.log(tai)

      btn_.onclick=function(){

        var ren_=document.getElementById('a')
        var tai_=document.getElementById('b')
        if (tai>0) {
            tai--
             tai_.innerHTML=tai
           ren++
            ren_.innerHTML=ren
        }else{
            alert('剩余0台,无法申请')
        }        
      }
  
