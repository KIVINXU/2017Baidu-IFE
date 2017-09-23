/**
 * Created by KIVIN on 2017/5/16.
 */

var button = document.getElementsByTagName("button")[0];
var spanArr = document.getElementsByClassName("result");
var inputArr = document.getElementsByTagName("input");
//姓名验证函数
function nameVerify() {
    //判断字符长度 英文为1 中文为2
    var len = 0;
    var str = inputArr[0].value;
    if (str.charCodeAt(0) === 0x20) {//首字母不能为空格
        len = -1;
    } else {
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) >= 0x00 && str.charCodeAt(i) <= 0xFF) {
                len++;
            } else {
                len += 2;
            }
        }
    }
    //验证输入长度是否在4～16字符之间
    if (len >= 4 && len <= 16) {
        inputArr[0].style.border = "2px solid green";
        spanArr[0].style.color = "green";
        spanArr[0].innerHTML = "名称格式正确"
    } else if (len === 0) {
        //当输入为空，改变span内容和样式
        inputArr[0].style.border = "2px solid red";
        spanArr[0].style.color = "red";
        spanArr[0].innerHTML = "姓名不能为空";
    } else {
        inputArr[0].style.border = "2px solid red";
        spanArr[0].style.color = "red";
        spanArr[0].innerHTML = "名称格式错误";
    }
}
//密码验证函数
function pswVerify1() {
    if(inputArr[1].value === "") {
        inputArr[1].style.border = "2px solid red";
        spanArr[1].style.color = "red";
        spanArr[1].innerHTML = "密码不能为空";
    }else {
        inputArr[1].style.border = "2px solid green";
        spanArr[1].style.color = "green";
        spanArr[1].innerHTML = "密码可用";
    }
}
//密码再次验证函数
function pswVerify2() {
    if(inputArr[2].value !== "" && inputArr[2].value === inputArr[1].value) {
        inputArr[2].style.border = "2px solid green";
        spanArr[2].style.color = "green";
        spanArr[2].innerHTML = "密码输入一致";
    }else {
        inputArr[2].style.border = "2px solid red";
        spanArr[2].style.color = "red";
        spanArr[2].innerHTML = "两次密码输入不一致";
    }
}
//邮箱验证函数
function emailVerify() {
    var reg = /^\w{3,}@\w+(\.\w+)+$/;
    if(!reg.test(inputArr[3].value)) {
        inputArr[3].style.border = "2px solid red";
        spanArr[3].style.color = "red";
        spanArr[3].innerHTML = "邮箱格式错误";
    }else {
        inputArr[3].style.border = "2px solid green";
        spanArr[3].style.color = "green";
        spanArr[3].innerHTML = "邮箱输入正确";

    }
}
//手机验证函数
function telVerify() {
    var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
    if(!reg.test(inputArr[4].value)) {
        inputArr[4].style.border = "2px solid red";
        spanArr[4].style.color = "red";
        spanArr[4].innerHTML = "手机格式错误";
    }else {
        inputArr[4].style.border = "2px solid green";
        spanArr[4].style.color = "green";
        spanArr[4].innerHTML = "手机输入正确";

    }
}
//姓名判断
inputArr[0].onblur = function () {
    nameVerify();
}
//密码判断
inputArr[1].onblur = function () {
    pswVerify1();
}
//密码再次判断
inputArr[2].onfocus = function () {
    inputArr[2].style.border = "2px solid #CDCDCD";
    spanArr[2].style.color = "#BCBCBC";
    spanArr[2].innerHTML = "再次输入相同密码";
}

inputArr[2].onblur = function () {
    pswVerify2();
}
//邮箱判断
inputArr[3].onblur = function () {
    emailVerify();
}
//手机号判断
inputArr[4].onblur = function () {
    telVerify();
}
//点击提交按钮 全局校验 并弹窗提示
button.onclick = function (event) {
    event = event || window.event;
    //阻止默认跳转
    event.preventDefault();
    nameVerify();
    pswVerify1();
    pswVerify2();
    emailVerify();
    telVerify();
    var num = 0;
    for(var i =0;i<spanArr.length;i++) {
        if(spanArr[i].style.color === "green") {
            num++;
        }
    }
    if(num === 5) {
        alert("提交成功！")
    }else {
        alert("输入错误！")
    }

}