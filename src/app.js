//minutos y segundnos
var seconds = 5;
var minutes = 0;

//control para el boton de pausa
var contro =0;
var controBotellaA =0;
var controBotellaB =0;

//variables de las botellas
var segBotellaA=60;
var segBotellaB=60;

//fecha actual
const fecha = new Date();

//se muestra en pantalla los minutos y segundos iniciales
document.getElementById("min").textContent="0"+minutes;
document.getElementById("seg").textContent="0"+seconds;


var verificadorPrin=true;
var verificadorBoteA=false;
var verificadorBoteB=false;


    function ocultButton(){
            document.getElementById('star').disabled=true;
            document.getElementById('star').style.background="red";
    }


    function showButton(){
        document.getElementById('star').style.background="#50CB71";
        document.getElementById('star').disabled=false;
    }

    function lessMinutes(){
        if(minutes>0){
            minutes-=1;
            if(minutes<10){
                document.getElementById("min").textContent="0"+ minutes;
            }else{
                document.getElementById("min").textContent=minutes;
            }
    }else{
        minutes=59;
        document.getElementById("min").textContent=minutes;
    }
}

function mainClock2(){
    if(seconds<10 && seconds>0){
        document.getElementById('seg').innerHTML="0"+seconds;
    }else{
        document.getElementById('seg').innerHTML=seconds;
    }

    if(minutes<10){
        document.getElementById('min').innerHTML="0"+minutes;
    }else{
        document.getElementById('min').innerHTML=minutes;
    }
    
    if(minutes==0 && seconds==0){
        document.getElementById('seg').innerHTML="00";
        verificadorPrin=!verificadorPrin;
        showinput();
        showButton();
        clearInterval(contro);
        document.getElementById('audio').play();
        seconds=1;
    }else{
        if(seconds==0){
            document.getElementById('seg').innerHTML="00";
            minutes-=1;
            seconds=60;
            console.log(seconds);
        }
    }
    
    seconds--;
}

function ocultarinput(){
    document.getElementById('peleainput').disabled=true;
    document.getElementById('cock-1').disabled=true;
    document.getElementById('cock-2').disabled=true;
}

function showinput(){
    document.getElementById('peleainput').disabled=false;
    document.getElementById('cock-1').disabled=false;
    document.getElementById('cock-2').disabled=false;
}

    function mainClock(){
        if(verificadorPrin){
            if(!(seconds==0 && minutes==0)){
                launchFullScreenbtnStart(document.documentElement);
                contro=setInterval(mainClock2,1000);
                verificadorPrin=!verificadorPrin;
                ocultButton();
                ocultarinput();
            }
        }else{
            if(!(seconds==0 && minutes==0)){
                showinput();
                showButton();
                clearInterval(contro);
                verificadorPrin=!verificadorPrin;
            }
        }
        
    }

//funion de resetar el coronometro 

    function restartA(){
        segBotellaA=60;
        document.getElementById("botellaA").textContent="60";
    }
    function restartB(){
        segBotellaB=60;
        document.getElementById("botellaB").textContent="60";
    }


    function botellaA(){
        if(verificadorBoteA==false){
            controBotellaA = setInterval(function(){
                    if(Math.round(segBotellaA) > 0){
                            segBotellaA-=1;
                            document.getElementById('botellaA').innerHTML=segBotellaA.toFixed(0);
                            document.getElementById('resA').disabled=true;
                            document.getElementById('btnAA').style.background="red";
                    }else{
                        document.getElementById('resA').disabled=false;
                        document.getElementById('btnAA').style.background="#50CB71";
                        clearInterval(controBotellaA);
                        verificadorBoteA=!verificadorBoteA;
                    }
            },1000);
            verificadorBoteA=!verificadorBoteA;
            
        }else{
            document.getElementById('resA').disabled=false;
            verificadorBoteA=false;
            clearInterval(controBotellaA);
            document.getElementById('btnAA').style.background="#50CB71";
        }
    }



    function botellaB(){
        if(verificadorBoteB==false){
            controBotellaB = setInterval(function(){
                    if(Math.round(segBotellaB) > 0){
                            segBotellaB-=1;
                            document.getElementById('botellaB').innerHTML=segBotellaB.toFixed(0);
                            document.getElementById('resB').disabled=true;
                            document.getElementById('btnBB').style.background="red";
                    }else{
                        document.getElementById('resB').disabled=false;
                        document.getElementById('btnBB').style.background="#50CB71";
                        clearInterval(controBotellaB);
                        verificadorBoteA=!verificadorBoteB;
                    }
            },1000);
            verificadorBoteB=!verificadorBoteB;
        }else{
            verificadorBoteB=false;
            clearInterval(controBotellaB);
            document.getElementById('resB').disabled=false;
            document.getElementById('btnBB').style.background="#50CB71";
        }
        
    }

    

    function launchFullScreen(element) {

        if(document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }

        if(element.requestFullScreen) {
          element.requestFullScreen();
        } else if(element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if(element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        }
      }



      function launchFullScreenbtnStart(element) {

        if(element.requestFullScreen) {
            element.requestFullScreen();
          } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if(element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
          }
    }

      function validar(){
          var ipmin=  document.getElementById('intromin').value;
          var ipseg =  document.getElementById('introseg').value;
          if(ipmin>59 || ipmin <0 || ipseg>59 || ipseg<0 || ipseg==""|| ipmin==""){
            window.alert("Entradas Erroneas");
        }else{
            document.getElementById("star").focus();
            if(ipmin<10){
                var temp1=ipmin%10;
                minutes=temp1;
                document.getElementById('min').innerHTML="0"+minutes;
            }else{
                minutes=ipmin;
                document.getElementById('min').innerHTML=minutes;
            }
            if(ipseg<10){
                var temp2=ipseg%10;
                seconds=temp2;
                document.getElementById('seg').innerHTML="0"+seconds;
            }else{
                seconds=ipseg;
                document.getElementById('seg').innerHTML=seconds;
            }

        }
    }
    document.body.addEventListener('keydown', function (e) {
        var teclapulsada=e.key;
        if(teclapulsada=="f"){
            botellaA();
        }
        if(teclapulsada=="g"){
            botellaB();
        }
        
    })