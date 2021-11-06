function clock() {
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var am=document.getElementById("am");

    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();

    if (a>=12) {
        var d = a;
        if(a == 12){
            hours.innerHTML = d;
        }
        else {
            hours.innerHTML = d-12;  
        }
        am.innerHTML = "PM";
    }

    else if (a<12) {
        hours.innerHTML = a;
        am.innerHTML = "AM";
    }

    minutes.innerHTML = b;
    seconds.innerHTML = c;

}    
setInterval(clock,1000);

var wk=0;
var lc=0;
var np=0;
var b=0;

function settime(){

    var i=document.getElementById('wakeuptimeselector').value;
    var j=document.getElementById('lunchtimeselector').value;
    var k=document.getElementById('naptimeselector').value;
    var hourr=new Date().getHours();
    var flag=0;
    if (i==hourr) {
        document.getElementById('image').style.backgroundImage="url(./images/breakfast.png)";
        document.getElementById("image-text").innerHTML="Let's have some Breakfast !";
        wk=1;
    }
    else {
        document.getElementById('image').style.backgroundImage="url(./images/default.png)";
        document.getElementById("image-text").innerHTML="Hi Naveen!";
       wk=0;
    }
    if (j==hourr) {
        document.getElementById('image').style.backgroundImage="url(./images/lunch.png)";
        document.getElementById("image-text").innerHTML="Let's have some Lunch !";
        lc=1;
    }
    else if(wk==0){
        document.getElementById('image').style.backgroundImage="url(./images/default.png)";
        document.getElementById("image-text").innerHTML="Hi Naveen!";
        lc=0;
    }
    if (k==hourr) {
        document.getElementById('image').style.backgroundImage="url(./images/dinner.png)";
        document.getElementById("image-text").innerHTML="Let's have some Dinner !";
        np=1;
    }
    else if(wk==0 && lc==0) {
        document.getElementById('image').style.backgroundImage="url(./images/default.png)";
        document.getElementById("image-text").innerHTML="Hi Naveen!";
        np=0;
    }

    creatediv();

}


function creatediv(){

    var container1=document.createElement('div');
    container1.id="lower-container";
    container1.id='block1';
    document.getElementById('tasks').appendChild(container1);

    var invalue1=document.getElementById("wakeuptimeselector");
    var value1=invalue1.options[invalue1.selectedIndex].text;
    document.getElementById("block1").innerHTML="Wake up time:" + value1;


    var container2=document.createElement('div');
    container2.id="lower-container";
    container2.id='block2';
    document.getElementById('tasks').appendChild(container2);

    var invalue2=document.getElementById("lunchtimeselector");
    var value2=invalue2.options[invalue2.selectedIndex].text;
    document.getElementById("block2").innerHTML="Lunch time:" + value2;


    var container3=document.createElement('div');
    container3.id="lower-container";
    container3.id='block3';
    document.getElementById('tasks').appendChild(container3);

    var invalue3=document.getElementById("naptimeselector");
    var value3=invalue3.options[invalue3.selectedIndex].text;
    document.getElementById("block3").innerHTML="Nap time:" + value3;

}