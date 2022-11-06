// 注册页面
var input=document.getElementsByTagName('input')
console.log(input)


var li=document.getElementsByTagName('li')
console.log(li)


var size=0

input[0].oninput=function(){
    var arr=/^1[3578]\d{9}$/;
    if (!arr.test(input[0].value)) {
     li[0].style.color='red'
     li[0].innerHTML='请输入以1开头的11位纯数字的手机号'
    }else{
     li[0].innerHTML='输入正确'
     size++
     fn(size)
    }
 }

 
input[2].oninput=function(){
    var arr=/^[a-z]{3,6}$/i
    if (!arr.test(input[2].value)) {
     li[2].style.color='red'
     li[2].innerHTML='请输入最少3位最多6位纯字母用户名'
    }else{
     li[2].innerHTML='输入正确'
     size++
     fn(size)
    }
 }

 input[3].oninput=function(){
    var arr = /^\w{6,10}$/;
    if (!arr.test(input[3].value)) {
        li[3].style.color='red'
        li[3].innerHTML='请输入以字母数字下划线开头的6-10位密码'
       }else{
        li[3].innerHTML='输入正确'
        size++
        fn(size)
       }
}

input[4].oninput=function(){
    if (input[4].value!=input[3].value) {
        li[4].style.color='red'
        li[4].innerHTML='输入错误,两次密码不一致'
    }else{
        li[4].innerHTML='输入正确'
        size++
        fn(size)
    }
}


// 点击验证码  60秒倒计时
var a=document.getElementsByClassName('tableText')[0]
console.log(a)

var min=60
var flg=true
var timer
var arry

a.onclick=function(){
    clearInterval(timer)

    timer=setInterval(function(){
        min--
        a.innerHTML='('+min+'秒)重发'

        if (min==0) {
            clearInterval(timer)
            a.innerHTML='获取验证码'
        }

        if (min==57) {
            flg=false
            var arr=[]
         
            for(var i=0;i<4;i++){
                arr[i]=Math.round(Math.random()*4)
            }

            arry=arr.join('')
             alert('验证码'+arry)
            setTimeout(function(){
                flg=true
            },60000)
        }
    },1000)
}

input[1].oninput=function(){
    if (input[1].value!=arry) {
  li[1].style.color = 'red'
        li[1].innerHTML = '验证码错误';
    }else{
         li[1].innerHTML = '输入正确';
        size++
        fn(size)
    }
}

var btn = document.getElementsByClassName('tableBtn')[0];
// console.log(btn)
// 禁用按钮
btn.style.disabled = 'disabled';
btn.style.backgroundColor='#999'
function fn(a){
    if (a>=5) {
    btn.removeAttribute('disabled');
        btn.style.backgroundColor = 'red';
    }
}

btn.onclick=function(){
    window.location.href='./enroll.html'
      //confirm()方法用于显示一个指定消息和带有确定和取消的对话框
      if (confirm('注册成功、是自动登录账号密码？')) {
        localStorage.setItem('is', 'true');
    } else {
        localStorage.setItem('is', 'false');
    }
    localStorage.setItem('name', input[0].value);
    localStorage.setItem('password', input[3].value);
}






