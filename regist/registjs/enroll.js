function fn() {
    // localStorage中传入的ture或false是 string类型,不能作为if判断的条件，要转为boolean类型
    var flag = localStorage.getItem('is');
    var newFlag = eval(flag.toLowerCase())
    if (newFlag) {
       var name=document.getElementsByTagName('input')[0]
       var password=document.getElementsByTagName('input')[1]
       var loadGiet=document.getElementsByClassName('loadGiet')[0]
        console.log(name,password,loadGiet)
        name.value = localStorage.getItem('name');
        password.value = localStorage.getItem('password');
      loadGiet.checked = localStorage.getItem('is');
    }
}

fn();
var btn = document.getElementsByClassName('tableBtn')[0];
btn.onclick = function () {
    var name1=document.getElementsByTagName('input')[0].value
    var password1=document.getElementsByTagName('input')[1].value
    var loadGiet=document.getElementsByClassName('loadGiet')[0]
     console.log(name1,password1,loadGiet)

    if (localStorage.getItem('is') == null) {
        alert('您还没有注册，请先注册');
    } else {
        if (name1 !== localStorage.getItem('name')) {
            alert('用户名输入有误');
        } else if (password1 !== localStorage.getItem('password')) {
            alert('密码输入有误');
        } else {
            alert('登录成功');
        }
    }
    if (cheched) {
        localStorage.setItem('is', true);
    } else {
        localStorage.setItem('is', 'false');
    }

}
