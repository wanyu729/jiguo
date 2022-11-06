//获取整个div
var div = document.getElementsByClassName('center')[0];

window.onload = function () {
    setTimeout(ajax_, 300)
}
//创建数组接受后台数据
var datalist = [];

//创建ajax请求数据
function ajax_() {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax.open('get', 'http://127.0.0.1:3000/report/new');
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                data = ajax.responseText;
                datalist = JSON.parse(data);
                // datalist = JSON.parse(ajax);
                show();
            } else {
                console.log('加载失败');
            }
        }
    }
}

var index = 0;
function show() {
    for (var item of datalist) {
        //创建ul
        var ul = document.createElement('ul');
        ul.className = 'distance';
        //创建ul下的li
        var ul_li = document.createElement('li');
        ul.appendChild(ul_li);
        ul_li.className = 'centerleft';
        //创建ul li 下的 img 
        var ul_li_img = document.createElement('img');
        ul_li_img.src = item.img;
        ul_li.appendChild(ul_li_img);
        //创建ul li 下的 div
        var ul_li_div = document.createElement('div');
        ul_li_div.className = 'air';
        ul_li.appendChild(ul_li_div);
        //创建 ul li div 下的第一个div
        var ul_li_div_div1 = document.createElement('div');
        ul_li_div_div1.innerHTML = item.text;
        ul_li_div_div1.className = 'title';
        ul_li_div.appendChild(ul_li_div_div1);

        //创建 ul li div 下的第2个div
        var ul_li_div_div2 = document.createElement('div');
        ul_li_div_div2.className = 'purifier';
        ul_li_div.appendChild(ul_li_div_div2);
        //创建 ul li div 第2个div里的span1
        var ul_li_div_div2_span1 = document.createElement('span');
        ul_li_div_div2_span1.className = 'name';
        ul_li_div_div2_span1.innerHTML = item.uName;
        ul_li_div_div2.appendChild(ul_li_div_div2_span1);

        //创建 ul li div 第2个div里的span2
        var ul_li_div_div2_span2 = document.createElement('span');
        ul_li_div_div2_span2.innerHTML = item.endTime;
        ul_li_div_div2_span2.className = 'time';
        ul_li_div_div2.appendChild(ul_li_div_div2_span2);
        //创建 ul li div 下的第三个div
        var ul_li_div_div3 = document.createElement('div');
        ul_li_div_div3.className = 'rightpurifier';
        ul_li_div.appendChild(ul_li_div_div3);
        //创建 ul li div 第三个div里的span1
        var ul_li_div_div3_span1 = document.createElement('span');
        ul_li_div_div3_span1.innerHTM = item.num;
        ul_li_div_div3_span1.className = 'three';
        ul_li_div_div3.appendChild(ul_li_div_div3_span1);
        //创建 ul li div 第三个div里的span2
        var ul_li_div_div3_span2 = document.createElement('span');
        ul_li_div_div3_span2.innerHTML = item.apply;
        ul_li_div_div3_span2.className = 'three1';
        ul_li_div_div3.appendChild(ul_li_div_div3_span2);

        div.appendChild(ul)
    }

}

var to = document.getElementById('to');
to.onclick = function () {
    show()
}