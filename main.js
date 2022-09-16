window.onload = function(){

    let sekunde = 00;
    let stotinke = 00;
    let moje_sekunde = document.getElementById('seconds');
    let moje_stotinke = document.getElementById('miliseconds');
    let kreni = document.getElementById('button-start');
    let stani = document.getElementById('button-stop');
    let resetuj = document.getElementById('button-reset');
    let Interval;

    kreni.onclick = function(){

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    stani.onclick = function(){
        clearInterval(Interval);
    }

    resetuj.onclick = function(){
        clearInterval(Interval);
        sekunde = '00';
        stotinke = '00';
        moje_sekunde.innerHTML = sekunde;
        moje_stotinke.innerHTML = stotinke;
    }

    function startTimer(){
        stotinke ++;

        if(stotinke <= 9){
            moje_stotinke.innerHTML = '0'+stotinke;
        }
        if(stotinke > 0){
            moje_stotinke.innerHTML = stotinke;
        }
        if(stotinke > 99){
            sekunde ++;
            moje_sekunde.innerHTML = sekunde;
            stotinke = 0;
            moje_stotinke.innerHTML = '0' + stotinke;
        }
        if(sekunde > 9){
            moje_sekunde.innerHTML = sekunde;
        }
    }

}