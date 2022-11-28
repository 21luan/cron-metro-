var h=0,sec=00, min=0, intervalo;

function start(){
   intervalo = setInterval(watch,1000)
}

function parar(){
    clearInterval(intervalo)
}

function reset(){
   clearInterval(intervalo)
   sec=0
   min=0
   h=0
   document.getElementById('watch').innerText='00:00:00';
}
function watch(){
    sec++;
    if(sec==60){
        min++
        sec=0
    }
    if(min==60){
        h++
        min=0
        sec=0
    }
    document.getElementById('watch').innerText=h+':'+min+':'+sec
}
