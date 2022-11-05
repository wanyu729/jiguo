
// // 获取整个ul
var ul = document.getElementsByClassName('box2')[0];
window.onload = function () {
    setTimeout(ajax_, 300)
}
// // 创建数组接受后台数据
var datalist = [];
// 创建ajax请求数据
function ajax_() {
    var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    ajax.open("get", "http://127.0.0.1:3000/useing/public", true);
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {

                datalist = JSON.parse(ajax.response);
                show();

            }
        }
    }
}


var index = 0;
// 遍历数组
function show() {
    for (var item of datalist) {
        console.log(item);
        // 创建li
        var li = document.createElement("li");
        li.className = 'box3';
        // 创建li里面的a标签
        var a = document.createElement("a");
        li.appendChild(a);
        a.href = "./detail.html";
        // 创建li里面的span标签
        var span = document.createElement("span");
        span.innerHTML = item.info_ty;
        // 设置首发或者体验师的样式类名
        if (item.info_ty == "首发") {
            span.className = "publish";
        } else {
            span.className = "publish";
        }
        a.appendChild(span);
        // 创建a标签里面的img标签
        var a_img = document.createElement("img");
        a_img.src = item.img;
        a_img.className = "content_pic";
        a.appendChild(a_img);
        // 创建a标签里面的div标签
        var a_div = document.createElement("div");
        a_div.className = "bread";
        a.appendChild(a_div);

        // 创建div标签里面的h2标签
        var a_div_h2 = document.createElement("h2");

        a_div.appendChild(a_div_h2);

        a_div_h2.innerHTML = item.text;
        // 创建div标签里面的第一个p标签
        var a_div_p1 = document.createElement("p");
        a_div_p1.className = 'stage';
        a_div.appendChild(a_div_p1);
        // 创建div标签里面的第一个p标签下span1
        var a_div_p1_span1 = document.createElement("span");
        a_div_p1.appendChild(a_div_p1_span1);
        a_div_p1_span1.innerHTML = item.totalnum;
        // 创建div标签里面的第1个p标签下span2
        var a_div_p1_span2 = document.createElement("span");
        a_div_p1.appendChild(a_div_p1_span2);
        a_div_p1_span2.innerHTML = item.totalnum + '台';

        // 创建div标签里面的第2个p标签
        var a_div_p2 = document.createElement("p");
        a_div.appendChild(a_div_p2);
        a_div_p2.className = 'stage1';


        var a_div_p2_span = document.createElement("span");
        a_div_p2.appendChild(a_div_p2_span);
        a_div_p2_span.innerHTML = item.apply + '申请';
        // 创建div标签里面的第3个p标签
        var a_div_p3 = document.createElement("p");
        a_div.appendChild(a_div_p3);
        a_div_p3.className = 'stage2';
        a_div_p3.innerHTML = "剩余时间2天";

        ul.appendChild(li);

    }
}
var to = document.getElementById('to');
console.log(to);
to.onclick = function () {
    setTimeout(show, 700);


}

