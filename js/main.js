let button1 = document.getElementById("one");
var adminName = document.getElementById("username").value;
var psw = document.getElementById("password").value;
let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange=function(){
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
            {
                var text = xmlhttp.responseText;
                var result = text.result;
                var code = text.code;
                if (result=="fail"){
                    if(code==101){
                        alert("密码错误!")
                    }else if(code==102){
                        alert("用户不存在!")
                    }else if(result=="success"&&code==100){
                        xmlhttp.open("GET","https://os.ncuos.com/api/user/profile/basic")
                    }
                }
            }
} 
button1.onclick = function() {
    xmlhttp.open("POST","https://os.ncuos.com/api/user/token",true);
    xmlhttp.setRequestHeader("Content-type","application/json");
    xmlhttp.send("username: "+adminName+"&password: "+psw);
    //为什么post发不出去？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
}