// nav部分
var reply_=document.getElementsByClassName('nav_a')[0];
var qul_=document.getElementsByClassName('qul')[0].firstChild.nodeValue;
var pro_=document.getElementsByClassName('pro')[0].firstChild.nodeValue;
reply_.onclick=function(){
    var pro=document.getElementsByClassName('pro')[0];
    var qul=document.getElementsByClassName('qul')[0];
    if(pro_>0){
        pro_--;
        pro.innerHTML=pro_;
        qul_++;
        qul.innerHTML=qul_;
    }else{
        pro.innerHTML=0;
    }
    
}
// 热门试用 轮播图
var slide_list=document.getElementsByClassName('slide_list');
var hot_slide=document.getElementsByClassName('hot_slide')[0];
var timer=null;//ul切换
var timer1=null;//ul分步，动起来
var index=0;//ul下标
function move(){
    timer=setInterval(function(){
        index++;
        if(index>=slide_list.length){
            index=0;
        }
        var step=0;
        var maxstep=40;
        var start=hot_slide.scrollLeft;
        var end=slide_list[0].offsetWidth*index;
        var everystep=(end-start)/maxstep;
        timer1=setInterval(function(){
            step++;
            if(step>=maxstep){
                step=0;
                clearInterval(timer1);
            }
            start +=everystep;
            hot_slide.scrollLeft=start;
        },12)
        var pre=document.getElementsByClassName('pre')[0];
        var next=document.getElementsByClassName('next')[0];
        pre.onclick=function(){
            clearInterval(timer);
            index--;
            timer1=setInterval(function(){
                step--;
                if(step>=maxstep){
                    step=0;
                    clearInterval(timer1);
                }
                start -=everystep;
                hot_slide.scrollLeft=start;
            },12)
            
        }
        next.onclick=function(){
            clearInterval(timer); 
            index++;
            timer1=setInterval(function(){
                step++;
                if(step>=maxstep){
                    step=0;
                    clearInterval(timer1);
                }
                start +=everystep;
                hot_slide.scrollLeft=start;
            },12)
        }
        hot_slide.onmouseenter=function(){
            clearInterval(timer);
            clearInterval(timer1);
            move();
        }
    },2500)
}
move();
// like words
var like1=document.getElementsByClassName('report_a_box_sp1');
var words1=document.getElementsByClassName('report_a_box_sp2');
for (var i=0;i<like1.length;i++){
    var like1a=document.getElementsByClassName('report_a_box_sp1')[i].firstChild.nodeValue-0;
    var words1a=document.getElementsByClassName('report_a_box_sp2')[i].firstChild.nodeValue-0;
    like1[i].onclick=function(){
        like1a ++;
        this.innerHTML=like1a;
    }
    words1[i].onclick=function(){
        words1a ++;
        this.innerHTML=words1a;
    }
}
// 发现酷玩

