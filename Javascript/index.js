function currentDate(){
    var date = new Date();
    var dd = date.getDate();
    var mon = date.getMonth();
    var yy = date.getFullYear();
    var dy = date.getDay();
    if(dd <= 9){
        dd = "0" + dd;
    }
    var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    mon = month[mon];
    var days = ["Sunday","Monday","Tuesday","WednesDay","Thursday","Friday","Saturday"];
    dy = days[dy];
    var curDate = dd + "/" + mon + "/" + yy;
    document.getElementById("date").innerHTML = curDate;
    document.getElementById("day").innerHTML = dy;
}
setInterval(currentDate,1000);
function dateoutput(){
    var date = new Date();
    var hh = date.getHours();
    var min = date.getMinutes();
    var ss = date.getSeconds();
    var am_pm = "AM";

    if(hh >= 12){
        am_pm = "PM";
        if(hh >= 13){
            hh -= 12;
        }
    }
    if(hh == 0){
        hh = 12;
    }
    if(hh <= 9){
        hh = "0"+ hh;
    }
    if(min <= 9){
        min = "0" + min;
    }
    if(ss <= 9){
        ss = "0" + ss;
    }
    var time = hh + ":" + min + "" + am_pm;
    document.getElementById("hours12").innerHTML = time;
    document.getElementById("sec").innerHTML = ss;
    setTimeout(dateoutput,1000);
}
dateoutput();
function dateoutput24(){
    var date = new Date();
    var hh = date.getHours();
    var min = date.getMinutes();
    var currentHr = hh + ":" + min;
    document.getElementById("hours24").innerHTML = currentHr;
    
}
setInterval(dateoutput24,1000);
var num=0;
function toggleButtton(){
    num++;
    if(num % 2 == 0){
        document.getElementById("button").style.left = "0px";
        document.getElementById("button").style.backgroundColor = "black";
        document.getElementById("toggle").style.backgroundColor = "white";
        document.getElementById("hours12").style.display = "block";
        document.getElementById("hours24").style.display = "none";
    }
    else{
        document.getElementById("button").style.left = "3vw";
        document.getElementById("button").style.backgroundColor = "white";
        document.getElementById("toggle").style.backgroundColor = "black";
        document.getElementById("hours12").style.display = "none";
        document.getElementById("hours24").style.display = "block";
        document.getElementById("toggle").style.transition="all 0.5s"
        document.getElementById("button").style.transition="all 0.5s"
    }
}
function bgImage(){
    var date=new Date();
    var dy=date.getDay();
    console.log(dy);
    var arrImage=["clouds.jpg","Dog.jpg","Elephant.jpg","Macaw bird.jpg","snow bird.jpg","sunflower.jpg","strawberry.jpg"];
    console.log(arrImage[dy]);
    document.body.style.backgroundImage=`url(./Asset/${arrImage[dy]})`
}
var audio=new Audio("./Asset/alarm.mp3");

    var allinput=document.querySelectorAll("input");
    function userDate(){
        var currentDate=new Date();
        var dd=currentDate.getDate();
        var mon=currentDate.getMonth()+1;
        var yy=currentDate.getFullYear();
        var hh=currentDate.getHours();
        var min=currentDate.getMinutes();
        if(mon<=9){
            mon="0"+mon;
        }
        if(min<=9){
            min="0"+min;
        }
        if(dd<=9){
            dd="0"+dd;
        }
        if(hh<=9){
            hh="0"+hh;
        }
        var currentddmonyy=`${yy}-${mon}-${dd}`
        var currentTime=`${hh}:${min}`
        var userDate=allinput[1].value;
        var userTime=allinput[2].value;
        if(currentddmonyy==userDate && currentTime==userTime){
            // window.alert("Wake Up...");
            audio.play();
        }
    }
    setInterval(userDate,1000);
    function closeAlarmWindow(){
        document.querySelector("#containerAlarm").style.display="none";
    }
    function openAlarmWindow(){
        document.querySelector("#containerAlarm").style.display="flex";
    }


