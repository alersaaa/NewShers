function pz(i){
    if(i <10){
        i = "0" + i;
    }
    return i;
}/*当时间不足10时在前面加0*/

function time(){
    var date = new Date;
    var hour = date.getHours();
    var minute = date.getMinutes();/*定义时间变量 */
    hour = pz(hour);
    minute = pz(minute);
    var str = String(hour) + String(minute);/*将时间改为字符串*/
    for (var i=0; i<4; i++){
        switch(str[i]){
            case "0":
                document.getElementById("n"+i+"_0").style.opacity = 1;
                document.getElementById("n"+i+"_1").style.opacity = 1;
                document.getElementById("n"+i+"_2").style.opacity = 1;
                document.getElementById("n"+i+"_3").style.opacity = 0;
                document.getElementById("n"+i+"_4").style.opacity = 1;
                document.getElementById("n"+i+"_5").style.opacity = 1;
                document.getElementById("n"+i+"_6").style.opacity = 1;
                break;
            case "1":
                document.getElementById("n"+i+"_0").style.opacity = 0;
                document.getElementById("n"+i+"_1").style.opacity = 0;
                document.getElementById("n"+i+"_2").style.opacity = 1;
                document.getElementById("n"+i+"_3").style.opacity = 0;
                document.getElementById("n"+i+"_4").style.opacity = 0;
                document.getElementById("n"+i+"_5").style.opacity = 1;
                document.getElementById("n"+i+"_6").style.opacity = 0;
                break;
            case "2":
                document.getElementById("n"+i+"_0").style.opacity = 1;
                document.getElementById("n"+i+"_1").style.opacity = 0;
                document.getElementById("n"+i+"_2").style.opacity = 1;
                document.getElementById("n"+i+"_3").style.opacity = 1;
                document.getElementById("n"+i+"_4").style.opacity = 1;
                document.getElementById("n"+i+"_5").style.opacity = 0;
                document.getElementById("n"+i+"_6").style.opacity = 1;
                break;
            case "3":
                document.getElementById("n"+i+"_0").style.opacity = 1;
                document.getElementById("n"+i+"_1").style.opacity = 0;
                document.getElementById("n"+i+"_2").style.opacity = 1;
                document.getElementById("n"+i+"_3").style.opacity = 1;
                document.getElementById("n"+i+"_4").style.opacity = 0;
                document.getElementById("n"+i+"_5").style.opacity = 1;
                document.getElementById("n"+i+"_6").style.opacity = 1;
                break;
            case "4":
                document.getElementById("n"+i+"_0").style.opacity = 0;
                document.getElementById("n"+i+"_1").style.opacity = 1;
                document.getElementById("n"+i+"_2").style.opacity = 1;
                document.getElementById("n"+i+"_3").style.opacity = 1;
                document.getElementById("n"+i+"_4").style.opacity = 0;
                document.getElementById("n"+i+"_5").style.opacity = 1;
                document.getElementById("n"+i+"_6").style.opacity = 0;
                break;
            case "5":
                document.getElementById("n"+i+"_0").style.opacity = 1;
                document.getElementById("n"+i+"_1").style.opacity = 1;
                document.getElementById("n"+i+"_2").style.opacity = 0;
                document.getElementById("n"+i+"_3").style.opacity = 1;
                document.getElementById("n"+i+"_4").style.opacity = 0;
                document.getElementById("n"+i+"_5").style.opacity = 1;
                document.getElementById("n"+i+"_6").style.opacity = 1;
                break;
            case "6":
                document.getElementById("n"+i+"_0").style.opacity = 1;
                document.getElementById("n"+i+"_1").style.opacity = 1;
                document.getElementById("n"+i+"_2").style.opacity = 0;
                document.getElementById("n"+i+"_3").style.opacity = 1;
                document.getElementById("n"+i+"_4").style.opacity = 1;
                document.getElementById("n"+i+"_5").style.opacity = 1;
                document.getElementById("n"+i+"_6").style.opacity = 1;
                break;
            case "7":
                document.getElementById("n"+i+"_0").style.opacity = 1;
                document.getElementById("n"+i+"_1").style.opacity = 0;
                document.getElementById("n"+i+"_2").style.opacity = 1;
                document.getElementById("n"+i+"_3").style.opacity = 0;
                document.getElementById("n"+i+"_4").style.opacity = 0;
                document.getElementById("n"+i+"_5").style.opacity = 1;
                document.getElementById("n"+i+"_6").style.opacity = 0;
                break;
            case "8":
                document.getElementById("n"+i+"_0").style.opacity = 1;
                document.getElementById("n"+i+"_1").style.opacity = 1;
                document.getElementById("n"+i+"_2").style.opacity = 1;
                document.getElementById("n"+i+"_3").style.opacity = 1;
                document.getElementById("n"+i+"_4").style.opacity = 1;
                document.getElementById("n"+i+"_5").style.opacity = 1;
                document.getElementById("n"+i+"_6").style.opacity = 1;
                break;
            case "9":
                document.getElementById("n"+i+"_0").style.opacity = 1;
                document.getElementById("n"+i+"_1").style.opacity = 1;
                document.getElementById("n"+i+"_2").style.opacity = 1;
                document.getElementById("n"+i+"_3").style.opacity = 1;
                document.getElementById("n"+i+"_4").style.opacity = 0;
                document.getElementById("n"+i+"_5").style.opacity = 1;
                document.getElementById("n"+i+"_6").style.opacity = 1;
                break;
        }
    }/*将时间字符串的每一位数显示出来（除了switch想不出来别的办法，我太菜了）*/
}
time();/*打开后立即调用函数 */
setInterval(time,1000);/*每秒刷新一次函数*/