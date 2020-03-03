
var oneHeight=80, // размер одного элемента
    numImage=9, // количество элементов
    speedStep=0.5; // скорость изменения скорости

    var randNums;
    var randText = '';
function LetsGo(){

    var text = $('#text').val();
    var arr = text.split("\n");         
        
    var n = arr.length;
    var temp;
    var i = Math.floor(Math.random() * Math.floor(n));
    randText += arr[i]+"\n";
    temp = arr[i].split("");
    arr.splice(i,1);

    randNums = randText.split("\n");
    randNums.splice(randNums.length-1,1);
    console.log(text);
    console.log(randNums);
    console.log(randNums[0]);


    clearInterval(LetsGo.interval);
    var x=[];
    for(var i in{xxx1:1}){
        var ob=5+Math.floor(Math.random()*6), // количество оборотов 5 минимум, 10 - максимум
         nn=Math.random()*numImage;
            num=1, // выигравший нумер
            o={
                ob:ob,num:num,
            a:document.getElementById(i), // это наш контрол с классом XXX
            // время=(speedStart)/speedStep
            // расстояние=(speedStart/2)*время -арифм прогр
            // расстояние=speedStart^2/(2*speedStep)
            // speedStart=sqrt(расстояние*2*speedStep)
            speed:Math.sqrt(((ob*numImage+num)* oneHeight)* speedStep*2), // скорость
            scr:-26 // магия, блин 
        }; // выигравший номер
        x.push(o);
    } 
    for(var i in{xxx2:1}){
        var ob=5+Math.floor(Math.random()*6), // количество оборотов 5 минимум, 10 - максимум
         nn=Math.random()*numImage;
            num=2, // выигравший нумер
            o={
                ob:ob,num:num,
            a:document.getElementById(i), // это наш контрол с классом XXX
            // время=(speedStart)/speedStep
            // расстояние=(speedStart/2)*время -арифм прогр
            // расстояние=speedStart^2/(2*speedStep)
            // speedStart=sqrt(расстояние*2*speedStep)
            speed:Math.sqrt(((ob*numImage+num)* oneHeight)* speedStep*2), // скорость
            scr:-26 // магия, блин 
        }; // выигравший номер
        x.push(o);
    }     
    for(var i in{xxx3:1}){
        var ob=5+Math.floor(Math.random()*6), // количество оборотов 5 минимум, 10 - максимум
         nn=Math.random()*numImage;
            num=3, // выигравший нумер
            o={
                ob:ob,num:num,
            a:document.getElementById(i), // это наш контрол с классом XXX
            // время=(speedStart)/speedStep
            // расстояние=(speedStart/2)*время -арифм прогр
            // расстояние=speedStart^2/(2*speedStep)
            // speedStart=sqrt(расстояние*2*speedStep)
            speed:Math.sqrt(((ob*numImage+num)* oneHeight)* speedStep*2), // скорость
            scr:-26 // магия, блин 
        }; // выигравший номер
        x.push(o);
    }     
    for(var i in{xxx4:1}){
        var ob=5+Math.floor(Math.random()*6), // количество оборотов 5 минимум, 10 - максимум
         nn=Math.random()*numImage;
            num=4, // выигравший нумер
            o={
                ob:ob,num:num,
            a:document.getElementById(i), // это наш контрол с классом XXX
            // время=(speedStart)/speedStep
            // расстояние=(speedStart/2)*время -арифм прогр
            // расстояние=speedStart^2/(2*speedStep)
            // speedStart=sqrt(расстояние*2*speedStep)
            speed:Math.sqrt(((ob*numImage+num)* oneHeight)* speedStep*2), // скорость
            scr:-26 // магия, блин 
        }; // выигравший номер
        x.push(o);
    }     
    for(var i in{xxx5:1}){
        var ob=5+Math.floor(Math.random()*6), // количество оборотов 5 минимум, 10 - максимум
         nn=Math.random()*numImage;
            num=5, // выигравший нумер
            o={
                ob:ob,num:num,
            a:document.getElementById(i), // это наш контрол с классом XXX
            // время=(speedStart)/speedStep
            // расстояние=(speedStart/2)*время -арифм прогр
            // расстояние=speedStart^2/(2*speedStep)
            // speedStart=sqrt(расстояние*2*speedStep)
            speed:Math.sqrt(((ob*numImage+num)* oneHeight)* speedStep*2), // скорость
            scr:-26 // магия, блин 
        }; // выигравший номер
        x.push(o);
    }     
    for(var i in{xxx6:1}){
        var ob=5+Math.floor(Math.random()*6), // количество оборотов 5 минимум, 10 - максимум
         nn=Math.random()*numImage;
            num=6, // выигравший нумер
            o={
                ob:ob,num:num,
            a:document.getElementById(i), // это наш контрол с классом XXX
            // время=(speedStart)/speedStep
            // расстояние=(speedStart/2)*время -арифм прогр
            // расстояние=speedStart^2/(2*speedStep)
            // speedStart=sqrt(расстояние*2*speedStep)
            speed:Math.sqrt(((ob*numImage+num)* oneHeight)* speedStep*2), // скорость
            scr:-26 // магия, блин 
        }; // выигравший номер
        x.push(o);
    }     
    for(var i in{xxx7:1}){
        var ob=5+Math.floor(Math.random()*6), // количество оборотов 5 минимум, 10 - максимум
         nn=Math.random()*numImage;
            num=7, // выигравший нумер
            o={
                ob:ob,num:num,
            a:document.getElementById(i), // это наш контрол с классом XXX
            // время=(speedStart)/speedStep
            // расстояние=(speedStart/2)*время -арифм прогр
            // расстояние=speedStart^2/(2*speedStep)
            // speedStart=sqrt(расстояние*2*speedStep)
            speed:Math.sqrt(((ob*numImage+num)* oneHeight)* speedStep*2), // скорость
            scr:-26 // магия, блин 
        }; // выигравший номер
        x.push(o);
    }     
    for(var i in{xxx8:1}){
        var ob=5+Math.floor(Math.random()*6), // количество оборотов 5 минимум, 10 - максимум
         nn=Math.random()*numImage;
            num=8, // выигравший нумер
            o={
                ob:ob,num:num,
            a:document.getElementById(i), // это наш контрол с классом XXX
            // время=(speedStart)/speedStep
            // расстояние=(speedStart/2)*время -арифм прогр
            // расстояние=speedStart^2/(2*speedStep)
            // speedStart=sqrt(расстояние*2*speedStep)
            speed:Math.sqrt(((ob*numImage+num)* oneHeight)* speedStep*2), // скорость
            scr:-26 // магия, блин 
        }; // выигравший номер
        x.push(o);
    }     
    for(var i in{xxx9:1}){
        var ob=5+Math.floor(Math.random()*6), // количество оборотов 5 минимум, 10 - максимум
         nn=Math.random()*numImage;
            num=9, // выигравший нумер
            o={
                ob:ob,num:num,
            a:document.getElementById(i), // это наш контрол с классом XXX
            // время=(speedStart)/speedStep
            // расстояние=(speedStart/2)*время -арифм прогр
            // расстояние=speedStart^2/(2*speedStep)
            // speedStart=sqrt(расстояние*2*speedStep)
            speed:Math.sqrt(((ob*numImage+num)* oneHeight)* speedStep*2), // скорость
            scr:-26 // магия, блин 
        }; // выигравший номер
        x.push(o);
    }  



    LetsGo.interval=setInterval(
        function (){
            var i = x.length,complete=true;
            while(i--){ 
                var a=x[i];
                a.scr+=a.speed;
                if(a.speed>2*speedStep){ 
                    a.speed-=speedStep;complete=false;
                } else if(a.speed>0) { 
                    var t= Math.round(a.scr / oneHeight);
                    if(t>=numImage) t=0;
                    console.log(i,t,a.scr-oneHeight*t,a.ob,a.num);
                    a.scr=oneHeight*t;
                    a.speed=0;
                    complete=false;
                }
                if(a.scr>(oneHeight*numImage))
                    a.scr-=oneHeight*numImage;
                a.a.scrollTop=Math.floor(a.scr);
            }
            if(complete) clearInterval(LetsGo.interval)
        },20)
}	
